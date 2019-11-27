import React from 'react';


const Navbar= ()=>{
    return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">WeatherApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav  mx-auto">
      <li class="nav-item  active mr-5">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">Weather</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
        
        </div>
    </nav>

    
    )


}


export default Navbar; 
