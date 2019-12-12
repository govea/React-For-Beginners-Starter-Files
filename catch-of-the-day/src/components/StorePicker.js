import React from 'react';

class StorePicker extends React.Component {
  render() { 
    return (
      // To be able to return more than one element. React.Fragment renders to nothing
      <React.Fragment>
        <span></span>
        <form action="" className="store-selector">
            { /*Hey look JSX! I'm using brackets, that means I want to do some Javascript */}
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name" />
            <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;