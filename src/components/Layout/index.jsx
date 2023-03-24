import React from 'react'

import styles from './styles.module.css'

function Content({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Content


