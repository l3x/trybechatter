import React, {Component} from 'react';

class RoomForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.room;
    const roomName = node.value;
    this.props.addRoom(roomName);
    node.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            placeholder='Add Room'
            type='text'
            ref='room'
          />
        </div>
        
      </form>
    )
  }
}

RoomForm.propTypes = {
  addRoom: React.PropTypes.func.isRequired
}


export default RoomForm