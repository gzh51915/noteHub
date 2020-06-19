import { TabBar, Toast } from 'antd-mobile';
import React from "react"
import home from "assets/images/home.png"
import homeactive from "assets/images/home-active.png"
import msg from "assets/images/message.png"
import msgactive from "assets/images/message-active.png"
import my from "assets/images/myinfo.png"
import myactive from "assets/images/myinfo-active.png"
import dis from "assets/images/discover.png"
import disactive from "assets/images/discover-active.png"
import Home from "../../views/Home"
import Myinfo from "../../views/Myinfo"
import Messages from "../../views/Messages"
import Discovery from "../../views/Discovery"
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.history.push("/home")
    }
    render() {
        const pathname = this.props.location.pathname
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
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
                            Toast.loading('Loading...', 1, () => {
                                console.log('Load complete !!!');
                            });
                            setTimeout(() => {
                                Toast.hide()
                            }, 1000)
                        }}

                    >
                        {pathname === "/home" ? <Home></Home> : null}
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
                            Toast.loading('Loading...', 1, () => {
                                console.log('Load complete !!!');
                            });
                            setTimeout(() => {
                                Toast.hide()
                            }, 1000)
                        }}
                    >
                        {pathname === "/discover" ? < Discovery></ Discovery> : null}
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
                            Toast.loading('Loading...', 1, () => {
                                console.log('Load complete !!!');
                            });
                            setTimeout(() => {
                                Toast.hide()
                            }, 1000)
                        }}
                    >
                        {pathname === "/message" ? < Messages></ Messages> : null}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: `${my}` }}
                        selectedIcon={{ uri: `${myactive}` }}
                        title="我的"
                        key="Myinfo"
                        selected={pathname === "/user"}
                        onPress={() => {
                            this.props.history.push("/user")
                            Toast.loading('Loading...', 1, () => {
                                console.log('Load complete !!!');
                            });
                            setTimeout(() => {
                                Toast.hide()
                            }, 1000)
                        }}
                    >
                        {pathname === "/user" ? < Myinfo></ Myinfo> : null}
                    </TabBar.Item>
                </TabBar>
            </div >

        );
    }
}