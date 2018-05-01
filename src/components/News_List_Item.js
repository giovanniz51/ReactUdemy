import React from "react";

import classes from "../css/styles.css";

//functional stateless component
export const NewsListItem = (props) => {


    return (
        <div className={classes.news_item}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>
    )
}