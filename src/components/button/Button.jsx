import Link from "next/link"
import styles from "./Button.module.css"

const Button = ({ text, url }) => {
    return (
        <Link href={url} >
            <button type="button" className={styles.btn}>{text}</button>
        </Link>
    )
}

export default Button