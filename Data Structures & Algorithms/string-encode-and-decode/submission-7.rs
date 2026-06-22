impl Solution {
    pub fn encode(strs: Vec<String>) -> String {
        let mut res = String::new();
        for i in 0..strs.len(){
            res.push_str(&strs[i].len().to_string());
            res.push('#');
            res.push_str(&strs[i]);
        }
        res
    }

    pub fn decode(s: String) -> Vec<String> {
        let mut i = 0;
        let mut res = Vec::new();
        while i < s.len() {
            let mut j = i;
            while s.as_bytes()[j] != b'#' {
                j += 1;
            }
            let len:usize = s[i..j].parse().unwrap();
            let start = j + 1;
            let end = start + len;

            res.push(s[start..end].to_string());

            i = end;
        }

        res
    }
}
