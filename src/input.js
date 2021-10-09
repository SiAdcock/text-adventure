import {getPosition, move} from './player'
import { DIRECTION } from './direction'

const CODE = {
    NORTH: 'KeyW',
    SOUTH: 'KeyS',
    EAST: 'KeyD',
    WEST: 'KeyA',
}

const go = (direction) => {
    const consoleEl = document.getElementById('console')
    const consoleOutputEl = document.createElement('p')
    const position = getPosition()

    move(direction)
    consoleOutputEl.innerText = `Going ${direction}, new position is [${position[0]}, ${position[1]}]`

    consoleEl.appendChild(consoleOutputEl)
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

export const addEventListeners = () => {    
    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case CODE.NORTH: go(DIRECTION.NORTH)
            break;
            case CODE.SOUTH: go(DIRECTION.SOUTH)
            break;
            case CODE.EAST: go(DIRECTION.EAST)
            break;
            case CODE.WEST: go(DIRECTION.WEST)
            break;
        }
    })
}
