import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/Team.css'
const cardInfo = [
  {
    image: "https://lh3.googleusercontent.com/JE_b7a8vUYIZ0Ac-lND4V2sPgO4vDDMnydXwPiQashtS8ptfAnqDuF_tH9LXxztWlqr1lceLUkJfKVR-Ba8=w1000-no-tmp.jpg",
    title: "Soundarya Baskar",
    Subtitle: "Class of 2024",
    text: "Computer Scienc Major at the University of Texas at Dallas",
  },
  {
    image:"https://keep.google.com/u/0/media/v2/1mgJBnanWThaSHLXtCkfYfIcNdePRpZ_fTsyU2yrHmSvvKidTzRwTQFMEUsty3w/1IKnMEUzahuvUzxnoikLmEtxyHj5I4mIVnI05V5SEAipfnfwJyd9R4f0Iu69A7xY?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=701",
    title: "Bushra Hameed",
    Subtitle: "Class of 2021",
    text: "Computer Science Major at The University of Texas at Dallas",
  },
  {
    image:"https://lh3.googleusercontent.com/pw/ACtC-3cmMk5sBwEuALaMeANBETK9KTZsqsFlUWToCM_x32UGilwfPm3884YEUqY1cd92SZ4S03JJNo9dZkaUgrLDFYfBJJkXyFrGTDotBkphLp_y2NzDTeBrJ2uNYzPoPazYGPoN7jF8LgTatg0SEs2mlIM1mA=s736-no?authuser=0",
    title: "Jane Perez",
    Subtitle: "Class of 2023",
    text: "Computer Science Major at Texas A&M University-San Antonio",
  },
  {
    image:"https://keep.google.com/u/0/media/v2/19tWx82aRubNCs5JAfspsnkLrkbgAT6CbNr88Mw9v3-zQrgLFic0CCsb5B5n5Lcw/1CsY00pfpCP6BhIURasGyLzKlrdXGAqUe43FLJ8qGCsrGCU_tfETovfZpnht2MQA?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=497",
    title: "Anisha Raju",
    Subtitle: "Class of 2024",
    text: "Computer Science Major at California Polytechnic University",
  },
  {
    image:"https://keep.google.com/u/0/media/v2/1kjT0DZbR4ivKhWkX1qBLaUNmWtnC2p8cz_7ujDQE4xCEMga52iOK-L5RbV9IPBs/1JJviNRsP-f4_IufbmwPd4aop7fWagGCuhztIL3YJXkQiVL21nPT3N53iWp3lU1o?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=392",
    title: "Khushi Jogani",
    Subtitle: "Class of 2022",
    text: "Information Technology and Systems Major at the University of Texas at Dallas",
  },
  ];

function Team() {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <Row>
        {
          cardInfo.map((card, index) => (
            < Col  md='4' key={index}>
              <Card style={{ width: "100%" }}  className="team-box">
                <Card.Img className="team-image" variant="top" src={card.image} />
                <Card.Body variant="text-right">
                  <Card.Title id="team-title-text">{card.title}</Card.Title>
                  <Card.Subtitle id="team-subtitle-text" className="text-muted">{card.Subtitle}</Card.Subtitle>
                  <Card.Text id="team-about-text" className="text-dark">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div >
  )
};

export default Team;
