import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectSuggestedPlace } from "./../../reducers/url";
class Home extends Component {
  render() {
    return <div className="home" />;
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
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
