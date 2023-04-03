import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const CombinationBox = (props) => {
  const classes = useStyles();

  const handleStockChange = (event) => {
    props.setSelectedStock(event.target.value);
  };

  const handleSubmitButton = async () => {
    try {
      const url = 'http://localhost:5001/api';  // Flask 서버의 URL 주소
      const response = await axios.post(url, {
        stock: props.selectedStock,
        startDate: props.selectedStartDate,
        endDate: props.selectedEndDate
      });
      const receivedData = JSON.stringify(response.data)
      props.setReceivedData(receivedData)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.root}>
      <h3>Select Stock and Period</h3>
      <Form>
        <FormGroup row>
          <Label md={3} for="stock-select">Select Stock</Label>
          <Col md={9}>
            <Input 
            type="select" 
            name="stock" 
            id="stock-select" 
            value={props.selectedStock} 
            onChange={handleStockChange}
            style={{ width: "148px" }}>
              <option value="" disabled>Select Stock</option>
              <option value="AAPL">AAPL</option>
              <option value="GOOGL">GOOGL</option>
              <option value="TSLA">TSLA</option>
            </Input>
          </Col>
        </FormGroup>
        <br></br>
        <FormGroup row>
          <Label md={3} for="start-date-select">Select Start Date</Label>
          <Col md={9}>
            <div className="react-datepicker-wrapper">
              <DatePicker 
              id="start-date-select" 
              selected={props.selectedStartDate} 
              onChange={date => props.setSelectedStartDate(date)} />
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={3} for="end-date-select">Select End Date</Label>
          <Col md={9}>
            <div className="react-datepicker-wrapper">
              <DatePicker 
              id="end-date-select"
              selected={props.selectedEndDate} 
              onChange={date => props.setSelectedEndDate(date)} />
            </div>
          </Col>
        </FormGroup>
        <br></br>
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmitButton}>
              Confirm
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default CombinationBox;