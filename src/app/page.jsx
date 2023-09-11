import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png"
import Button from "@/components/button/Button";

export default function Home() {
  return (<main className={styles.container}>
    <aside className={styles.item}>
      <h1 className={styles.title}>Better Design for your digital products</h1>
      <p className={styles.desc}>Turning Idea into reality. we bring together teams from the gloabl tech industry</p>
      <Button url="/portfolio" text={`See Our Works`} />
    </aside>
    <aside className={styles.item}>
      <Image src={Hero} alt="Image" className={styles.img} />
    </aside>
  </main>);
}
