import React, { Component } from 'react';
import Repo from './Repo'
export default class Table extends Component {
  render() {
   const {repos}=this.props;
  //  const{id,title}=repos;
    return (
      <div style={{ border: '3px green dotted' }}>

 <table style={{ border: '1px solid black' }}>
  <tr>
    <th style={{  border: '1px solid black '}}>Number</th>
    <th style={{  border: '1px solid black '}}>Title</th>
    <th style={{  border: '1px solid black '}}>Repo Status</th>
    <th style={{  border: '1px solid black '}}>Check</th>
    <th style={{  border: '1px solid black '}}>isPrivate</th>
    <th style={{  border: '1px solid black '}}>Languge</th>
    <th style={{  border: '1px solid black '}}>Delete</th>
  </tr>
</table>
{ repos.map((elemt,id)=>{
      return ( 
        
        <Repo key={id} repo={elemt} deleteItem ={this.props.deleteItem}/>
 
      )}
        )}
      </div>
    );
  }
}