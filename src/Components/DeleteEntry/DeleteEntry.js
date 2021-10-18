import React, { Component } from 'react';
import './DeleteEntry.css'
import axios from 'axios';

export default class DeleteEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id
        }
    }

    async handleDelete(event) {
        axios.delete('http://localhost:8080/entry/{id}', this.state.id)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        event.preventDefault();
    }

    render() {
        return(
            <div id="deleteEntry">
                <h1>Are you sure you want to delete this entry?</h1>
                <div>
                    <button >YES</button>
                    <button onClick={ () => this.props.cancelDelete()}>NO</button>
                </div>
            </div>
        )
    }
}