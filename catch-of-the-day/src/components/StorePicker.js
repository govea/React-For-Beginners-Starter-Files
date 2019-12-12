import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  // TIP: If you need to use 'this' inside a custom function, use the arrow syntax
  // ===================
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;    // Yay!! this is bound to the component when using the arrow function!
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    console.log(this); 
    return (
      // To be able to return more than one element. React.Fragment renders to nothing
      <React.Fragment>
        <span></span>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
            { /*Hey look JSX! I'm using brackets, that means I want to do some Javascript */}
            <h2>Please Enter a Store</h2>
            <input 
              type="text" 
              ref={this.myInput}
              required 
              placeholder="Store Name" 
              defaultValue={getFunName()} 
            />
            <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;