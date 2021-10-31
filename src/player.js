<<<<<<< HEAD
import { DIRECTION } from "./direction";
import { MAP_SIZE } from "./map";
=======
import { DIRECTION } from "./direction"
import { MAP_SIZE } from "./map"
>>>>>>> add map boundary detection

const position = [0, 0];

export const isNotOutOfBounds = (pos, direction) => {
  switch (direction) {
    case DIRECTION.NORTH:
      return pos[1] + 1 < MAP_SIZE.Y;
    case DIRECTION.SOUTH:
      return pos[1] - 1 >= 0;
    case DIRECTION.EAST:
      return pos[0] + 1 < MAP_SIZE.X;
    case DIRECTION.WEST:
      return pos[0] - 1 >= 0;
  }
};

const isValidPosition = (newPosition) => {
  return (
    newPosition[0] >= 0 &&
    newPosition[0] < MAP_SIZE.X &&
    newPosition[1] >= 0 &&
    newPosition[1] < MAP_SIZE.Y
  )
}

export const move = (direction) => {
  let newPosition = [position[0], position[1]]
  switch (direction) {
    case DIRECTION.NORTH:
      newPosition[1] = position[1] + 1
      break
    case DIRECTION.SOUTH:
      newPosition[1] = position[1] - 1
      break
    case DIRECTION.EAST:
      newPosition[0] = position[0] + 1
      break
    case DIRECTION.WEST:
      newPosition[0] = position[0] - 1
      break
  }

  if (isValidPosition(newPosition)) {
    position[0] = newPosition[0]
    position[1] = newPosition[1]
    return true
  }

  return false
}

export const getPosition = () => {
  return position
}
