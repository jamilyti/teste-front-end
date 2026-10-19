
import type { Product } from "../../types/Product";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <img
          src={product.photo}
          alt={product.productName}
          className={styles.image}
        />

        <h2 id="product-modal-title">{product.productName}</h2>

        <p className={styles.description}>
          {product.descriptionShort}
        </p>

        <p className={styles.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </section>
    </div>
  );
}

export default ProductModal;
