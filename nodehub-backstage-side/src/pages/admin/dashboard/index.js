import React, { Component ,createRef} from 'react'
import echarts from 'echarts'

export default class index extends Component {
    constructor(){
        super()
        this.charts = createRef();
    }
    componentDidMount(){
        var myChart = echarts.init(this.charts.current);
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render() {
        return (
            <div>
                <div ref={this.charts} style={{width:"500px" ,height:"400px"}}></div>
            </div>
        )
    }
}
