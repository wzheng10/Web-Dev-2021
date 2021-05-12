Responsive CSS & Flexbox

- Crucial!
Focus on Concepts, Not Memorizing the Properties!
Flex Shorthand
Flex-basis, grow and shrink
Align-Items
Flex-Wrap
Align-content and align-self
Justify-Content
Flex-Direction
Media Queries

Flex Box Basics
- Flexbox is a 1-D layout method for laying out items in rows or columns
- recent addition to CSS
- it allows us to distribute space dynamically across elements of an unknown size

Flex Direction- allows us to change the direction
flex-direction: row;            -default setting left to right on left side
flex-direction: row-reverse;    -reverses right to left on the right side
flex-direction: column;         -becomes vertical
flex-direction: colomun-reverse;-becomes vertical and the order is flipped

Justify Content- determines how the elemnts are distributed accross the content
justify-content: flex-start;  -default 
justify-content: flex-end;      -moves to the first right
justify-content: center;        -moves to the center
justify-content: space-around;
justify-content: space-between;
justify-content: space-evenly;

wrap- makes it continue onto the next line instead of sequeezing everything on a single linke
flex-wrap: wrap;
flex-wrap: wrap-reverse
flex-wrap: nowrap;

align-items -align items along the cross axis
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
align-items: flex-start;

**only works with wrap**
align-content: space-between;
align-content: space-around;
align-content:flex-start;
align-content:flex-end;
align-content:center;

align-self: flex-end;  -applies to the individual element

Flex Sizing Properties
1. Flex-basis: defines the initial size of an element before additonal space is distributed
2. Flex-grow: controls the amounts of avaliable space an element should take up. Accepts a unit-less number value
3. Flex- shrink: if items are larger than the container, they shink according to flex-shrink

Flex Shorthand
Ex.
Three values: flex-grow | flex-shrink | flex-basis
flex: 2 2 10%

Responsive Design
-Problem: as mobile devices become widely avaliable, develops had a problem...how do we create websites that look goof for all sizes?
-One Approach: was common to create separate stylesheets for different devices or even completetly different websites for each
-Enter Responsive: Now we create ONE website and stylesheet that is avaliable for devices of all sizes and features

Media Queries- allows us to modify our styles depending on particular parameters like screen width or device type 