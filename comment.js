

/*const posts = document.querySelectorAll(".big");

posts.forEach(function (post) {

const input= document.querySelector(".rest");
  const bless= document.querySelector(".gone");
  const cover= document.querySelector(".cover");
  let editing=null;

  function action(){
    const three=input.value.trim();
    
    if (three===""){return;}
    if (editing) {
  editing.querySelector(".text").textContent = three;

  editing = null;
  input.value = "";
  bless.textContent = "Post";
  return;}
    const container= document.createElement("div");
    container.classList.add("container")
    cover.appendChild(container);

    const images= document.createElement("img");
    images.src="IMG_E5529.JPG";
    images.classList.add("images");
    container.appendChild(images);

    const full=document.createElement("div")
  full.classList.add("full")
  container.appendChild(full);
   
   const goat=document.createElement("div")
  goat.classList.add("goat")
  full.appendChild(goat);
 const beach=document.createElement("div")
  beach.classList.add("beach")
  goat.appendChild(beach);


  const username=document.createElement("span")
  username.classList.add("username")
  username.textContent='Blego';
  beach.appendChild(username);

 const text=document.createElement("span")
  text.classList.add("text");
  text.textContent= three;
  beach.appendChild(text);
   const love=document.createElement("div")
  love.classList.add("love")
  goat.appendChild(love);

   /** const heart=document.createElement("span");
  heart.classList.add("heart");
  heart.textContent="♡";
  heart.setAttribute("aria-label", "Like comment ")
  heart.addEventListener("click", function () {if (heart.classList.toggle("liked")){heart.textContent="♥";
    heart.style.color='red'}
  else{heart.textContent="♡";
   heart.style.color='white';

  }})
  full.appendChild(heart);**/


  /* const time=document.createElement("span")
  time.classList.add("time");
   const clock=Date.now();
   function updateTime(){const seconds=Math.floor((Date.now()-clock)/1000);
    if (seconds<60){time.textContent=seconds+"s"}
    else if(seconds<3600){time.textContent=Math.floor(seconds/60)+"min"}
    else if(seconds<86400){time.textContent=Math.floor(seconds/3600)+"hr"}
    else{time.textContent=Math.floor(seconds/86400)+"day"}
   }
   updateTime();
  setInterval(updateTime, 1);
  love.appendChild(time);
  const edit = document.createElement("span");
edit.textContent = "Edit";
edit.classList.add("edit");

edit.addEventListener("click", function () {
  input.value = text.textContent;
  editing = container;
  input.focus();
  bless.textContent = "Post";
});

love.appendChild(edit);

  

   const heart=document.createElement("span");
  heart.classList.add("heart");
  heart.textContent="♡";
  heart.setAttribute("aria-label", "Like comment ")
  heart.addEventListener("click", function () {if (heart.classList.toggle("liked")){heart.textContent="♥";
    heart.style.color='red'}
  else{heart.textContent="♡";
   heart.style.color='white';

  }})
  full.appendChild(heart);

 input.value="";
  }
  bless.addEventListener("click",action);
  input.addEventListener("keydown",function(event){
    if (event.key==="Enter"){action()}
  })})*/
 
const posts = document.querySelectorAll(".big");

posts.forEach(function (post) {

    const input = post.querySelector(".rest");
    const bless = post.querySelector(".gone");
    const cover = post.querySelector(".cover");
    let editing=null;


    function action() {
        const three = input.value.trim();

        
        if (three===""){return;}
    if (editing) {
  editing.querySelector(".text").textContent = three;

  editing = null;
  input.value = "";
  bless.textContent = "Post";
  return;}


        const container = document.createElement("div");
        container.classList.add("container");
        cover.appendChild(container);

         const images= document.createElement("img");
    images.src="IMG_E5529.JPG";
    images.classList.add("images");
    container.appendChild(images);

    const full=document.createElement("div")
  full.classList.add("full")
  container.appendChild(full);
   
   const goat=document.createElement("div")
  goat.classList.add("goat")
  full.appendChild(goat);
 const beach=document.createElement("div")
  beach.classList.add("beach")
  goat.appendChild(beach);


  const username=document.createElement("span")
  username.classList.add("username")
  username.textContent='Blego';
  beach.appendChild(username);

        const text = document.createElement("span");
        text.classList.add("text");
        text.textContent = three;
        beach.appendChild(text);
   const love=document.createElement("div")
  love.classList.add("love")
  goat.appendChild(love);
  const time=document.createElement("span")
  time.classList.add("time");
   const clock=Date.now();
   function updateTime(){const seconds=Math.floor((Date.now()-clock)/1000);
    if (seconds<60){time.textContent=seconds+"s"}
    else if(seconds<3600){time.textContent=Math.floor(seconds/60)+"min"}
    else if(seconds<86400){time.textContent=Math.floor(seconds/3600)+"hr"}
    else{time.textContent=Math.floor(seconds/86400)+"day"}
   }
   updateTime();
  setInterval(updateTime, 1);
  love.appendChild(time);
  const edit = document.createElement("span");
edit.textContent = "Edit";
edit.classList.add("edit");

edit.addEventListener("click", function () {
  input.value = text.textContent;
  editing = container;
  input.focus();
  bless.textContent = "Post";
});
love.appendChild(edit);

  

   const heart=document.createElement("span");
  heart.classList.add("heart");
  heart.textContent="♡";
  heart.setAttribute("aria-label", "Like comment ")
  heart.addEventListener("click", function () {if (heart.classList.toggle("liked")){heart.textContent="♥";
    heart.style.color='red'}
  else{heart.textContent="♡";
   heart.style.color='white';

  }})
  full.appendChild(heart);


        input.value = "";
    }

    bless.addEventListener("click", action);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            action();
        }
    });

});
