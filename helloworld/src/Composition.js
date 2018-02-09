import React, { Component } from 'react';

// props.children
function FancyBorder(props){
    return (
        <div className={`FancyBorder FancyBorder-`+props.color}>{props.children}</div>
    )
}

function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

// 插槽
function SplitPane(props){
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function Contacts(){return 'left';}
function Chat(){return 'right';}
function App(){
    return (
        <SplitPane
            left={<Contacts />}
            right={<Chat />}
        />
    )
}

// Specialization
function Dialog(props){
    return (
        <FancyBorder  color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function WelcomeDialog(){
    return (
        <Dialog 
            title="Welcome"
            message="Thank you for visting our spacecraft!" />
    )
}

class SignUpDialog extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login:''}
    }
    handleChange(e) {
        this.setState({login: e.target.value});
    }
    
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render(){
        return (
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                    onChange={this.handleChange} />

                <button onClick={this.handleSignUp}>
                Sign Me Up!
                </button>
            </Dialog>
        )
    }
}

export default SignUpDialog;







