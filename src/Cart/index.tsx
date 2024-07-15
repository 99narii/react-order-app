import styles from './styles/cart.module.scss'
import Card from './Card';
import RecommendCard from './RecommendCard';
import CartFooter from './CartFooter';
export default function Cart() {
    const cards = Array.from({ length: 3 }, (_, index) => <Card key={index} />);

  return (
    <div className={styles.cart}>
        <div className={styles.cart_status}>
            주문 상태
        </div>
        <div className={styles.cart_list}>
        {cards}
            <div className={styles.cart_list_add}>
                추가
            </div>
        </div>
        <div className={styles.cart_recommend}>
            추천상품
            <span>
                <RecommendCard />
            </span>
            <button type='button' className={styles.cart_recommend_btn}> 더보기</button>
            <span className={styles.cart_recommend_add}>추가금액</span>
        </div>
        <div className={styles.cart_price}>
                금액
        </div>
        <div className={styles.cart_footer}>
            <CartFooter/>
        </div>
    </div>
  );
}
