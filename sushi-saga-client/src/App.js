import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    data: [],
    pos: 0,
    budget: 80
  }

  updatePosition = () => {
    this.setState({pos: this.state.pos+4})
  }

  eatSushi = (clickedSushi) => {
    const newBudget = this.state.budget - clickedSushi.price
    if (newBudget >= 0) {
      const editedData = this.state.data.map(sushi => {
        if (sushi.id === clickedSushi.id) {
          sushi.eaten = true
          return sushi
        } else {
          return sushi
        }
      })
      this.setState({budget: newBudget})
      this.setState({data: editedData})
    }
  }

  addEatenFlag = () => {
    const edited = this.state.data.map(sushi => {return {...sushi, eaten:false}})
    this.setState({data: edited})
  }

  getEaten = () => {
    return this.state.data.filter(sushi => sushi.eaten)
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({data: data}, this.addEatenFlag))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          data={this.state.data} 
          pos={this.state.pos}
          updatePosition={this.updatePosition} 
          eatSushi={this.eatSushi}
        />
        <Table eaten={this.getEaten()} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;