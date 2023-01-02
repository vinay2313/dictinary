let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul1 = document.getElementById("ul1");
let p = document.getElementById("p");
let q = document.getElementById("q");
let audioh3 = document.getElementById("audioh3");


btn.addEventListener("click", (e) => {
  e.preventDefault();
  if(btn.value==null){
    alert("please enter something")
  }else{
    p.innerHTML="---"
  ul1.innerHTML=""
  audioh3.innerHTML=""
  
 clickcall()
 
  getdata();

  }
});
async function getdata() {
  let res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${inp.value}`
  );
  let data = await res.json();
  console.log(data);
  console.log(data[0].meanings[0].definitions[0].definition );
  let w = data[0].word
  p.innerText =w
  let definitiona = data[0].meanings[0].definitions;
  let geta=data[0].phonetics
  let  ado
    for(let i=0;i<geta.length;i++){
    ado = data[0].phonetics[i].audio;
    }
  let a = document.createElement("audio")
  a.setAttribute("src",ado)
  a.setAttribute("controls","controls")
 
 audioh3.appendChild(a)
  for (let i = 0; i<definitiona.length; i++) {
    let li = document.createElement("li");
    li.innerText = definitiona[i].definition;
    console.log(data[0].meanings[0].definitions[i].definition );
    console.log("hello")
    li.className = "list-group-item";
    ul1.appendChild(li);
   
  }
  

  
  inp.value=""
}

function clickcall(){
  let g = inp.value
  
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '9acc11fdd9msh45082e4b682f242p19645bjsndafedfbf53fc',
      'X-RapidAPI-Host': 'google-translate78.p.rapidapi.com'
    },
    body: `{"text":"${g}","source":"en","target":"hi"}`
  };
  
  async function gethigeta(){  fetch('https://google-translate78.p.rapidapi.com/translate', options)
    .then(response => response.json())
    .then(response => q.innerText = response.translations.translation)
    .catch(err => console.error(err));
    }
    gethigeta()
}
