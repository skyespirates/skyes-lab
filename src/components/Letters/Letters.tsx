import { motion } from 'framer-motion'

const height = {
  minHeight: 'calc(100vh - 60px)',
}
const Letters = () => {
  return (
    <div
      style={height}
      className='bg-slate-700 flex justify-center items-center text-8xl'
    >
      {['S', 'K', 'Y', 'E', 'S'].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: i * 0.2,
            ease: 'easeIn',
          }}
          className='w-40 h-40 rounded-full bg-slate-100 flex justify-center items-center'
        >
          <motion.div
            initial={{ y: i % 2 === 0 ? '-160px' : '160px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: i * 0.8 + 1 }}
          >
            {item}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default Letters

/*

step to add page
1. create page through components folder
2. add link in Sidebar components
3. add routes for pages in main.tsx

*/
