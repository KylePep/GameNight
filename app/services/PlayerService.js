import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";


class PlayerService {

  increaseScore(name) {
    const player = AppState.players
    let addToPlayer = player.find(playerName => playerName.name == name)
    console.log(addToPlayer);
    console.log('++', name, addToPlayer)
    addToPlayer.score++
  }
  decreaseScore(name) {
    const player = AppState.players
    let subtractToPlayer = player.find(playerName => playerName.name == name)
    console.log('--', name, subtractToPlayer)
    subtractToPlayer.score--
  }

  addPlayer(formData) {
    const newPlayer = new Player(formData.name)

    AppState.players.push(newPlayer)
    console.log(AppState.players)
  }

}

export const playerService = new PlayerService()