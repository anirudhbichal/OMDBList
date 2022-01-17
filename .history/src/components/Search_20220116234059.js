import React, { useCallback } from 'react';
import { Col, Form } from 'react-bootstrap';
import debounce from 'lodash.debounce';

const Search = (props) => {

    const getSearchValue = (event) => {
        if(event.target.value) {
            props.searchvalue(event.target.value);
            props.showMore(true);
            props.setinitialLoad(false);
            props.setMovies([]);
        }
    }

    const debouncedChangeHandler = useCallback(
        debounce(getSearchValue, 500)
    , []);

    return (
        <Col>
            <Form.Control placeholder="Search a movie" onChange={debouncedChangeHandler}/>
        </Col>
    )
}

export default Search