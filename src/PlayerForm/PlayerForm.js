import React from 'react';
import PropTypes from 'prop-types';

import authData from '../helpers/data/authData';
import playerShape from '../helpers/props/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addMode: PropTypes.bool,
    editMode: PropTypes.bool,
    createPlayer: PropTypes.func,
    updateNewPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    setShowForm: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImg: '',
    playerPosition: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ playerName: playerToEdit.name, playerImg: playerToEdit.imageUrl, playerPosition: playerToEdit.position });
    }
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { createPlayer } = this.props;
    const newPlayerInfo = {
      name: this.state.playerName,
      imageUrl: this.state.playerImg,
      position: this.state.playerPosition,
      uid: authData.getUid(),
    };
    createPlayer(newPlayerInfo);
    this.setState({ playerName: '', playerImg: '', playerPosition: '' });
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updateNewPlayer, playerToEdit } = this.props;
    const updatedPlayerInfo = {
      name: this.state.playerName,
      imageUrl: this.state.playerImg,
      position: this.state.playerPosition,
      uid: playerToEdit.uid,
    };
    updateNewPlayer(playerToEdit.id, updatedPlayerInfo);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imgChange = (e) => {
    e.preventDefault();
    this.setState({ playerImg: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  closeFormEvent = (e) => {
    e.preventDefault(e);
    const { setShowForm } = this.props;
    this.setState({
      playerName: '',
      playerImg: '',
      playerPosition: '',
      addMode: false,
      editMode: false,
    });
    setShowForm(false);
  }

  render() {
    const { editMode } = this.props;

    return (
      <div className="PlayerForm">
      <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label htmlFor="order-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Position:</label>
          <input
          type="text"
          className="form-control"
          id="player-position"
          placeholder="Enter player position"
          value={this.state.playerPosition}
          onChange={this.positionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Image:</label>
          <input
          type="text"
          className="form-control"
          id="player-image"
          placeholder="Enter player image url"
          value={this.state.playerImg}
          onChange={this.imgChange}
          />
        </div>
        {
          (editMode)
            ? (<button className="btn btn-outline-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
            : (<button className="btn btn-outline-warning" onClick={this.savePlayerEvent}>Add Player</button>)
        }
        <button className="btn btn-outline-dark" onClick={this.closeFormEvent}>Close</button>
      </form>
    </div>
    );
  }
}

export default PlayerForm;
