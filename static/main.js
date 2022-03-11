console.log('FewFriends');

const scrollTopButton = document.querySelector('.scroll-top-button');

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (!!scrollTopButton) {
  scrollTopButton.addEventListener('click', scrollTop);
}
