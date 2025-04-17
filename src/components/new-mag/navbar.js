import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> <span class="badge bg-light text-dark fs-4">NewsMag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("business")}}>Buisness</div>
          </li>

          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("entertainment")}}>Entertainment</div>
          </li>

          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("health")}}>Health</div>
          </li>

          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("science")}}>Science</div>
          </li>

          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("sports")}}>Sports</div>
          </li>

          <li className="nav-item">
            <div className="nav-link" onClick={()=>{props.setcategory("technology")}}>Technology</div>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar