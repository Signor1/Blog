"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import styles from "./page.module.css"

const Dashboard = () => {
    const session = useSession();
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;


        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title, desc, img, content, username: session.data.user.name
                })
            });
            mutate()
            e.target.reset()
        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE"
            });
            mutate()
        } catch (error) {
            console.log(error)
        }
    }



    if (session.status === 'loading') {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login')
    }



    if (session.status === 'authenticated') {
        return <div className={styles.container}>
            <div className={styles.posts}>
                {
                    isLoading ?
                        <p>Loading...</p> :
                        data.map((post) => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imgContainer}>
                                    <Image src={post.img} alt='postImage' width={200} height={200} />
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
                            </div>
                        ))
                }
            </div>
            <form className={styles.new} onSubmit={handleSubmit}>
                <h2>Add New Post</h2>
                <input type="text" placeholder='Title' className={styles.input} />
                <input type="text" placeholder='Description' className={styles.input} />
                <input type="text" placeholder='Image Url' className={styles.input} />
                <textarea placeholder='Content' className={styles.textArea} cols="30" rows="10"></textarea>
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    }
}


export default Dashboard