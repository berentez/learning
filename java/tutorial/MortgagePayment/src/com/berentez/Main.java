package com.berentez;


import java.text.NumberFormat;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {


        Scanner princ = new Scanner(System.in);
        System.out.print("Principal: ");
        int principal = Integer.parseInt(princ.nextLine());

        Scanner annualInterestRate = new Scanner(System.in);
        System.out.print("Annual Interest Rate: ");
        double  annInteresRate = Double.parseDouble(annualInterestRate.nextLine());
        double r = annInteresRate / 100 / 12;

        Scanner period = new Scanner(System.in);
        System.out.print("Period (Years): ");
        int periodInYears = Integer.parseInt(period.nextLine());
        int n = periodInYears * 12;


        double mortgage = (double)principal * (r * (Math.pow((1 + r), n) / Math.pow(1 + r, n)-1));

        System.out.println(NumberFormat.getCurrencyInstance().format(mortgage));

    }
}
