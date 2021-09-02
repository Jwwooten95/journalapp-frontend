import React, { Component } from 'react';
import './TableEntry.css'

export default class TableEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.entry.id,
            title: props.entry.title,
            body: props.entry.body
        }
    }

    render() {
        return(
            <div id="entry">
                <h5>{this.state.id}</h5>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }
}