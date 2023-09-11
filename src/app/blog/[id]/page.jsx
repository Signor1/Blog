import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    return {
        title: post?.title,
        description: post?.desc
    }
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}
                    </h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={`https://images.pexels.com/photos/17859453/pexels-photo-17859453/free-photo-of-women-color-light.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load`}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </section>
    )
}



export default BlogPost