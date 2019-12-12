import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  // 1st approach
  // ===================
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
    console.log('Gonna create a component');
  }

  goToStore(event) {
    event.preventDefault();
    console.log(this);        // damn! we need the bind in the constructor for this to be bound
    //  Change the page to store/whatever-they-entered
  }
  
  // 2nd approach
  // ===================
  // goToStore = (event) => {
  //   event.preventDefault();
  //   console.log(this);    // Yay!! this is bound to the component when using the arrow function!
  // }

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