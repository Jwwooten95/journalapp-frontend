import React, { Component } from 'react';
import moment from 'moment';
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

    componentDidMount() {
        console.log(this.state.id);
        console.log(this.state.title);
        console.log(this.props.entry.id);
    }

    render() {
        const editDate = this.state.editDate;
        const creationDate = this.state.creationDate;
        return(
            <div id="entry">
                <h3>{creationDate}</h3>
                <h2>{this.state.title}</h2>
                <p>"{this.state.body}"</p>
                {editDate != null && 
                    <div id="editDate">
                        <h3>Last edit {this.state.editDate}</h3>
                    </div>
                }
            </div>
        )
    }
}