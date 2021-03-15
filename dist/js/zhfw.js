$(function () {
    /* ChartJS
     * -------
     * 在这里，我们将使用 ChartJS 创建一些图表
     */

    //--------------
    //- 区域图 -
    //--------------

    // 使用 jQuery 获取上下文 - 使用 jQuery 的.get() 方法。
    var areaChartCanvas = $('#areaChart').get(0).getContext('2d')

    var areaChartData = {
        labels  : ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        datasets: [
            {
                label               : '数字产品',
                backgroundColor     : 'rgba(60,141,188,0.9)',
                borderColor         : 'rgba(60,141,188,0.8)',
                pointRadius          : false,
                pointColor          : '#3b8bba',
                pointStrokeColor    : 'rgba(60,141,188,1)',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data                : [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label               : '电子产品',
                backgroundColor     : 'rgba(210, 214, 222, 1)',
                borderColor         : 'rgba(210, 214, 222, 1)',
                pointRadius         : false,
                pointColor          : 'rgba(210, 214, 222, 1)',
                pointStrokeColor    : '#c1c7d1',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data                : [65, 59, 80, 81, 56, 55, 40]
            },
        ]
    }

    var areaChartOptions = {
        maintainAspectRatio : false,
        responsive : true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines : {
                    display : false,
                }
            }],
            yAxes: [{
                gridLines : {
                    display : false,
                }
            }]
        }
    }

    // 这将获取 jQuery 集合中第一个返回的节点。
    var areaChart       = new Chart(areaChartCanvas, {
        type: 'line',
        data: areaChartData,
        options: areaChartOptions
    })

    //-------------
    //- 折线图 -
    //--------------
    var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
    var lineChartOptions = jQuery.extend(true, {}, areaChartOptions)
    var lineChartData = jQuery.extend(true, {}, areaChartData)
    lineChartData.datasets[0].fill = false;
    lineChartData.datasets[1].fill = false;
    lineChartOptions.datasetFill = false

    var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: lineChartData,
        options: lineChartOptions
    })

    //-------------
    //- 环形图 -
    //-------------
    // 使用 jQuery 获取上下文 - 使用 jQuery 的.get() 方法。
    var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
    var donutData        = {
        labels: [
            'Chrome',
            'IE',
            'FireFox',
            'Safari',
            'Opera',
            'Navigator',
        ],
        datasets: [
            {
                data: [700,500,400,600,300,100],
                backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
            }
        ]
    }
    var donutOptions     = {
        maintainAspectRatio : false,
        responsive : true,
    }
    // 创建饼形图或环形图
    // 你可以使用以下方法在饼形图和环形图之间进行切换。
    var donutChart = new Chart(donutChartCanvas, {
        type: 'doughnut',
        data: donutData,
        options: donutOptions
    })

    //-------------
    //- 饼形图 -
    //-------------
    // 使用 jQuery 获取上下文 - 使用 jQuery 的.get() 方法。
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = donutData;
    var pieOptions     = {
        maintainAspectRatio : false,
        responsive : true,
    }
    // 创建饼形图或环形图
    // 你可以使用以下方法在饼形图和环形图之间进行切换。
    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieData,
        options: pieOptions
    })

    //-------------
    //- 条形图 -
    //-------------
    var barChartCanvas = $('#barChart').get(0).getContext('2d')
    var barChartData = jQuery.extend(true, {}, areaChartData)
    var temp0 = areaChartData.datasets[0]
    var temp1 = areaChartData.datasets[1]
    barChartData.datasets[0] = temp1
    barChartData.datasets[1] = temp0

    var barChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        datasetFill             : false
    }

    var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions
    })

    //---------------------
    //- 堆叠图 -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
    var stackedBarChartData = jQuery.extend(true, {}, barChartData)

    var stackedBarChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    var stackedBarChart = new Chart(stackedBarChartCanvas, {
        type: 'bar',
        data: stackedBarChartData,
        options: stackedBarChartOptions
    })
})