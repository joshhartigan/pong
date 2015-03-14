const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const W = canvas.width = 500
const H = canvas.height = 500

let players = [
  { X: 10,     y: H / 2, width: 10, height: 75 },
  { X: H - 10, y: H / 2, width: 10, height: 75 }
]

let ball = { x: W / 2, y: H / 2,
             xVel: 5, yVel: 0,
             width: 10, height: 10 }

// clear screen
function clear () {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, W, H)
}

// game loop
function tick () {
  drawPlayers()
  drawBall()
  requestAnimationFrame(tick)
}

tick()

function movePlayers (event) {
  // 'q' key
  if (event.keyCode === 113) {
    clear(); players[0].y -= 10
  }

  // 'a' key
  if (event.keyCode ===  97) {
    clear(); players[0].y += 10
  }

  // 'w' key
  if (event.keyCode === 119) {
    clear(); players[1].y -= 10
  }

  // 's' key
  if (event.keyCode === 115) {
    clear(); players[1].y += 10
  }
}

function drawPlayers () {
  ctx.fillStyle = 'black'
  ctx.fillRect(players[0].X, players[0].y, players[0].width, players[0].height)
  ctx.fillRect(players[1].X, players[1].y, players[1].width, players[1].height)
}

function moveBall () {

}

function drawBall () {
  ctx.fillStyle = 'black'
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height)
}

window.onkeypress = movePlayers
