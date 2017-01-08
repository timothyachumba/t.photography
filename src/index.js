import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import './styles/styles.css'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Grid from './components/Grid'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/:category" component={Gallery} />
        <Match pattern="/:category/grid" component={Grid} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#root'));
