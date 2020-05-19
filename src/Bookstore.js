import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

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
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </div>
            </div>
        );
    }
}

export default Bookstore