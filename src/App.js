import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CardImg from './components/CardImg';
import './styles/App.css';
import witcher from './witcher.json'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cardList : witcher,
      currentscore: 0,
      highscore: 0
    }
    this.handleImgClick = this.handleImgClick.bind(this);
  }

  handleImgClick(){
    this.setState((prevState) => ({
      currentscore: prevState.currentscore + 1
    }))
  }


  render() {
    return (
      <div>
      <Navbar 
      currentscore={this.state.currentscore}
      highscore={this.state.highscore}
      />
      <div className="card-panel">
      {this.state.cardList.map((card) =>(
        <CardImg 
         key={card.id}
         cardText={card.name}
         name={card.name}
         onClick={this.handleImgClick}
         />
      ))}
      </div>
      </div>
    );
  }
}

export default App;
