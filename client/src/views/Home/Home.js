import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";
import { sendNewUrl } from "./../../reducers/urlReducer";
import UrlForm from "../../components/UrlForm/UrlForm";
import MessageBox from "../../components/MessageBox/MessageBox";
import Loading from "../../components/Loading/Loading";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;
  @media all and (max-width: 520px) {
    width: 90%;
  }
`;

const Title = styled.h1`text-align: center;`;
const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

export class Home extends Component {
  generateNewUrl = url => {
    this.props.sendNewUrl && this.props.sendNewUrl(url);
  };
  render() {
    const {
      url: { message, hasError, hasAdded, shortUrl, orginalUrl, isBusy }
    } = this.props;

    const messageComponent =
      message && (hasAdded || hasError)
        ? <FadeIn>
            <MessageBox
              message={message}
              hasError={hasError}
              hasAdded={hasAdded}
              shortUrl={shortUrl}
              orginalUrl={orginalUrl}
            />
          </FadeIn>
        : null;

    const loadingComponent = isBusy ? <Loading /> : null;

    return (
      <Container>
        <Title>Shorten your link....</Title>
        <Subtitle>
          Enter a url below, click generate and then use the "short" version.
        </Subtitle>
        <UrlForm onClickGenerate={this.generateNewUrl} isBusy={isBusy} />
        {messageComponent}
        {loadingComponent}
      </Container>
    );
  }
}
Home.propTypes = {
  url: PropTypes.shape({
    hasError: PropTypes.bool,
    hasAdded: PropTypes.bool,
    isBusy: PropTypes.bool,
    shortUrl: PropTypes.string,
    orginalUrl: PropTypes.string,
    message: PropTypes.string
  })
};

export default connect(
  state => ({
    url: state.url
  }),
  {
    sendNewUrl
  }
)(Home);
