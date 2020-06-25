import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default function Search (props){


    return (
        <div>
            <form className="form" onSubmit={props.handleFormSubmit}>
                <input type="text" id="search" name="search" placeholder="Search for a movie..." onChange={props.handleChange}></input>
                <Button variant="primary" type="submit" >Search</Button>
                {/* <button type="submit">Search</button> */}
            </form>

        </div>
    )
    
}
