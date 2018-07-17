import React from 'react';
import './NewBookForm.css'

class Form extends React.Component {
  
  handleSubmit(e) {
    const form = e.target;
    let book = {
      title : form.querySelector("#input-title").value,
      author : form.querySelector("#input-author").value,
      pages : form.querySelector("#input-pages").value,
      read : form.querySelector("#input-read").value
    }
    this.props.addBook(book);
    e.preventDefault();
  }

  render(){
    return (
      <form id="new-book" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
          <input name="title" className="form-control" type="text" id="input-title" required/>
        </div>

        <div className="form-group">
          <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
          <input name="author" className="form-control"type="text" id="input-author" required/>
        </div>
          
        <div className="form-group">
          <label htmlFor="Pages" className="col-sm-2 col-form-label">Pages</label>
          <input name="Pages" className="form-control" type="number" id="input-pages" min="1" required/>
        </div>

        <div className="form-check">
          <input name="read" id="input-read" className="form-check-input" type="checkbox"/>
          <label className="form-check-label" htmlFor="input-read">Read</label>
        </div>

        <button type="submit" className="btn btn-primary" value="Submit">Add Book</button>

      </form>
    );
  }
}

class NewBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formHidden: true
    }
  }

  toggleForm() {
    this.setState({
      formHidden: !this.state.formHidden
    })
  }

  addBook = (book) => {
    this.props.book(book);
    this.toggleForm();
  }

  render() {
    return (
      <div className="new-book-form">
        <button className="btn btn-primary" onClick={this.toggleForm.bind(this)}>New Book</button>
        {!this.state.formHidden && <Form addBook={this.addBook}/>}
      </div>
    );
  }
}

export default NewBookForm;