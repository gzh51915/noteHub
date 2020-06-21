import React, { Component, PureComponent } from 'react'
import Header from "components/Header"
export default class Home extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div >
                <Header title={["关注", "推荐", "热榜"]} ></Header>
            </div>

        )
    }
}
