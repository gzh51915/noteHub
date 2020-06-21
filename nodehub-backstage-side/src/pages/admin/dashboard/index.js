import React, { Component ,createRef} from 'react'
import echarts from 'echarts'
import {ChartsoneAPI,ChartstwoAPI,ChartsthreeAPI} from '../../../services/products.js'

export default class index extends Component {
    constructor(){
        super()
        this.charts = createRef();
        this.chart = createRef();
        this.chartx = createRef();
        this.chartt = createRef();
    }
    async componentDidMount(){
        // let arr = [],
        let res = await ChartsoneAPI()
        let rex = await ChartstwoAPI()
        let ret = await ChartsthreeAPI()

        let data = []
        let answer = []
        let dataname = res.data.data.result
        dataname.forEach(element => {
            // console.log(element.nickname)
            data.push(element.nickname)
        });
        console.log(ret);
        
        // for(var key in dataname){
        //     console.log(dataname[key]+"\n")  
        //   }
        dataname.forEach(element => {
            // console.log(element.nickname)
            answer.push(element.answer)
        });
        
        let pv =[]
        let pvonclick =[]
        let pvname = rex.data.data.result
        console.log(pvname);
        pvname.forEach(element => {
            // console.log(element.nickname)
            pv.push(element.title)      
        });
        pvname.forEach(element => {
            // console.log(element.nickname)
            pvonclick.push(element.pv)      
        });

        let answerer =[]
        let agree =[]
        let questionTitle =[]
        let agname = ret.data.data.result
        agname.forEach(element => {
            // console.log(element.nickname)
            answerer.push(element.answerer)      
        });
        agname.forEach(element => {
            // console.log(element.nickname)
            agree.push(element.agree)      
        });
        agname.forEach(element => {
            // console.log(element.nickname)
            questionTitle.push(element.questionTitle)     
        });
        console.log(questionTitle);
        var myChart = echarts.init(this.charts.current);
        myChart.setOption({
            title: {
                text: '分区点击量TOP10'
            },
            xAxis: {
                type: 'category',
                data: pv
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: pvonclick,
                type: 'line',
                lineStyle:{
                    normal:{
                        color:'#4169E1'
                    }
                }
            },]
        });
        var myChart = echarts.init(this.chart.current);
        myChart.setOption({
            title: {
                text: '主要分区访问量'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['数码', '校园', '动漫', '亲子', '游戏']
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '数码',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '校园',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '动漫',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '亲子',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '游戏',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        });
        var myChart = echarts.init(this.chartt.current);
        myChart.setOption({
            title: {
                text: '用户回答数量top10',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2020年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: data,
            },
            series: [
                {
                    name: '2020年',
                    type: 'bar',
                    data: answer,
                },
                // {
                //     name: '2012年',
                //     type: 'bar',
                //     data: [19325, 23438, 31000, 121594, 134141, 681807]
                // }
            ]
        });
        var myChart = echarts.init(this.chartx.current);
        myChart.setOption({
            title: {
                text: '好评回答top10',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2020年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: answerer,
            },
            series: [
                {
                    name: questionTitle,
                    type: 'bar',
                    data: agree,
                },
                // {
                //     name: '2012年',
                //     type: 'bar',
                //     data: [19325, 23438, 31000, 121594, 134141, 681807]
                // }
            ]
        });
    }
    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                <div ref={this.chartt} style={{width:"750px" ,height:"400px",float:"left"}}></div> 
                <div ref={this.charts} style={{width:"750px" ,height:"400px",float:"left"}}></div>
                <div ref={this.chart} style={{width:"750px" ,height:"400px",float:"left"}}></div> 
                <div ref={this.chartx} style={{width:"750px" ,height:"400px",float:"left"}}></div> 
            </div>
        )
    }
}
