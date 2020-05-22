import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * The Main page component 
 **/
class Bookstore extends Component {
    render() { 
        const { books, moveBook } = this.props; // Get our props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {/* 3 Bookshelves, one for currently Reading, wantToRead and Read. The main books array is filtered and passed to these components */}
                        <Bookshelf name='Currently Reading' books={books.filter((b) => {
                            return b.shelf === 'currentlyReading'
                        })} moveBook={moveBook}/>
                        <Bookshelf name='Want to Read' books={books.filter((b) => {
                            return b.shelf === 'wantToRead'
                        })} moveBook={moveBook}/>
                        <Bookshelf name='Read' books={books.filter((b) => {
                            return b.shelf === 'read'
                        })} moveBook={moveBook} />
                    </div>
                    <div className="open-search">
                        {/* Link to search page */}
                        <Link 
                            to='/search'
                            type='button'
                            >
                            <button>Add a book</button>
                        </Link>
                    </div>
            </div>
        );
    }
}

// Define our Bookstore PropTypes
Bookstore.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Bookstore