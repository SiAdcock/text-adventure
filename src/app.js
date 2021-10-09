
const NORTH = 'North'
const SOUTH = 'South'
const EAST = 'East'
const WEST = 'West'

const go = (direction) => {
    console.log(`Going ${direction}`)

    const consoleEl = document.getElementById('console')
    const consoleOutputEl = document.createElement('p')

    consoleOutputEl.innerText = `Going ${direction}`

    consoleEl.appendChild(consoleOutputEl)
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW': go(NORTH)
        break;
        case 'KeyS': go(SOUTH)
        break;
        case 'KeyD': go(EAST)
        break;
        case 'KeyA': go(WEST)
        break;
    }
})
