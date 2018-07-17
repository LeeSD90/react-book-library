import React from 'react';
import NewBookForm from '../NewBookForm/NewBookForm';

class LibraryHeader extends React.Component {
  render(){
    return (
      true
    );
  }
}

class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  newBook = (book) => {
    let books = this.state.books;
    books.push(book);

    this.setState({
      books: books
    })
  }

  render(){
    return (
      <div className="container">
        <NewBookForm book={this.newBook}/>
      </div>
    );
  }
}

export default Library;