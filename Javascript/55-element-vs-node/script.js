//Difference Between Element and Node

//there are something other than element which is called node (not defination)
//element: has all the properties that node has but also has extra properties

//node: node does not have a lot of properties like element

//every element is a node as it inherit nodes properties 
// every node is not an element


//node type:everynode has different number
// Name	       Value
// ELEMENT_NODE	1
// ATTRIBUTE_NODE	2
// TEXT_NODE    	3
// CDATA_SECTION_NODE	4
// PROCESSING_INSTRUCTION_NODE	7
// COMMENT_NODE	8
// DOCUMENT_NODE (DOM)	9
// DOCUMENT_TYPE_NODE	10
// DOCUMENT_FRAGMENT_NODE	11

// console.dir(document.querySelector('h1')) this has value 1 as h1 is an element node

// console.dir(document.body.attributes.style) // this has value 2 attribute node



//node name:in element, node name is the name of the element but capitalized


//update a text which does have any element tag class etc

//we are selecting body and going to childnode and then update its value. 
//can not do with children as it is not element
// document.body.childNodes[2].nodeValue='Hi World'


//this is children which is html collection, mean collection of elements
document.body.children


//node is a object
document.body.childNodes