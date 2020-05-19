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
                        <Bookshelf />
                        <Bookshelf />
                        <Bookshelf />
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