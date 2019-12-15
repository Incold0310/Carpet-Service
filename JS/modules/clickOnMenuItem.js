let selectedLink = document.querySelector('.activeMenuLink');

function clickOnMenuItem(event) {
  event.preventDefault();
  let link = event.target.closest('li');
  if (!link) return;

  selectedLink.classList.remove('activeMenuLink');
    selectedLink = link;
    selectedLink.classList.add('activeMenuLink');

    let href = event.target.getAttribute('href');
  document.querySelector(href).scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

export default clickOnMenuItem;
