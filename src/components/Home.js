import React, { Component } from 'react'
import img from "../img/home.jpg";

export default class Home extends Component {
    render() {
        return (
            <header class="bg-secendary py-5">
                <div class="has-bg-img bg-purple bg-blend-overlay">
                    <div class="container px-5">
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-6">
                                <div class="text-center ">
                                    <h1 class="display-5 fw-bolder text-black mb-2">Welcome To Our Shop</h1>
                                    <p class="lead text-black-50 mb-4">Fine your love and pick it up..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={img} alt="product" className="card-img-top blur" />
                </div>
            </header>
        );
    }
}