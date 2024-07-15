import styles from './styles/cart.module.scss'
export default function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
            
        </div>
        <div className={styles.card_product}>
            <div className={styles.card_product_name}>
                상품 이름
            </div>
            <div className={styles.card_product_option}>
                옵션이 엄청 길어지면 어떡하지
                옵션이 엄청 길어지면 어떡하지
                옵션이 엄청 길어지면 어떡하지
            </div>
            <div className={styles.card_product_price}>
                가격
            </div>
        </div>
        <div className={styles.card_quantity}>
            수량
        </div>
    </div>
  );
}
