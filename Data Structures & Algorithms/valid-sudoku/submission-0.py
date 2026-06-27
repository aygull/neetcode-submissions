class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        #going through rows
        for i in range(9):
            rows = set()
            for j in range(9):
                cell = board[i][j]
                if cell in rows and cell != '.':
                    return False
                rows.add(cell)
        #going through columns
        for i in range(9):
            columns = set()
            for j in range(9):
                cell = board[j][i]
                if cell in columns and cell != '.':
                    return False
                columns.add(cell)
        #going through blocks
        blocks = defaultdict(set)
        for i in range(9):
            for j in range(9):
                index = i//3*3 + j//3
                cell = board[i][j]
                if cell in blocks[index] and cell != '.':
                    return False
                blocks[index].add(cell)
        return True
        
        

        