import React, { Component } from 'react';
import axios from 'axios';
import './Card.css';
import Card from './Card';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = { covid: [] };
  }

  componentDidMount() {
    const END_POINT = 'https://covid19api-in.herokuapp.com/getdata';

    axios
      .get(END_POINT)
      .then(response => {
        this.setState({
          covid: response.data
        });
        // console.log(this.state.covid);
      })
      .catch(error => {
        console.log(error, 'failed to fetch data!');
      });
  }
  render() {
    const { covid } = this.state;
    return <Card data={covid} />;
  }
}
export default CardContainer;
