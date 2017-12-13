import React, {Component} from 'react';

class Room extends Component{
  onClick(e){
    e.preventDefault();
    const {setRoom, room} = this.props;
    setRoom(room);
  }
  render(){
    const {room, activeRoom} = this.props;
    const active = room === activeRoom ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {room.name}
        </a>
      </li>
    )
  }
}

Room.propTypes = {
  room: React.PropTypes.object.isRequired,
  setRoom: React.PropTypes.func.isRequired,
  activeRoom: React.PropTypes.object.isRequired
}

export default Room