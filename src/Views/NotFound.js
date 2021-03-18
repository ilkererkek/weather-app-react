import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='container center'>
            <h1>404</h1>
            <h3>We could not find the page you're looking for. We are working on it.</h3>
            <Link className="btn btn-main-color" to='/'>Home</Link>
        </div>
    )
}

export default NotFound
