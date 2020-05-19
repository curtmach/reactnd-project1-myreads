import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class Bookstore extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Bookshelf name='Currently Reading' books={this.props.books.filter((b) => {
                            return b.shelf === 'currentlyReading'
                        })} />
                        <Bookshelf name='Want to Read' books={this.props.books.filter((b) => {
                            return b.shelf === 'wantToRead'
                        })} />
                        <Bookshelf name='Read' books={this.props.books.filter((b) => {
                            return b.shelf === 'read'
                        })} />
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

export default Bookstore