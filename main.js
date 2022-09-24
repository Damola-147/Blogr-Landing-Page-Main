const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const dropdownLinks = document.querySelectorAll('.dropdown-link');
const hero = document.querySelector('.hero-section');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  nav.classList.toggle('open');
  closeActiveLinks(dropdownLinks);
});

hero.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') { return; }
  if(e.target.tagName === 'IMG') { return; }
  if(e.target.tagName === 'LI') { return; } 

  dropdownLinks.forEach(link => {
    if(link.classList.contains('open')) {
      link.classList.remove('open');
    }
  })
});

dropdownLinks.forEach((link, idx, arr) => {
  link.addEventListener('click', (e) => toggleLink(e.target, link, arr));
});


function toggleLink(tag, li, links) {
  const name = tag.tagName.toLowerCase();
  
  if (name !== 'a' || !tag.classList.contains('link') && name !== 'img'
  ) { 
    return;
  }

  if(li.classList.contains('open')) {
    li.classList.remove('open');
    return;
  }

  closeActiveLinks(links);
  li.classList.add('open');
}


function closeActiveLinks(links) {
  links.forEach(link => {
    link.classList.remove('open');
  });
}