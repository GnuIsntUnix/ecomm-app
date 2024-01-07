import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {CommandService} from "../command.service";
import {Command} from "../models/command";
import {AuthService} from "../auth.service";
import {ProductItem} from "../models/product-item";
import {CommandDetail} from "../models/commanddetail";
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit{

  commands: Command[] | undefined;

  productDetailsMap: { [productId: number]: ProductItem } = {};
  constructor(private productService : ProductService, private commandService : CommandService, private authService : AuthService) {
  }

  ngOnInit(): void {

    this.commandService.getCommandsById(this.authService.getAuthUser()).subscribe(response => {
      this.parseCommands(response).then((commands: Command[]) => {
        this.commands = commands;

        this.commands.forEach(command => {
          command.details.forEach(detail => {
            this.getProductDetails(detail.product);
          });
        });
      });
    });

  }

  getProductDetails(productId: number): void {
    this.productService.getProductById(productId).subscribe(response => {
      this.productDetailsMap[productId] = response;
    });
  }

  parseCommands(response: Response): Promise<Command[]> {
    return response.json().then((commandsData: any[]) => {
      const promises = commandsData.map((commandData: any) => {
        const detailsPromises = commandData.detailsCommandes.map((detailData: any) => {
          return this.productService.getProductById(detailData.product).toPromise().then((product: any) => {
            return new CommandDetail(new CartItem(product, detailData.qte));
          });
        });
        return Promise.all(detailsPromises).then((details: CommandDetail[]) => {
          return new Command(details, commandData.id, new Date(commandData.dateCommande));
        });
      });
      return Promise.all(promises);
    });
  }

  formatDate(date:any): string {
    // Implement your own logic to format the date as a string
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

}
