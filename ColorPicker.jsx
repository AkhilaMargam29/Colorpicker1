import React, { useState } from 'react'
import styles from './ColorPickerstyles.module.css'

const ColorPicker = () => {
    let[state,setState]=useState("#ffffff")
    const changecolor=(e)=>{
        setState(e.target.value)
        console.log(setState);
    }
  return (
    <div>
        <h1 className={styles.h1}>COLOR PICKER</h1>
        <input type="color" value={state} onChange={changecolor} className={styles.input} />
    </div>
    
  )
}

export default ColorPicker 