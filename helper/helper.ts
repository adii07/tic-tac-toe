function minimax(board:any, depth:number, isMaximizing:boolean) {
  if (calculateWinner(board) === 1) return -10 + depth;
  if (calculateWinner(board) === 2) return 10 - depth;
  if (!board.includes(0)) return 0;    

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === 0) {
        board[i] = 2;
        let score = minimax(board, depth + 1, false);
        board[i] = 0;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === 0) {
        board[i] = 1;
        let score = minimax(board, depth + 1, true);
        board[i] = 0;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

export function bestMove(board:any) {
    if (calculateWinner(board) || !board.includes(0)) {
      return; // stop AI move, game ended
    }
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    if (board[i] == 0) {
      board[i] = 2; // AI plays '2'
      let score = minimax(board, 0, false);
      board[i] = 0;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}


export function calculateWinner(squares: number[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}