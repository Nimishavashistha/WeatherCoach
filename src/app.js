const express = require('express');
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 8000;

const publicStaticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");



//serving template engines file
app.set('view engine','hbs');
app.set('views',template_path);
//we need to register partials folder here
hbs.registerPartials(partials_path);


//serving static files(public) in express
app.use(express.static(publicStaticPath));

app.get("",(req, res)=>{
//   res.send("welcome to the home page");
   res.render('index');
})

app.get("/about",(req, res)=>{
    // res.send("welcome to the about page");
    res.render('about');
})

app.get("/weather",(req, res)=>{
    // res.send("welcome to the weather page");
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render("404 error page",{
        errorMsg: "Oops! Page not Found"
    })
})
  
app.listen(port, ()=>{
    console.log("listening to the port 8000");
})