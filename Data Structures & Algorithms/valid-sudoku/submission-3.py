class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        #going through rows
        for i in range(9):
            rows = set()
            for j in range(9):
                cell = board[i][j]
                if cell == '.':
                    continue
                cell = board[i][j]
                if cell in rows:
                    return False
                rows.add(cell)
        #going through columns
        for i in range(9):
            columns = set()
            for j in range(9):
                cell = board[j][i]
                if cell == '.':
                    continue
                if cell in columns:
                    return False
                columns.add(cell)
        #going through blocks
        blocks = defaultdict(set)
        for i in range(9):
            for j in range(9):
                cell = board[i][j]
                if cell == '.':
                    continue
                index = i//3*3 + j//3
                if cell in blocks[index]:
                    return False
                blocks[index].add(cell)
        return True
        
        

        