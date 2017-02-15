import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component {

    constructor() {
        super();

        this.navLinkClasses = {
            home: "active",
            about: "",
            contact: ""
        };
    }

    render() {        

        for(var property in this.navLinkClasses) {
            if(this.navLinkClasses.hasOwnProperty(property)) {
                if(property === this.props.activeRoute) {
                    this.navLinkClasses[property] = "active";
                }
                else {
                    this.navLinkClasses[property] = "";
                }
            }
        }

        return(
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">{this.props.title}</a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class={this.navLinkClasses.home}><Link to="home">Home</Link></li>
                            <li class={this.navLinkClasses.about}><Link to="about">About</Link></li>
                            <li class={this.navLinkClasses.contact}><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    
    }

}