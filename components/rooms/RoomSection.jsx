import React, {Component} from 'react';
import RoomForm from './RoomForm.jsx';
import RoomList from './RoomList.jsx';

class RoomSection extends Component{
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Rooms</strong>
        </div>
        <div className='panel-body rooms'>
          <RoomList {...this.props} />
          <RoomForm {...this.props} />
        </div>
      </div>
      
    )
  }
}

RoomSection.propTypes = {
  rooms: React.PropTypes.array.isRequired,
  setRoom: React.PropTypes.func.isRequired,
  addRoom: React.PropTypes.func.isRequired,
  activeRoom: React.PropTypes.object.isRequired
}

export default RoomSection