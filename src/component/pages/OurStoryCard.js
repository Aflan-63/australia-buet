import React, { Component } from 'react'
import Home from './Home'
import OurCommunity from '../images/our_community.png'
import CardOne from '../images/mission_card.png'
import CardTwo from '../images/objective_card.png'
import CardThree from '../images/history_card.png'
import '../styles/OurStoryCard.css'
import { MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'

export default class OurStoryCard extends Component {
    render() {
        const textCardOne = "To establish a common platform for social, cultural and professional activities among the BUET alumni living in Australia for developing stronger bond and cohesion among themselves in order to help and support each other personally and professionally and for providing support to the BUET Alumni and their families who come to Australia for higher studies or professional development or permanent settlement";
        const textCardTwo = "We would achieve our mission by pursuing the following objectives that are embedded in the constitution of BUET Alumni.To establish a common platform for social, cultural and professional activities among the BUET alumni living in Australia. To develop stronger bond and cohesion among the fellow alumni in order to help and support each other personally and professionally.";
        const textCardThree = "BUET Alumni Association Australia (BUETAA) was founded in 2009. Engineers and Architects who were involved with the establishment of BUETAA were Dr. Mirza Manirul Hassan, Mahmuda Mamun Runu, Zulhash Bhuyian, Nilufa Akter Keya, Mansurul Haque, Tanveer Ahmed Tomal, Saiful Islam, Hasen Ali, Fazlul Haque, Manjur Rahman, Syed Moyed Hasan and Yunus Rana.";

        const cardOne =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <div style={{ background: 'DarkRed' }}>
                        <img className="img-fluid" style={{ opacity: '0.8' }} src={CardOne} waves />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{ fontWeight: "bold", fontFamily: "Arcon" }}>OUR MISSION</MDBCardTitle>
                        <MDBCardText>
                            {textCardOne}
                        </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        const cardTwo =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <div style={{ background: 'DarkRed' }}>
                        <img className="img-fluid" style={{ opacity: '0.8' }} src={CardTwo} waves />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{ fontWeight: "bold", fontFamily: "Arcon" }}>OUR OBJECTIVE</MDBCardTitle>
                        <MDBCardText>
                            {textCardTwo}
                        </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        const cardThree =
            <MDBCol>
                <MDBCard style={{ width: "100%" }}>
                    <div style={{ background: 'DarkRed' }}>
                        <img className="img-fluid" style={{ opacity: '0.8' }} src={CardThree} waves />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{ fontWeight: "bold", fontFamily: "Arcon" }}>OUR HISTORY</MDBCardTitle>
                        <MDBCardText>
                            {textCardThree}
                        </MDBCardText>
                        <MDBBtn className="btn-red" href="#">Read more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        return (

            <div>
                <div style={{ margin: '1px' }}>

                    <div style={{ width: '100%', position: 'absolute', left: '12%' }}>
                        <div style={{ float: 'left', width: '25%' }} >{cardOne}</div>
                        <div style={{ float: 'left', width: '25%' }}>{cardTwo}</div>
                        <div style={{ float: 'left', width: '25%' }}>{cardThree}</div>
                        <br style={{ clear: 'left' }} />
                    </div>

                </div>
                <div style={{ margin: '10px' }}>
                    <div className="text-block">

                        <h1 style={{ fontFamily: 'Nexa', marginTop: '10px', paddingLeft: '10%', fontSize: '75px', opacity: '0.9', fontWeight: "bold" }}>Our Community</h1>
                        <img src={OurCommunity} style={{ opacity: '0.5' }}></img>


                    </div>
                </div>
            </div>


        )
    }
}
