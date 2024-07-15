import styles from './styles/cart.module.scss'
export default function RecommendCard() {
  return (
    <div className={styles.recommendcard}>
        <div className={styles.recommendcard_img}>
            이미지
        </div>
        <div className={styles.recommendcard_product}>
            <div className={styles.recommendcard_product_name}>
                추천 카드
            </div>
            <div className={styles.recommendcard_product_price}>
                가격
            </div>
        </div>
        <div className={styles.recommendcard_add}>
            수량
        </div>
    </div>
  );
}
