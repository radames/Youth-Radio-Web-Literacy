# CSS and HTML

### Glossary

### HTML     

**HTML**: Hypertext Markup Language, the language of the web, the skeleton of a webpage

**Element**: part of a webpage, like a paragraph or image

**Tag**: an HTML label that identifies an element on a webpage, like ```<p>``` identifies a paragraph

**Opening Tag**: the tag that begins part of a webpage, like ```<p>``` before a paragraph

**Closing Tag**: the tag that ends part of a webpage with a slash, like```</p>``` to end a paragraph

**Attribute**: a characteristic of an element on a webpage, like background-color or color

**Value**: the value for an attribute, like ```red``` for ```color``` or ```12px``` for ```font-size```

### CSS

**CSS**: Cascading Stylesheets, the styling language or web, the skin of a webpage

**Stylesheet**: part of a webpage (inside ```<style>``` tags) or a separate document (ending with .css) with instructions for the attributes and values for different elements on a webpage

**Selector**: the label used on a stylesheet to identify and style an element on a webpage


### How does HTML look?

```HTML
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Cool Webpage</title>
  </head>
  <body>
    <header>
      <h1>The Daily Whatever</h1>
    </header>
    <article>
      <h2> Martians invade earth</h2>
      <p>blah blah blah blah blah
      blah blah blah blah blah.
      </p>
    </article>
  </body>
</html>
```


### Common HTML Tags in the Body
| Tag                                         |Element/Style               |
|:------------------------------------------- |:----------------------------|
|`<p></p>`                                | Paragraph                  |
|`<br/>`                                 | Line break                 |
|`<strong></strong>`                      |   Bold                     |
|`<em></em>`                              | Italic                     |
|`<u></u>`                                | Underlined                 |
|`<img src="[web address of a picture]"/>`| An image                   |
|`<a href="[web address]"></a>`           |  A link                    |
|`<h1></h1> to <h6></h6>`                 | Headings from big to small |
|`<div></div>`                            | Creates a division |


<img width="1372" src="https://user-images.githubusercontent.com/102277/42541016-9fe57a14-8455-11e8-85ae-e5ca43b735a5.png">

### How does CSS look?



Let’s take a look at a paragraph selector styled in CSS with color, font-size, and text-alignment.

Keywords __properties__ and __selectors__

* __Properties__: How the HTML content will be changed, it has a set of properties and values.  
* __Selectors__: Selects which elements you want


<img src="https://mdn.mozillademos.org/files/11781/rendering.svg" alt="How does CSS actually work? by Mozilla"/>

<img src="https://user-images.githubusercontent.com/102277/42540812-c1bc24b8-8454-11e8-89b6-038f80923d64.png" alt="How does CSS actually work? by Mozilla"/>

**Selectors**

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



**Applying CSS**

Go to your basic HTML page and create a `<style></style>` tag inside the `<head></head>`


```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Internal Example</title>

    <style>
      body{
        background-color: black;
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
    <header>
      <h1>THIS IS A HEADER</h1>
    </header>
    <article>
      <h2>Subtitle</h2>

      <p>This is a paragraph 1</p>
      <p>This is a paragraph 2</p>
      <p>This is a paragraph 3</p>

    </article>
  </body>
</html>
```



### Common CSS Attributes

|Attribute                      |Possible values                                  |Notes            |
|:------------------------------------------------|:------------------------------------|---------------|
|`color: value;`                               |Websafe color names, hexidecimal codes, rgb codes | This works on fonts. |
|`background-color: value;`                    |Websafe color names, hexidecimal codes, rgb codes |This works on large elements<br>like paragraphs or even the whole body.|
|`background-image: url("[image address]");` | `url("[image address]"")` | This works well on large elements<br>or even the whole body.|
|`font-size: value;`                           |Depends on the scale, but think of `12px` like `12pt font in a word document. |You can use pixels `(px)`, ems `(em)`, and `%` for measurement. |
|`display: value;`                             |inline or block | inline means in a row; block means on its own line.
|`position: value;`                            |  absolute, fixed, relative | absolute pins an element to a spot on the page; fixed pins the page and its elements (no scrolling);<br>relative measures the distance between elements.
|`top: value;`<br>`bottom: value;`<br>`left: value;`<br>`right: value;`|Any numerical value |These go with position; each measures from that edge of the page.
|`text-shadow: x-offset y-offset color;`                               | Numerical values for the offsets and a color for the shadow |You can stack these to make wild patterns and shadows.



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

### References
* [Mozilla - Make your first web page](https://mozilla.github.io/curriculum-final/make-your-first-webpage/session08-make-your-first-webpage.html#overview)
* [cssreference.io](https://cssreference.io/)
* [htmlrefrence.io](https://htmlreference.io/)
