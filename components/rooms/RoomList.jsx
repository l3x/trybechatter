import React, {Component} from 'react';
import Room from './Room.jsx';

class RoomList extends Component{
  render(){
    return (
      <ul>{
        this.props.rooms.map( chan =>{
          return <Room 
            room={chan}
            key={chan.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

RoomList.propTypes = {
  rooms: React.PropTypes.array.isRequired,
  setRoom: React.PropTypes.func.isRequired,
  activeRoom: React.PropTypes.object.isRequired
}

export default RoomList