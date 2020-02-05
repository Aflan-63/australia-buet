import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { missionCard } from '../images/mission_card.png'
export default class OurStoryCard extends Component {
    render() {
        const cardOne =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardBody>
                        <MDBCardTitle>Our Mission</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                    </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        const cardTwo =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardBody>
                        <MDBCardTitle>Our Objective</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
        </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        const cardThree =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardBody>
                        <MDBCardTitle>Our History</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
        </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        return (
            // <div>
            //     <img src={missionCard}></img>
            //     {cardOne}
            // </div>
            // <div>{cardOne}</div>
            <div style={{ width: '100%', position: 'absolute', left: '12%' }}>
                <div style={{ float: 'left', width: '25%' }}>{cardOne}</div>
                <div style={{ float: 'left', width: '25%' }}>{cardTwo}</div>
                <div style={{ float: 'left', width: '25%' }}>{cardThree}</div>
                <br style={{ clear: 'left' }} />
            </div>
        )
    }
}
