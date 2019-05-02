# react_laravel

1.git clone https://github.com/third1020/react_laravel.git

2.cd react_laravel

3.npm install

4.composer install

5.edit file  .env connect to database

6.php artisan migrate

7.php artisan key:generate

8.npm run dev

9.php artisan serve

แล้วก็ login ไม่ได้ไม่มี user ในdatabase 555555 เดียวเติ้ดเอา hashpassword ออกก่อนจะได้เทสง่ายๆ ไอซ์ไปเพิ่ม permission กับ users ใน phpmyadmin ด้วย

ตรง permission   ช่องใส่ค่าพวก manage ต่างๆใส่ค่า 0 กับ 1 นะ

ส่วนหน้าแก้ไขมันจะเลื่อนไม่ได้   ต้องเข้าไปแก้ไฟล์ใน node_module/react-comfirm-alert/src/react-comfirm-alert.cssถึงจะเลือนได้

