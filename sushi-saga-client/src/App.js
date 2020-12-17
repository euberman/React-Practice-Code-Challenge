import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushiCollection: [],
    eatenSushi: [],
    cash: 75,
    currentPage: 1,
    chunkSize: 4,
    pageList: [],
    numOfPages: 0
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        const sCollection = []
        sushis.map(sushi => {
          sushi.eaten = false
          sCollection.push(sushi)
        })
        console.log('sCollection:', sCollection)
        this.setState({sushiCollection: sCollection})
        let sCount = sCollection.count
        let sChunk = 4
        let numberOfPages = Math.ceil(100 / 4);
        this.setState({numOfPages: numberOfPages})
        this.loadPageList()
      })
      
  }
  
  eatSushi = (sushi) => {
    sushi.eaten = true
    let money = this.state.cash - sushi.price
    //const sCollection = this.state.sushiCollection.filter(s => sushi.id !== s.id)
    const updatedEatenSushi = [...this.state.eatenSushi, sushi]
    this.setState({eatenSushi: updatedEatenSushi})
    this.setState({cash: money})
  }

  handleMoreBtnClick = () => {
    let cPage = this.state.currentPage + 1
    this.setState({currentPage: cPage})
    this.loadPageList()
  }

  loadPageList = () => {
    let begin = ((this.state.currentPage - 1) * this.state.chunkSize);
    let end = begin + this.state.chunkSize;

    let pageList = this.state.sushiCollection.slice(begin, end);
    console.log('pageList', pageList)
    return this.setState({pageList: pageList})
  }

  // array_chunks = (array, chunk_size) => { 
  //    return Array(Math.ceil(array.length / chunk_size))
  //           .fill()
  //           .map((_, index) => index * chunk_size)
  //           .map(begin => array.slice(begin, begin + chunk_size));
  // }

  render() {
    return (
      <div className="app">
        <SushiContainer 
            handleMoreBtnClick={this.handleMoreBtnClick}
            eatSushi={this.eatSushi} 
            sushiCollection={this.state.pageList} />
        <Table 
            cash={this.state.cash}
            eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;