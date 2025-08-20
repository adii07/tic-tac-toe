import React from "react";
import styles from "./scorecard.module.css";
type props={
    scorecard: {
        player1: number;
        player2: number;
        tie: number;
    };
}
const ScoreCard = ({ scorecard }: props) => {
    return (
        <div className={styles.scorecard}>
            <div className={styles.scorecard_container}>
                <div className={styles.scorecard_player}>Player(x) <span>{scorecard.player1}</span></div>

                <div className={styles.scorecard_player}>Tie <span>{scorecard.tie}</span></div>
                <div className={styles.scorecard_player}>Player(o) <span>{scorecard.player2}</span></div>
            </div>
        </div>
    );
}

export default ScoreCard;
