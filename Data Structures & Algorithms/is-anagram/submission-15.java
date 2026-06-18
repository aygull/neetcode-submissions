class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int[] chars = new int[26];

        for (int i = 0; i < s.length(); i++) {
            chars[(int)s.charAt(i) - (int)'a'] +=1;
            chars[(int)t.charAt(i) - (int)'a'] -=1;
        }
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != 0) {
                return false;
            }
        }
        return true;
    }
}
