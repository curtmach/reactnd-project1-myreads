import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bookstore extends Component {
    render() {
        const { books, moveBook } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
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

Bookstore.PropTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Bookstore