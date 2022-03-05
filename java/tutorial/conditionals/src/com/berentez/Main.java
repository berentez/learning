package com.berentez;

public class Main {

    public static void main(String[] args) {
    int temp = 10;
    if (temp > 30) {
        System.out.println("It's a hot day");
        System.out.println("Drink water");
    }
    else if (temp > 20 && temp <= 30)
        System.out.println("beautiful day");
    else
        System.out.println("cold day");
    }
}
