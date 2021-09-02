import React, { Component } from 'react';
import './TableEntry.css'

export default class TableEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.entry.id,
            title: props.entry.title,
            body: props.entry.body,
            creationDate: props.entry.creationDate,
            editDate: props.entry.editDate
        }
    }

    render() {
        return(
            <div id="entry">
                <h3>{this.state.creationDate}</h3>
                <h2>{this.state.title}</h2>
                
                <p>{this.state.body}</p>
            </div>
        )
    }
}