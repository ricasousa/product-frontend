import React, { Component } from "react";
import api from '../../services/api'
import LinkButton from '../../components/link-button';

import './styles.css';

class ProductDetail extends Component {
  state = {
    product: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);

    this.setState(
      {
        product: response.data
      }
    )
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-container">
        <div className="product-detail">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>

        <LinkButton href="/">Voltar</LinkButton>

      </div>
    )
  }
}

export default ProductDetail