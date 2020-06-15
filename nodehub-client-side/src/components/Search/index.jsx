import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import "./search.scss"
export default class Search extends Component {
    state = {
        value: '',
    };
    handleChange = (val) => {
        this.setState({
            value: val
        })
    }
    render() {
        return (<div >
            <SearchBar style={{ position: 'fixed', height: '%', width: '100%', top: 0 }} onChange={this.handleChange} value={this.state.value} placeholder="搜索你想要的内容" />
        </div>);
    }
}
