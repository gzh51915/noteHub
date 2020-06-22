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
import Login from "views/Myinfo/Login"
import Register from "views/Myinfo/Register"
import SubareaDetail from "views/Discovery/SubareaDetail"
import Info from "views/Myinfo/Info"
import { Route, Switch } from "react-router-dom"
export default class Navbar extends React.Component {
    constructor(props) {
        super()
    }
    componentDidMount() {
        this.props.history.push("/user")
    }
    render() {
        const pathname = this.props.location.pathname.split("/")[1]
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
                        key="home"
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
                        selected={pathname === "home"}

                        onPress={() => {
                            this.props.history.push("/home")

                        }}
                    >
                        <Switch>
                            <Route exact path="/home" component={Home}  ></Route>
                            <Route path="/home/questionsdetail/:id" component={Answer}></Route>

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

                        selected={pathname === "discover"}
                        onPress={() => {
                            this.props.history.push("/discover")

                        }}
                    >
                        <Switch>
                            <Route exact path="/discover" component={Discovery}  ></Route>
                            <Route path="/discover/SubareaDetail" component={SubareaDetail}></Route>
                        </Switch>

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
                        key="message"

                        selected={pathname === "message"}
                        onPress={() => {
                            this.props.history.push("/message")

                        }}
                    >
                        <Switch>
                            <Route exact path="/message" component={Messages}></Route>
                        </Switch>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${my}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${myactive}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="我的"
                        key="user"
                        selected={pathname === "user"}
                        onPress={() => {
                            this.props.history.push("/user")

                        }}
                    >
                        <Switch>
                            <Route exact path="/user" component={Myinfo}></Route>
                            <Route path="/user/login" component={Login}></Route>
                            <Route path="/user/register" component={Register}></Route>
                            <Route path="/user/info" component={Info}></Route>
                        </Switch>
                    </TabBar.Item>
                </TabBar>
            </div >

        );
    }
}