# First of all
<br>
1. Эхллээд "package"-ууд суулгана.

```bash 
yarn install
```
эсвэл
```bash
npm install
```
Энд юу, юу суулгаж байгааг "package.json" файлаас хараарай.
<br>
<br>
2. MongoDB өгөгдлийн сангаа холбоно. Гэхдээ эхлээд .env файл үүсгэнэ шүү.
```bash
cp .env.example .env
``` 
mongodb.com ороод өөртөө үнэгүй өгөгдлийн сан үүсгээрэй. 512мб үнэгүй шүү. Хэтрүүлэн хэрэглэвэл санхүүгийн байдалд сөрөг нөлөө үзүүлнэ XD.

```
MONGO_URL=<Таны өгөгдлийн сантай холбогдох линк>
APP_PORT=8000  --Ямар Порт дээр асаахаа зааж өгнө-- 

```

3. За ингээд сервер асааядаа.

```bash
yarn start
```
 Дээр байгаа коммандыг ажиллуулахад ямар нэг алдаа өгөхгүй бол ингээд л амжиллттай өгөгдлийн сантайгаа холбогдоод сервер янзын сайхан асчихлаадаа XD. За тэгээд **localhost:PORT** гээл тест хийж үзнэ дээ.


<br>
<br>

# Бүтэц зохион байгуулалт


1. Архитектур

```
project
│   .env            <-- Энд өөрийнхөө нууц байлгах тохиргоогоо өгөөрэй.
│   .env.example    <-- Андуураад энд хамаг тохиргоогоо өгөв. Түмний нүдэнд нууц чинь ил болно шүү XD
│   .gitignore      <-- Энд .env болон node_modules git cloud repository луу явуулахгүй гээд заагаад өгсөн. Устгаж болохгүй шүү.
│   package.json    <-- Ямар, ямар libray суусан байгааг сонирхоорой.
│   README.md       <-- Та одоо намайг уншиж байна XD 
│   tsconfig.json   <-- TypeScript тохируулга
│   yarn.lock  
│
└───src
   │___ index.ts    <-- Сервер дуудаж асаах файл
   │
   └─── config      <-- Энд сервер асах тохиргоонууд цугларна
   │
   └─── core        <-- Сервер угсралтын хэсэг
   │
   └─── databse
   │    │
   │    │─ models   <-- Өгөгдлийн сангийн документын model энд цугларна
   │    │
   │    │─ index.ts <-- Үүсгэсэн "Schema/Model" -ийг энд заавал оруулна
   │
   └─── middleware
   │    │
   │    │─ error.ts <-- Алдааны үед буцаах handler
   │    
   │    
   │
   └─── router
        │
        │─ index.ts <-- Энд бүх route явж байгаа та илүү ухаалаг бичиж болно
  
```

2. Жишээ болгож User гэсэн модел болон GET /v1/users route үүсгэсэн байгаа.


Амжилт хүсье. Цааш нь илүү өргөжүүлээрэй.
# Хэрэгтэй холбоосууд
http://expressjs.com/ -- ExpressJS <br>
https://mongoosejs.com/docs/guide.html -- Mongoose /MongoDB ORM/