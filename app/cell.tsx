import { useRef } from "react";
import styles from "./page.module.css";

type props = {
    value: number;
    turn: number;
    updatePlayer: (index: number) => void;
    isOver: number;

}
const Cell = ({ value, turn, updatePlayer, isOver }: props) => {

    const onclickAction = () => {
        if (value == 0) {
            updatePlayer(turn);
        }
    }

    return <div className={styles.cell} onClick={onclickAction} style={{
        opacity: isOver==0 || isOver==2 ? 0.2 : 1,
        transition: "opacity 0.3s ease"
    }}>{value == 0 ? "" : value == 1 ? 'X' : 'O'}</div>
}

export default Cell;