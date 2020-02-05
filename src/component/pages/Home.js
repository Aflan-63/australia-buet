import React, { Component } from 'react'
import Background from '../images/home_main_image.png'
import ourStory from '../images/home_our_story.png'
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



        return (
            <div>
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
                                        <MDBNavbarNav center>
                                            {/* <MDBNavItem active> */}
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Home</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Constitute</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Events</MDBNavLink>
                                            </MDBNavItem>
                                            {/* <MDBNavItem>
                                            <MDBNavLink to="#!">Gallery</MDBNavLink>
                                        </MDBNavItem> */}
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Members</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Blogs</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="#!">Contact</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem active>
                                                <MDBNavLink to="#!">Login</MDBNavLink>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                        {/* <MDBNavbarNav right>
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
                                    </MDBNavbarNav> */}
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
                                <h1 style={{ fontWeight: 'bold' }}>
                                    Our Story
                            </h1>
                            </MDBCol>
                            <MDBCol md="15" className="text-center">
                                <p>
                                    <br></br>
                                    Bangladesh University of Engineering and Technology (Bengali: বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়়, [baŋladeʃ prokowʃɔl biʃʃobiddalɔe̯]), commonly known as BUET (pronounced [bue̯eʈ]; Bengali: বুয়েট),
                                    is a public university in Bangladesh, which focuses on the study of engineering and architecture. Founded in 1912, it is the oldest institution for the study of engineering (initially
                                    it was a diploma school), architecture and urban planning in Bangladesh.
                                    Every year, around 1055 students get accepted to their undergraduate programs to study engineering, architecture, and urban planning. Of the 12,500 candidates selected to write the
                                    undergraduate admission test from an initial application pool of over 112,500 applicants, only about the top 1030 are admitted (Engineering & Urban Planning 975 seats and Architecture 55 seats).
                                    Around 1000 graduate students are accepted into their Masters and PhD program on an annual basis. The total number of teachers is around 600. With the construction of new academic buildings, an
                                    auditorium complex, and halls of residence, the university has continued to expand over the last three decades. BUET has been ranked 175th among the Asian universities in the 2019 edition of QS
                                    World University Rankings. BUET has been ranked #2001-3000 among all universities on QS World University Rankings.
                            </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>

                <div>
                    <img src={ourStory} style={{ backgroundSize: 'cover', width:'100%', minHeight: '100vh' }}></img>
                </div>
            </div>

        )

    }


}
