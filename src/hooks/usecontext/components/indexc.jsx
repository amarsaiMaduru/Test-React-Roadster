import React from 'react'
// import { UserContext } from '../../App'
import { UserContext } from '../../../App'

export default function ComponentC() {
  return (
    <div>
    <UserContext.Consumer>
            {user=>
<div> user context value{user}</div>
            }     
    </UserContext.Consumer>
</div>
  )
}
