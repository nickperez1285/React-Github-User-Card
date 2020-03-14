import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
class App extends React.Component {
state = {
user:[],
follower:[]
}
// constructor(props) {
//   super(props)
//   this.state = {
//     data: "data"
//   };
// }
componentDidMount(){
axios.get("https://api.github.com/users/nickperez1285")
.then(res=>{this.setState({user:res.data})})
.then(res => console.log(this.state.user))
axios.get("https://api.github.com/users/nickperez1285/followers")
.then(res=>{this.setState({follower:res.data})})
.then(res => console.log(this.state.follower[0].avatar_url))
}
render() {
return (
<div className="App">
  
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
  <p className="App-intro">
    
    <div className="card">
      <img src ={this.state.user.avatar_url} />
      <div className="card-info">
        
        <h3>{this.state.user.name}</h3>
        
        <p>Profile: {this.state.user.url} </p>
        <p>Followers: {this.state.user.followers} </p>
        <p>Followers: {this.state.user.following} </p>
        
      </div>
    </div>
    <h2>Followers </h2>
          {this.state.follower.map( f=>

    <div className="card" >
      <img src ={f.avatar_url} />
         <p>Profile: {f.url}</p>
      
    </div>
        )}

  </p>
</div>
);
}
}
export default App;