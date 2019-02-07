import React from "react";
import { render } from "react-dom";

export class Header extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
            
                    <div class="jumbotron">
                        <h1 class="display-8">Login Page</h1>                        
                        <hr class="my-10" />
                        <p>If you are a new user please Register or else login with your username or password </p>
                        <a class="btn btn-outline-info btn-md" href="#" role="button">Login</a>
                        <a class="btn btn-outline-primary btn-md" href="#" role="button">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}