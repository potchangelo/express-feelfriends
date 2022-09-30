# Express FeelFriends

https://express-feelfriends.alwaysdata.net/

ตัวอย่างโปรเจ็ค Express จากคลิป "สอน Express เบื้องต้น จนใช้ได้จริง # 1" ของ Zinglecode

Note: ทำขึ้นมาเพื่อการศึกษาทางการเขียนโปรแกรมเท่านั้น เนื้อหาบนเว็บไม่ใช่สินค้าหรือบริการที่มีอยู่จริง

(Update 30/9/2022) ย้าย Hosting ของเว็บพรีวิว จาก Heroku ไปยัง alwaysdata เนื่องจาก Heroku ยกเลิก Free tier ครับ


## YouTube video

zzzz



## Setup database table

![post table structure](https://raw.githubusercontent.com/potchangelo/express-feelfriends/main/snapshots/db-table-post-structure.jpg "post table structure")
*post table structure*

![comment table structure](https://raw.githubusercontent.com/potchangelo/express-feelfriends/main/snapshots/db-table-comment-structure.jpg "comment table structure")
*comment table structure*


## Install and Run project by VSCode

0. ติดตั้ง Node.js, MySQL, MySQLWorkbench ลงเครื่องให้เรียบร้อยก่อน

1. ดาวน์โหลดโปรเจ็คนี้ลงเครื่อง

2. เปิดโฟลเดอร์โปรเจ็คใน VSCode

3. เปิดไฟล์ .env.sample แล้วเปลี่ยนชื่อเป็น .env จากนั้นให้เปลี่ยนการตั้งค่าให้สอดคล้องกับเครื่องของคุณ เสร็จแล้วบันทึกไฟล์ได้เลย

4. เปิด VSCode Terminal

5. ติดตั้ง Packages ของโปรเจ็ค

```
npm install
```

6. เปิดเว็บโปรเจ็คเพื่อ Development

```
npm run dev
```


## Github branches for each lessons

1. [Setup and Run](https://github.com/potchangelo/express-feelfriends/tree/01-setup)
2. [Routes](https://github.com/potchangelo/express-feelfriends/tree/02-routes)
3. [Templates](https://github.com/potchangelo/express-feelfriends/tree/03-templates)
4. [Handlebars](https://github.com/potchangelo/express-feelfriends/tree/04-handlebars)
5. [Routers](https://github.com/potchangelo/express-feelfriends/tree/05-routers)
6. [MySQL](https://github.com/potchangelo/express-feelfriends/tree/06-mysql)
7. [Forms](https://github.com/potchangelo/express-feelfriends/tree/07-forms)
8. [Static](https://github.com/potchangelo/express-feelfriends/tree/08-static)
9. [Dotenv](https://github.com/potchangelo/express-feelfriends/tree/09-dotenv)
10. [Deploy to Heroku](https://github.com/potchangelo/express-feelfriends/tree/10-deploy-heroku)

- [Branch ของเว็บพรีวิว](https://github.com/potchangelo/express-feelfriends/tree/preview) -> จะมีการปรับแต่งโค้ดนิดนึงให้ใช้งานบน Host อย่างเหมาะสม


## Credits

https://unsplash.com/photos/J85dU7QSdMc

https://www.iconfinder.com/icons/8708735/emoji_lol_teeth_smile_icon

