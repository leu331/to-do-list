import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.container}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
