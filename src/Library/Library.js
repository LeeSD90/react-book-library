import React from 'react';
import NewBookForm from '../NewBookForm/NewBookForm';

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

class LibraryRow extends React.Component {
  removeBook = () => {
    this.props.removeBook(this.props.id);
  }

  render() {
    const title = this.props.title;
    const author = this.props.author;
    const read = this.props.read ? "Yes" : "No";
    const pages = this.props.pages;

    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pages}</td>
        <td>{read}</td>
        <td><button onClick={this.removeBook} href="#"><i className="fas fa-trash"></i></button></td>
      </tr>
    );
  }
}

class LibraryBody extends React.Component {
  removeBook = (id) => {
    this.props.removeBook(id);
  }

  render() {
    const rows = [];

    if(this.props.books !== undefined && this.props.books !== null){
      this.props.books.forEach((book, index) => {
        rows.push(
          <LibraryRow
            key={index.toString()}
            id={index.toString()}
            removeBook={this.removeBook}
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

class LibraryTable extends React.Component {
  removeBook = (id) => {
    this.props.removeBook(id);
  }

  render() {
    return (
      <div className="col-8 centered">
        <table className="table">
          <LibraryHeader />
          <LibraryBody
            removeBook={this.removeBook} 
            books={this.props.books} />
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

  removeBook = (id) => {
    let books = this.state.books;
    books.splice(id, 1);

    this.setState({
      books: books
    })
  }

  render() {
    return (
      <div className="container">
        <NewBookForm book={this.newBook}/>
        <LibraryTable 
          removeBook={this.removeBook}
          books={this.state.books} />
      </div>
    );
  }
}

export default Library;