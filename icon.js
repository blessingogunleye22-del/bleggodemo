

/*const bounce=document.querySelector(".my-icon");

let dance= 0;
  function clicked(){ 
    if(bounce.classList.contains("fa-regular")){bounce.classList.remove("fa-regular");
      bounce.classList.add("fa-solid");
      dance++;
  } else {bounce.classList.remove("fa-solid");
    bounce.classList.add("fa-regular")
  }
  document.querySelector('.elect').innerHTML=`${dance}`;
  }*/document.querySelectorAll(".big").forEach(function (post) {

  // LIKE ICON
  const bounce = post.querySelector(".my-icon");
  const elect = post.querySelector(".elect");
  let dance = 0;

  bounce.addEventListener("click", function () {
    if (bounce.classList.contains("fa-regular")) {
      bounce.classList.remove("fa-regular");
      bounce.classList.add("fa-solid");
      dance++;
    } else {
      bounce.classList.remove("fa-solid");
      bounce.classList.add("fa-regular");
      dance--;
    }

    elect.textContent = dance;
  });


  // COMMENT ICON
  const coment = post.querySelector(".fa-comment");
  const victor = post.querySelector(".victor");
  const later = post.querySelector(".later");

  let game = 0;

  coment.addEventListener("click", function () {if
   ( later.classList.toggle("show")){
    game++;
    }
    else{game--;}
    victor.textContent=game;
  });


  // RETWEET ICON
  const retweet = post.querySelector(".fa-retweet");
  const cast = post.querySelector(".cast");

  let waste = 0;

  retweet.addEventListener("click", function () {
    if (retweet.classList.toggle("live")) {
      waste++;
    } else {
      waste--;
    }

    cast.textContent = waste;
  });

});
/*
   const coment = document.querySelector(".coment");
const victor = document.querySelector(".victor");
const later = document.querySelector(".later");

let game = 0;

coment.addEventListener("click", function () {
  later.classList.toggle("show");
if (opened){game++;
  victor.textContent=game;}
})

const retweet = document.querySelector(".retweet");
const cast = document.querySelector("cast");

let waste = 0;

retweet.addEventListener("click", function () {
  if (retweet.classList.toggle("live")) {
    waste++;
  } else {
    waste--;
  }

  cast.textContent = waste;
  });})*/