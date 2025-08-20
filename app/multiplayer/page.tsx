"use client";
import { useState } from "react";
import Board from "../board";
import styles from "../page.module.css";
import ScoreCard from "../scorecard/scorecard";
import BackgroundXO from "../background/background";
import Header from "../header/header";

export default function MultiPlayerPage() {
    const [displayText, setDisplayText] = useState<string>('Player1 turn');
    const [scorecard,setScorecard] = useState<{ player1: number; player2: number; tie: number }>({
        player1: 0,
        player2: 0,
        tie: 0
    });
    return (
        <div className={styles.main}>
            <Header/>
            <Board setDisplayText={setDisplayText} setScorecard={setScorecard} />

            <ScoreCard scorecard={scorecard} />
        </div>
    );
}