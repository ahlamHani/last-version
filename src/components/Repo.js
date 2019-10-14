import React, { Component } from 'react';

export default class Repo extends Component {
  
  state={
    val:"",
    status:this.props.repo.status
  }
  test=()=>{
    if(this.props.repo.status === "Public"){
    //  this.setState({val:"Yes"})
    // console.log("yes")
   
    this.setState({val : 'No'})
    
    }
    if (this.props.repo.status === "Private"){
      // this.setState({val:"No"})
      console.log("No");
      this.setState({val : 'Yes'})
      }
    
  }
  render() {
    const {repo}=this.props;

    return (
      <div style={{ border: '3px red solid' }}>
       <table  border="1">
       <tr>
    <td  >{repo.id}</td>
    <td  >{repo.title}</td>
    <td  >{repo.status}</td>
    <td  ><input onChange={this.test} type="checkbox"/></td>
    {/* <td  >{:isCompleted?"line-through":"none"}}}</td> */}
    <td>{this.state.val}</td>
    <td  >{repo.language}</td>
    <td > <button onClick={this.props.deleteItem.bind(this,this.props.repo.id)}>X</button></td>
  </tr>
  </table>

      </div>
    );
  }
}