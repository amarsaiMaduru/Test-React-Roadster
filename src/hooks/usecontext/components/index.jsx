import React from 'react'
import { UserContext } from '../../../App'
import { useContext } from 'react'
export default function ComponentB(props) {
 const{value}=useContext(UserContext)
 console.log(value)
 if (!value) {
    return <div>Loading...</div>; // or handle the undefined case
  }
  return (
    <div>
       {/* <UserContext.Consumer> */}
      

    <div>this is user context example{value.name}</div>
       {/* </UserContext.Consumer>
       */}
    </div>
  )
}
