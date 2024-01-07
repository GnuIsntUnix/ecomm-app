<%@ page import="com.example.ecommercespring.model.Client" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
<table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    <% List<Client> clientList = (List<Client>) request.getAttribute("clients");
        for (Client user : clientList) { %>
    <tr>
        <td><%= user.getId() %></td>
        <td><%= user.getFirstName() %></td>
        <td><%= user.getEmail() %></td>
    </tr>
    <% } %>
</table>
</body>
</html>
