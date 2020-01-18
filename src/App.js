import React, { Component } from 'react';
import Header from './components/layout/Header'
import './App.css';
import ShoppingList from './components/layout/ShoppingList';

import {Provider} from 'react-redux';
import store from "./store";


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

  onAddtocart = () => {
    
  }

searchText = (text) =>{
   const result = this.state.items.filter(obj => Object.keys(obj).some(key => obj[key].toString().toLowerCase().includes(text.toLowerCase())));
  
  this.setState({searchResult: result });
}

  render() {
    const {isLoading, items, searchResult} = this.state;
    return (
    <Provider store={store}>  
      <div className="App">
        <div>
          <Header searchText={this.searchText} />
          <ShoppingList isLoading={isLoading} items={Object.entries(searchResult).length !== 0? searchResult : items } onAddtocart = {this.onAddtocart}/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
