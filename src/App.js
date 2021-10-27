import React from 'react'

import Card from './components/Card'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The Wall</h1>
        <div className="users">
          <Card/>
          {/* <div className="row justify-content-around">
          {users.map(user => <Card user={user} />)}
        </div> */}
        </div>
      </div>
    )
  }
}

export default App