import React from 'react'

import '../styles/cards.css'
import Users from '../users.json'

class Card extends React.Component {
  // constructor(){
  //   super()
  //   this.users = []
  // }  
  
  render() {
    
    console.log(Users[1].friends);
    
    return (
      <div id = 'all-cards'>
        {Users[0].friends.map(friend => (
          <div className='card'>
                <img src={friend.picture}alt="" />
                <h2>{friend.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus quam labore quidem accusantium, fuga maiores quos quia nobis quisquam.</p>

          </div>          
        ))}
        {Users[1].friends.map(friend => (
          <div className='card'>
                <img src={friend.picture}alt="" />
                <h2>{friend.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus quam labore quidem accusantium, fuga maiores quos quia nobis quisquam.</p>

          </div>          
        ))}
        {Users[2].friends.map(friend => (
          <div className='card'>
                <img src={friend.picture}alt="" />
                <h2>{friend.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus quam labore quidem accusantium, fuga maiores quos quia nobis quisquam.</p>

          </div>          
        ))}
        {Users[3].friends.map(friend => (
          <div className='card'>
                <img src={friend.picture}alt="" />
                <h2>{friend.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus quam labore quidem accusantium, fuga maiores quos quia nobis quisquam.</p>

          </div>          
        ))}
        
      </div>
    )
  }

}

export default Card