// Express
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());  // using middleware

// app.get('/',(req,res)=>{
//     // res.status(200).send("Hello from the server!........");
//     res.status(200).json({message: "Hello from the server!........", app:'natours'});

// });

// app.post('/',(req,res)=>{
//     res.send("You can post to this url......")
// })
// const port = 3000;
// app.listen(port,()=>{
//     console.log(`The server is running at port ${port}`)
// });
/////////////////////////////////////
// Handling Get Request
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
// app.get('/api/v1/tours',(req,res)=>{
//     res.status(200).json({
//         status: 'success',
//         results: tours.lenght,
//         data :{
//             tours
//         }
//     });
// });
// const port = 3000;
// app.listen(port,()=>{
//     console.log(`The server is running at port ${port}`)
// });
///////////////////////////////////////////////////////////
// Handling Post request

// app.post('/api/v1/tours',(req,res)=>{
//     // console.log(req.body);
//     // res.send("Done!...");
//     // const newId = tours[Object.keys(tours).lenght - 1].id + 1;
//     const newId = tours[tours.lenght - 1[0]]+ 1;
//     const newTours = Object.assign({id : newId}, req.body);

//     tours.push(newTours);
//     fs.writeFile(`${__dirname}/data/tours-simple.json`, JSON.stringify(tours), err=>{
//         res.status(201).json({
//             status : "Success",
//             data : {
//                 newTours
//             }
//         });
//     });
// });
// const port = 3000;
// app.listen(port,()=>{
//     console.log(`The server is running at port ${port}`)
// });
////////////////////////////////////////////////
// Responding to Url Paramaters
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
app.get('/api/v1/tours/:id',(req,res)=>{
        console.log(req.params);
        const id = req.params.id * 1;
        const tour = tours.find(el=> el.id === id);
        
        // if(id > tours.length){
        //     return res.status(404).json({
        //         status: "Fail",
        //         message: "Invalid ID"
        //     });
        // };
        if(!tour){
            return res.status(404).json({
                status: "Fail",
                message: "Invalid ID"
            });
        };
        
        res.status(200).json({
            status: 'success',
            data :{
                tour
            }
        });
    });
////////////////////////////////////////////////////////////////////
// Handling PATCH
app.patch('/api/v1/tours/:id',(req,res)=>{
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status : "Fail",
            message: "Invalid patch"
        });
    };
});
        
const port = 3000;
app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
});