console.log('hello');

function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

// display constructor
function Display()
{

}
// add mehtod to display prototype
Display.prototype.add=function(book){
    console.log('add UI');
    let tableBody=document.getElementById('tableBody');
            let uiString=`  <tr>
                                
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                         </tr>`;
    tableBody.innerHTML+=uiString;
}
Display.prototype.clear=function(){
    let libraryForm=document.getElementById("libraryForm");
    libraryForm.reset();
}
// add submit to eventLisenter to library

let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    let name=document.getElementById("bookName").value;
    let author=document.getElementById("author").value;
    let fiction=document.getElementById("fiction");
    let programming=document.getElementById("programming");
    let coocking=document.getElementById("coocking");
    let type;
    if (fiction.checked){
        type=fiction.value;
    }else if (programming.checked){
        type=programming.value;
    }else if (coocking.checked){
        type=coocking.value;
    }
    let book=new Book(name,author,type);
    let display=new Display();
    display.add(book);
    display.clear();
    console.log(book);
    console.log('submited library form')
}