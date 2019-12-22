import React from 'react';
import PropTypes from 'prop-types';

import authData from '../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropTypes.func,
    addMode: PropTypes.bool,
  }

  state = {
    playerName: '',
    playerImg: '',
    playerPosition: '',
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

  render() {
    const { addMode } = this.props;

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
          (addMode)
            ? (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
            : (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Add Player</button>)
        }
      </form>
    </div>
    );
  }
}

export default PlayerForm;
