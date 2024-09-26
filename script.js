

Highcharts.chart('container', {
    title: {
        text: 'Средняя стоимость путешествия во Францию в течении последних лет'
    },
    subtitle: {
        text: 'Вычисляли наши работники, выясняя самые лучшие места'
    },
    yAxis: {
        title: {
            text: 'Стоимость в рублях'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            pointStart: 2016
        }
    },
    series: [{
        name: 'Париж',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Марсель',
        data: [34916, 34064, 49742, 59851, 72490, 90282, 121121, 140434]
    }, {
        name: 'Лион',
        data: [21744, 37722, 36005, 39771, 50185, 54377, 62147, 99387]
    }, {
        name: 'Тулуза',
        data: [25345, 30987, 47988, 52169, 75112, 62452, 64400, 84227]
    }, {
        name: 'Ницца',
        data: [12908, 20948, 28105, 34248, 38989, 45816, 58274, 58111]
    }]
});

Highcharts.chart('container0', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Процент туристов, посетивших некоторые места'
    },
    tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'От общего кол-ва',
        colorByPoint: true,
        data: [{
            name: 'Эйфелева башня (г. Париж)',
            y: 56.33
        }, {
            name: 'Базилика Сакре-Кёр (г. Париж)',
            y: 24.03,
        }, {
            name: 'Версаль (17 км от Парижа)',
            y: 10.38
        }, {
            name: 'Скалы Этрета',
            y: 4.77
        }, {
            name: 'Виадук Мийо (г. Мийо)',
            y: 0.91
        }, {
            name: 'Остров Корсика',
            y: 0.2
        }]
    }]
});

Highcharts.chart('container1', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Спрос на поездку в Токио по сезонности'
    },
    subtitle: {
        text: 'Статистика: '
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; 
            }
        }
    },
    yAxis: {
        title: {
            text: 'Количество туристов в тысячах'
        },
        labels: {
            formatter: function () {
                return this.value / 1 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} посетили {point.y:,.0f} т.ч. в {point.x}'
    },
    plotOptions: {
        area: {
            pointInterval: 1, // интервал по оси X - 1 год
            pointStart: 2016, // начало оси X
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Зимой',
        data: [120, 110, 90, 180, 258, 269, 178, 232, 410]
    }, {
        name: 'Весной',
        data: [350, 290, 110, 360, 467, 512, 342, 367, 389]
    }]
});
Highcharts.chart('container2', {
    chart: {type: 'column'},
    title: {text: 'Какие были траты у туристов'},
    subtitle: {text: 'на что оставлять большую часть бюджета?'},
    xAxis: {type: 'category' },
    yAxis: {title: {text: 'Процент от опрошенных туристов'}},
    legend: {enabled: false},
    plotOptions: {series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'} }},
    tooltip: {headerFormat: '{series.name}',
    pointFormat: '{point.name} {point.y:.2f}% от 100'
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Питание',
            y: 56.33,
            drilldown: 'Питание'
        }, {
            name: 'Достопримечательности',
            y: 24.03,
            drilldown: 'Достопримечательности'
        }, {
            name: 'Сувениры',
            y: 10.38,
            drilldown: 'Сувениры'
        }, {
            name: 'Проживание',
            y: 4.77,
            drilldown: 'Проживание'
        }, {
            name: 'Выезды из города',
            y: 0.91,
            drilldown: 'Выезды из города'
        }, {
            name: 'Другие траты',
            y: 0.2,
            drilldown: null
        }]
    }],
    drilldown: {
        series: [{
            name: 'Microsoft Internet Explorer',
            id: 'Microsoft Internet Explorer',
            data: [
                ['v11.0',24.13],
                ['v8.0',17.2],
                ['v9.0',8.11],
                ['v10.0',5.33],
                ['v6.0',1.06],
                ['v7.0', 0.5]
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0',],
                [ 'v41.0',4.32],
                ['v42.0',3.68],
                ['v39.0',2.96],
                [ 'v36.0', 2.53],
                ['v43.0',1.45],
                ['v31.0',1.24],
                ['v35.0',0.85],
                ['v38.0',0.6],
                ['v32.0',0.55],
                ['v37.0',0.38],
                ['v33.0',0.19],
                ['v34.0',0.14],
                ['v30.0',0.14]
            ]
        }, {
            name: 'Firefox',
            id: 'Firefox',
            data: [
                ['v35',2.76],
                ['v36',2.32],
                ['v37',2.31],
                ['v34',1.27],
                ['v38',1.02],
                ['v31', 0.33],
                ['v33',0.22],
                ['v32', 0.15]
            ]
        }, {
            name: 'Safari',
            id: 'Safari',
            data: [
                ['v8.0',2.56],
                ['v7.1',0.77],
                ['v5.1', 0.42],
                ['v5.0',0.3],
                ['v6.1',0.29],
                ['v7.0',0.26],
                ['v6.2',0.17]
            ]
        }, {
            name: 'Opera',
            id: 'Opera',
            data: [
                ['v12.x',0.34],
                ['v28',0.24],
                ['v27',0.17],
                ['v29',0.16]
            ]
        }]
    }
});