impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<[i32;26], Vec<String>> = HashMap::new();
        for s in strs {
            let mut chars = [0; 26];
            for c in s.chars() {
                chars[c as usize - 'a' as usize]+=1;
            }
            map.entry(chars).or_insert_with(Vec::new).push(s);
        }

        map.values().cloned().collect::<Vec<_>>()
    }
}
