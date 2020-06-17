// 分区组件
import React, { Component } from 'react'
import './css/Subarea.css'
import { connect } from 'react-redux'
// import SubareaDetail from '@/components/SubareaDetail'
import { withRouter } from 'react-router-dom'
class Subarea extends Component {
    // constructor(props) {
    //     super(props)
    // }
    handleItemClick = (id) => {
        this.props.history.push({
            pathname: '/SubareaDetail',
            search: `?id=${id}`,
        })
    }
    render() {
        const list = this.props.subareaList
        return (
            <div className='subarea-container clear-fix'>
                {
                    list.map((item) => {
                        return (<div key={item.id} onClick={() => this.handleItemClick(item.id)}>
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>)
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        subareaList: state.getSubarea
    }
}
export default connect(mapStateToProps)(withRouter(Subarea)) 
