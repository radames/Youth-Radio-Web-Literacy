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

