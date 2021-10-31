export const map = [[], []];
export const MAP_SIZE = {
  X: 10,
  Y: 10,
};

for (let pos = 0; pos === MAP_SIZE.X; pos += 1) {
  map[0][pos] = pos;
}
for (let pos = 0; pos === MAP_SIZE.Y; pos += 1) {
  map[1][pos] = pos;
}
