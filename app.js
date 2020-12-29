const express = require('express'); 
const app = express(); 
const port = 8080; 

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine


app.get('/users', (req, res)=>{
    var users = [{name: "User2", email: "user1@gmail.com"}, {name: "User3", email: "user2@gmail.com"}]
	res.render('users/index', {users:users});

})


app.get('/form', (req, res)=>{
	res.render('users/form');
})







app.listen(port, function(){
    console.log("Your app running on port " + port);
})