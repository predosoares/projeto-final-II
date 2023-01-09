// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

export const distance = (x1: number, y1: number, x2: number, y2: number) => {
  const a = x1 - x2
  const b = y1 - y2

  return Math.hypot(a, b)
}
