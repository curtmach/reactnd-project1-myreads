import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

/**
 * Search for a book component
 */
class Search extends Component {
    state = {
        value: '',
        searchResults: [],
        error: ''
    } // set intitial state

    /**
     * @description Search for a book - onchange event, updates state with search results
     * @param {event} event - The onchange event
     */
    handleChange = event => {
        this.setState({
            value: event.target.value
        }); // sets state to query
        
        if (event.target.value !== '') {
            BooksAPI.search(event.target.value) // make a call to search the API - changed to event.target.value due to async problem in feedback
                .then((books) => {
                    
                    if (books.hasOwnProperty('error')) {
                        this.setState({
                            searchResults: []
                        }); // if error set state to empty array
                    } else {
                        books.map((book) => {
                            const inCollection = this.props.books.filter(b => b.id === book.id); // if the search results has a book that is already in collection (has a shelf)

                            if (inCollection.length > 0) { 
                                book.shelf = inCollection[0].shelf;
                                return book; // if book is already in collection, set shelf prop of search result to shelf of book in collection
                            } else {
                                const newBook = book;
                                newBook["shelf"] = "none";
                                return newBook; // if book not in collection, set shelf prop of book to none
                            }
                        })

                        this.setState({
                            searchResults: books
                        }); //update state with updated books array from API
                    }
                });
        } else {
            this.setState({
                searchResults: []
            }); // if error then set state to empty array
        }
    }

    render() {
        const { books, moveBook } = this.props; // get our props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/* When query changes, trigger the handleChange function, value is set from the state */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={this.handleChange} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* If the query isn't empty string, then show Bookshelf component with search results */}
                        {this.state.value !== '' &&
                        <Bookshelf name='' books={this.state.searchResults} moveBook={moveBook}/>}
                    </ol>
                </div>
            </div>
        );
    }
}

// Define PropTypes for Search component
Search.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Search