import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'


const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)

    return (
        <section className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {
                data.map(item => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.desc}>{item.desc}</p>
                            <Button text={`See More`} url="#" />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src={item.image} alt='Photo' fill={true} />
                        </div>
                    </div>
                ))
            }



        </section>
    )
}

export default Category