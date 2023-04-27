let section = document.querySelectorAll(".item");

// section.forEach((item, index) => {
//   console.log(index)
//   item.addEventListener('mouseover', () => {
//     item.classList.add(item.innerHTML)
//     console.log(index)
//   })

//   item.addEventListener('mouseleave', () => {
//     item.classList.remove(item.innerHTML)
//     console.log("remove")
//   })
// })





window.onscroll = function () {
  for (let i = 1; i < section.length; i++) {
    if (window.scrollY >= section[i].offsetTop - window.innerHeight && window.scrollY <= section[i].offsetTop + section[i].offsetHeight) {
      section[i].classList.add(section[i].innerHTML)
      console.log("add", section[i].innerHTML)
    }
    else {
      section[i].classList.remove(section[i].innerHTML)
      console.log("remove", section[i].innerHTML)

    }
  }
}

