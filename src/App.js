import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookstore from './Bookstore'
import Search from './Search'
import NotFound404 from './NotFound404'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

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
        <BrowserRouter>
          <Switch>
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
            {/* 404 Not Found */}
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
