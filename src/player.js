import { DIRECTION } from './direction'

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
