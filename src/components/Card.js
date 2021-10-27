import React from 'react'

import '../styles/cards.css'
import Users from '../users.json'


class Card extends React.Component {

  render() {

    // const { picture, name, about, friends } = this.props.user
    
    console.log(Users.map( e =>  e ).map( a => a.picture));
    
    return (
    
      <div id ='all-cards'>

        {/* <div className="col-6 my-4">
          <div className="p-3 border bg-light rounded">
            <div className="d-flex align-items-center">
              <img src={picture} />
              <h2 className="ms-3">{name}</h2>
            </div>
              <p className="mt-3">{about}</p>
            <div className="row">
                {friends.map(friend => <Friend friend={friend} />)}
            </div>
        </div>
      </div> */}

      {/* {Users.map( e =>  e ).map( a => (

          <div className='card'>
            <img src={a.picture}alt="" />
            <h2>{a.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus quam labore quidem accusantium, fuga ma  quoquia nobis quisquam.</p>
          </div>          
      
      )  
      )} */}

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