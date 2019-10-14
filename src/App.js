import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import axios from "axios";

export default class App extends Component {
  state = {
    repos: [
     
    ]
  };
 
  componentDidMount(){
    axios.get('http://localhost:9000/data')
    .then(({data})=>{
      console.log(data)
      this.setState({
        repos : data
      })
    })
  }
  

  deleteItem= ID => {
    axios.delete(`http://localhost:9000/delete/${ID}`)
  .then(({data})=>{
    this.setState({
      repos : data
    })
  })
    console.log('id' ,ID);
    let neState= this.state.repos.filter(
      (elem, i)=>{
        return ID !== elem.id;
      }
    );
    this.setState({repos: newState});
  }

  addRepo = (repo) => {
   
    let newRepo = this.state.repos;
    newRepo.push(repo)
    this.setState({repos: newRepo});

  };
  render() {

    const {repos}=this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <button>getFromServer</button>
         <Add addRepo={this.addRepo} repos={repos}/>
         <Table repos={repos} deleteItem={this.deleteItem}/> 
      </div>
    );
  } 
}