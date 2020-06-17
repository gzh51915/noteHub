import React, { Component } from 'react'
import { Tabs, Badge } from "antd-mobile"

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
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
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
                        componentList ? componentList.map((item) => (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                            {item}
                        </div>)) : null
                    }
                </Tabs>
            </div >
        )
    }
}
