import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import playerShape from '../helpers/props/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
    seteditMode: PropTypes.func,
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  editSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { setPlayerToEdit, player, setEditMode } = this.props;
    setPlayerToEdit(player);
    setEditMode(true);
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
            <div className="d-flex justify-content-end">
            <button className="btn btn-outline fontawesomeex" onClick={this.deleteSinglePlayerEvent}><FontAwesomeIcon icon={faTimes} size="sm" /></button>
            <button className="btn btn-outline fontawesomepen" onClick={this.editSinglePlayerEvent}><FontAwesomeIcon icon={faPen} size="xs" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
