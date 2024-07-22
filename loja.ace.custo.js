class ProductCard extends HTMLElement {
    constructor() {
        super();
       
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .product-card {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 10px;
                    background-color: #fff;
                    max-width: 200px;
                    margin: 10px;
                }

                .product-card img {
                    width: 100%;
                    height: auto;
                }

                .product-card .title {
                    font-size: 1.1rem;
                    font-weight: bold;
                    margin: 10px 0;
                }

                .product-card .rating {
                    color: #ff9800;
                    margin: 5px 0;
                }

                .product-card .price {
                    margin: 10px 0;
                }

                .product-card .original-price {
                    text-decoration: line-through;
                    color: #999;
                }

                .product-card .discounted-price {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #e53935;
                }

                .product-card .installments {
                    color: #555;
                    margin-top: 10px;
                }

                .product-card .buy-button {
                    margin-top: 10px;
                    padding: 10px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                }

                .product-card .buy-button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="product-card">
                <img id="product-image" src="" alt="">
                <div class="title" id="product-title"></div>
                <div class="rating" id="product-rating"></div>
                <div class="price">
                    <span class="original-price" id="product-original-price"></span>
                    <div class="discounted-price" id="product-discounted-price"></div>
                </div>
                <div class="installments" id="product-installments"></div>
                <button class="buy-button">Comprar</button>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.getElementById('product-image').src = this.getAttribute('img-src');
        this.shadowRoot.getElementById('product-image').alt = this.getAttribute('alt');
        this.shadowRoot.getElementById('product-title').textContent = this.getAttribute('title');
        this.shadowRoot.getElementById('product-rating').textContent = '⭐'.repeat(Number(this.getAttribute('rating')));
        this.shadowRoot.getElementById('product-original-price').textContent = this.getAttribute('original-price');
        this.shadowRoot.getElementById('product-discounted-price').textContent = this.getAttribute('discounted-price');
        this.shadowRoot.getElementById('product-installments').textContent = this.getAttribute('installments');
    }
}

customElements.define('product-card', ProductCard);
