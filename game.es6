const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const W = canvas.width = 500
const H = canvas.height = 500

let players = [
  { X: 10,     y: H / 2, width: 10, height: 75 },
  { X: H - 10, y: H / 2, width: 10, height: 75 }
]

let ball = {}
ball.x = W / 2
ball.y = H / 2
ball.xvel = 3
ball.yvel = 0
ball.width = 10
ball.height = 10

// clear screen
function clear () {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, W, H)
}

// game loop
function tick () {
  clear()
  drawPlayers()
  moveBall()
  drawBall()
  requestAnimationFrame(tick)
}

tick()

function movePlayers (event) {
  // 'q' key
  if (event.keyCode === 113) {
    players[0].y -= 10
  }

  // 'a' key
  if (event.keyCode ===  97) {
    players[0].y += 10
  }

  // 'w' key
  if (event.keyCode === 119) {
    players[1].y -= 10
  }

  // 's' key
  if (event.keyCode === 115) {
    players[1].y += 10
  }
}

window.onkeypress = movePlayers

function drawPlayers () {
  ctx.fillStyle = 'black'
  ctx.fillRect(players[0].X, players[0].y, players[0].width, players[0].height)
  ctx.fillRect(players[1].X, players[1].y, players[1].width, players[1].height)
}

function moveBall () {
  ball.x += ball.xvel
  ball.y += ball.yvel
}

function drawBall () {
  collideBall()
  ctx.fillStyle = 'black'
  ctx.fillRect(ball.x, ball.y, 10, 10)
}

function collideBall () {
  let collisionWith0 = ball.x <= players[0].X + players[0].width &&
                       ball.y >= players[0].y &&
                       ball.y <= players[0].y + players[0].height

  let collisionWith1 = ball.x >= players[1].X &&
                       ball.y >= players[1].y &&
                       ball.y <= players[1].y + players[1].height

  if (collisionWith0) {
    ball.xvel = ball.xvel = ball.xvel * -1 - 0.1
  }

  if (collisionWith1) {
    ball.xvel = ball.xvel * -1 + 0.1
  }
}
