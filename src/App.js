import React, { Component } from 'react'
import Forms from './Components/Forms'
import Logger from './Components/InputLogger'
import Events from './Components/Events'
import Lists from './Components/Lists'
import Propss from './Components/Propss'
export default class App extends Component {
  render() {
    return (
      <div>
        <Forms/>
        <Logger/>
        <Events/>
        <Lists/>
        <Propss  age={21}/>
      </div>
    )
  }
}

Propss.prototypes = {
  usrname: 'string',
  age: 'number',
}
Propss.defaultProps={
  usrname:'guest',
}

