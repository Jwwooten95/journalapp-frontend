import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditMode.css';

export default class EditMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfEntries: [],
            editModeId: this.props.editModeId,
            editModeTitle: this.props.editModeTitle,
            editModeBody: this.props.editModeBody,
            editModeDate: this.props.editModeDate
        }
    }

    render() {
        return(
            <div id="container">
                <div id="editModeText">
                    <h1>Currently Editing:</h1>
                    <h1>{this.state.editModeTitle}</h1>
                    <h1>{this.state.editModeDate}</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
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