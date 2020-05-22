import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        value: '',
        searchResults: [],
        error: ''
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
        
        if (this.state.value !== '') {
            BooksAPI.search(this.state.value)
                .then((books) => {
                    
                    if (books.hasOwnProperty('error')) {
                        this.setState({
                            searchResults: []
                        });
                    } else {
                        books.map((book) => {
                            const inCollection = this.props.books.filter(b => b.id === book.id);

                            if (inCollection.length > 0) {
                                book.shelf = inCollection[0].shelf;
                                return book;
                            } else {
                                const newBook = book;
                                newBook["shelf"] = "none";
                                return newBook;
                            }
                        })

                        this.setState({
                            searchResults: books
                        });
                    }
                });
        } else {
            this.setState({
                searchResults: []
            });
        }
    }

    render() {
        const { books, moveBook } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={this.handleChange} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.value !== '' &&
                        <Bookshelf name='' books={this.state.searchResults} existingbooks={books} moveBook={moveBook}/>}
                    </ol>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Search