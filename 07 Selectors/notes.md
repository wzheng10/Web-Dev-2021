CSS Selectors

Crucial!
  -Element Selector
  -Class Selector
  -ID Selector
  -Descendent Selector
  -CSS Specificity
Important
  -Adjacent Selector
  -Direct Descendent Selector
  -Attribute Selector
  -Pseudo ELements
  -Pseudo Classes

Writing good CSS is being able to write selectors 
Universal Selector - selects everything
i.e. * { 
    color: black;
    }

Element(type) Selector - selects all of a specified type
i.e. img {
  background-color: cyan;
}

Selector List- selects more than one element(comma separated)
i.e. h1, h2 {
  color: blue;
}

ID Selector- selects the element with a specified id
*keep id's to a minimum*
i.e. #signup {    (this selects all id's with the tag 'signup')
  color: pink;
}

Class Selector- selects elements with class of 'complete'
class can be applied to multiple elements
i.e. .complete {
  color: green;
}

 <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element.
  <span> can be used to group elements for styling purposes (using the class or id attributes)

anchor tag - creates a link
<a href="<website>"> comment</a>
Descendant Selector -selects all anchor tags (<a>) that are nested inside an <li>
i.e. li a{
  color: teal;
}

The HTML <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

Adjacent Selector(combinator)- select only the paragraphs that are immediately preceded by an <h1>
i.e. h1 + p {
  color: red;
}

Direct Child- selects only the <li>'s that are direct children of a <div> element

div > li {
  color: white;
}

Attribute Selector- select all input elements where the type attribute is set to "text"
i.e. input[type="text"] {
  width: 300px;
  color: yellow;
}

Pseudo Classes- keyword added to a selector that specifies a special state of the selected elements(s)
(all requires the colon)
1. :active
2. :checked
3. :first
4. :first-child
5. :hover
6. :not()
7. :nth-child()
8. :nth-of-type()

Pseudo Elements- keywords added to a selector that lets you style a particular part of selected elements(s)
(all requires a double colon)
1. ::after
2. ::before
3. ::first-letter
4. ::first-line
5. ::selection

CSS Cascade- order your styles are declared in and linked matters
i.e.
h1 {
  color: red;
}
h1 {
  color: purple;
}
**color would be purple**
Priority order
ID(#) > CLASS(.) > ELEMENT

Inline Styles
1. Inline Styles **not recommended**
2. ID(#) Selectors
3. Class(.), Attritubes, & Pseudo-Class Selectors(:)
4. Element and Pseudo-Element Selectors(::)

!important overrides all styles **not recommended**

Inheritance
