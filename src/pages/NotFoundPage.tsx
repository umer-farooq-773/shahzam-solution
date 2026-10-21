import { motion, useReducedMotion } from 'framer-motion'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons'
import { useSeo } from '@/lib/useSeo'

export default function NotFoundPage() {
  useSeo('Page not found', 'The page you are looking for does not exist.')
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <section className="grid min-h-[80dvh] place-items-center px-5 pt-24 text-center">
        <div>
          <p className="font-display text-8xl font-extrabold text-gold-gradient sm:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-extrabold">This page could not be found</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The link may be broken, or the page may have moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/" arrow>
              Back to home
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Contact us
            </SecondaryButton>
          </div>
        </div>
      </section>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section className="grid min-h-[80dvh] place-items-center px-5 pt-24 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="font-display text-8xl font-extrabold text-gold-gradient sm:text-9xl">404</p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="mt-4 text-3xl font-extrabold">This page could not be found</h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The link may be broken, or the page may have moved. Let&apos;s get you back on track.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/" arrow>
              Back to home
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Contact us
            </SecondaryButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
