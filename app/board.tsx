import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./cell";
import styles from "./page.module.css";
type props = {
    setDisplayText: Dispatch<SetStateAction<string>>;
}
const Board = ({ setDisplayText }: props) => {
    const [board, setBoard] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [turn, setTurn] = useState<number>(0);
    const [isOver, setIsOver] = useState<number>(-1);

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
        if (isOver == 0) {
            setDisplayText(!turn ? 'Player2 Wins' : 'Player1 Wins');
            return;
        } else if (isOver == 1) {
            setDisplayText(turn ? 'Player2 turn' : 'Player1 turn');
        } else if (isOver == 2) {
            setDisplayText('No one wins');
        }
    }, [turn, isOver])

    const checkWin = () => {
        // Rows
        for (let i = 0; i < 9; i += 3) {
            if (board[i] !== 0 && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
                setIsOver(0);
                return;
            }
        }

        // Columns
        for (let i = 0; i < 3; i++) {
            if (board[i] !== 0 && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                setIsOver(0);
                return;
            }
        }

        // Diagonals
        if (board[0] !== 0 && board[0] === board[4] && board[4] === board[8]) {
            setIsOver(0);
            return;
        }
        if (board[2] !== 0 && board[2] === board[4] && board[4] === board[6]) {
            setIsOver(0);
            return;
        }

        // Draw condition
        if (board.every(cell => cell != 0)) {
            setIsOver(2);
            return;
        }
        setIsOver(1);
    }
    const resetGame = () => {
        setIsOver(-1);
        setTurn(0);
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    return <div className={styles.board} >
        {(isOver == 0 || isOver == 2) && <span className={styles.overlay}>GAME OVER
            <button onClick={resetGame}>Restart</button>
        </span>}
        {board.map((value, index) => {
            return <Cell isOver={isOver} value={value} key={index} turn={index} updatePlayer={updatePlayer} />
        })}

    </div>
}

export default Board;