import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const CatPic = styled.img`
  margin: auto;
  background-color: white;
  max-width: 60vw;
  max-height: 60vh;
  margin: 2em;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  border: 0.2em solid lightgrey;
`;

class Cat extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://cataas.com/cat" //default image - calling another cat api!
    };
    this.getCat = this.getCat.bind(this);
  }

  getCat() {
    axios
      .get("/cat")
      .then(data => {
        console.log(data.data);
        return this.setState({ url: data.data });
      })
      .catch(data => console.log(data));
  }

  render() {
    return (
      <div>
        ss
        <CatPic src={this.state.url} onClick={this.getCat} />
        <div />
      </div>
    );
  }
}

export default Cat;
