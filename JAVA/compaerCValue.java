class Solution {
    public int solution(int a, int b) {
        int answerA = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
        int answerB = 2*a*b;
        return answerA>answerB ? answerA : answerB;
    }
}
