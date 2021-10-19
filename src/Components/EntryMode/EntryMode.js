import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EntryMode.css';
import TableEntry from '../TableEntry/TableEntry.js'
import DeleteEntry from '../DeleteEntry/DeleteEntry';
import axios from 'axios'

export default class EntryMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body:'',
            creationDate: new Date(),
            editDate: null,
            listOfEntries: [],
            deleteId:'',
            deleteMode: false
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.enterDelete = this.enterDelete.bind(this);
        this.exitDelete = this.exitDelete.bind(this);
    }

    componentDidMount() {
        this.getAllEntries();
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value})
    }

    async getAllEntries() {
        axios.get('http://localhost:8080/entry/allEntries')
        .then(response => {
            this.setState({
                listOfEntries: [...this.state.listOfEntries, ...response.data]
            })
            console.log(this.state.listOfEntries)

        })
        .catch(error => {
            console.log(error);
        })
    }

    async handleSubmit(event) {
        const entry = {
            title: this.state.title,
            body: this.state.body,
            creationDate: this.state.creationDate.toLocaleDateString(),
            editDate: this.state.editDate
        }

        axios.post('http://localhost:8080/entry', entry)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        event.preventDefault();
        this.props.refreshPage();
    }

    enterDelete(id) {
        this.setState({
            deleteId: id,
            deleteMode: true
        });
    }

    exitDelete() {
        this.setState({
            deleteId: '',
            deleteMode: false
        });
        //this.props.refreshPage();
    }

    renderTableData() {
        return this.state.listOfEntries.map((entry, index) => {
            const {id, title, body, creationDate, editDate} = entry
            return (
                <div key={id} id="tableEntry">
                    <TableEntry 
                        entry={entry}
                    />
                    <button onClick={ () =>
                        this.props.enterEditModeForEntry(id, title, body, creationDate)}>EDIT
                    </button>
                    <button onClick={ () =>
                        this.enterDelete(id)}>DELETE</button>
                </div>
            )
        })
    }

    render() {
        const deleteMode = this.state.deleteMode
        return(
            <div id="container">
                <div id="entryTable">
                    {this.renderTableData()}
                </div>
                {deleteMode == true && 
                    <DeleteEntry
                        id={this.state.deleteId}
                        exitDelete={this.exitDelete}
                    />
                }
                <form onSubmit={this.handleSubmit}>
                    <div id="title">
                            <input type="text" name="title" onChange={this.handleTitleChange} placeholder="Title"></input>
                    </div>
                    <div id="body">
                            <textarea name="body" onChange={this.handleBodyChange}  placeholder="My Thoughts Are..."></textarea>
                    </div>
                    <div className="buttons">
                            <Link id="link" to="/"><button id="home_btn">HOME</button></Link>
                            <button type="submit" id="send_btn">SEND</button>   
                    </div>
                </form>
            </div>
        )
    }


}