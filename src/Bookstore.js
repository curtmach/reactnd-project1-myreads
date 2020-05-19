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
                        <Bookshelf name='Currently Reading' books={[]} />{/** TODO pass books arr as props */}
                        <Bookshelf name='Want to Read' books={[]} />
                        <Bookshelf name='Read' books={[]} />
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