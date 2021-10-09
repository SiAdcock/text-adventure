import { DIRECTION } from './direction'

const map = [[], []]
const MAP_SIZE = {
    X: 10,
    Y: 10
}

for (let pos = 0; pos === MAP_SIZE.X; pos += 1) {
    map[0][pos] = pos
}
for (let pos = 0; pos === MAP_SIZE.Y; pos += 1) {
    map[1][pos] = pos
}

const position = [0, 0]

export const move = (direction) => {
    switch (direction) {
        case DIRECTION.NORTH: position[1] = position[1] + 1
        break;
        case DIRECTION.SOUTH: position[1] = position[1] - 1
        break;
        case DIRECTION.EAST: position[0] = position[0] + 1
        break;
        case DIRECTION.WEST: position[0] = position[0] - 1
        break;
    }
}

export const getPosition = () => {
    return position;
}
