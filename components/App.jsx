import React, {Component} from 'react';
import RoomSection from './rooms/RoomSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    };
  }
  addRoom(name){
    let {rooms} = this.state;
    rooms.push({id: rooms.length, name});
    this.setState({rooms});
    // TODO: Send to server
  }
  setRoom(activeRoom){
    this.setState({activeRoom});
    // TODO: Get Rooms Messages
  }
  render(){
    return (
      <div className='app'>
        <div className='nav'>
          <RoomSection 
            {...this.state}
            addRoom={this.addRoom.bind(this)}
            setRoom={this.setRoom.bind(this)}
          />
        </div>
      </div>

      
    )
  }
}

export default App