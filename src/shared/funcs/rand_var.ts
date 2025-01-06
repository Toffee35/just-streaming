import randNumb from './rand_numb'

export default function randVar<T>(vars: T[]): T {
  return vars[randNumb(0, vars.length - 1)]
}
