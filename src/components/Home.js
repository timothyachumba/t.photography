import React from 'react'
import Header from './Header'
import Categories from './Categories'

class Home extends React.Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <Categories/>

      </div>
    )
  }
}

export default Home;
