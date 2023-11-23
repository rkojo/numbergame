"use client";
import RootLayout from "./layout";
import rand from "./randnum"
import { useState } from "react";
import styles from "./styles.module.css"
import race from "./race";
export default function Home() {
  const [guessednum, setguessednum] = useState(rand.showcurrent());
  const [history, sethistory] = useState(rand.showFormer());
  const [show,setshow] = useState(false);
  const [rac, setrace] = useState(race.showrace());
  const [racetext, setracetext] = useState(race.showstring());

  return (
      <RootLayout>
        {!show && <Showgame/>}
        {show && <Showresult/>}
      </RootLayout>
    )
    //ensures that everything updates
  function GraphicUpdate() {
    setguessednum(rand.showcurrent()),
    setrace(race.showrace());
    setracetext(race.showstring());
    sethistory(rand.showFormer())
  }
  function Showgame() {
    return (
    <RootLayout>
    <h1 className={styles.title}>Number Race</h1>
    <p className={styles.text}>Think of a number and see how long it takes for your number to show up</p>
    <div>
      <p className={styles.text}>Past Numbers : {history+ " " }</p>
      <p className={styles.text} style={{fontSize: "200%"}}> {rac} </p>
      <p className={styles.text}> {racetext} </p>
    </div>
    <h2 className={styles.guessednum}>{guessednum}</h2>  
    <div className={styles.list}>
        <button onClick={() => {rand.ifHigher(), race.move(), GraphicUpdate()}} className={styles.buttons} style={{backgroundColor: "blue"}}> Higher ⬆️ </button>
        <button onClick={() => {rand.ifLower(), race.move(), GraphicUpdate()}} className={styles.buttons} style={{backgroundColor: "red"}}> Lower ⬇️</button>
        <button onClick={() => {rand.correct(), setshow(true)}} className={styles.buttons} style={{backgroundColor: "green"}}> Correct! ✅</button>
    </div>
   </RootLayout>
    )
  }

  function Showresult() {
    return (
      <RootLayout>
            <div className={styles.resultsscreen}>
          <p className={styles.text}>Past Numbers : {history+ " " }</p>
          <p className={styles.text}>Score: {race.score()}</p>
          <button onClick={() => {rand.new(), setshow(false), race.reset(), GraphicUpdate()}} className={styles.buttons} style={{backgroundColor: "white"}}>restart</button>
          </div>

      </RootLayout>
    )
  }
}
