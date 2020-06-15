import React, { Component } from 'react'
import { ListView, Icon } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import "./List.scss"
import "../../assets/iconfonts/iconfont.css"
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'iphone的摄影能力现在什么水平',
        des: '手持iphone 11 pro Max和华为P40 pro,感觉我作为手机的主人,最大的困惑不是手头的手机摄影能力有多高水平，而是自己的摄影能力配不上手机的技术潜力！',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '如何写一个反俗套的武侠故事',
        des: '张知秋是天下第一剑客，他有一个秘密，世上只有三个人知道。他不会武功，这场欺骗武林十年的骗局,终于到了谢幕的时候，他出道十年，专杀败类，有人说，他的剑下亡魂不计可数',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '有哪些应该坚持的好习惯',
        des: '去拜访别人不能空手去，哪怕去便利店买些水果和饮料，养成存钱的习惯，无论收入多少，都要存一部分对抗意外，早上醒来不要立马玩手机，可以立马起床刷牙，不仅能提升效率，还能让身心更健康',
    },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}
export default class List extends Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs),
                isLoading: false,
            });
        }, 100);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: 'black',
                            fontSize: 15,
                            borderBottom: '1px solid #F6F6F6',
                            fontWeight: 600
                        }}
                    >{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '10px 0' }} className="List-item">
                        <div className="item-header"><img style={{ height: '20px', marginRight: '5px', borderRadius: '50%' }} src={obj.img} alt="" /> <span>叶卓斌</span></div>
                        <div style={{ position: "relative" }} >
                            <div style={{ marginBottom: '8px', fontWeight: "200", fontSize: "13px", color: "black", width: "100%", overflow: "hidden", textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}>{obj.des}</div>
                            <div style={{ width: "100%" }}><span className="approve">1.6万赞同 <span className="iconfont icon-zan2"></span></span>&nbsp;&nbsp;&nbsp;<span className="comment">866评论 <span className="iconfont icon-pinglun"></span></span></div>
                        </div>
                    </div>
                </div >
            );
        };

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                useBodyScroll
                style={{ width: "100%" }}
                renderSectionWrapper={sectionID => (
                    <StickyContainer
                        key={`s_${sectionID}_c`}
                        className="sticky-container"
                        style={{ zIndex: 4 }}
                    />
                )}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : '已加载全部内容'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollEventThrottle={200}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}
