"use client";
import { useEffect, useState } from "react";
import Board from "./board";
import styles from "./page.module.css";

export default function Home() {
  const [displayText,setDisplayText]=useState<string>('');


  return (
    <div className={styles.main}>
      <p>{displayText}</p>
      <Board setDisplayText={setDisplayText}/>
    </div>
  );
}
