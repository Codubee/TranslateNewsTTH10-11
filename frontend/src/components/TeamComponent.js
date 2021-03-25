import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';

const cardInfo = [
  {
    image: "https://lh3.googleusercontent.com/JE_b7a8vUYIZ0Ac-lND4V2sPgO4vDDMnydXwPiQashtS8ptfAnqDuF_tH9LXxztWlqr1lceLUkJfKVR-Ba8=w1000-no-tmp.jpg",
    title: "Soundarya Baskar",
    Subtitle: "Class of 2024",
    text: "Computer Science Major at the University of Texas at Dallas",
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/ACtC-3fdycqwH7_K-NVIavtSODx5H7Ms5LuoF2SP-wJX0wr0PdKaE9xkNnMwT9JDV8eOF8jZozUOX6P-Mnz9mBGYJLnJ8Sxbfd4w8obWUnUyTknqo0k7l38J0RY-63PFj4qg9pXDRySuc-R_z9MYPfeNOSpF7Q=w611-h588-no?authuser=0",
    title: "Bushra Hameed",
    Subtitle: "Class of 2021",
    text: "Computer Science Major at The University of Texas at Dallas",
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/ACtC-3cmMk5sBwEuALaMeANBETK9KTZsqsFlUWToCM_x32UGilwfPm3884YEUqY1cd92SZ4S03JJNo9dZkaUgrLDFYfBJJkXyFrGTDotBkphLp_y2NzDTeBrJ2uNYzPoPazYGPoN7jF8LgTatg0SEs2mlIM1mA=s736-no?authuser=0",
    title: "Jane Perez",
    Subtitle: "Class of 2022",
    text: "Computer Science Major at Texas A&M University-San Antonio",
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/ACtC-3flaqcgtIKe3thNWIESUMoln8OABSLt1UFU76dvDPkN8ELW18DKCTW8JM9lw2XCwtUZtk_2XvzKc5BEPan7jIgGjPAwHzfOI_DW6u8QRYWjBg1xkB2qY_AdQ7aXWVh0sU9w6AMjHD-ivYwi_zCu51-hIQ=w525-h658-no?authuser=0",
    title: "Anisha Raju",
    Subtitle: "Class of 2024",
    text: "Computer Science Major at California Polytechnic University",
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/ACtC-3fVGDPRnpwD5I2c4VE4F2fYfrIspzkC2_dROpECFusx-esCq6H_XLlZO0Vt3tw0TyHTQPhb9UN2tpt7NhDNrk-ctcPwhqwBY1kJIOAI3Xes0jNTWvfUoHXVCWmBAYKXnxGGJ4Jnz0EMfDcC0VpKmlI2yA=w451-h622-no?authuser=0",
    title: "Khushi Jogani",
    Subtitle: "Class of 2024",
    text: "Information Technology and Systems Major at the University of Texas at Dallas",
  },
  ];

function Team() {
  return (
    <div className="grid">
      <Row>
        {
          cardInfo.map((card, index) => (
            < Col sm='6' md='4'>
              <Card style={{ width: "22rem" }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Subtitle>{card.Subtitle}</Card.Subtitle>
                  <Card.Text>{card.text}</Card.Text>
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