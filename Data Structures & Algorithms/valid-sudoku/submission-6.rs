impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut blocks: HashMap<usize, HashSet<char>> = HashMap::new();
        for i in 0..9 {
            let mut set_rows: HashSet<char> = HashSet::new();
            let mut set_columns: HashSet<char> = HashSet::new(); 
            for j in 0..9 {
                let curr_index_block = i / 3 * 3 + j / 3;
                if set_rows.contains(&board[i][j]) || set_columns.contains(&board[j][i]) || blocks.get(&curr_index_block).map_or(false, |set| set.contains(&board[i][j])){
                    return false
                }
            
                if board[i][j] != '.' {
                    set_rows.insert(board[i][j]);
                    blocks.entry(curr_index_block).or_insert_with(HashSet::new).insert(board[i][j]);                }

                if board[j][i] !='.' {
                    set_columns.insert(board[j][i]);
                }
            }
        }
        true
    }
}
