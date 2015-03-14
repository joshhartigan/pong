const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const W = canvas.width = 500
const H = canvas.height = 500

let players = [
  { X: 10,     y: H / 2, width: 10, height: 75 },
  { X: H - 10, y: H / 2, width: 10, height: 75 }
]

function drawPlayers() {
  ctx.fillStyle = 'black'
  ctx.fillRect(players[0].X, players[0].y, players[0].width, players[0].height)
  ctx.fillRect(players[1].X, players[1].y, players[1].width, players[1].height)
}

drawPlayers()
