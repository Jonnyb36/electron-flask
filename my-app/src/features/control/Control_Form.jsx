import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Col } from "react-bootstrap";
import {
    loadIntrinsicResults,
    selectIntrinsicResults,
  } from '../results/resultsSlice';
import CSVReaderClass from '../tools/CSVReader'



function useInput({ type, required = false}) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} required={required}/>;
    return [value, input];
}

const handleSubmit = (event, dispatch, func, funcProps) => {
    dispatch(func(funcProps))
    if (event) {
    event.preventDefault();
    };
}

  
export function Control_Form() {
    
    const [filename, filenameInput] = useInput({ type: "file", required: true});

    const dispatch = useDispatch();

    return (
        <Form onSubmit={(e) => handleSubmit(e, dispatch, loadIntrinsicResults, filename)}>
        <Form.Row>
            <CSVReaderClass />
            <Form.Group as={Col} controlId="formResults">
            <Form.Label>Select Inrinsic Filepath</Form.Label>
            {filenameInput}
            {/* <Form.File name="filepath" placeholder="Intrinsic Results Filepath"
                        onChange={handleInputChange} value={inputs.filepath} required /> */}
            </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" active>
                Update Charts
        </Button>
        </Form>
        
    );
}