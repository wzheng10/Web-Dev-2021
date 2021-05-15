CSS Frameworks: Bootstrap

1. Crucial!
-WTF is BootStrap
-Working With CSS Frameworks
-Including 3rd Part CSS & CDNS
2. Imporant
-Bootstrap Grid
-Responsive Bootstrap Grid
-Bootstrap Navbars
3. NIces to Have
-Icons
-Typography and Utilities
-Bootstrap Forms
-Bootstrap Buttons

What is Bootstrap?
-the world's most popular CSS framwork that helps quickly build responsive websites
What is a framework?
-a skeleton 
Componenets of Bootstrap - has access to tons of pre-built compnents that we can incorporate into our websites
Grid System- comes with a grid system, which helps us construct our own custom, responsive layouts

Setting up BootStrap REQUIRES
1.the link in the <head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

2.the script in the <body> (bottom)
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>

What is a container?
-they are the most basic layout element in Bootstrap and are equired when using the grid system.
-used to contain, pad and center the content in them.
.container
.container-fluid
*all adjusted the text view on sizing


Buttons
Ex.
<button type="button" class="btn btn-primary">Primary</button>
can adjust the button 
1. colors
2. type (outline, block level)
3. size
4. disable button

Typography
<p class="mb-0"> Text</p>  mb-0 removes margins and makes the quote closer
Background color
<h2 class="display-4">Buttons bg-primary</h1>
text color
<h1 class="display-1 text-primary">Bootstrap Playground</h1>

Badges, ALerts & Button Groups
badge-pill: makes the badge round
<h2 class="display-4 bg-primary">Buttons <span class="badge badge-secondary badge-pill">8</span> </h2>
badge badge-(color): changes the color of the badge
<button class="btn btn-primary">Updates <span class="badge badge-light">9</span></button>

Button Group- wraps a series of buttons
must use btn-group within number of buttons with a btn class
<div class="btn-group">
    <button class="btn btn-warning">One</button>
    <button class="btn btn-warning">Two</button>
    <button class="btn btn-warning">Three</button>
</div>

Alerts- Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <h4 class="alert alert-success">Warning!</h4>
        Danger! You are about to end the world as we know it!!
        <button class="close" aria-label="Close" data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
        </button>
</div>

Bootstrap's grid system uses a series of containers, rows and columns to layout and align content.
1. only works inside a container ( so a container class is a must)
2. must create a class of row

has 12 units to divey up in a row
    <div class="container">
        <div class="row">
            <div class="col(-number) bg-primary"> I am a unit</div>
        </div>
    </div>
#must have a container
#can nest a row inside another row
#col and be use without a number to automatically resize the entire width

Responsive Bootstrap Grids(layouts) 
Bootstrap is built ontop of flexbox

to change the alignment of text, especially when not all the different texts are the same size
<div class="row  align-items-center">
to center them
<div class="row  align-items-start">
to align at the start
<div class="row  align-items-end">
to align at the end

<div class="col-md-6 col-xl-3 bg-success align-self-end">
to align a specific item in the column must use (self not item)

Justify Content
<div class="row border justify-content-center">
to center 
<div class="row border justify-content-end">
to move text to the far right side
<div class="row border justify-content-start">
to move text to the far left side