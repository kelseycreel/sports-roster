import React from 'react';

import playerData from '../helpers/data/playerData';

class Team extends React.Component {
  render() {
    const players = playerData.getPlayers();
    return (
      <div className="Team">
        {/* Player cards */}
        Team
      </div>
    );
  }
}

export default Team;
