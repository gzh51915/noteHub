import { TabBar } from 'antd-mobile';
import React from "react"
import home from "assets/images/home.png"
import homeactive from "assets/images/home-active.png"
import msg from "assets/images/message.png"
import msgactive from "assets/images/message-active.png"
import my from "assets/images/myinfo.png"
import myactive from "assets/images/myinfo-active.png"
import dis from "assets/images/discover.png"
import disactive from "assets/images/discover-active.png"
import Home from "views/Home"
import Myinfo from "views/Myinfo"
import Messages from "views/Messages"
import Discovery from "views/Discovery"
import Answer from "views/Answer"

import { Route, Switch } from "react-router-dom"
export default class Navbar extends React.Component {
    constructor(props) {
        super()
    }
    componentDidMount() {
        this.props.history.push("/home")
    }
    render() {
        const pathname = this.props.location.pathname
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"

                >
                    <TabBar.Item
                        ref="sroll"
                        title="首页"
                        key="Home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${homeactive}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={pathname === "/home"}

                        onPress={() => {
                            this.props.history.push("/home")

                        }}
                    >
                        <Switch>
                            <Route exact path="/home" component={Home}  ></Route>
                            <Route path="/home/questionsdetail/:id" component={Answer}></Route>
                            <Route path="/home/addAnswer/:id" ></Route>
                        </Switch>

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${dis}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${disactive}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="发现"
                        key="discover"

                        selected={pathname === "/discover"}
                        onPress={() => {
                            this.props.history.push("/discover")

                        }}
                    >
                        <Route exact path="/discover" component={Discovery}  ></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${msg}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${msgactive}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="消息"
                        key="Message"

                        selected={pathname === "/message"}
                        onPress={() => {
                            this.props.history.push("/message")

                        }}
                    >
                        <Route exact path="/message" component={Messages}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: `${my}` }}
                        selectedIcon={{ uri: `${myactive}` }}
                        title="我的"
                        key="Myinfo"
                        selected={pathname === "/user"}
                        onPress={() => {
                            this.props.history.push("/user")

                        }}
                    >
                        <Route exact path="/user" component={Myinfo}></Route>
                    </TabBar.Item>
                </TabBar>
            </div >

        );
    }
}