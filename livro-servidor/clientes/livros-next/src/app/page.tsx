import "bootstrap/dist/css/bootstrap.css"
import styles from "./page.module.css"
import {Menu} from "../../componentes/Menu"

export default function Home() {
    return (
        <>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1>
            </main>
        </>
    )
}
