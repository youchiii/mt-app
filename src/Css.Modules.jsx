import React from "react";
import styles from "./styles.module.scss";
export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>CSS Modulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    )
}