# Quickousel
###### The easiest carousel to use on the web.

[Check out the DEMO page!](http://dirkdunn.github.io/Quickousel)
=====

##### Getting Started:

1. Download/Clone Quickousel and add it to your HTML file.
```
<script src="Quickousel/lib/quickousel.js"><script>
```
2. Add the UTF-8 meta tag in the head
```
<meta charset="UTF-8">
```
3. Give an element on the page an id of "quickousel", and add the images you want to be in the carousel.
```
<div id="quickousel">
    <img alt="img1" src="image1"/>
    <img alt="img2" src="image2"/>
    <img alt="img3" src="image3"/>
</div>
```

That's it, quickousel will auto-generate a responsive carousel seamlessly with the images you have added.

## Javascript Options
Quickousel has one method to be optionally called in order to set customizations. customOptions is an object literal that is passed to the init method in order to set certain properties. For a more detailed and visual view of how the init function works, visit the [demo](http://dirkdunn.github.io/Quickousel) page.
``` 
Quickousel.init(customOptions)
```

#### Example Use:
```
Quickousel.init({
"transitionStyle":"fadeIn",
"transitionSpeed": 8000,
"arrows": false,
"button": "dottedsquare",
"customButton: '<img src="imageForCarouselButton.jpg"/>',
"html" : ['<p>HTML on the first slide</p>', 
    '<p>HTML on the second slide!</p>']
});
```
#### customOptions
###### transformationStyle (string)
*How the carousel transitions from one slide to the next, defaults at "fadeIn".*
###### Options:
* fadeIn
* bounceIn
* flipInX
* flipInY
* lightSpeedIn
* rotateIn
* slideInLeft
* slideInRight
* zoomIn
* zoomInLeft
* zoomInRight
* rollIn

Note: Quickousel uses [animate.css](https://daneden.github.io/animate.css/) for it's transition, so any of the values that work for animate.css will work for Quickousel.

###### transformationSpeed (Integer or String)
*Number of milliseconds the carousel stays on each slide.*

1 second = 1000 milliseconds

###### Arrows (Boolean or String)
*Set to true to add arrows to each side of the carousel, defaults to false.*

###### buttonStyle (string)
*Type of button style for the bottom navigation*

###### Options:
* dottedsquare
* solidsquare
* opensquare
* bullet
* opencircle
* solidcircle
* heart
* spade
* club
* music

###### html (array)
*Add custom HTML to each slide by adding each string of html in an arra, , which will add html to the slide order accordingly*

###### example usagw:
```
html: ['<p>html on slide 1</p>',
    '<p>html on slide 2</p>',
    '<p>html on slide 3</p>',
    '<p>html on slide 4</p>',]
```

###### customButton (string)
*a custom text character or a scring of html to serve as each button on the carousel.*

###### example usage:
```
// this will make each bottom navigation button a '§' symbol
customButton: '§'
```
or HTML:
```
// Will make the image mycustombutton.png the carouse nav button.
customButton: '<img src="mycustombutton.png" />'
```

Feel free to make a pull request or open any issues as need be, cheers.

