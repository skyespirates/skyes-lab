import Balancer, { Provider } from 'react-wrap-balancer'
import Particle from './Particle'
const Hero = () => {
  return (
    <div>
      <Provider>
        <div className='h-screen relative text-center bg-[#121212] flex justify-center items-center'>
          <Particle className='absolute inset-0' />
          <h1 className='text-8xl text-gray-300 font-extrabold relative z-10'>
            <Balancer>LEGEND NEVER DIE</Balancer>
          </h1>
        </div>
      </Provider>
    </div>
  )
}

export default Hero
