
import type { Product } from "../../types/Product";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.productButton}
        onClick={onClick}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt={product.productName}
          className={styles.image}
        />

        <h2 className={styles.name}>{product.productName}</h2>

        <p className={styles.description}>
          {product.descriptionShort}
        </p>

        <p className={styles.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

      <span className={styles.details}>VER DETALHES</span>
      </button>
    </article>
  );
}

export default ProductCard;
