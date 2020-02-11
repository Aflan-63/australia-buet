import React, { Component } from 'react'
import Sydney from '../images/sydney.png'
import buetLogoRed from '../images/buet_logo.png'
import buetLogo from '../images/home_buet_logo.png'
import OurStoryCard from './OurStoryCard'

import {
    MDBCardTitle,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation,
} from "mdbreact";


export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="apppage">
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
                        <MDBContainer style={{ marginTop: "50px", marginBottom: "1px" }}>
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
                   <OurStoryCard></OurStoryCard>
                </div>
                
            </div>
        )

    }


}
