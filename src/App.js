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

  componentDidMount() {
    BooksAPI.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        })
  }

  moveBook = (book, newShelf) => {
      BooksAPI.update(book, newShelf)
        .then(() => {
              BooksAPI.getAll()
                .then((books) => {
                    this.setState({
                        books: books
                    })
                })
        })
    }
    
  render() {
    return (
      <div className="app">
        <Route exact
            path='/'
            render={() => (
              <Bookstore books={this.state.books} moveBook={this.moveBook}/>
              )} />
        <Route 
          path='/search'
          render={() => (
            <Search moveBook={this.moveBook}/>
            )} />
      </div>
    )
  }
}

export default BooksApp
