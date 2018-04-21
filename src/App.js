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
      highscore: 11,
      log: ""
    }
    this.handleImgClick = this.handleImgClick.bind(this);
  }

   //Fischer-Yates shuffle algorithm  -- https://bost.ocks.org/mike/shuffle/
   shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  gameReset(){
    this.setState(() => ({
      currentscore: 0,
      cardList: this.shuffle(this.state.cardList)
    }))
  }

  handleImgClick(cardid){
    const newWitcher = this.state.cardList.map(item =>{
      if(item.id === cardid){
        if(item.clicked === false){
          if(this.state.currentscore < this.state.highscore){
            this.setState((prevState) => ({
             currentscore: prevState.currentscore + 1,
             log:" -- You got it right! Keep going!"
            }))}
            return { ...item, clicked: true}
           }else{
             this.gameReset();
             this.setState(() => ({
               log:" -- You Lose! Try Again!"
             }))
             return { ...item, clicked: false}
        }
      }
      return item
    })
    this.setState(()=> ({
      cardList: this.shuffle(newWitcher)
    }))
    if(this.state.currentscore === this.state.highscore){
      this.setState(()=> ({
        currentscore: 0,
        cardList: this.shuffle(this.state.cardList),
        log:" -- You Win!"
      }))
    }
  }


  render() {
    return (
      <div>
      <Navbar 
      currentscore={this.state.currentscore}
      highscore={this.state.highscore}
      log={this.state.log}
      />
      <div className="card-panel">
      {this.state.cardList.map((card) =>(
        <CardImg 
         key={card.id}
         cardid={card.id}
         cardText={card.name}
         img = {card.image}
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
