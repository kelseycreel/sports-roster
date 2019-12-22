import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
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

const deletePlayerById = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const savePlayer = (newPlayer) => axios.post(`${baseUrl}/players.json`, newPlayer);

export default { getPlayersByUid, deletePlayerById, savePlayer };
