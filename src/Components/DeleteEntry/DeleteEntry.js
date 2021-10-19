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

    refreshPage() {
        window.location.reload(true);
    }

    async handleDelete() {
        console.log(this.state.id);
        await axios.delete(`http://localhost:8080/entry/${this.state.id}`)
        .then(
            this.setState({ id: ''})
        )
        .catch(error => {
            console.log(error.response.data);
        })
        this.props.exitDelete();
        this.refreshPage();
        //event.preventDefault();
    }

    render() {
        return(
            <div id="deleteEntry">
                <h1>Are you sure you want to delete this entry?</h1>
                <div>
                    <button onClick={ () => this.handleDelete()}>YES</button>
                    <button onClick={ () => this.props.exitDelete()}>NO</button>
                </div>
            </div>
        )
    }
}