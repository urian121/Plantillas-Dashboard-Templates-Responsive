// const profileMenu = document.querySelector('#profileMenu');
// const menuButton = document.querySelector('#menuButton');

// // function to toggle the show class on the profile-menu element
// function toggleMenu() {
//   profileMenu.querySelector('.profile-menu').classList.toggle('show');
// }

// // add a click event listener to the menu button to toggle the menu
// menuButton.addEventListener('click', toggleMenu);

// // add a click event listener to the document to close the menu when clicking outside
// document.addEventListener('click', function(event) {
//   // check if the click event occurred outside the profile-menu-wrap element
//   if (!profileMenu.contains(event.target)) {
//     // remove the show class from the profile-menu element to hide it
//     profileMenu.querySelector('.profile-menu').classList.remove('show');
//   }
// });



const profileMenu = document.getElementById("profileMenu");

const toggleMenu = () => {
  profileMenu.classList.toggle("openMenu");

  }


const closeMenu = (event) => {
  if (!event.target.closest('#profileMenu') && profileMenu.classList.contains('openMenu')) {
    toggleMenu();
  }
};

let sideAct = document.getElementById("sidebarActivity")
let moreLink = document.getElementById("showMorelink")

const toggleActivity=()=>{
  sideAct.classList.toggle("open-activity")

  if(sideAct.classList.contains("open-activity")){
    moreLink.innerHTML = "Show less <b>-</b>"
  }
  else{
    moreLink.innerHTML = "Show more <b>+</b>"
  }
}

// document.addEventListener('click', closeMenu);
 



// let profileMenu=document.getElementById("profileMenu")
  

// let toggleMenu=()=>{
//     profileMenu.classList.toggle("openMenu")
// } 

// document.onclick = (a) => {
//     if (a.target.id !== "openMenu" && a.target.id !== "profileMenu") {
//       toggleMenu.classList.remove("openMenu");
//       profileMenu.classList.remove("profileMenu");
//     }
//   }


//   window.onload = () => {
//     const hidediv = document.getElementById("profileMenu");
//     document.onclick = (div) => {
//       if (div.target.id !== "profileMenu") {
//         hidediv.style.display = 'none';
//       }
//     };
//   };



