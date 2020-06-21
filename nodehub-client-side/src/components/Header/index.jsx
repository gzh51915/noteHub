import React, { Component } from 'react'
import { Tabs, Badge } from "antd-mobile"
import Swiper from "components/Swiper"
import MegList from "views/Messages/MessageList"
import ActionList from "views/Messages/ActionList"
import List from "components/List"
import HotList from "views/Home/HotList"
import Notfound from "components/NotFound"
import Recommend from "views/Home/Recommend"
export default class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            tabList: [],
            title: []
        }
    }
    componentDidMount() {
        let title = this.props.title;
        this.setState({
            tabList: title.map((item) => ({ title: <Badge >{item}</Badge> })),
            title
        })

    }

    render() {
        const { tabList, title } = this.state;
        if (title.length == 3) {
            return (
                <div >
                    <Tabs
                        tabs={tabList}
                        initialPage={0}
                        swipeable={false}
                    >
                        <div style={{ height: 'auto', backgroundColor: '#fff' }} >
                            <Swiper></Swiper><List ></List>
                        </div>
                        <div style={{ height: 'auto', backgroundColor: '#fff' }}>
                            <Recommend></Recommend>
                        </div>
                        <div style={{ height: 'auto', backgroundColor: '#fff' }}>
                            <HotList></HotList>
                        </div>
                    </Tabs>
                </div >
            )
        }
        else if (title.length == 2) {
            return (
                <div >
                    <Tabs
                        tabs={tabList}
                        initialPage={0}
                        swipeable={false}
                    >

                        <div style={{ height: 'auto', backgroundColor: '#fff' }}>
                            <ActionList></ActionList>
                        </div>
                        <div style={{ height: 'auto', backgroundColor: '#fff' }}>
                            <MegList></MegList>
                        </div>
                    </Tabs>
                </div >
            )
        }
        else {
            return <Notfound />
        }

    }
}
