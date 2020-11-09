import React, { useState, useRef } from "react";
import { add, minus } from "../store/counter";
import Toggle from "../../css-components/toggle/Toggle";
import { connect } from "react-redux";
import styled from "styled-components";

function Counter({ value, dispatch }) {
  const [state, setState] = useState(false);

  const stateHandler = () => {
    setState(!state);
  };

  return (
    <>
      <button onClick={() => setState(!state)}>click</button>
      <Toggle isToggled={state}></Toggle>
      <a>
        <Span>clic nhere</Span>
      </a>
    </>
  );
}

const Span = styled.span`
  background-color: whitesmoke;
  height: 80px;

  a::after {
    box-sizing: border-box;
    content: "Dsd";
    display: block;
    background-color: red;
    width: 100px;
  }
  a:hover &::after {
    content: "cccc";
    display: block;
    background-color: blue;
    width: 100px;
    transition: all 2s;
  }
`;

export default connect(
  state => {
    return { value: state.count };
  },
  dispatch => {
    return {
      dispatch: dispatch,
    };
  }
)(Counter);
