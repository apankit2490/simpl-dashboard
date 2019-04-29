      var mychart=document.getElementById('myChart').getContext('2d');
      var myDoughnutChart = new Chart(mychart, {
      type: 'doughnut',
      data: {
        labels:['food','personal care','cloths','travel'],
        datasets:[{
          label:'statistics',
          data:[
            111,222,333,444
          ],
          backgroundColor: ["#ff5950", "#ff9600", "#77898a", "#00d1c1"]
        }]
      },
      options: {
        responsive: true,
        legend: {
            display: false
        },
          maintainAspectRatio: false,
      }
  });
  

  
  