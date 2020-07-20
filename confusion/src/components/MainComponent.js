import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// connect used to connect component to redux store
import About from "./AboutComponent";
import { addComment } from "../redux/ActionCreators";

// takes in the reducer's state and is available as props to the MainComponent
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

class Main extends Component {
  render() {
    // A match object contains information about how a <Route path> matched the URL. match objects contain the following properties. Part of react-router.
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    const HomePage = () => {
      return (
        <Home
          // if dish is featured as true in the dishes data then it will be displayed
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          {/* If we know that only one route will be chosen, we can use a <Switch> component to render only the first route that matches the location(used for exact path) */}
          {/* Dynamic Routing used */}
          {/* <Link> components are how you create links to those different routes */}
          {/* <Route> component needs a path which is the URL and then a component that you want rendered when navigating to that path. */}
          <Route path="/home" component={HomePage} />
          {/*"exact path" only displays one component at a time and switches between the components when the link is pressed */}
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
            // Passing leaders to About component
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* Routes the menu to the exact dish using dishid and loads it seperately */}
          <Route exact path="/contactus" component={Contact} />
          {/* Redirect= Default if wrong URL entered */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// connecting component to the react router
