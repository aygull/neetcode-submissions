class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        #going through blocks
        blocks = defaultdict(set)
        for i in range(9):
            columns = set()
            rows = set()
            for j in range(9):
                cell = board[i][j]
                column_cell = board[j][i]
                if cell != '.':
                    index = i//3*3 + j//3
                    if cell in blocks[index] or cell in rows:
                        return False
                    blocks[index].add(cell)
                    rows.add(cell)

                if column_cell != '.':
                    if column_cell in columns:
                        return False
                    columns.add(column_cell)
        return True
        
        

        