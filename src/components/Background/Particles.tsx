import { useCallback, useMemo } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
// import { loadFull } from "tsparticles";

const Particle = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: '#121212',
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: 'push', // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: 'repulse', // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: false, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
        number: {
          // THE MOST IMPORTANT
          value: 80, // PROPERTIES
        },
      },
    }
  }, [])
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
    // await loadFull(engine);
  }, [])

  return (
    <Particles
      id='background'
      init={particlesInit}
      options={options}
    />
  )
}

export default Particle
