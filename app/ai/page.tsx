"use client";
import Header from '@/components/header/header';
import ScoreCard from '@/components/scorecard/scorecard';
import React, { useState } from 'react';
import Board from '../board';
import styles from "../page.module.css";

export default function AiPage() {
    const [scorecard, setScorecard] = useState<{ player1: number; player2: number; tie: number }>({
        player1: 0,
        player2: 0,
        tie: 0
    });
    return (
        <div className={styles.main} >
            <Header />
            <Header />
            <Board setScorecard={setScorecard} />

            <ScoreCard scorecard={scorecard} isAiMode={true} />
        </div >
    );
}