import React, { Component } from 'react'
import { Tabs, Badge, Toast } from "antd-mobile"
import Swiper from "components/Swiper"
export default class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            tabList: [],
            componentList: []
        }
    }

    componentDidMount() {
        let title = this.props.title;
        let componentList = this.props.componentList
        this.setState({
            tabList: title.map((item) => ({ title: <Badge >{item}</Badge> })),
            componentList
        })
    }
    render() {
        const { tabList, componentList } = this.state;

        return (
            <div>

                <Tabs
                    tabs={tabList}
                    initialPage={0}
                    swipeable={false}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => {
                        console.log('onTabClick', index, tab); Toast.loading('Loading...', 1, () => {
                            console.log('Load complete !!!');
                        });
                        setTimeout(() => {
                            Toast.hide()
                        }, 1000)
                    }}
                >
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <List></List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <List></List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <HotList></HotList>
                    </div> */}
                    {
                        componentList ? componentList.map((item, index) => {
                            if (index === 0 && this.props.title.length === 3) {
                                return (<div key={item}>
                                    <Swiper></Swiper>{item}
                                </div>)
                            } else {
                                return (<div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                                    {item}
                                </div>)
                            }
                        }) : null
                    }
                </Tabs>
            </div >
        )
    }
}
