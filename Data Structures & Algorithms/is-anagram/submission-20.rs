impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            false;
        }
        let mut chars = [0u8; 26];
        for c in s.chars() {
            chars[c as usize - 'a' as usize] +=1;
        }
        for c in t.chars() {
            chars[c as usize - 'a' as usize] -=1;
        }

        chars.iter().all(|&x| x == 0)
    }
}
