// 发现区
import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import Channel from '@/components/discover/Channel'
import Subarea from '@/components/discover/Subarea'
import { connect } from 'react-redux'
import {getSubareaAsync} from '@/redux/actions'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: '频道' },
                { title: '分区' }
            ]
        }
    }
    componentDidMount() {
        this.props.getSubareaAsync('/getSubareaData')
    }
    render() {
        const { tabs } = this.state
        return (
            <div className='discover-box'>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {/* 内容区域 */}
                    {/* 频道 */}
                    <Channel></Channel>
                    {/* 分区 */}
                    <Subarea></Subarea>
                </Tabs>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getSubarea: (action) => dispatch(action)
//     }
// }
export default connect(null,{getSubareaAsync})(Index)
