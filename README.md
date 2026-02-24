Answers to the given questions:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Ans:**
getElementById : Selection through ID, only one element
getElementsByClassName : Selection through class name, can be multiple elements
querySelector : Selection of first element fulfilling the condition, only one
querySelectorAll : Selection of all elements fulfilling the condition, multiple

2. How do you create and insert a new element into the DOM?
**Ans:**
The processes are given below :
Create : document.createElement("tagName")
Insert : parentElement.appendChild(element)

3. What is Event Bubbling? And how does it work?
**Ans:**
Event bubbling is when an event starts from target element and moves up to parent elements.
There are three steps in the process:
i.Capture Phase : From parent to target element
ii. Target Phase : Selecting the target element
iii. Bubbling Phase : Goes back from target element to parent

4. What is Event Delegation in JavaScript? Why is it useful?
**Ans:**
The process of using Event Listener on parent instead of using it separately for each child is Event Delegation.
It reduces memory usage, can work for dynamic elements and makes code easy to read.

5. What is the difference between preventDefault() and stopPropagation() methods?
**Ans:**
i. preventDefault() : stops default browser action
ii. stopPropagation() : stops the event from bubbling up to parent elements.
