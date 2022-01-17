import React from 'react'
import { Col, Form } from 'react-bootstrap'

const Search = (props) => {

    const getSearchValue = (event) => {
        if(event.target.value && event.target.value.length > 3) {
            props.searchvalue(event.target.value);
        }
    }

    return (
        <Col>
            <Form.Control placeholder="Search a movie" onChange={getSearchValue}/>
        </Col>
    )
}

export default Search