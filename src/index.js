import React from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

//Components
import {Header} from "./components/Header";
import {NewsList} from "./components/News_List";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: JSON
        }
    }

    render(){
        return (
            <div>
               <Header />
               <NewsList news={this.state.news}/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"));