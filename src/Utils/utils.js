export function createCells() {
  const size = 15;
  const cell = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      cell.push({ row: row, col: col });
    }
  }
  return cell;
}
