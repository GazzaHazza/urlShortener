import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import URLRedirect from "../URLRedirect/URLRedirect";
import Home from "../Home/Home";
import store from "../../store";
import styled, { injectGlobal } from "styled-components";
import styleVariables from "../../styles/styleVariables";

// eslint-disable-next-line
injectGlobal` 
  body {
    margin: 0;
    font-family:'Source Sans Pro', sans-serif;
    background:${styleVariables.colors.blue.dark};
    color: ${styleVariables.colors.black.dark};
    font-size: ${styleVariables.fonts.size.medium};
  }
`;
const Container = styled.div`
  max-width: 1080px;
  margin: 200px auto 0;
  display: flex;
  flex-flow: column;
  align-content: center;
  @media all and (max-width: 520px) {
    margin-top: 50px;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/:urlCode" component={URLRedirect} />
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
