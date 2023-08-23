import styles from './Cardapio.module.scss';
import Logo from 'assets/logo.svg';

export default function Cardapio(){
    return(
    <main>
        <nav className={styles.menu}>
            <img src={Logo} alt="Logo do Restaurante" />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
             A casa do código e da massa!
            </div>
        </header>      
        <section>
            <h3>Cardapio</h3>
        </section>
    </main>
    );
} 