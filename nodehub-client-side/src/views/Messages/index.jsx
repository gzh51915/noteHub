import React, { Component } from 'react'
import Header from "components/Header"
import MegList from "./MessageList"
import ActionList from "./ActionList"
export default class index extends Component {
    render() {
        return (
            <div>
                <Header title={["动态", "消息"]} componentList={[<ActionList />, <MegList />]} ></Header>
            </div>
        )
    }
}
