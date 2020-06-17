import React, { Component } from 'react'
import Header from "components/Header"
import List from "components/List"
import HotList from "./HotList"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header title={["关注", "推荐", "热榜"]} componentList={[<List />, <List />, <HotList />]}></Header>
            </div>
        )
    }
}
