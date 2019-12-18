import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import playerShape from '../helpers/props/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player">
        <div className="card">
          <img src={player.imageUrl} className="card-img-top" alt="player" />
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn btn-outline" onClick={this.deleteSinglePlayerEvent}><FontAwesomeIcon icon={faTimes} size="xs" /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
