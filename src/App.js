import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <section className="center-content">
        <HelloWorld />
        <Slider />
      </section>
    )
  }
}

export default App
