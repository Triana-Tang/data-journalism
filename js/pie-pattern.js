var myChart=echarts.init(document.pattern(myPieChart));

var option = {title: {
        left:'',
        text: '男女性使用结扎避孕率对比',
    },
    angleAxis: {
        type: 'category',
        data: ['1982年', '1988年', '1992年', '1997年', '2001年', '2006年', '2017年']
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [6.9, 7.8, 10.2, 7.7, 6.9, 4.5, 1.4],
        coordinateSystem: 'polar',
        name: '男性',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    },  {
        type: 'bar',
        data: [17.6, 27.2, 35.9, 33.5, 33.1, 28.7, 18.3],
        coordinateSystem: 'polar',
        name: '女性',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }],
    legend: {
        show: true,
        data: ['男性',  '女性']
    }
};

myChart.setOption(option);
window.onresize=function () {
    myChart.resize()
}

