import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
// import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    const HomePage = () => {
      return <Home />;
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
            component={() => <Menu dishes={this.state.dishes} />}
          />
          {/* Redirect= Default if wrong URL entered */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
