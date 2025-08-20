"use client";
import { useState } from "react";
import Board from "../board";
import styles from "../page.module.css";
import ScoreCard from "../../components/scorecard/scorecard";
import Header from "../../components/header/header";

export default function MultiPlayerPage() {
    const [scorecard,setScorecard] = useState<{ player1: number; player2: number; tie: number }>({
        player1: 0,
        player2: 0,
        tie: 0
    });
    return (
        <div className={styles.main}>
            <Header/>
            <Board setScorecard={setScorecard} />

            <ScoreCard scorecard={scorecard} />
        </div>
    );
}