import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;

    // first reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      console.log(this);
      this.setState({ order: JSON.parse(localStorageRef)});
    }

    console.log(localStorageRef);

    this.ref= base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  
  componentDidUpdate() { 
    console.log('updated!');
    localStorage.setItem(
      this.props.match.params.storeId, 
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    console.log('UnBinding!');
       base.removeBinding(this.ref);
  }

  addFish = fish => {
    console.log('Adding a fish!');
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes}; // Object spread to do a copy of an object.
    
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({
      fishes        // fishes: fishes
    });

    // this.state.fishes.fish1 = fish;   // you don't a mutation like this.
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = {...this.state.order};

    // 2. Either add to the order
    order[key] = order[key] +1 || 1
    
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} /> 
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;