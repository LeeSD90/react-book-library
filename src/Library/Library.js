import React from 'react';
import NewBookForm from '../NewBookForm/NewBookForm';

class Library extends React.Component {
  render(){
    return (
      <div className="container">
        <NewBookForm />
      </div>
    );
  }
}

export default Library;