class Solution {
    public int solution(int a, int d, boolean[] included) {
        int n = included.length;
        int answer = 0;
        for(int i=0; i<n; i++){
            int currentNum = a + d*(i);
            if(included[i] == true){
                answer += currentNum;
            }
        }
        
        return answer;
    }
}
