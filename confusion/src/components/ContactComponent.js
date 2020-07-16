/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   firstname: "",
    //   lastname: "",
    //   telnum: "",
    //   email: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   // after user starts typing then only we start validating
    //   touched: {
    //     firstname: false,
    //     lastname: false,
    //     telnum: false,
    //     email: false,
    //   },
    // };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleBlur.bind(this);
  }

  // handleInputChange(event) {
  //   // .target is used to capture the value entered in the input field
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value, // set target's name to the target's value entered or the checkbox value
  //   });
  // }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }

  // handleBlur = (field) => () => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true }, // changing the touched field(=firstname,lastname...) value
  //   });
  // };

  // validate(firstname, lastname, telnum, email) {
  //   const errors = {
  //     firstname: "",
  //     lastname: "",
  //     telnum: "",
  //     email: "",
  //   };

  //   if (this.state.touched.firstname && firstname.length < 3)
  //     errors.firstname = "First name should be >= 3 characters";
  //   else if (this.state.touched.firstname && firstname.length > 10)
  //     errors.firstname = "First name should be < 10 characters";

  //   if (this.state.touched.lastname && lastname.length < 3)
  //     errors.lastname = "Last name should be >= 3 characters";
  //   else if (this.state.touched.lastname && lastname.length > 10)
  //     errors.lastname = "Last name should be < 10 characters";

  //   const reg = /^\d+$/; // find digits between 0-9
  //   if (this.state.touched.telnum && !reg.test(telnum))
  //     //test checks for a match in the string
  //     errors.telnum = "Tel. Number should contain only digits";

  //   if (
  //     this.state.touched.email &&
  //     email.split("").filter((x) => x === "@").length !== 1
  //   )
  //     //check if only one @ character should be present in the email entered
  //     errors.email = "Email should contain a @";

  //   return errors;
  // }

  render() {
    // Error check is done each time contact component is rendered
    // const errors = this.validate(
    //   this.state.firstname,
    //   this.state.firstname,
    //   this.state.telnum,
    //   this.state.email
    // );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            {/* on md to lg screens columns occupy 9 grid parts else 12 */}
            {/* This is a controlled component in React as we keep updating and storing the value in the state which is the single source of truth and this value can also be accessed by other components */}
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
