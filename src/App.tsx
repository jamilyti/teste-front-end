
import { useState } from "react";
import type { Product } from "./assets/types/Product";
import { getProducts } from "./assets/services/productService";
import ProductList from "./assets/components/ProductList/ProductList";
import ProductModal from "./assets/components/ProductModal/ProductModal";
import "./assets/styles/global.css";

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

    const [searchTerm, setSearchTerm] = useState("");

  const products = getProducts();

  const filteredProducts = products.filter((product) =>
  `${product.productName} ${product.descriptionShort}`
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase())
);
  return (
    <main>
      <div className="benefits-bar">
        <span>✓ Compra <strong>100% segura</strong></span>
        <span>▣ Frete grátis acima de R$ 200</span>
        <span>▤ Parcele suas compras</span>
      </div>

      <header className="store-header">
        <a className="store-logo" href="#" aria-label="Econverse - início">
          <span>e</span>converse
        </a>

        <form
          className="search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="product-search">
            Buscar produtos
          </label>
          <input
  id="product-search"
  type="search"
  placeholder="O que você está buscando?"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
          <button type="submit" aria-label="Buscar">⌕</button>
        </form>

        <nav className="header-actions" aria-label="Ações da loja">
          <button type="button" aria-label="Pedidos">♧</button>
          <button type="button" aria-label="Favoritos">♡</button>
          <button type="button" aria-label="Minha conta">◎</button>
          <button type="button" aria-label="Carrinho">🛒</button>
        </nav>
      </header>

      <nav className="category-nav" aria-label="Categorias principais">
        <a href="#categorias">TODAS CATEGORIAS</a>
        <a href="#produtos">SUPERMERCADO</a>
        <a href="#produtos">LIVROS</a>
        <a href="#produtos">MODA</a>
        <a href="#produtos">LANÇAMENTOS</a>
        <a className="highlight" href="#produtos">OFERTAS DO DIA</a>
        <a href="#marcas">ASSINATURA</a>
      </nav>

      <section className="hero-banner">
        <div className="hero-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p><strong>50% Off</strong> nos produtos</p>
          <a className="yellow-button" href="#produtos">Ver produto</a>
        </div>
      </section>

      <section id="categorias" className="category-shortcuts">
        {[
          "Tecnologia",
          "Supermercado",
          "Bebidas",
          "Ferramentas",
          "Saúde",
          "Esportes e Fitness",
          "Moda",
        ].map((category) => (
          <a href="#produtos" className="category-item" key={category}>
            <span className="category-icon" aria-hidden="true">
              {category === "Tecnologia" ? "▣" :
                category === "Supermercado" ? "♧" :
                category === "Bebidas" ? "♜" :
                category === "Ferramentas" ? "⚒" :
                category === "Saúde" ? "♡" :
                category === "Esportes e Fitness" ? "♧" : "◇"}
            </span>
            <span>{category}</span>
          </a>
        ))}
      </section>

      <section id="produtos" className="products-section">
        <div className="section-title">
          <span />
          <h2>Produtos relacionados</h2>
          <span />
        </div>

        <nav className="product-tabs" aria-label="Categorias de produtos">
          <a className="active" href="#produtos">CELULAR</a>
          <a href="#produtos">ACESSÓRIOS</a>
          <a href="#produtos">TABLETS</a>
          <a href="#produtos">NOTEBOOKS</a>
          <a href="#produtos">TVS</a>
          <a href="#produtos">VER TODOS</a>
        </nav>

        <div className="product-container">
          <ProductList
  products={filteredProducts}
  onProductClick={setSelectedProduct}
/>
        </div>
      </section>

      <section className="partners-section" aria-label="Parceiros">
        {[1, 2].map((partner) => (
          <article className="partner-banner" key={partner}>
            <div className="partner-content">
              <h2>Parceiros</h2>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <a href="#marcas" className="yellow-button">
                CONFIRA
              </a>
            </div>
          </article>
        ))}
      </section>
      
      <section id="marcas" className="brands-section">
        <div className="section-title">
          <span />
          <h2>Navegue por marcas</h2>
          <span />
        </div>

        <div className="brands-list">
          {["Apple", "Samsung", "Xiaomi", "Motorola", "LG", "Sony"].map(
            (brand) => (
              <a
                href="#produtos"
                className="brand-item"
                key={brand}
                aria-label={`Ver produtos da marca ${brand}`}
              >
                {brand}
              </a>
            ),
          )}
        </div>
      </section>


      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Receba novidades e ofertas especiais diretamente no seu e-mail.</p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Cadastro recebido! Obrigado por se inscrever.");
          }}
        >
          <label className="visually-hidden" htmlFor="newsletter-email">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Digite seu melhor e-mail"
            required
          />
          <button type="submit">CADASTRAR</button>
        </form>
      </section>

      
      <footer className="store-footer">
        <div className="footer-content">
          <div className="footer-about">
            <a className="store-logo" href="#" aria-label="Econverse - início">
              <span>e</span>converse
            </a>
            <p>
              Sua vitrine de tecnologia, ofertas e novidades em um só lugar.
            </p>
          </div>

          <div className="footer-links">
            <h3>Institucional</h3>
            <a href="#categorias">Categorias</a>
            <a href="#produtos">Produtos</a>
            <a href="#marcas">Marcas</a>
          </div>

          <div className="footer-links">
            <h3>Atendimento</h3>
            <p>Confira nossos produtos e ofertas.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Econverse — Vitrine de produtos</p>
        </div>
      </footer>

    </main>
  );
}

export default App;
