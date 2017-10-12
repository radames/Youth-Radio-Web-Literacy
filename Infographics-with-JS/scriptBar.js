(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphBar');
var graphnode = element.node();


var graphTitle = "My First BAR graph";

var data1 = {
  name: 'Red Title',
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [100, 30, 20],
  type: 'bar',
  marker: {
    color: ['#C8A2C8', 'red', 'blue'],
    line: {
        width: 2.5
    } 
  }
};

Plotly.plot(graphnode, [data1], {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});

})();