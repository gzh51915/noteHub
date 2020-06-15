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
import Home from "../../views/Home"
import Myinfo from "../../views/Myinfo"
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '80%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
        </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
        </a>
            </div>
        );
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '92%', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
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
                        selected={this.state.selectedTab === 'Home'}

                        onPress={() => {
                            this.setState({
                                selectedTab: 'Home',
                            });
                        }}

                    >
                        <Home></Home>
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

                        selected={this.state.selectedTab === 'discover'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'discover',
                            });
                        }}
                    >
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

                        selected={this.state.selectedTab === 'Message'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Message',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: `${my}` }}
                        selectedIcon={{ uri: `${myactive}` }}
                        title="我的"
                        key="Myinfo"
                        selected={this.state.selectedTab === 'Myinfo'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Myinfo',
                            });
                        }}
                    >
                        <Myinfo></Myinfo>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}