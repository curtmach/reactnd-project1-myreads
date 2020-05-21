import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    render() {
        const { name, books, moveBook } = this.props

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">
                      {name}
                  </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) => 
                          <li key={book.id}><Book book={book} moveBook={moveBook} /></li>
                      )}
                    </ol>
                </div>
            </div>
        );
    }
}

Bookshelf.PropTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Bookshelf