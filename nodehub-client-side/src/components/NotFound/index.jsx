import React, { Component } from 'react'
import notfound from "assets/images/notfound.jpg"
export default class index extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <img src={notfound} alt="" style={{ display: "block", width: "100%" }} />
                <p style={{ width: "100%", textAlign: "center" }}>Not Found</p>
            </div >
        )
    }
}
