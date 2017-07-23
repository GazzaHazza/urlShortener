import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectSuggestedPlace } from "./../../reducers/url";

class URLRedirect extends Component {
  render() {
    return (
      <div className="url-redirect__container">this is redirect component</div>
    );
  }
}
// function mapStateToProps(state, props) {
// 	return {
//         search: state.search
//     };
// }
// function mapDispatchToProps(dispatch) {
// 	return {
// 		selectSuggestedPlace: bindActionCreators(selectSuggestedPlace, dispatch)
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(URLRedirect);
export default URLRedirect;
