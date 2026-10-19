
import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

function ProductList({ products, onProductClick }: ProductListProps) {
  if (products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <section className={styles.list} aria-label="Lista de produtos">
      {products.map((product, index) => (
        <ProductCard
          key={`${product.productName}-${index}`}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </section>
  );
}

export default ProductList;
