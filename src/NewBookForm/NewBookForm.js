import React from 'react';

const Form = () => (
  <form id="new-book">

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

    <button type="submit" className="btn btn-primary" value="Submit" onSubmit={true}>Add Book</button>

  </form>
);

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

  render() {
    return (
      <div className="col-12">
        <button className="btn btn-primary" onClick={this.toggleForm.bind(this)}>New Book</button>
        {!this.state.formHidden && <Form />}
      </div>
    );
  }
}

export default NewBookForm;