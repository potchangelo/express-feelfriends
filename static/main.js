console.log('❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️');
console.log('FeelFriends');
console.log('ฮั่นแน่');
console.log('เปิดดู Console อยู่หละสิ');
console.log('console.log ตรงนี้จะแสดงผลในทุกหน้าเว็บนะครับ');
console.log('แต่ตัว Function scrollTop จะทำงานเฉพาะในหน้าที่มีปุ่มลูกศร Scroll top เท่านั้น');
console.log('และเหตุผลที่ผมใส่ console.log เยอะๆก็เพราะว่า');
console.log('ใน Github มันเห็นโค้ด Handlebars เยอะกว่า');
console.log('Github เลย Label ให้โปรเจ็คนี้เป็นโปรเจ็ค Handlebars');
console.log('แน่นอนว่าผมไม่อยากให้มันเข้าใจผิด');
console.log('เลยขอใส่โค้ด JavaScript เยอะๆ');
console.log('Github จะได้ Label โปรเจ็คนี้เป็น JavaScript');
console.log('❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️');

const scrollTopButton = document.querySelector('.scroll-top-button');

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (!!scrollTopButton) {
  scrollTopButton.addEventListener('click', scrollTop);
}
