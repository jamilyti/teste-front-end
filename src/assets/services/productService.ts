
import type { Product } from "../types/Product";

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/products.json");

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error("O arquivo de produtos retornou um erro.");
  }

  return data.products;
}
