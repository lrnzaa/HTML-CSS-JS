var enterButton = document.getElementById("enter");
var input = document.getElementById("txtUserInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength()
{
    return input.value.length;
}

function listLength()
{
    return item.length;
}

function createListElement()
{
    // creates an element "li".
    var li = document.createElement("li");
    //makes text from input field the li text.
    li.appendChild(document.createTextNode(input.value));
    //adds li to ul.
    ul.appendChild(li);
    //reset text input field.
    input.value = "";

    
    //Start Strikethrough
    //only for new items.
    function crossOut()
    {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //End Strikethrough


    //Start Add Delete Button
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("X"));
    li.appendChild(delButton);
    delButton.addEventListener("click", deleteListItem);
    //End Add Delete Button


    //Add Class Delete (Display: none)
    function deleteListItem()
    {
        li.classList.add("delete");
    }
    //End Add Class Delete
}


function addListAfterClick()
{
    if(inputLength() > 0)
    {
        //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event)
{
    if(inputLength() > 0 && event.which === 13)
    {
        //if press enter / return, 13 enter keycode
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);