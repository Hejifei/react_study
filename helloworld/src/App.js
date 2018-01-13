import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  firstName: 'He',
  lastName: 'Jifei'
};

function getGreeting(user){
  return user.firstName+' '+user.lastName;
}

function formatDate(date){
  
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class Welcome extends React.Component{
  render(){
    return <h1>Hello,{this.props.name}</h1>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          Hello,{getGreeting(user)}!
        </h1>
        {/* 组件渲染 */}
        {/* 道具：当React查看标识用户定义组件的元素时，它会将JSX属性作为单个对象传递给此组件 */}
        <Welcome name="何必" />
        <Welcome name="何伊" />
      </div>
    );
  }
}

export default App;
