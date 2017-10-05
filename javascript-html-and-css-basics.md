# Javascript JS + HTML/CSS

Berfore starting to use scripts on our HTML page let's try to respond the following questions?

1. What is HTML and what is CSS?
2. What do you know about JS?
3. How do you think CSS HTML and JS are connected?


## HTML and CSS

This a basic HTML code

```html

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


This a basic HTML and CSS code


```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Cool Webpage</title>

    <style>
        body {
            font-family: Tahoma, Geneva, sans-serif;
        }
        h1 {
          color: #550A21;
          font-size: 50px;
        }
        h2 {
          color: #21550A;
          font-size: 30px;
        }
        #welcomeMsg {
          color: red;
          font-size: 15px;
        }
        .box{
          border: 3px solid #666;
          padding-left: 10px;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 10px;
        }
    </style>

  </head>
  <body>
    <div class="box">
      <header>
        <h1>The Daily Whatever</h1>
         <div id="welcomeMsg">WELCOME YOU</div>
      </header>

      <article>
        <h2> Martians invade earth</h2>
        <p>blah blah blah blah blah
        blah blah blah blah blah.
        </p>
      </article>

    </div>
  </body>
</html>
```

1. How the the elementes inside `<style>` are influencing the HTML content?


## HTML, CSS and JS

Now we want to mix all the three elements, first pay attention to our vocabulary, we will be speaking those names all the time

### JS

__Function__: a script or program that makes something happen on a webpage

__Method__: a built-in JavaScript command, like `alert();`

__Variable__: this is where you store information on the computer memory, also a building block or gear that takes a value and helps make a function work

__String__: a line of text inside quotation marks that a script displays exactly as it is

__Array__: a collection of values, like a bucket or other container


Look at our basic template now with HTML, CSS and js

```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Cool Webpage</title>

    <style>
        body {
            font-family: Tahoma, Geneva, sans-serif;
        }
        h1 {
          color: #550A21;
          font-size: 50px;
        }
        h2 {
          color: #21550A;
          font-size: 30px;
        }
        #welcomeMsg {
          color: red;
          font-size: 15px;
        }
        .box{
          border: 3px solid #666;
          padding-left: 10px;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 10px;
        }
    </style>

    <script>
      //here is where we put our JS scripts
      //ps: this is a comment and the browser ignores it

    </script>

  </head>
  <body>
    <div class="box">
      <header>
        <h1>The Daily Whatever</h1>
         <div id="welcomeMsg">WELCOME YOU</div>
      </header>

      <article>
        <h2> Martians invade earth</h2>
        <p>blah blah blah blah blah
        blah blah blah blah blah.
        </p>
      </article>

    </div>
  </body>
</html>

```
