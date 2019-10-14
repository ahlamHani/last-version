import React, { Component } from 'react';

export default class Add extends Component {
  state={
    title:"",
    language:"",
    status:""
  };
   addNewRepo=()=>{
   let newRepos={id:1,title:this.state.title, status:this.state.status,language:this.state.language};
   this.props.addRepo(newRepos)
   this.setState({
    title:"", language:"",status:""
  })
   }
   handleChange = (event)=>{
     this.setState({
       title: event.target.value
     })
     console.log(this.state.title);
   }
   handleChangelang = (event)=>{
    this.setState({
      language: event.target.value
     
    })
    
    console.log(this.state.language);                                             
  }
  
  changeState=(event)=>{
    this.setState({
      status: event.target.value
     
    })
    
    console.log(this.state.status);                                             

  }                                            
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <div onSubmit={this.addRepo}> 
          <input type="text" 
                 value={this.state.title} 
                 onChange= {this.handleChange} 
                 placeholder="repo title"
          />

          <input type="text"
                 value={this.state.language} 
                 onChange= {this.handleChangelang} 
                 placeholder="repo language"
          />

         
          <select name="status" value={this.state.status} onChange={this.changeState}>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
           
          </select>
          <button type="submit" onClick={this.addNewRepo}> Add Repo</button>
        </div>
      </div>
    );
  }
}
