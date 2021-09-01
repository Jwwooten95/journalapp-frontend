import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Entry.css';
import axios from 'axios'

export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'sdfsdfsdf',
            body:'',
            creationDate: new Date(),
            editDate: null
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //console.log(this.state.title);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value})
    }

    async handleSubmit(event) {
        const entry = {
            title: this.state.title,
            body: this.state.body,
            creationDate: this.state.creationDate,
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

        console.log(this.state.title);
        console.log(this.state.body);
        console.log(this.state.creationDate);
        console.log(this.state.editDate);
    }

    render() {
        return(
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
        )
    }
}