import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-info">
                <Link to='/'>
                    <img src={logo} alt="store" class="navbar-brand" /> 
                </Link> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                        <li class="nav-item ">
                            <Link to="/" class="nav-link text-dark">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/product" class="nav-link text-dark">
                                Products
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link text-dark">
                                Contact US
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
        )
    }
}
