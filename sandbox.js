/* Primitive & Reference Types */
/*  Primitive Types  |   Reference Types
**  - numbers        |   - all types of objects
**  - strings        |       - object literals
**  - Booleans       |       - arrays
**  - null           |       - functions
**  - undefined      |       - dates
**  - symbols        |       - all other objects
*/

/* NOTE: In Javascript all the primitive data types are stored in stacks (data structure) & reference types are stored in heaps with the pointer(var. name in a stack).
So, the problem is when a reference type variable is assigned to another new variable(like trying to make a copy) the values of the original variable does not get assigned to the new variable, but just the new variable reference to the original variable's data. Hence if change(update) data using either variable, the original data stored gets affected as it is reference to by both the variables */

