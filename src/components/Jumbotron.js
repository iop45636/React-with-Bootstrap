import React from 'react'


const bg = require('../assets/3.jpg'); 

export const Jumbotron = () => (

  <div className="jumbotron jumbotron-fluid)" style={{backgroundImage: "url("+bg+")", backgroundSize: "cover", height: 500}}>
  <div className="container">
    <h1 className="display-4 text-light">Fluid jumbotron</h1>
    <p className="lead text-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <a class="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.3/components/jumbotron/" role="button">Learn more</a>
  </div>
</div>

)