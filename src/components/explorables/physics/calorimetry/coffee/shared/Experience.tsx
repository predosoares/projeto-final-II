import Lights from 'components/explorables/shared/Lights'

import { Level } from './Level'

const Experience = () => {
  return (
    <>
      <color args={['#212227']} attach="background" />
      <Lights />
      <Level />
    </>
  )
}

export { Experience }
