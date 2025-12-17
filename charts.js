
//Impressive Bar Graph
const con = document.getElementById('impression-bar-graph').getContext('2d');

new Chart(con, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu'],
        datasets: [{
            data: [25, 5, 22, 8],
            borderWidth: 1,
            borderSkipped: false,
            barThickness: 18,
            backgroundColor: [
                'rgba(167, 139, 250, 0.7)',
                'rgba(167, 139, 250, 0.7)',
                'rgba(109, 40, 217, 1)',
                'rgba(167, 139, 250, 0.7)'
            ],

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 20,
                ticks: {
                    stepSize: 10,
                    font: {
                        size: 11
                    },
                    color: '#aaa'
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {

                    font: {
                        size: 12
                    },
                    color: '#888'
                },
                border: {
                    display: true,
                    color: '#6E39CB',
                    width: 1
                }
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
});




//Sales-by-Age Graph

const content = document.getElementById('sales-by-age-chart').getContext('2d');
        
        new Chart(content, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500],
                datasets: [{
                    label: 'Sales',
                    data: [0, 18, 20, 33, 25, 37, 22, 24, 17, 18, 25, 10, 0,],
                    borderColor: 'rgb(109, 40, 217)',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2.5,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 10,
                        max: 40,
                        ticks: {
                            stepSize: 5,
                            font: {
                                size: 11
                            },
                            color: '#999',
                            callback: function(value) {
                                return value + ' to ' + (value + 5);
                            }
                        },
                        grid: {
                            color: '#e5e5e5',
                            drawBorder: false
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            },
                            color: '#999'
                        },
                        border: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });


        //Active-User-Graph
        
   const ctx = document.getElementById('active-user-graph').getContext('2d');

const bgPlugin = {
  id: 'customBg',
  beforeDraw(chart) {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    ctx.save();
    ctx.fillStyle = '#9b5cff';
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.width,
      chartArea.height
    );
    ctx.restore();
  }
};

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    
    datasets: [
      {
        label: 'Base',
        data: [200,180,210,195,140,175,160],
       
        backgroundColor: '#ffffff', 
        borderRadius: 8,
        barThickness: 6,
        stack: 'stack1'
      },
      {
        label: 'Top',
        data: [80,40,60,50,30,45,35],
        backgroundColor: '#5b2bc4',
        borderRadius: 8,
        barThickness: 6,
        stack: 'stack1'
      },
      {
        type: 'line',
        data: [280,220,270,245,170,220,195],
        borderColor: 'transparent',
        pointBackgroundColor: '#ffffff',
        pointRadius: 4,
        pointHoverRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: '#ffffff' }
      },
      y: {
        stacked: true,
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100,
      
        },
        grid: {
          color: 'rgba(255,255,255,0.5)',
          borderDash: [6, 6]   
        }
      }
    }
  },
  plugins: [bgPlugin]
});