import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>&copy;2023 Signor. All Rights Reserved.</p>
            <div className={styles.social}>
                <Image src={`/1.png`} width={15} height={15} alt='Facebook icon' />
                <Image src={`/2.png`} width={15} height={15} alt='Facebook icon' />
                <Image src={`/3.png`} width={15} height={15} alt='Facebook icon' />
                <Image src={`/4.png`} width={15} height={15} alt='Facebook icon' />
            </div>
        </footer>
    )
}

export default Footer