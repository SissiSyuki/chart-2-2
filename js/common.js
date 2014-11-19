jQuery(function(){
	var Chart = {
		init : function(){
			this.eventHandler();
            this.colum();
            this.pie();
			this.line();
            this.allChart();
            this.column2();
		}
	};
	jQuery.extend(Chart,{  
		eventHandler : function(){
			setInterval(function(){
                    $("#X_mapColored").animate({opacity:1});
                },500);
            setInterval(function(){
                    $("#X_mapColored").animate({opacity:0});
                },1000);
            //map
            $("#X_mobileNav").click(function(){
                $(".navbar-collapse").slideToggle("slow");
            });
            
            //mobileNav  
        },
        colum : function(){
			function getTop(){
                var top = $(document).scrollTop();
                //alert(top);
                if($(document).scrollTop()<800){
            $('#X_chart-column').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Influenza'
				},
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [
                        'Week 39 and 40',
                        'Week 41 and 42'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Influenza activity (%)'
                    }
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b>'+
                             ' in '+'</b><br>'+ this.x +' is '+this.y;
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                colors:['#00b4e1','#61ad2d','#ef5e6e','#f9ae4c'],
                credits:{
                    enabled:false
                }, 
                legend:{
                    symbolRadius:10,
                    symbolHeight:12,
                    symbolWidth:12,
                    /*layout: 'vertical',*/
                    itemMarginTop: 5,
                    useHTML:true,
                    itemStyle:{
                        "color": "#666", 
                        
                        "fontSize": "12px", 
                        "fontWeight": 400
                    }
                },
                series: [{
                    name: 'Influenza A<sup>1</sup>',
                    data: [0.4, 0.6]

                }, {
                    name: 'Influenza B',
                    data: [0.1, 0.3]

                }]
            });
            jQuery('#X_chart-pie3d').highcharts({
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: 'Institutional respiratory infection'
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                credits:{  
                    enabled:false
                }, 
                series: [{
                    name: 'Institutional Respiratory Infection Proportion',
                    data: [
                        ['Others', 79],
                        ['Influenza A', 2],
                        ['Influenza', 3],
                        ['Influenza B', 1],
                    ]
                }]
            });         
            
			} 
                setTimeout(getTop);
            }
			 getTop();
        },
        pie : function(){
			function getTop(){
                var top = $(document).scrollTop();
                //alert(top);
                if($(document).scrollTop()<1300){
			$('#X_chart-column1').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Non-Influenza'
                },
                xAxis: {
                    categories: ['Weeks 39 and 40', 'Weeks 41 and 42']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'The Percent Positivity of Rhinovirus (%)'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                colors:['#00b4e1','#61ad2d','#ef5e6e'],
                credits:{  
                    enabled:false
                }, 
                legend: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    symbolRadius:10,
                    symbolHeight:12,
                    symbolWidth:12,
                    shadow: false,
                    itemStyle:{
                        "color": "#666", 
                        "fontSize": "12px", 
                        "fontWeight": 400
                    }
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b>'+'<br>'+ ' in '
                           + this.x +'is '+ this.y;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                        }
                    }
                },
                series: [{
                    name: 'Rhinovirus',
                    data: [30.1,18.6]
                },{
                    name: 'Parainfluenza viruses (PIV)',
                    data: [2.1,3.2]
                }]
            });		
            jQuery('#X_chart-pie').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Factors of Causing Institutional Respiratory Infection'
                },
                colors:['#00b4e1','#61ad2d','#f9ae4c','#00a3d7','#ae89cb'],
                tooltip: {
                    pointFormat: '{series.5}'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                credits:{  
                    enabled:false
                }, 
                legend:{
                    symbolRadius:10,
                    symbolHeight:12,
                    symbolWidth:12,
                    /*layout: 'vertical',*/
                    itemMarginTop: 5,
                    useHTML:true,
                    itemStyle:{
                        "color": "#666", 
                        
                        "fontSize": "12px", 
                        "fontWeight": 400
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'proportion',
                    data: [
                        ['Enterovirus/Rhinovirus 60%</div>',51],
                        ['Others 40%</div>',34]
                    ]
                }]
            });
            
			} 
                setTimeout(getTop);
            }

            getTop();
        },
        
        line : function(){
			function getTop(){
                var top = $(document).scrollTop();
                //alert(top);
                if($(document).scrollTop()<1800){
            $(function () {
                $('#X_chart-line').highcharts({
                    title: {
                        text: ''
                    },
                    subtitle: {
                         endabled:false
                    },
                    xAxis: {
                        categories: ['43', '45', '47', '49', '51', '1','3', '5', '7', '9', '11', '13', '15','17','19','21','23','25','27', '29','31','33','35','37','39','41']
                    },
                    yAxis: {
                        title: {
                            text: 'Percent Positive'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#00a3d7'
                        }]
                    },
                    tooltip: {
                        valueSuffix: '%'
                    },
                    credits:{  
						enabled:false
				    },
                    legend:{
                        symbolRadius:10,
                        symbolHeight:12,
                        symbolWidth:12,
                        itemMarginTop: 0,
                        useHTML:true,
                        itemStyle:{
                            "color": "#666", 
                            "fontSize": "12px", 
                            "fontWeight": 400
                        }
                    },
                    series: [{
                        name: 'Influenza A',
                        data: [1,2,3.5,4,4.5,4.75,5,5.5,11,8,25,29.5,28,26,19,16.5,14.5,11,6,5,4,4.5,4,3,3.4,2.8]
                    }, {
                        name: 'Influenza B',
                        data: [1,1,0.8,0.3,0.5,0.7,0.2,0.5,1,0.8,2,3.5,4,5,5.3,7.5,10.5,13,16,16.5,21.5,21.25,16,15.8,10,5]
                    }, {
                        name: 'Respiratory Syncytial Virus',
                        data: [1,2,3.6,4,4.5,7.75,8,8.5,9,10,8,10.5,7.5,6,10.5,10,11.5,10.7,14,15,10.5,9.5,8,7,8.4,2.8]
                    }, {
                        name: 'Parainfluenza Virus',
                        data: [5,4,4.5,5,6.5,2.75,4,3.5,2,3,2,2.5,2.8,2.6,1.9,1.6,1.4,1.1,0.6,0.5,1.4,3.5,4,3,3.4,2.8]
                    }]
                });
            });   
			} 
                setTimeout(getTop);
            }

            getTop();
        },
    
        
        allChart : function(){
			function getTop(){
                var top = $(document).scrollTop();
                //alert(top);
                if($(document).scrollTop()<2600){
            $('#X_chart-allChart').highcharts({                                          
                chart: {                                                          
                },                                                                
                title: {                                                          
                    text: ''                                     
                },                                                                
                xAxis: {                                                          
                    categories: ['43', '45', '47', '49', '51', '1','3', '5', '7', '9', '11', '13', '15','17','19','21','23','25','27', '29','31','33','35','37','39','41']
                },                                                                
                tooltip: {                                                        
                    formatter: function() {                                       
                        var s;                                                    
                        if (this.point.name) { // the pie chart                   
                            s = ''+                                               
                                this.point.name +': '+ this.y +'%';         
                        } else {                                                  
                            s = ''+                                               
                                this.x  +': '+ this.y;                            
                        }                                                         
                        return s;                                                 
                    }                                                             
                }, 
                colors:['#00b4e1','#61ad2d','#ef5e6e','#f9ae4c'],
                credits:{  
                    enabled:false
                },                                                               
                labels: {                                                         
                    items: [{                                                     
                        html: '',                          
                        style: {                                                  
                            left: '40px',                                         
                            top: '8px',                                           
                            color: 'black'                                        
                        }                                                         
                    }]                                                            
                },  
                legend:{
                    symbolRadius:10,
                    symbolHeight:12,
                    symbolWidth:12,
                    /*layout: 'vertical',*/
                    itemMarginTop: 5,
                    useHTML:true,
                    itemStyle:{
                        "color": "#666", 
                        
                        "fontSize": "12px", 
                        "fontWeight": 400
                    }
                },                                                              
                series: [{                                                        
                    type: 'column',                                               
                    name: 'Adenovirus',                                                 
                    data: [19,15,15.5,12,14.5,10.75,15,5.5,3,8,2,5,2,6,9,6.5,4.5,1,6,5,4,4.5,4,3,3.4,2.8]                                         
                }, {                                                              
                    type: 'column',                                               
                    name: 'Human Metapneumovirus',                                                 
                    data: [1,2,3.5,4,4.5,4.75,5,5.5,11,8,25,29.5,28,26,19,16.5,14.5,11,6,5,4,4.5,4,3,3.4,2.8]                                         
                }, {                                                              
                    type: 'column',                                               
                    name: 'Rhinovirus',                                                  
                    data: [1,1.2,3.5,1.4,4.5,4.75,1.5,5.5,1,8,12.5,12.95,2.8,2.6,1.9,1.65,1.45,1.1,6,5,4,4.5,4,3,3.4,2.8]                                         
                }, {                                                              
                    type: 'column',                                               
                    name: 'Coronavirus',                                              
                    data: [1,2,1.35,1.4,1.45,1.475,1.5,1.55,1.1,2.8,2.25,2.295,2.28,2.6,1.9,1.65,1.45,1.1,1.6,1.5,1.4,1.45,1.4,1.3,1.34,2.18]},
					{                                                              
                    type: 'spline',                                               
                    name: 'Average',                                              
                    data: [5,7,5.35,6.4,3.45,6.475,7.5,3.55,5.1,4.8,6.25,7.295,8.28,5.6,3.9,2.65,5.45,3.1,6.6,3.5,6.4,4.45,3.4,2.3,1.34,2.18],                               
                    marker: {                                                     
                        lineWidth: 2,                                               
                        lineColor: Highcharts.getOptions().colors[4],               
                        fillColor: 'white'                                          
                    }                                                             
                }, {                                                              
                    type: 'pie',                                                  
                    name: 'Total consumption',                                    
                    data: [{                                                      
                        name: 'Adenovirus',                                             
                        y: 30,                                                    
                        color: Highcharts.getOptions().colors[0]  
                    }, {                                                          
                        name: 'Human Metapneumovirusn',                                             
                        y: 20,                                                    
                        color: Highcharts.getOptions().colors[1]  
                    }, {                                                          
                        name: 'Rhinovirus',                                              
                        y: 15,                                                    
                        color: Highcharts.getOptions().colors[2]    
                    },{                                                          
                        name: 'Coronaviru',                                              
                        y: 35,                                                    
                        color: Highcharts.getOptions().colors[3]   
                    }],                                                           
                    center: [100, 80],                                            
                    size: 100,                                                    
                    showInLegend: false,                                          
                    dataLabels: {                                                 
                        enabled: false                                            
                    }                                                             
                }]                                                                
            });             
			} 
                setTimeout(getTop);
            }
			 getTop();
        },
            
            
            
        column2 : function(){
			function getTop(){
                var top = $(document).scrollTop();
                //alert(top);
                if($(document).scrollTop()<3200){
            $('#X_chart-column2').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['43', '45', '47', '49', '51', '1','3', '5', '7', '9', '11', '13', '15','17','19','21','23','25','27', '29','31','33','35','37','39','41']
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: ''
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        colors:['#6ebb46','#00a3d7','#ef5e6e'],
                        credits:{  
                            enabled:false
                        }, 
                        legend: {
                            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            symbolRadius:10,
                            symbolHeight:12,
                            symbolWidth:12,
                            shadow: false,
                            itemStyle:{
                                "color": "#666", 
                                "fontSize": "12px", 
                                "fontWeight": 400
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>'+ this.x +'</b><br>'+
                                    this.series.name +': '+ this.y +'<br>'+
                                    'Total: '+ this.point.stackTotal;
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: 'ENTERO/RHINOVIRUS',
                            data: [19,15,15.5,12,14.5,10.75,15,5.5,3,8,2,5,2,6,9,6.5,4.5,1,6,5,4,4.5,4,3,3.4,2.8]
                        }, {
                            name: 'COMBINED OUTBREAK',
                            data: [1,2,1.35,1.4,1.45,1.475,1.5,1.55,1.1,2.8,2.25,2.295,2.28,2.6,1.9,1.65,1.45,1.1,1.6,1.5,1.4,1.45,1.4,1.3,1.34,2.18]
                        }, {
                            name: 'NO ORGANISM INDENTFIED',
                            data: [1,1.2,3.5,1.4,4.5,4.75,1.5,5.5,1,8,12.5,12.95,2.8,2.6,1.9,1.65,1.45,1.1,6,5,4,4.5,4,3,3.4,2.8]
                        }]
                    });        
			} 
                setTimeout(getTop);
            }
			 getTop();
        }    
	});
	Chart.init();
});