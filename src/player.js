import { DIRECTION } from "./direction";
import { MAP_SIZE } from "./map";

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

export const move = (direction) => {
  switch (direction) {
    case DIRECTION.NORTH:
      position[1] = position[1] + 1;
      break;
    case DIRECTION.SOUTH:
      position[1] = position[1] - 1;
      break;
    case DIRECTION.EAST:
      position[0] = position[0] + 1;
      break;
    case DIRECTION.WEST:
      position[0] = position[0] - 1;
      break;
  }
};

export const getPosition = () => {
  return position;
};
