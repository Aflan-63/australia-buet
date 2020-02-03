import React, { Component } from 'react'
import Background from '../images/home_main_image.png'
import buetLogo from '../images/home_buet_logo.png'
import '../styles/Home.css'
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBAnimation
} from "mdbreact";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };
    }

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );



        return (
            <div id="apppage">
                <Router>
                    <div>
                        <MDBNavbar
                            color="red"
                            dark
                            expand="md"
                            fixed="top"
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <img src={buetLogo} width="25%"></img>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={this.state.collapsed} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">Constitute</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Events</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Gallery</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Members</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Blogs</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Contact</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Login</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                                <div className="md-form my-0">
                                                    <input
                                                        className="form-control mr-sm-2"
                                                        type="text"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {this.state.collapsed && overlay}
                    </div>
                </Router>
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol
                                    md="7.5"
                                    className="white-text text-left text-md-left mt-xl-5 mb-5"
                                >
                                    <MDBAnimation type="fadeInLeft" delay=".3s">
                                        <h1 className="h1-responsive font-weight-bold mt-sm-6">
                                            Welcome to Buet Alumni of Australia
                    </h1>
                                        <hr className="hr-light" />
                                        <h6 className="mb-4">
                                            Developing stronger bond and cohesion among buet graduates.
                    </h6>
                                        <MDBBtn color="light">Sign In</MDBBtn>
                                        <MDBBtn outline color="white">
                                            Sign up
                    </MDBBtn>
                                    </MDBAnimation>
                                </MDBCol>

                                <MDBCol md="1" xl="5" className="mt-xl-5">
                                    <MDBAnimation type="fadeInLeft" delay=".5s">
                                        {/* <img
                                            src={buetLogo}
                                            alt=""
                                            className="img-fluid"
                                        /> */}
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        )

    }


}
