      var mychart=document.getElementById('myChart').getContext('2d');
      var myDoughnutChart = new Chart(mychart, {
      type: 'doughnut',
      data: {
        // labels:['food','personal care','cloths','travel'],
        datasets:[{
          label:'statistics',
          data:[
            111,222,333,444
          ],
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"]
        }]
      },
      options: {
        responsive: false,
        }
  });