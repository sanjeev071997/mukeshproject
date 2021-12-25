const express = require('express');
const path = require("path");
const app = express();
const hbs =  require("hbs");
require('./db/conn');
const contactUs = require('./models/contactUs');
const Name = require('./models/Name');
const footer = require('./models/footer');
const { create } = require('hbs');
const port = process.env.PORT || 9000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.use('/src', express.static('src'));

app.set("view engine", "hbs");
app.set("views", template_path);
// app.set("views", partials_path);
// hbs.registerPartials(partials_path);

app.get("/", (req, res)=> {
    res.render("index.hbs")
});

app.post('/', (req,res)=>{
    var myData = new Name(req.body);
    res.status(200).render("index.hbs");
    myData.save(). then(()=>{
        res.json;
    }).catch(()=>{
         res.status(401).json("Form was not submited");
    });

});

app.get("/about.hbs",(req, res)=>{
    res.render("about.hbs");
});

app.get("/service.hbs",(req, res)=>{
    res.render("service.hbs");
});

app.get("/internet.hbs",(req, res)=>{
    res.render("internet.hbs");
});

app.get("/networking.hbs",(req, res)=>{
    res.render("networking.hbs");
});

app.get("/telephone.hbs",(req, res)=>{
    res.render("telephone.hbs");
});

app.get("/cctv.hbs",(req, res)=>{
    res.render("cctv.hbs");
});

app.get("/contactUs.hbs",(req, res)=>{
    res.render("contactUs.hbs");
});

app.post('/contactUs.hbs', (req, res)=>{
    var myData = new contactUs(req.body);
    res.status(201).render("contactUs.hbs");
    myData.save(). then(()=>{
        res.json;
    }).catch((error)=>{
         res.status(401).json({error: 'Form was not submited'})
    });

});

app.get("/footer.hbs",(req, res)=>{
    res.render("footer.hbs");
});

app.post('/footer', (req, res)=>{
    var myData = new footer(req.body);
    res.status(201).render("/footer");
    myData.save(). then(()=>{
        res.json;
    }).catch((error)=>{
         res.status(401).json({error: 'Form was not submited'})
    });

});



app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});



