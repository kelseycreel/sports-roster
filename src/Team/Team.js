import React from 'react';

import Player from '../Player/Player';
import playerData from '../helpers/data/playerData';
import authData from '../helpers/data/authData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    const uid = authData.getUid();

    playerData.getPlayersByUid(uid)
      .then((players) => {
        this.setState({ players });
      })
      .catch((error) => console.error(error));
  }


  render() {
    return (
      <div className="Team d-flex flex-row flex-wrap">
        {this.state.players.map((player) => (<Player key={player.id} player={player} />))}
      </div>
    );
  }
}

export default Team;
