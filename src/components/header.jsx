import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className="header">
        <div className="">
            <h2>TaskKeeper</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>profile</Link>
            <Link to={"/login"}>Login</Link>
        </article>
    </div>
  )
}

export default header