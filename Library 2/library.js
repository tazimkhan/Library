// add the data into local storage
console.log('hello')
var bookName=document.getElementById('bookName')
var author=document.getElementById('author')
var version=document.getElementById('version')
var addBook=document.getElementById("submit");
var libraryForm=document.getElementById('libraryForm');

addBook.addEventListener('click',(e)=>{
    e.preventDefault();
    let info = localStorage.getItem("info");
  if (info == null) {
     details = []; 
  } else {
    details = JSON.parse(info);
  }
    details.push([bookName.value,author.value,version.value]);
    localStorage.setItem('info',JSON.stringify(details));
    console.log(details);
    shownotes()
    libraryForm.reset();

})

function shownotes(){
    let info = localStorage.getItem("info");
  if (info == null) {
    details = [];
  } else {
    details = JSON.parse(info);
  }
  let html = "";
  for(let i=0;i<details.length;i++){
        html+=`
        <tr>
          <th scope="row">${i+1}</th>
          <td>${details[i][0]}</td>
          <td>${details[i][1]}</td>
          <td>${details[i][2]}</td>
        </tr>
      `;
      }
      let tableElm = document.getElementById("tableData");
      if (details.length != 0) {
        tableElm.innerHTML = html;
      } else {
        tableElm.innerHTML = `Nothing to show! Use "Add " section above to add details.`;
      }
}
