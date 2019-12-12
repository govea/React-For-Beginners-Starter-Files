import React from 'react';
import { format } from 'path';
import { unlink, link } from 'fs';

class StorePicker extends React.Component {
    render() { 
        return (
            // To be able to return more than one element. React.Fragment renders to nothing
            <React.Fragment>
                <p>Fish!</p>
                <form action="" className="store-selector">
                    { /*Hey look JSX! I'm using brackets, that means I want to do some Javascript */}
                    <h2>Please Enter a Store</h2>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;