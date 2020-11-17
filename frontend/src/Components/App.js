import React, { Component } from "react";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import ProgressCirclesContainer from "./ProgressCircle/ProgressCirclesContainer";

import BudgetProgressBar from "./ProgressCircle/IndividualBudgetProgressBar";

class App extends Component {
  render() {
    return (
      <div>
        <br />

        <ProgressCirclesContainer />
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchCategories(localStorage.getItem("userId"));
//   }

//   renderList() {
//     console.log(this.props.categories[0]);
//     return this.props.categories.map((category, index) => {
//       return (
//         <div key={category.id}>
//           <h2>{category.category_name}</h2>
//         </div>
//       );
//     });
//   }
//   render() {
//     return <div>{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return { categories: state.categories };
// };

// export default connect(mapStateToProps, { fetchCategories })(App);