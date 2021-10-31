import { getPosition, move } from "./player"
import { DIRECTION } from "./direction"
import { openDebugger } from "./debug"

const CODE = {
  NORTH: "KeyW",
  SOUTH: "KeyS",
  EAST: "KeyD",
  WEST: "KeyA",
  DEBUG: "KeyB",
}

const go = (direction) => {
  const consoleEl = document.getElementById("console")
  const consoleOutputEl = document.createElement("p")
  const position = getPosition()
  const hasMoved = move(direction)

  if (hasMoved) {
    consoleOutputEl.innerText = `Going ${direction}, new position is [${position[0]}, ${position[1]}]`
  } else {
    consoleOutputEl.innerText = `Unable to move ${direction}`
  }

  consoleEl.appendChild(consoleOutputEl)
  consoleEl.scrollTop = consoleEl.scrollHeight
}

export const addEventListeners = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case CODE.NORTH:
        go(DIRECTION.NORTH)
        break
      case CODE.SOUTH:
        go(DIRECTION.SOUTH)
        break
      case CODE.EAST:
        go(DIRECTION.EAST)
        break
      case CODE.WEST:
        go(DIRECTION.WEST)
        break
      case CODE.DEBUG:
        openDebugger()
        break
    }
  })
}
