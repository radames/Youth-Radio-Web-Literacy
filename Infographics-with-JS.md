# Infographics with JS

We're going to experiment with data and charts with JS and the library [Plot.ly](https://plot.ly/javascript/), we're building three different types of charts Line Chart, Pie Chart and a Bar Chart.


## Cleaning up your HTML

We want to organize our code into different files, specially in this session we're adding three different script files, one for each kind of chart.

Start by moving all the content from your `<style></style>` to a new file `styles.css` and add the tag 

```html
    <link rel="stylesheet" type="text/css" href="styles.css">
```

This will keep you __css__ code out of the main html page

## <script> tag

Do the same with your welcome message script, move the content from your `<script></script>` to a new file `welcome.js` and replace the tag `<script><script>` with

```html
    <script src="welcome.js"></script>
```


This is how your project folder will be:

```
portfolio
│   index.html
|   styles.css
│   welcome.js    
```

## Adding an amazing JS charts library [Plot.ly](https://plot.ly/javascript/)

We are adding a library that is hosted online on a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)
Add this new `<script></script>` tag to your `<head></head>` tag:

```html
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

and on your `style.css` add a class style for our graphs, this will make sure the graph is responsive.

```css

.graph{
  width: 100%;
  margin-left: 0%;
  margin-top: 0vh;
  height: 50vh;
}

```

# The Bar Chart

Because you have the library loaded we can start building our charts.
Let's start creating a space `<div></div>` to put our first chart

Choose a place on your page and add the `<div></div>` tag with the ID for the Bar Chart
Look at the `class` attribute and `id` and think about it.

```html
   <div class="graph" id="myGraphBar"></div>
```

Now create another file named `scriptBar.js` and copy this into that.

```js

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

```

And load it on your hmtl page adding the `<script></script>` before the end of the tag `</body>`


```html
  <script src="scriptBar.js"></script>
```


Your portfolio folder will be:

```
portfolio
│   index.html
|   styles.css
│   welcome.js   
|   scriptBar.js
```

### Data

Changing the date is simple,  just play around the numbers and the lables, make sure that the two lists have the same length

```js

  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [100, 30, 20],
  
```


# The Line Chart

Let's start creating a space `<div></div>` to put our Line Chart

Choose a place on your page and add the `<div></div>` tag with the ID for the Line Chart
Look at the `class` attribute and `id` and think about it.

```html
   <div class="graph" id="myGraphLine"></div>
```

Now create another file named `scriptLine.js` and copy this into that.

```js

(function(){

var d3 = Plotly.d3;

var element = d3.select('#myGraphLine');
var graphnode = element.node();


var graphTitle = "My First Line graph";

var data1 = {
  name: 'Red Title',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  line: {
    color: 'red',
    width: 3
  }
};

var data2 = {
  name: 'Blue',
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter',
  line: {
    color: 'blue',
    width: 3
  }
};

var data = [data1, data2];


Plotly.plot(graphnode, data, {
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

```

And load it on your hmtl page adding the `<script></script>` before the end of the tag `</body>`


```html
  <script src="scriptLine.js"></script>
```


Your portfolio folder will be:

```
portfolio
│   index.html
|   styles.css
│   welcome.js   
|   scriptBar.js
|   scriptLine.js
```

### Data

The data for the Line chart consists of points __X__ and __Y__, also label name.

```js

var data1 = {
  name: 'Red Title',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  line: {
    color: 'red',
    width: 3
  }
};
  
```

# The Pie Chart

Let's start creating a space `<div></div>` to put our Pie Chart

Choose a place on your page and add the `<div></div>` tag with the ID for the Pie Chart
Look at the `class` attribute and `id` and think about it.

```html
   <div class="graph" id="myGraphPie"></div>
```

Now create another file named `scriptPie.js` and copy this into that.

```js

(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphPie');
var graphnode = element.node();


var graphTitle = "My First Pie graph";

var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];


Plotly.plot(graphnode, data,
    {
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

```

And load it on your hmtl page adding the `<script></script>` before the end of the tag `</body>`


```html
  <script src="scriptPie.js"></script>
```


Your portfolio folder will be:

```
portfolio
│   index.html
|   styles.css
│   welcome.js   
|   scriptBar.js
|   scriptLine.js
|   scriptPie.js
```

### Data

The data for the Pie chart consists of values and labels

```js

var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];
  
```

# The Data

Explore the data from [DACA](https://www.kaggle.com/anupamakhan/daca-recipients-as-of-sept-4-2017/data).
