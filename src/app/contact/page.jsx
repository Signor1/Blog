import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: "Signor Dev Contact Page",
    description: "This is the contact Page of the  NextJS Tutorials",
};

const Contact = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Let&apos;s keep in touch</h1>
            <div className={styles.content}>
                <aside className={styles.imgContainer}>
                    <Image src="/contact.png" alt='' fill={true} className={styles.img} />
                </aside>
                <form action="" className={styles.form} >
                    <input type="text" placeholder='Name' className={styles.input} />
                    <input type="email" placeholder='Email' className={styles.input} />
                    <textarea className={styles.textArea} placeholder='Message...' cols="30" rows="10"></textarea>
                    <Button url="#" text={`Send`} />
                </form>
            </div>
        </section>
    )
}

export default Contact