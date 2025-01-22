import java.util.Scanner;
class Main{
    public static void main(String[] args) {
        int m,n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value for M : ");
        m = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the value for N : ");
        n = sc.nextInt();
        sc.nextLine();

        sc.close();

        System.out.printf("\nAddition of %d and %d is %d", m, n, m+n);
        System.out.printf("\nSubtraction of %d and %d is %d", m, n, m-n);
        System.out.printf("\nMultiplication of %d and %d is %d", m, n, m*n);
        System.out.printf("\nDivision of %d and %d is %d\n", m, n, m/n);
    }
}