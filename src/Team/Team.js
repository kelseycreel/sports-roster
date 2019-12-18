import React from 'react';

import Player from '../Player/Player';
import playerData from '../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayers()
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
