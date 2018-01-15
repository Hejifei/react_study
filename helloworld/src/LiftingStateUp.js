import React, { Component } from 'react';

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature:''}
//     }

//     handleChange(e){
//         this.setState({temperature : e.target.value});
//     }

//     render(){
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input 
//                     value={temperature}
//                     onChange={handleChange}
//                 />

//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)} />
//             </fieldset>
//         )

//     }
// }

const scaleNames ={
    c:'Celsius',
    f:'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={temperature:''}
    }

    handleChange(e){
        this.setState({temperature:e.target.value});
    }

    render(){
        const tempearture = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={tempearture}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
  
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// class Calculatornew extends React.Component{
//     render(){
//         return (
//             <div>
//                 <TemperatureInput scale="c" />
//                 <TemperatureInput scale="f" />
//             </div>
//         )
//     }
// }

export default TemperatureInput;