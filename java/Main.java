import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    System.out.println("Please enter the password");

    Scanner scanner = new Scanner(System.in);
    String inp = scanner.nextLine();

    if (inp.equals("blob")) {
      System.out.println("Hi");
    } else {
        System.out.println("GET OUT");
    }
  }
}
