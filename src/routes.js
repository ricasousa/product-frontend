import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import ProductDetail from './pages/product-detail'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/product/:id" component={ProductDetail}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;