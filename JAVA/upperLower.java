import java.util.Scanner;

public class upperLower {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";
        for ( char c : a.toCharArray()){
            if (Character.isUpperCase(c)){
                answer += Character.toLowerCase(c);
            }
            else{
                answer += Character.toUpperCase(c);
            }
        }
        System.out.println(answer);
        sc.close();
    }
}