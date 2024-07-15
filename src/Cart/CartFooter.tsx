import styles from './styles/cart.module.scss'
export default function CartFooter() {
  return (
    <div className={styles.CardFooter}>
        <div className={styles.CardFooter_sale}>
            할인 영역인가
        </div>
    </div>
  );
}
