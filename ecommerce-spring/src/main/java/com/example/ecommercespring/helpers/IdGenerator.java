package com.example.ecommercespring.helpers;

public class IdGenerator {
    private static int idCounter = 1;

    public static synchronized int generateId() {
        return idCounter++;
    }
}
