'use client'
import { fadeUpAnimation } from '@/data/animation'
import { motion, useReducedMotion } from 'framer-motion'
import PropTypes from 'prop-types'

const FadeUpAnimation = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={fadeUpAnimation} initial="initial" animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

FadeUpAnimation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FadeUpAnimation
