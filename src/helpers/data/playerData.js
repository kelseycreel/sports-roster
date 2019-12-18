import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json`)
    .then((response) => {
      const allPlayers = response.data;
      const players = [];
      if (allPlayers != null) {
        Object.keys(allPlayers).forEach((fbId) => {
          const newPlayer = allPlayers[fbId];
          newPlayer.id = fbId;
          players.push(newPlayer);
        });
      }
      resolve(players);
    })
    .catch((error) => reject(error));
});

export default { getPlayers };
