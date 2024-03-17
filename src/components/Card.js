import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card1(props) {
  return (
    <Card className="card" style={{ width: '18rem', height: '23rem' }}>
      <Card.Img style={{height: "140px"}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        <div className="project-url-container">
            {/* <Button variant="primary">Check it out</Button> */}
            <a href={props.projecturl} className="btn btn-secondary card-button">Check it out</a>
            <a href={props.repo}><img style={{width: "33px"}} src="../images/github.svg"/></a>
        </div>
      </Card.Body>
    </Card>
  );
}

// export default function Card(props) {

//     // const cardBodyStyle = {
//     //     display: "flex",
//     //     flexDirection: "column",
//     //     justifyContent: "space-between"
//     // }

//     const repoImgStyle = {
//         float: "right",
//         height: "33px"
//     }

//     return (
//         <div className="card col-md-4 col-8">
//         <div classNameName="project-ss">
//             <img src={props} className="card-img-top" alt="..." />
//         </div>
//         <div className="card-body">
//             <h5 className="card-title">{props.title}</h5>
//             <p className="card-text">{props.text}</p>
//             <div className="project-links">
//                 <a className="project-url btn btn-secondary" target="_blank" href={props.projecturl}>Check it out</a>
//                 <a className="git-repo" target="_blank" href={props.repo}>
//                     <img src="images/github-black.svg" title="GitHub repository" height="28px" /></a>
//             </div>
//         </div>
//     </div>
//     )
// }
