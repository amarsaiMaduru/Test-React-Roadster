import React, { Component } from 'react'
import UpdatedComponent from './mainhoc'
 class Higher extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        }
            )
    }
    
  render() {
const {count}=this.state
    return (
    
        
        <button onClick={this.incrementCount}>{this.props.name}clicked{count}times</button>
      
    )
  }
}

export default UpdatedComponent (Higher)
