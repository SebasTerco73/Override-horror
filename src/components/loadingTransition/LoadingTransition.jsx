import { motion } from "framer-motion"
import witch from '../../assets/img/bruja.png'
import './LoadingTransition.css'

function LoadingTransition() {

  return (

    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >

      <div className="moon"></div>

      <img
        src={witch}
        alt="Witch"
        className="witch"
      />

      <h2>ACCEDIENDO</h2>

    </motion.div>
  )
}

export default LoadingTransition