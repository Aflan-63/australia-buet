import React, { Component } from 'react'
import OurStoryCard from './OurStoryCard'
import Home from './Home'
import '../styles/Home.css'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import {
    MDBCardTitle,
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
import buetLogo from '../images/home_buet_logo.png'
import Constitute from './Constitute'
import Members from './Members'
import Blogs from './Blogs'
import Contact from './Contact'
import ReactDOM from 'react-dom'
export default class HomeCombined extends Component {
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
        const RouterRender = (
            <Router>
                <div id="apppage">
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
                                            <MDBNavLink to="/">Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/Gallery">Gallery</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/Members">Members</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/Blogs">Blog</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/Contact">Contact</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">Login</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>

                                </MDBCollapse>

                            </MDBContainer>
                        </MDBNavbar>
                        <Switch>
                            <Route exact path="/"><Home></Home></Route>
                            <Route path="/Gallery"><Constitute></Constitute></Route>
                            <Route path="/Members"><Members></Members></Route>
                            <Route path="/Blogs"><Blogs></Blogs></Route>
                            <Route path="/Contact"><Contact></Contact></Route>
                        </Switch>
                        {this.state.collapsed && overlay}
                    </div>
                </div>
            </Router>

        )
        ReactDOM.render(RouterRender, document.getElementById('root'));
        return (
            <div>
           
            </div>
        )
    }
}

