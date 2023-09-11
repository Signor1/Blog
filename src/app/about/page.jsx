import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='' className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h3 className={styles.imgDesc}>Hand crafting award winning digital experience</h3>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.desc}>Fugiat do ea voluptate eu eu aliqua nisi nisi veniam tempor do. Commodo mollit irure ullamco incididunt in consectetur reprehenderit. Laboris culpa enim et aliqua.
                        <br />
                        Magna fugiat do dolor esse ad id quis exercitation. Incididunt culpa ea elit laboris do sint exercitation dolore duis ullamco aliquip elit quis do. Enim quis dolor reprehenderit aliqua occaecat consectetur.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who we do?</h1>
                    <p className={styles.desc}>Est reprehenderit non aute anim anim qui Lorem est ut non consectetur tempor eu. In ea aute velit aliquip aute aliquip dolore mollit. Minim pariatur sint ex et voluptate Lorem cillum. Nulla minim ullamco aliquip labore irure culpa incididunt esse veniam.
                        <br />
                    </p>
                    <ul className={styles.list}>
                        <li>- Dynamic Websites</li>
                        <li>- Fast and Handy</li>
                        <li>- Mobile Apps</li>
                    </ul>
                    <Button url="/contact" text={`Contact`} />
                </div>
            </div>
        </section>
    )
}

export default About