import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TemperatureInput from './LiftingStateUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// React元素是不可变的。一旦创建了一个元素，就不能更改其子元素或属性。
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    // 挂载：第一次呈现给DOM时设置一个计时器Clock
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    // 卸载：清除定时器
    // 清除计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        // 1、不能直接修改状态
        // this.state.comment='hello';这种是不行的
        // 2、状态更新可能是异步的
        // 3、状态更新被合并
        this.setState({
          date: new Date()
        });
    }
    render(){
        return (
            <div>
                <h1>This is a clock!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
     document.getElementById('clock')
);

// 处理事件
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('Toggle')
);

registerServiceWorker();


// 有条件的条件渲染
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
  
      let button = null;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
} 
ReactDOM.render(
    <LoginControl />,
    document.getElementById('login')
);

// 列表
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
      // “键”是创建元素列表时需要包含的特殊字符串属性
      // 正常用数据的id作为关键字，也可以以索引作为关键字
      // <li key={index}>{number}</li>
      // 或
      <ListItem key={index} value={number} />
    );
    return (
        // <ul>{listItems}</ul>
        <ul>
          {numbers.map((number,index)=>
            <ListItem key={index} value={number} />
          )}
        </ul>
    )
}
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('ullist')
);


// 受控组件
class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      textareavalue:'Please write an essay about your favorite DOM element.',
      selectValue:2,
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.textareaChange = this.textareaChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event){
    this.setState({value:event.target.value.toUpperCase()});
  }
  textareaChange(event){
    this.setState({textareavalue: event.target.textareavalue});
  }
  selectChange(event){
    this.setState({selectChange: event.target.selectChange});
  }
  handleInputsChange(event){
    const target = event.target;
    const checkinputvalue = target.type === 'checkbox' ? target.checked :target.value;
    const name = target.name;

    this.setState({
      [name]:checkinputvalue
    })
    alert([name]+' = '+checkinputvalue+`${name}:${checkinputvalue}`)
  }
  handleSubmit(event){
    alert(
      `Selected file - ${
        this.fileInput.files[0].name
      }`
    );
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Upload file:
          <input 
            type="file" 
            ref={input => {
              this.fileInput = input;
            }} 
          />
        </label>
        <label>
          Essay:
          <textarea value={this.state.textareavalue} onChange={this.textareaChange} />
        </label>
        <label>
          Pick your favourite option:
          <select value={this.state.selectValue} onChange={this.selectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label>
          Is going:
          <input 
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputsChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input 
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputsChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('formC')
)


ReactDOM.render(<TemperatureInput />, document.getElementById('LiftingStateUpC'));