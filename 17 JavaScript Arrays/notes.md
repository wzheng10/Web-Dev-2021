JavaScript Arrays

**Crucial!**
-Array Basics- Creating and Updating
-Push & pop
-Shift & Unshift

*Important*
-Concat, IndexOf
-Slice & Splice
-Multi Dimensional Arrays

Arrays 
    -Ordered collection of values.
to make an empty array we use [] (square brackets)
they do not have to contain one type of data, but anything comma separated; even arrays
arrays are indexed starting from 0

Array Methods
    push- add an element to the end of an array
    pop- remove an element from the end of the array
    unshift- add an element to the front of the array
    shift- remove an element from the front of the array

    concat- merge arrays
    includes- look for a value and returns a boolean
    indexOf- just like string.indexOf and gives the index position of a given 
    join- creates a string from an array
    reverse- reverses an array
    slice- copies a portion of an array
    splice- removes/replaces elements
        let colors =['r', 'o', 'g', 'b', 'i', 'v']
        colors.splice(4,1) //will delete 'i' since it is the 4th index
        colors.splice(index position, delete(num)) or colors.splice(index position, delete(num), 'thing u want inserted')
    sort- sorts an array by UTF-15
        -not a reliable numeric sort

Reference Types & Equality Testing
    using === with arrays compares the references in memory and not the elements iteself

As long as the reference remains the same, const can be changed
    -only mutations are allowed such as pop and push
    -reassignment of const variable will result in errors

Nested Arrays/Multi-Dimensional Arrays
    -we can store arrays inside other arrays