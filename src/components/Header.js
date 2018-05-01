import React from "react";

import classes from "../css/styles.css";

export const Header = (props) => {

        return (
            <header>
                <div className={classes.logo}>Logo</div>
                <input type="text" onChange={props.words}/>
            </header>
        )
    
}