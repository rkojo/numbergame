"use client";
import RootLayout from "./layout";
import rand from "./randnum"
import { useState } from "react";
import styles from "./styles.module.css"
export default function Home() {
  const [guessednum, setguessednum] = useState(rand.showcurrent());
  const [history, sethistory] = useState(rand.showFormer());
  const [show,setshow] = useState(false);

  return (
      <RootLayout>
       <h1 className={styles.title}>Guess the number</h1>
       <div>
         <p className={styles.text}>Past Numbers : {history+ " " }</p>
       </div>
       <h2 className={styles.guessednum}>{guessednum}</h2>  
       <div className={styles.list}>
           <button onClick={() => {rand.ifHigher(), setguessednum(rand.showcurrent())}} className={styles.buttons} style={{backgroundColor: "blue"}}> Higher ⬆️ </button>
           <button onClick={() => {rand.ifLower(), setguessednum(rand.showcurrent())}} className={styles.buttons} style={{backgroundColor: "red"}}> Lower ⬇️</button>
           <button onClick={() => {rand.correct(), setshow(true)}} className={styles.buttons} style={{backgroundColor: "green"}}> Correct! ✅</button>
       </div>
       <div>
        {show && <Showresult/>}
      </div>
      </RootLayout>
    )
  function Showresult() {
    return (
      <RootLayout>
        <button> restart</button>
      </RootLayout>
    )
  }
}
