# CSS Rules

Keywords __properties__ and __selectors__

* __Properties__: How the HTML content will be changed, it has a set of properties and values.  
* __Selectors__: Selects which elements you want 


<img src="https://mdn.mozillademos.org/files/11781/rendering.svg" alt="How does CSS actually work? by Mozilla"/>

### Internal stylesheet

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Internal Example</title>
    <style>
      body{
        background-color:black
      }
      h1 {
        color: red;
        background-color: yellow;
        border: 1px solid blue;
      }
      p {
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>THIS IS A HEADER</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```

### External stylesheet

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Internal Example</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>THIS IS A HEADER</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```
This is the external `style.css` file
```css
body{
  background-color:black
}
h1 {
  color: red;
  background-color: yellow;
  border: 1px solid blue;
}
p {
  color: white;
}
```


## References
* [How CSS works by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
* [Master Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
