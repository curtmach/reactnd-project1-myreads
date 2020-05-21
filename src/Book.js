import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    
    render() {
        const { book, moveBook } = this.props

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.hasOwnProperty('imageLinks') ? `url(${book.imageLinks.thumbnail})` : `url('./icons/no_image.png')`  }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            value={(book.hasOwnProperty('shelf')) ? book.shelf : 'none'}
                            onChange={(e) => { 
                                moveBook(book, e.target.value) 
                                }}>
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
                    { book.hasOwnProperty('authors') && book.authors.map((author) => 
                       author + ','
                    )}
                </div>
            </div>
        );
    }
}

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Book