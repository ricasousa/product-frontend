import React, { Component } from 'react'
import api from '../../services/api'

class Main extends Component {
  //state ever is an Object
  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async _ => {
    const response = await api.get('/products');
    const { docs: products } = response.data;

    this.setState(
      {
        products
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <p>Produtos: {this.state.products.length}</p>
        {this.state.products.map(product => (
          <h6 key={product._id}>{product.title}</h6>
        ))}
      </div>
    )
  }
}

export default Main;