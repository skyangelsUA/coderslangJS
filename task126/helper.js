export const allTheSame = (x, y, z) => {
  if ( x === y && y === z && z === x || x != y && y != z && z != x ) {
    return true
  } else {
    return false
  }
}