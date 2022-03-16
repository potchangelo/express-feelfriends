console.log('FeelFriends');
console.log('ฮั่นแน่');
console.log('เปิดดู Console อยู่หละสิ');
console.log('console.log ตรงนี้จะแสดงผลในทุกหน้าเว็บนะครับ');
console.log('แต่ตัว Function scrollTop จะทำงานเฉพาะในหน้าที่มีปุ่มลูกศร Scroll top เท่านั้น');

const scrollTopButton = document.querySelector('.scroll-top-button');

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (!!scrollTopButton) {
  scrollTopButton.addEventListener('click', scrollTop);
}
