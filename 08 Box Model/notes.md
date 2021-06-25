Box Models

Crucial!
-Border
-Padding
-Width & Height
-Margin
-Display Property
-Units- Percentages, EMS, & REMS
Nice to Have
-Border Radius

Width and Height
Content box, padding, border and margin
The width and height set the width and height of an element in the content area

Border & Border Radius
Properties
Border-width- controls the thickness of the border
Border-color- controls the color of the border
border-style- controls the line style -dashed, solid, etc

box-sizing has two proterties
1. content-box that is the default behavior with no adjustments
2. border-box that takes into account the border and padding

border-radius- rounds the corners of an element's outer border edges

border can be used to set the border-width, border-style and border-color

Border Padding- space between between element content box and the border
Can use padding on each side individually or all at once
individual paroperties of padding
1. padding-left
2. padding-right
3. padding-top
4. padding-bottom 
Shorthand
- horizontal/vertical padding
padding: 5px 10px;
- top/horizontal/bottom
padding: 1px 2px 2px;
- top/right/bottom/left
padding; 1px 2px 3px 4px

Margin- the spacing outside the border
Individual Properties
1. margin-left
2. margin-right
3. margin-top
4. margin-bottom 

Shorthand
- horizontal/vertical padding
padding: 5px 10px;
- top/horizontal/bottom
padding: 1px 2px 2px;
- top/right/bottom/left
padding; 1px 2px 3px 4px

Display Property
1. Inline- width & Height are ignored.
-margin and padding push elements away horizontally but not vertically
2. Block- block elements break the flow of a document.
-Width, Height, Margin & Padding are respected
3. Inline-Block- behave like an inline element 
-Width, Height, Margin, & Padding are respected

CSS Units
1. percentages are always relative to some other value
-sometimes it's a value from the parent and other times it's a value from the element itself.
width: 50% = half the width of the parent
line-height: 50% equals half the font-size of the element itself

2. em's are relative units
-with font-size, 1em equal the font-size of the parents
-2em's is twice the font-size of the parent, etc.
-with other properties, 1em is euql to the computed font-size of the element itself.

3. root ems(rem)
-Relative to the root html element's font-size. Often easier to work with.
-If the root font-size is 20px, 1 rem is always 20px, 2rem is always 40px, etc.