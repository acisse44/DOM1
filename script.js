//1 Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"));
//2 Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));
//3 Select all of the list items with a class of "second".
console.log(document.querySelectorAll("li.second"));
//4 Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector('ol').getElementsByClassName("third"));
//5 Give the section with an id of container the text "Hello!".
let word = document.getElementById("container");
word.innerText = "Hello";
//6 Add the class main to the div with a class of footer.
document.querySelector(".footer").classList.add("main");
//7 Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");
//8 Create a new li element.
let newElem = document.createElement("li");
//9 Give the li the text "four".
newElem.innerText("four");
//10 Append the li to the ul element.
document.querySelector("ul").appendChild(newItem);
//11 Loop over all of the lis inside the ol tag and give them a background color of "green".
for (let i = 0; i < ul.childNodes.length; i++) {
    ul.childNodes[i].style.backgroundColor = "green";

}
//12 Remove the div with a class of footer.
document.getElementsByClassName("footer").remove();

