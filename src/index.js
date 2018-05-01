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
            news: JSON,
            filtered: []
        }
    }

    getWord = (event) => {
        //console.log(event.target.value);
        let word = event.target.value;
        let filtered = this.state.news.filter( (item) => {
            return item.title.indexOf(word) > -1;
        });

        this.setState({
            filtered
        })

        //console.log(filtered);
    }

    render(){
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news;
        return (
            <div>
               <Header words={this.getWord}/>
               <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered }>
                <h3>The news are:</h3>
               </NewsList>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"));