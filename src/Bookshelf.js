import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

/**
 * The Bookshelf Component, used for currentlyReading, wantToRead, Read and Search Page
 **/
class Bookshelf extends Component {
    render() {
        const { name, books, moveBook } = this.props; // get our props

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">
                      {name} 
                  </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"> 
                    {/* Map each book to Book component in the books array */}
                      {books.map((book) => 
                          <li key={book.id}><Book book={book} moveBook={moveBook} /></li>
                      )}
                    </ol>
                </div>
            </div>
        );
    }
}

// Define our Bookshelf PropTypes
Bookshelf.propTypes = {
    name: PropTypes.string,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Bookshelf