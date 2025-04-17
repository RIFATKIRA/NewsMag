import React from 'react'
import Image from '../assests/pexels-cottonbro-10464453.jpg'

const Newsitem = (props) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth: "350px"}}>
  <img src={props.src? props.src:Image}  style={{height:"200px", width:"330px"}}className="card-img-top" alt="..."/>
  <div className="card-body" style={{alignItems:'center'}}>
    <h5 className="card-title">{props.title.slice(0, 50)}</h5>
    <p className="card-text">{props.desc?props.desc.slice(0, 90):"News will be published soon. Stay tooned"}</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem