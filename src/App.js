import React, { Component } from 'react';
import Header from './components/layout/Header'
import './App.css';
import ShoppingList from './components/layout/ShoppingList'


class App extends Component {
  state = {
    items : [],
    searchResult : {},
    isLoading: true
  };
  componentDidMount (){
     fetch("https://api.myjson.com/bins/qzuzi")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             items: result,
             isLoading: false
           });
         },        
         (error) => {
           this.setState({
             isLoading: true,
             error
           });
         }
       )
  }

searchText = (text) =>{
   const result = this.state.items.filter(obj => Object.keys(obj).some(key => obj[key].toString().toLowerCase().includes(text.toLowerCase())));
  
  this.setState({searchResult: result });
}

  render() {
    const {isLoading, items, searchResult} = this.state;
    return (
      <div className="App">
        <div>
          <Header searchText={this.searchText} />
          <ShoppingList isLoading={isLoading} items={Object.entries(searchResult).length !== 0? searchResult : items}/>
        </div>
      </div>
    );
  }
}

export default App;
