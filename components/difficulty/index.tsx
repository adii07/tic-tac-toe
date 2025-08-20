import { useState } from "react";
import styles from "./index.module.css";

export default function DifficultyToggle({ onChange }: { onChange: (level: string) => void }) {
    const [level, setLevel] = useState("medium");

    const handleChange = (newLevel: string) => {
        setLevel(newLevel);
        onChange(newLevel);
    };

    return (
        <div className={styles.difficulty_toggle}>
            {["easy", "medium", "hard"].map((option) => (
                <button
                    key={option}
                    onClick={() => handleChange(option)}
                    className={`${styles.toggle_btn} ${level === option ? styles.active : ""}`}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
}
