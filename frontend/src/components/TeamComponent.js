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
      "https://lh3.googleusercontent.com/4JQ-T3HTf1hClJkJ-u87AT_T01n_pd0MFWLWbOSukDArAuPMjtkItw6LZ9iqmMVNh5w7xTkmafDk4voMnrAFqHV7RTVKTjr62StI4-aPO7oPEQCNjms4IbmLICWbCk5qFDMhwRgZcbo8khY3UwyEMKgCRY6QydLwyYMhL9e_noLwhzKqaHn2C1J3qJMKKE4pAQZUFUIl4gJKuJY8Xrd8Sz-xmF0HsmeBm1pzP3nqGJJXU9qta_tJXOdX8BT22cE6YhQBz47VCDWzdpFIznRJeNpry_9r4XW2vmYFu7o8W4GYUlvEK1_-CwvTRJTFcQwFMe6XMCeL3LcmO9HP8pQivBXcir-M_9-Dg3poWzfECUsHOzvRW6AvE5ZXYEBulm1cNmSBbS7jzdLqnZ5i8phxNiLDXgzq_KOPDnkUzQC04t44-p67_isspk4jd16bBkJdX4GIK_mjxbPe3tC12s8bd9Yxk4cqJ8uAhlsQ8qMgOemg788poleeHCgd1CcSAB9J_BDCulM8GKYwTPAUU7VVr387TvIGKO62mD5arB4q44eDoOKLOqMX7bnttvnF1hazvwGACYk42VvpnzmLNKdARTtvH8HatV-nCdfqF4p-GDAYGbCcxfee4K2jHx8RDAh82UMZHslnomzzh3h34xnPZtBH_MV_rq5TMZvxwFVW6oYBBHT7N2TQlrYr2MZ6MEL26AWES1v8z3zOk1Pm7pVvgLgNlQ=w1000-no-tmp.jpg",
    title: "Bushra Hameed",
    Subtitle: "Class of 2021",
    text: "Computer Science Major at The University of Texas at Dallas",
  },
  {
    image:
      "https://lh3.googleusercontent.com/P0i6u3gHZrLsh7YWUDH54Z9QgubSW88POCF8rrf76d8ZUBnnEacdBm_BOqNXbPR1L3aDQmz8a-Ua9Y3N-zPIE3NhTcs6onzjubHcegGvPIqufuSeeXioWyR4_GqrD8EKxJ29jtlQ9F7nbCoj90enisbjJ_3sn1nqRf9bck_VHtJl00DYT0KH8TcXen1UxXvIMPGiGdYX5Qm0a5X12OuztIj0O9DoSF8VLUkRCaGnMsjD0TRB7j60P9VzosBQS6D3fWeR89kOW8br9uWqtL2LE7bSUrArmt-sNujhJm2mO4-Hwb7TfZkalDPrMm8RSs0yUfUIqxTiIhD9pi3Tqu3U5FhjXIrt0ocvrhCFGLR6b5_I62yMiildbKdUdxobDgx6y_R1QI-kgVwqpjrd71thT_l-9g6j3DPL03Mg6LtODtX9eaIxqW7nga1S-KXbNZJ_B8E4bbPqrDKPjfNSnNayW04bme_cKV4Va-FPeCQhxyGbMWXwu5xzlkCgRE4wsg89E2mJVz5bS8CqSvv9cIaevlckysKOIoDo4qXHj_ZnjevN_cb8tedQ5pVV76p98jUvO0FyXy3g48iJRT_38M-CWVXvJdg-dyY61DJAdd1zOAnINwO988kYTHp8V3ZjuYLVA2uKg0rktZZFOsjOXwRujsc046WFdpVlqTbNl6sQwEnVOAeY6JOCNXOIFzxS4rvzWQ4OLyotSCYUiZeJdHEVjYbWyg=w1000-no-tmp.jpg",
    title: "Jane Perez",
    Subtitle: "Class of 2022",
    text: "Computer Science Major at Texas A&M University-San Antonio",
  },
  {
    image:
      "https://lh3.googleusercontent.com/E7rU7GDgZiP3ZTjwmAA6t_MPNGWEs2Q6LU3e6evXLzK-zWqs_BI494bgh6TsxKM0-5NleIr5CjmZAgdz4l05tB3W_feptVnNWBMhof4WmtAZhA7ftIePueBcRXmaRP84kcMh57WcV2Txe7tkZWYwSKz_M33YUIu_tk2LPdb6YUwzDBE9PdIunz3ZJ2yoSxE0sJP_NOsq_0whV1uBKAXWkfzFw3P9ScONCycPG6ao74yACdPKDEOT6Zv8FtCcsgSmJY5s24Aapu9nh7k84JJtrVR0M_qAXojKt1il0MXqlsXpQ2krGGAJBtYX2Xdvwu24BMhkkqKn-UoqOymypxsWN6UQv5TKGJ1JV527r1PBqU8YYVQd92Y-G-YsW1p2wKKH0Kb8CWHpMOo0wH9jWR1DV1o3-8uWbEv5LfRGCb-UovjxTgULYLW87acyDc2Nls1lZGwE8VRrHrr1P-xmacgY8m2LpUZ_iHyIX8zMpmTLqRNnxl5jzal-B4_-Tuo0rTHiR2ZrWAm7M20zWusl8i_lSxbRCFleiWc_SujvzodvjfcMfv0klk-4gPQ2fCcE3ca4BPASn-yzDYqO1hcj8_zt5lNnNjnAJFjOJRGpHtTSCDSXBy1XdKMz8EbXgtrjeUBzhtbVHRmOC0jO4RlwgdUiKqTcJk2eTqP_uCOeZCCpmH3wZFmlDCT4DwN8hf-ba6F6NEt6ykYkWvSX012XNfW6jiVlWA=w1000-no-tmp.jpg",
    title: "Anisha Raju",
    Subtitle: "Class of 2024",
    text: "Computer Science Major at California Polytechnic University",
  },
  {
    image:
      "https://lh3.googleusercontent.com/-_Xqol4wFWd6Fj6e7vPlqJt-w5qv7v2OiZd-kRo06PIMVDajYsf0y6-Ig4_cTbMAtAeFp9afOoFMLeXM_bq-X4aTk1es0bZ9SN0i98QYoI22ydlJXZaIzXZdqSXkikNk30zVV9lQlzEmzRnUX9WWzmvjPR2-1LyrL8yrDLRYOI_LkPZyuglDXHtXq4U2UGzsXrdltPNRk-0b2N9pvR17rJIfMEsZeb1qJmTPlv_5cN1-redMkn6DLodH7Qot7GvSsqw-EYa1WCvqv3kqqfSAGe-BeXkjqAI8m_EjOErbnW2dVno0Jtg4P1xzBiWo0VIhYAC5oB2F-PSGR9A7pMvxhvApgvpokq0GJSygd-gnZHtGs_lW4uDOGz4JFFHArEeg6fL7cSG7cx5f7l6IEr4Bqf_1g_nY-zd97OoboJCn0sbEN3pi3UTo7E_HqwgZPM5hS_MxI3RwGtcUqKdt4FAHnNDLy5QaaRlX2_1tL9VIYHDWNW-X_NOzS4QjrSrUL-avGVoyRKytALYJ4Efw9lzndxlRyeZAGBrsO3nZEqkTIg9AdbQRF7VJ6WA2P9nOQ7DVBRT2qXd4hjOuE8Hu6tYj3UviIwFPj4Fzt-N6vwZ_EvggWduilnMDGCstN4IQF2zG8sEom37P3tfp6tHjwH2ORbjZreXmvIlhEJtFsRT11jDwTR_RLYCtnLl2CcNe2PA-L1OYWmEt6D6SPnhvwo54oq0T3w=w1000-no-tmp.jpg",
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