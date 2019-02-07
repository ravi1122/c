import React from "react";
import ReactDOM, { render } from "react-dom";
import { Home } from "./new/Home";
import { Header } from "./new/Header";

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Home name="ravi" age="34"/>
                <Header />
            </div>
            
        );
    }
}

render(<App />, document.getElementById("app"));