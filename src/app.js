const DIRECTION = {
    NORTH: 'North',
    SOUTH: 'South',
    EAST: 'East',
    WEST: 'West',
}
const CODE = {
    NORTH: 'KeyW',
    SOUTH: 'KeyS',
    EAST: 'KeyD',
    WEST: 'KeyA',
}

const go = (direction) => {
    const consoleEl = document.getElementById('console')
    const consoleOutputEl = document.createElement('p')

    consoleOutputEl.innerText = `Going ${direction}`

    consoleEl.appendChild(consoleOutputEl)
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

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
