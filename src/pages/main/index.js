import React, { Component } from 'react'
import api from '../../services/api'

import { Link } from "react-router-dom";

import './styles.css';

class Main extends Component {
  //state ever is an Object
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadProducts();
  }

  // Functions must be arrow functions
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs: products, ...productInfo } = response.data;

    this.setState(
      {
        products,
        productInfo,
        page
      }
    )
  }

  prevPage = _ => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nextPage = _ => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        <h1>Products - Qty: {products.length}</h1>
        <br /><br />
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            {/* <a href="/product">Acessar</a> */}
            <Link to={`product/${product._id}`}>Acessar</Link>
          </article>
        ))}

        <div className="actions">
          <button
            disabled={page === 1}
            onClick={this.prevPage}>
            Anterior
          </button>
          <button
            disabled={page === productInfo.pages}
            onClick={this.nextPage}>
            Próximo
          </button>
        </div>
      </div>
    );
  }
}

export default Main;