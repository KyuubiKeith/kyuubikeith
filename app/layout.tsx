// ==================== Imports =====================//

'use client'

// Styling
import '../source/blerdCorps.scss'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'


// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <AnimatePresence>
        <motion.body
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 15, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.body>
      </AnimatePresence>
    </html>
  )
}

// ==================== Render =====================//

