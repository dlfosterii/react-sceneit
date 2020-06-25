import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

handleChange = (e) => {
    this.setState({
        inputValue: e.target.value
    }) 
}

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.props.handleFormSubmit}>
                    <input type="text" id="search" name="search" placeholder="Search for a movie..." onChange={this.handleChange}></input>
                    <Button variant="primary" type="submit" >Search</Button>
                    {/* <button type="submit">Search</button> */}
                </form>

            </div>
        )
    }
}
