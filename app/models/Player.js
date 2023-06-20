export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    console.log(`constructor from the Players model: ${this.name}`)
  }

  get PlayerDetails() {
    let details = `Hello, my name is ${this.name} and my score is ${this.score}`
    return details
  }

  get PlayerTemplateCard() {
    return /*html*/`
    <div class="card">
      <div class="card-body">
        ${this.name} - ${this.score}
      </div>
      <button onclick= "app.PlayerController.increaseScore('${this.name}')">Score +</button>
      <button onclick= "app.PlayerController.decreaseScore('${this.name}')">Score -</button>
    </div>`
  }
}