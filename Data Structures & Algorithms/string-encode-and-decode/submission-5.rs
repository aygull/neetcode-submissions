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
        let mut res: Vec<String> = Vec::new();
        let mut j = String::new();
        while i < s.len() {
            if s.chars().nth(i).unwrap().is_ascii_digit() {
                j.push(s.chars().nth(i).unwrap());
                i +=1;
            }
            if s.chars().nth(i) == Some('#') {
                let num: usize = j.parse().unwrap();
                res.push(s[i + 1..i + 1 + num].to_string());
                i = i + 1 + num;
                j.clear();
            }
        }
        res
    }
}
