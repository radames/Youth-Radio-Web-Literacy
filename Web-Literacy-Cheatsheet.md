# Web Literacy Workshops 
## Glossary & Cheatsheet 
### Share common definitions & explanations to support learners**

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


### JS

**JS**: JavaScript, a coding language used on the web, the nervous system of a webpage

**Function**: a script or program that makes something happen on a webpage

**Variable**: a building block or gear that takes a value and helps make a function work

**Local variable**: a variable that only works inside its function

**Global variable**: a variable that works across functions

**String**: a line of text inside quotation marks that a script displays exactly as it is

**Array**: a collection of values, like a bucket or other container

**Method**: a built-in JavaScript command, like ```alert();```

**Conditional**: an ```if/then``` statement that uses logic to check for conditions on a webpage

**Loop**: a counter that repeats steps in a program until certain conditions are met





### How does HTML look?

```HTML
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset=”utf-8”>
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
|`<img src=”[web address of a picture]”/>`| An image                   | 
|`<a href=”[web address]”></a>`           |  A link                    |
|`<h1></h1> to <h6></h6>`                 | Headings from big to small |
|`<div></div>`                            | Creates a division |

### How does CSS look?

Let’s take a look at a paragraph selector styled in CSS with color, font-size, and text-alignment.

**CSS**

```css
  p {
    color: red;
    font-size: 20px;
    text-align: center;
  }
```

**HTML**
```html
   <p>I made a webpage.</p>
```

Remeber to add CSS to your HTML page put its content over the `<style>` tage
```html
<head>
    <style>
      p {
        color: red;
        font-size: 20px;
        text-align: center;
      }
  </style>
<\head>
```


### Common CSS Attributes

|Attribute                      |Possible values                                  |Notes            |
|:------------------------------------------------|:------------------------------------|---------------|
|`color: value;`                               |Websafe color names, hexidecimal codes, rgb codes | This works on fonts. |
|`background-color: value;`                    |Websafe color names, hexidecimal codes, rgb codes |This works on large elements<br>like paragraphs or even the whole body.|
|`background-image: url("[image address]");` | `url(“[image address]”)` | This works well on large elements<br>or even the whole body.|
|`font-size: value;`                           |Depends on the scale, but think of `12px` like `12pt font in a word document. |You can use pixels `(px)`, ems `(em)`, and `%` for measurement. |
|`display: value;`                             |inline or block | inline means in a row; block means on its own line.
|`position: value;`                            |  absolute, fixed, relative | absolute pins an element to a spot on the page; fixed pins the page and its elements (no scrolling);<br>relative measures the distance between elements.
|`top: value;`<br>`bottom: value;`<br>`left: value;`<br>`right: value;`|Any numerical value |These go with position; each measures from that edge of the page.
|`text-shadow: x-offset y-offset color;`                               | Numerical values for the offsets and a color for the shadow |You can stack these to make wild patterns and shadows.


#### How does JS look?

```js
function helloWorld() {             \\ Name the function so your webpage can find it.
  var myMessage = "Hi, everybody!"; \\ Define a variable with a message inside a string,
                                    \\ a line of text inside quotations the function will display exactly as it is.
  alert (myMessage);                \\Open an alert, or pop-up box, that displays a string or whatever string is attached to my variable.
}                                   \\End the function.
```


### References
* [Mozilla - Make your first web page](https://mozilla.github.io/curriculum-final/make-your-first-webpage/session08-make-your-first-webpage.html#overview)
