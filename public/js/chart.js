let xValues = [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020];
let yValues = [0.248, 0.523, 0.527, 1.4, 3.4, 2.9, 6.5, 7.1, 9.0, 16.8, 13.7, 17.4, 19.8];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,150,0,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:25}}],
    }
  }
});

//Druhej chart

let xValues2 = ["Icelandic", "Americans", "Polish", "Lithuanians", "Other"];
let yValues2 = [79, 10, 5, 5, 1];
let barColors2 = [
  "#1e7145",
  "#228B22",
  "#7BB661",
  "#006B3C",
  "#7FFF00"
 
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors2,
      data: yValues2
    }]
  },
  options: {
    title: {
      display: true
    }
  }
});