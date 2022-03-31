import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div class="container-fluid rounded mt-5">
                <h1 class="text-center"> Contact US</h1>
            <div class="row px-5 mt-5" >
                <div class="col-sm-6">
                    <div>
                        <h3 class="text-dark">Get a quote</h3>
                        <p class="text-secondary">Fill up the form and our Team will get back to you within in 24 hours</p>
                    </div>
                    <div class="links" id="bordering"> <a href="#" class="btn rounded text-dark p-3"><i class="fa fa-phone icon text-primary pr-3"></i>+855(23 4567 8910)</a> <a href="#" class="btn rounded text-dark p-3"><i class="fa fa-envelope icon text-primary pr-3"></i>phoneshop@gmail.com</a> <a href="#" class="btn rounded text-dark p-3"><i class="fa fa-map-marker icon text-primary pr-3"></i>102 street 271 Phnom Penh</a> </div>
                    <div class="pt-lg-4 d-flex flex-row justify-content-start">
                        <div class="pad-icon"> <a class="fa fa-facebook text-dark" href="#"></a> </div>
                        <div class="pad-icon"> <a class="fa fa-twitter text-dark" href="#"></a> </div>
                        <div class="pad-icon"> <a class="fa fa-instagram text-dark" href="#"></a> </div>
                    </div>
                </div>
                <div class="col-sm-6 pad">
                    <form class="rounded msg-form">
                        <div class="form-group"> <label for="name" class="h6">Your Name</label>
                            <div class="input-group border rounded">
                                <div class="input-group-addon px-2 pt-1">
                                    <p class="fa fa-user-o text-primary"></p>
                                </div> <input type="text" class="form-control border-0"/>
                            </div>
                        </div>
                        <div class="form-group"> <label for="name" class="h6">Email</label>
                            <div class="input-group border rounded">
                                <div class="input-group-addon px-2 pt-1"> <i class="fa fa-envelope text-primary"></i> </div> <input type="text" class="form-control border-0"/>
                            </div>
                        </div>
                        <div class="form-group"> <label for="msg" class="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" class="form-control bg-light" placeholder="Message"></textarea> </div>
                        <div class="form-group d-flex justify-content-end"> <input type="submit" class="btn btn-primary text-white" value="send message"/> </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}