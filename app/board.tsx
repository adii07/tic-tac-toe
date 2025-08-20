import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./cell";
import styles from "./page.module.css";
type props = {
    setScorecard: Dispatch<SetStateAction<{ player1: number; player2: number; tie: number }>>;
}
const Board = ({ setScorecard }: props) => {
    const [board, setBoard] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [turn, setTurn] = useState<number>(0);
    const [winCells,setWinCells] = useState<number[]>([]);
    const [isOver, setIsOver] = useState<number>(1);

    const updatePlayer = (index: number) => {
        if(isOver==0 || isOver==2){
            resetGame();
             return;
        }
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
            setScorecard(prev => ({
                ...prev,
                [!turn ? 'player2' : 'player1']: prev[!turn ? 'player2' : 'player1'] + 1
            }));
            return;
        } else if (isOver == 1) {
        } else if (isOver == 2) {
            setScorecard(prev => ({
                ...prev,
                tie: prev.tie + 1
            }));
        }
    }, [turn, isOver])

    const checkWin = () => {
        // Rows
        for (let i = 0; i < 9; i += 3) {
            if (board[i] !== 0 && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
                setWinCells([i, i + 1, i + 2]);
                setIsOver(0);
                return;
            }
        }

        // Columns
        for (let i = 0; i < 3; i++) {
            if (board[i] !== 0 && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                setWinCells([i, i + 3, i + 6]);
                setIsOver(0);
                return;
            }
        }

        // Diagonals
        if (board[0] !== 0 && board[0] === board[4] && board[4] === board[8]) {
            setWinCells([0, 4, 8]);
            setIsOver(0);
            return;
        }
        if (board[2] !== 0 && board[2] === board[4] && board[4] === board[6]) {
            setWinCells([2, 4, 6]);
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
        setIsOver(1);
        setTurn(0);
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setWinCells([]);
    }
    return <div className={styles.board} >
        {board.map((value, index) => {
            return <Cell isOver={isOver} value={value} key={index} turn={index} updatePlayer={updatePlayer} overlay={isOver!=1 &&!winCells.includes(index)} />
        })}
    </div>
}

export default Board;