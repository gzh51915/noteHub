import React, { Component } from 'react'
import { Tabs, Badge } from "antd-mobile"
import List from "../List"
export default class Header extends Component {
    render() {
        const tabs = [
            { title: <Badge >关注</Badge> },
            { title: <Badge >推荐</Badge> },
            { title: <Badge >热榜</Badge> },
        ];
        return (
            <div>
                <Tabs

                    tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <List></List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        推荐
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        热榜
              </div>
                </Tabs>
            </div >
        )
    }
}
