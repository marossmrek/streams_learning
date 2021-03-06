import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" classname="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" classname="item">
                    All Streams
                </Link>
            </div>
        </div>
    )
}

export default Header
