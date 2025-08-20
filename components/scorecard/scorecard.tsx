import React from "react";
import styles from "./scorecard.module.css";
type props={
    scorecard: {
        player1: number;
        player2: number;
        tie: number;
    };
    isAiMode?: boolean;
}
const ScoreCard = ({ scorecard, isAiMode }: props) => {
    return (
        <div className={styles.scorecard}>
            <div className={styles.scorecard_container}>
                <div className={styles.scorecard_player}>Player1(x) <span>{scorecard.player1}</span></div>

                <div className={styles.scorecard_player}>Tie <span>{scorecard.tie}</span></div>
                <div className={styles.scorecard_player}>{isAiMode ? 'AI' : 'Player2'}(0) <span>{scorecard.player2}</span></div>
            </div>
        </div>
    );
}

export default ScoreCard;
