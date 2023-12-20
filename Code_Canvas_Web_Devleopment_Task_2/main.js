let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var div_complete = document.createElement('div');
    var div_links = document.createElement('div');
    var paragraph = document.createElement('p');
    var line_break = document.createElement('br');
    var link_mark_done = document.createElement('a');
    var link_edit = document.createElement('a');
    var link_delete = document.createElement('a');
    div_complete.classList.add('div_complete');
    paragraph.classList.add('paragraph-styling');
    link_mark_done.classList.add('links_mark_done');
    link_edit.classList.add('links_edit');
    link_delete.classList.add('links_delete');
    paragraph.innerText = inputField.value;
    link_mark_done.innerText = "DONE";
    link_edit.innerText = "EDIT";
    link_delete.innerText = "DELETE";
    div_links.appendChild(link_mark_done);
    div_links.appendChild(link_edit);
    div_links.appendChild(link_delete);
    div_complete.appendChild(paragraph);
    div_complete.appendChild(div_links);
    toDoContainer.appendChild(div_complete);
    toDoContainer.appendChild(line_break);
    inputField.value = "";
    link_mark_done.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    link_delete.addEventListener('click', function(){
        toDoContainer.removeChild(div_complete);
        toDoContainer.removeChild(line_break);
    })
    link_edit.addEventListener('click', function(){
        inputField.value = paragraph.innerText;
        toDoContainer.removeChild(div_complete);
        toDoContainer.removeChild(line_break);
        addToDoButton.innerText = "Save";
        addToDoButton.addEventListener('click', function(){
            inputField.value = "";
            addToDoButton.innerText = "Add";
        })
    })
})