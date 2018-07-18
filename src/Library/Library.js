import React from 'react';
import NewBookForm from '../NewBookForm/NewBookForm';

class LibraryRow extends React.Component {
  render() {
    const title = this.props.title;
    const author = this.props.author;
    const read = this.props.read;
    const pages = this.props.pages;

    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{read}</td>
        <td>{pages}</td>
        <td><a href="#"><i className="fas fa-trash"></i></a></td>
      </tr>
    );
  }
}

class LibraryBody extends React.Component {
  render() {
    const rows = [];

    if(this.props.books !== undefined && this.props.books !== null){
      this.props.books.forEach(book => {
        rows.push(
          <LibraryRow
            title={book.title}
            author={book.author}
            pages={book.pages} 
            read={book.read} />
        );
      });
    }

    return (
      <tbody id="items">
        {rows}
      </tbody>
    );
  }
}

class LibraryHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr id="headings">
          <th className="col">Title</th>
          <th className="col">Author</th>
          <th className="col">Pages</th>
          <th className="col">Read?</th>
          <th className="col">Remove</th>
        </tr>
      </thead>
    );
  }
}

class LibraryTable extends React.Component {
  render() {
    return (
      <div className="col-8">
        <table className="table">
          <LibraryHeader />
          <LibraryBody books={this.props.books}/>
        </table>
      </div>
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

  render() {
    return (
      <div className="container">
        <NewBookForm book={this.newBook}/>
        <LibraryTable books={this.state.books}/>
      </div>
    );
  }
}

export default Library;