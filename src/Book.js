import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * The book component
 */
class Book extends Component {  
    state = {
        shelf: [] // set book shelf
    }

    /**
     * On load set the books shelf to the shelf in its props
     */
    componentDidMount() {
        this.setState({
            shelf: this.props.book.shelf
        });
    }

    /**
     * @description Moves a book between shelves and updates the state of the book
     * @param {event} event - The onchange event
     */
    handleChange = event => {
        this.props.moveBook(this.props.book, event.target.value); //call moveBook in App.js
        this.setState({
            shelf: event.target.value // set state of book
        });
    }

    render() {
        const { book } = this.props // get our props

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.hasOwnProperty('imageLinks') ? `url(${book.imageLinks.thumbnail})` : `url('./icons/no_image.png')`  }}></div>
                    <div className="book-shelf-changer">
                        {/**  set value to state.shelf **/}
                        <select 
                            value={this.state.shelf} 
                            onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {/* Loop through authors and print */}
                    { book.hasOwnProperty('authors') && book.authors.map((author) => 
                       author + ','
                    )}
                </div>
            </div>
        );
    }
}

// Define PropTypes for Book component
Book.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Book