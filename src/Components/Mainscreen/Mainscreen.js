import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mainscreen.css';

class Mainscreen extends Component {


    render() {
        return(
            <div>
                <body>
                    <div id="title_block">
                        <h1>Jay's Journal</h1>
                        <h3>A Way To log Your Thoughts</h3>
                        <button><Link to="/Entry">Create New Entry</Link></button>
                        <button>Load New Entry</button>
                    </div>
                </body>
            </div>
        )
    }
}
export default Mainscreen