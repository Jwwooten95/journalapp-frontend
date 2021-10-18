import React, { Component } from 'react';
import './EditMode.css';
import axios from 'axios'

export default class EditMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfEntries: [],
            editModeId: this.props.editModeId,
            editModeTitle: this.props.editModeTitle,
            editModeBody: this.props.editModeBody,
            editModeDate: this.props.editModeDate,
            editDate: new Date()
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({editModeTitle: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({editModeBody: event.target.value})
    }

    async submitEdit(event) {
        console.log(this.state.editModeId);
        console.log(this.state.editModeTitle);
        console.log(this.state.editModeBody);
        console.log(this.state.editModeDate);
        console.log(this.state.editDate.toLocaleDateString());

        const edited = {
            id: this.state.editModeId,
            title: this.state.editModeTitle,
            body: this.state.editModeBody,
            creationDate: this.state.editModeDate,
            editDate: this.state.editDate.toLocaleDateString()
        }

        axios.put('http://localhost:8080/entry/update', edited)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        //this.props.exitEditMode();
    }

    render() {
        return(
            <div id="container">
                <div id="editModeText">
                    <h1>Currently Editing:</h1>
                    <h1>{this.props.editModeTitle}</h1>
                    <h1>Created on:</h1>
                    <h1>{this.props.editModeDate}</h1>
                </div>
                <form onSubmit={this.submitEdit}>
                    <div id="title">
                            <input type="text" value={this.state.editModeTitle} name="title" onChange={this.handleTitleChange} placeholder="Title"></input>
                    </div>
                    <div id="body">
                            <textarea name="body" defaultValue={this.state.editModeBody} onChange={this.handleBodyChange}  placeholder="My Thoughts Are..."></textarea>
                    </div>
                    <div className="buttons">
                            <button id="cancel_btn" onClick={ () => this.props.cancelEdit()}>CANCEL</button>
                            <button type="submit" id="submit_btn">SUBMIT</button> 
                    </div>
                </form>
            </div>
        )
    }

}