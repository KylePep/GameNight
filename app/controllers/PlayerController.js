import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayerService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// using an underscore because it is private
function _drawPlayers() {

  let players = AppState.players

  let template = ''
  players.forEach(player => template += player.PlayerTemplateCard)

  setHTML('players', template)

}

export class PlayerController {
  constructor() {
    console.log("gurgahrmph")
    console.log(`From the Player Controller ${AppState.players} I found this name ${AppState.players[1].name}`)
    _drawPlayers()
  }

  increaseScore(name) {
    console.log('++')
    playerService.increaseScore(name)
    _drawPlayers()
  }
  decreaseScore(name) {
    console.log('--')
    playerService.decreaseScore(name)
    _drawPlayers()
  }

  addPlayer(event) {
    event.preventDefault()
    const form = event.target

    const formData = getFormData(form)
    console.log(formData)

    playerService.addPlayer(formData)

    form.reset()
    _drawPlayers()
  }
  //test() {
  //   Pop.success('test from the PlayerController sent from test button')
  // }
}