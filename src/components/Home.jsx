import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button"><Link to={'/'}>Home</Link></button>
    <button class="btn btn-sm btn-outline-secondary" type="button"><Link to={"/Traduction/"}>Traduction</Link></button>
  </form>
</nav>
<div>
<h1>
    Welcome to aymen traduction
</h1>
<img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX34920543.jpg" alt="img1" />
</div>
    </div>
  )
}

export default Home