"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import BackgroundXO from "../components/background/background";

export default function Home() {
  const router=useRouter();
  const redirectToMode=(target:number)=>{
    if(target===1){
      router.push("/multiplayer");
    }else if(target===2){
      router.push("/ai");
    }
  }
  return (
    <div className={styles.main_page}>
      <BackgroundXO/>
      <p className={styles.select_mode_title}>Select your Mode</p>
      <div className={styles.option_container}>
      <span className={styles.select_mode_option} onClick={() => redirectToMode(1)}>Multiplayer</span>
      <span className={styles.select_mode_option} onClick={() => redirectToMode(2)}>AI</span>
      </div>
    </div>
  );
}
