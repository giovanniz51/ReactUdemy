import React from "react";
import ReactDOM from "react-dom";

//Components
import {Header} from "./components/Header";

class App extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
               <Header />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"));