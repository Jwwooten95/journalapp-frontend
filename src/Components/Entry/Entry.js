import React, { Component } from 'react';
import './Entry.css';
import EntryMode from '../EntryMode/EntryMode.js';
import EditMode from '../EditMode/EditMode';

export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'sdfsdfsdf',
            body:'',
            creationDate: new Date(),
            editDate: null,
            listOfEntries: [],
            editMode: false,
            editModeId:'',
            editModeTitle:'',
            editModeBody:'',
            editModeDate:'',
        }

        this.enterEditModeForEntry = this.enterEditModeForEntry.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentDidMount() {
        
    }
    
    refreshPage() {
        window.location.reload(true);
    }

    //This function should only be called from the 'edit' button in one of the table entries
    enterEditModeForEntry(id, title, body, creationDate) {
        this.setState({
            editModeId: id,
            editModeTitle: title,
            editModeBody: body,
            editModeDate: creationDate,
            editMode: true
        });
    }

    cancelEdit() {
        this.setState({
            editModeId: '',
            editModeTitle: '',
            editModeBody: '',
            editModeDate: '',
            editMode: false
        })
        this.refreshPage();
    }

    render() {
        const isEditing = this.state.editMode;
        return(
            <div>
                {isEditing ?
                <EditMode
                    editModeId={this.state.editModeId}
                    editModeTitle={this.state.editModeTitle}
                    editModeBody={this.state.editModeBody}
                    editModeDate={this.state.editModeDate}
                    cancelEdit = {this.cancelEdit}
                    refreshPage = {this.refreshPage}
                />
                :
                <EntryMode
                    enterEditModeForEntry = {this.enterEditModeForEntry}
                    refreshPage = {this.refreshPage}
                />
                }
            </div>
        )
    }
}