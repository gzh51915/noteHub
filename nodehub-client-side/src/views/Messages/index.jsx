import React, { Component } from 'react'
import Header from "components/Header"

export default class index extends Component {
    render() {
        return (
            <div>
                <Header title={["动态", "消息"]}></Header>
            </div>
        )
    }
}
