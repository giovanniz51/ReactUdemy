import React, {Component} from "react";

import classes from "../css/styles.css";

export class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "The words are: ",
            words: ""
        }
    }

    inputChangeHandler = (event) => { //mit arrow function muss man nicht bind(this)
        this.setState({
            words: event.target.value
        });
    }

    render(){

        console.log(this.state.words);
        return (
            <header>
                <div className={classes.logo}>Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
            </header>
        )
    }
    
}