import React from "react"
import {GoMail} from "react-icons/go"
import image from "/assets/profile.png"

export default function Info(){
    return(
        <div className="info">
            <img className="profile-pic" src={image} />
            <div className="center">
                <h1>Cindy</h1>
                <h3>frontend developer</h3>
                <h4>Cindy.website</h4>
                <button className="button">
                    <GoMail />
                    Email
                </button>
            </div>
        </div>
    )
}