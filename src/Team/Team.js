import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Player from '../Player/Player';
import playerData from '../helpers/data/playerData';
import PlayerForm from '../PlayerForm/PlayerForm';
import authData from '../helpers/data/authData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    addMode: false,
    editMode: false,
    showPlayerForm: false,
    playerToEdit: {},
  }

  componentDidMount() {
    this.getPlayers();
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayerById(playerId)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((err) => console.error(err));
  }

  setAddMode = (addMode) => {
    this.setState({ addMode, showPlayerForm: true });
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setShowForm = (showPlayerForm) => {
    this.setState({ showPlayerForm });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  showPlayerFormEvent = (e) => {
    e.preventDefault();
    this.setState({ showPlayerForm: true });
  }

  getPlayers = () => {
    const uid = authData.getUid();

    playerData.getPlayersByUid(uid)
      .then((players) => {
        this.setState({ players });
      })
      .catch((error) => console.error(error));
  }

  createPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      });
  }

  updateNewPlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="Team">
        <div className="d-flex justify-content-between">
          <h1> </h1>
          <button className="btn btn-outline" onClick={this.showPlayerFormEvent}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <div>
          {
           (this.state.showPlayerForm)
           && (<PlayerForm createPlayer={this.createPlayer} addMode={this.state.addMode} editMode={this.state.editMode} updateNewPlayer={this.updateNewPlayer} playerToEdit={this.state.playerToEdit} setShowForm={this.setShowForm} />)
          }
        </div>
        <div className="d-flex flex-row flex-wrap">
            {
              this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />))
            }
        </div>
      </div>
    );
  }
}

export default Team;
