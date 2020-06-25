// import React from 'react';
import './App.css';
import Countries from "./Countries";


import React, { Component } from "react";

class App extends Component {
constructor() {
    super()
    this.state = { data: [] };
}

componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
.then((res) => res.json())
.then((data) => console.log(data))
}


    render() {
        return (
            <>
            {this.state.data.map(el => (
                <li>
                    {el.country}
                </li>
            ))}
            <Countries> </Countries>
            <div>Hello world</div>

            </>
            
        );
    };
};


export default App;
