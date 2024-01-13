class strMix {
    public String solution(String str1, String str2) {
        int len = str1.length();
        String answer = "";
        for(int i = 0; i<len; i++){
            answer = answer + str1.charAt(i) + str2.charAt(i);
        };
        return answer;
    }
}
