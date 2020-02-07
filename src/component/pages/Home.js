import React, { Component } from 'react'
import OurStoryCard from './OurStoryCard'
import Sydney from '../images/sydney.png'
import buetLogoRed from '../images/buet_logo.png'
import buetLogo from '../images/home_buet_logo.png'
import '../styles/Home.css'
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
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
    MDBAnimation,
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

        //Not Required for now.
        // const OurStoryCard = (

        //     <MDBCol className="d-inline-flex">
        //         <MDBCard style={{ width: "100em", align: "center" }}>
        //             <MDBCardBody className="col-md-12" style={{ border: "20px solid #fff" }}>

        //                 <MDBCardText style={{ fontFamily: "Product Sans" }}>
        //                     <h4>
        //                         <br></br>
        //                         Bangladesh University of Engineering and Technology commonly known as BUET,
        //                         is a public university in Bangladesh, which focuses on the study of engineering and architecture. Founded in 1912, it is the oldest institution for the study of engineering (initially
        //                         it was a diploma school), architecture and urban planning in Bangladesh.
        //                     </h4>
        //                 </MDBCardText>
        //                 <MDBBtn className="btn-red" rounded href="#" style={{ margin: "20px" }}><h3>Read more</h3></MDBBtn>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBCol>
        // )

        return (

            <div>
                <div>
                    <div id="apppage">
                        <Router>
                            <div>
                                <MDBNavbar
                                    color="red darken-4"
                                    dark
                                    scrollingNavbarOffset
                                    expand="md"
                                    fixed="top"
                                    scrolling
                                    transparent
                                >
                                    <MDBContainer>
                                        <MDBNavbarBrand>
                                            <img src={buetLogo} width="20%"></img>
                                        </MDBNavbarBrand>
                                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                                            <MDBNavbarNav center>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#!">Home</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#!">Gallery</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#!">Members</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#!">Blog</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to="#!">Contact</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem active>
                                                    <MDBNavLink to="#!">Login</MDBNavLink>
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
                                        <MDBAnimation type="fadeInLeft" delay=".5s">
                                            <img
                                                src={buetLogo}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </MDBAnimation>
                                        <MDBCol
                                            md="7.5"
                                            className="white-text text-left text-md-left mt-xl-5 mb-5"
                                        >
                                            <MDBAnimation type="fadeInLeft" delay=".3s">
                                                <h1 className="h1-responsive font-weight-bold mt-sm-6" style={{ fontWeight: 'lighter', fontFamily: 'Arcon' }}>
                                                    Welcome to Buet Alumni of Australia
                                        </h1>
                                                <hr className="hr-light" />
                                                <h3 className="mb-4" style={{ fontWeight: 'lighter', fontFamily: 'Arcon' }}>
                                                    Developing stronger bond and cohesion among buet graduates.
                                         </h3>
                                                <MDBBtn rounded color="light" >Sign In</MDBBtn>
                                                <MDBBtn outline color="white" >
                                                    Sign up
                                        </MDBBtn>

                                            </MDBAnimation>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBMask>
                        </MDBView>

                        <MDBContainer style={{ marginTop: "50px", marginBottom: "1px"}}>

                            <MDBCol md="12" className="text-center">
                                <MDBAnimation type="fadeInLeft" delay=".5s">
                                    <img
                                        src={buetLogoRed}
                                        width="15%"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </MDBAnimation>
                                <MDBCardTitle style={{ fontSize: '30px', fontFamily: 'nexa', fontWeight: 'bold', margin: "20px" }}>OUR STORY</MDBCardTitle>
                                <br></br>
                            </MDBCol>
                            <MDBCol className="text-center">
                                {OurStoryCard}
                            </MDBCol>

                        </MDBContainer>
                    </div>

                    <div>
                        <img src={Sydney} style={{ marginTop: "5px", marginBottom: "50px", backgroundSize: 'cover', width: '100%' }}></img>
                        <br></br>
                    </div>
                </div>
            </div>
        )

    }


}
