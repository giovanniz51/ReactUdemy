import React from "react";

//Components
import {NewsListItem} from "./News_List_Item";

export const NewsList = (props) => {
    const items = props.news.map( (item) => {
        return <NewsListItem key={item.id} item={item}/>
    });

    return (
        <div>{items}</div>
    )
}