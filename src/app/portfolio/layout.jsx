import React from 'react'
import styles from "./page.module.css"

const layout = ({ children }) => {
    return (
        <main>
            <h1 className={styles.mainTitle}>Our work</h1>
            {children}
        </main>
    )
}

export default layout