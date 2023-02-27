const url = "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane";
const ul = document.getElementById('Name');
const list = document.createDocumentFragment();
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    listData(data);
  } catch (error) {
    console.log(error);
  }
}
function listData(data) {
  data.map(function (Api) 
  {
    const Apinew = `<div class="name">${Api.name}</div>`;
    const item = document.createElement('li');
    item.innerHTML = Apinew;
    list.appendChild(item);
  });
  ul.appendChild(list);
}
getData();
