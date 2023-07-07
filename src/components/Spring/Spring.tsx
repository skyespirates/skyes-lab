import { animated, useSpring, easings } from '@react-spring/web'

const Spring = () => {
  const spring1 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  const spring2 = useSpring({
    from: {
      x: '-96',
    },
    to: {
      x: '0px',
    },
  })
  const spring3 = useSpring({
    from: {
      y: '-96',
    },
    to: {
      y: '0px',
    },
  })
  const spring4 = useSpring({
    from: {
      rotate: '0deg',
    },
    to: {
      rotate: '360deg',
    },
    loop: true,
    config: {
      duration: 2000,
      easing: easings.easeInOutQuart,
    },
  })
  return (
    <div className='h-screen bg-gray-400 flex justify-center items-center'>
      <animated.div
        style={spring1}
        className='w-24 h-24 rounded-full bg-blue-400'
      ></animated.div>
      <animated.div
        style={spring2}
        className='w-24 h-24 rounded-full bg-blue-400'
      ></animated.div>
      <animated.div
        style={spring3}
        className='w-24 h-24 rounded-full bg-blue-400'
      ></animated.div>
      <animated.div
        style={spring4}
        className='w-24 h-24 bg-blue-400'
      ></animated.div>
    </div>
  )
}

export default Spring
