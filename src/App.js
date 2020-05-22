import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookstore from './Bookstore'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  /**
   * Gets all of the books from the API and sets the application state
   */
  componentDidMount() {
    BooksAPI.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        });
  }

  /**
  * @description Moves a book between shelves
  * @param {object} book - The book object
  * @param {string} newShelf - The new shelf
  */
  moveBook = (book, newShelf) => {
      BooksAPI.update(book, newShelf)
        .then(() => {
              BooksAPI.getAll()
                .then((books) => {
                    this.setState({
                        books: books
                    })
                })
        });
    }
    
  render() {
    return (
      <div className="app">
        {/* Route to Main Page */}
        <Route exact
            path='/'
            render={() => (
              <Bookstore books={this.state.books} moveBook={this.moveBook}/>
              )} />
        {/* Route to Search Page */}
        <Route 
          path='/search'
          render={() => (
            <Search books={this.state.books} moveBook={this.moveBook}/>
            )} />
      </div>
    )
  }
}

export default BooksApp
