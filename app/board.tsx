import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./cell";
import styles from "./page.module.css";
type props = {
    setDisplayText: Dispatch<SetStateAction<string>>;
}
const Board = ({ setDisplayText }: props) => {
    const [board, setBoard] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [turn, setTurn] = useState<number>(0);
    const [isOver, setIsOver] = useState<boolean>(false);

    const updatePlayer = (index: number) => {
        setBoard(prev => {
            const updated = [...prev];
            updated[index] = !turn ? 1 : 2;
            return updated;
        });
        setTurn(turn ? 0 : 1);
    }



    useEffect(() => {
        checkWin();
    }, [board])

    useEffect(() => {
        if (isOver) {
            setDisplayText(!turn ? 'Player2 Wins' : 'Player1 Wins');
            return;
        }
        setDisplayText(turn ? 'Player2 turn' : 'Player1 turn');
    }, [turn, isOver])

    const checkWin = () => {
        // Rows
        for (let i = 0; i < 9; i += 3) {
            if (board[i] !== 0 && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
                setIsOver(true);
                return;
            }
        }

        // Columns
        for (let i = 0; i < 3; i++) {
            if (board[i] !== 0 && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                setIsOver(true);
                return;
            }
        }

        // Diagonals
        if (board[0] !== 0 && board[0] === board[4] && board[4] === board[8]) {
            setIsOver(true);
            return;
        }
        if (board[2] !== 0 && board[2] === board[4] && board[4] === board[6]) {
            setIsOver(true);
            return;
        }
    }
    const resetGame=()=>{
        setIsOver(false);
        setTurn(0);
        setBoard([0,0,0,0,0,0,0,0,0]);
    }
    return <div className={styles.board} >
        {isOver && <span className={styles.overlay}>GAME OVER
            <button onClick={resetGame}>Restart</button>
        </span>}
        {board.map((value, index) => {
            return <Cell isOver={isOver} value={value} key={index} turn={index} updatePlayer={updatePlayer} />
        })}

    </div>
}

export default Board;