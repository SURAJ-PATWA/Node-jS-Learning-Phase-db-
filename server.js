const express = require("express");
const app = express();
const user = require("./connection");
app.use(express.json());

//insert data

app.post("/", async (req, res) => {   //promise ke lea async await use kare success ya failure ke lea
  try {
    const senddata = new user(req.body);  // req.body ka sara data user ke form mr bana ke sendata per tore ho jaega   dta stor in user define ke hisab se
    const savedata = await senddata.save();
    res.send(savedata);
  } 
  catch (error) {
    res.status(404).send(error);
  }
});


// access data

app.get("/user", async (req, res) => {  //localhost:8080/user
  try {
    const getdata = await user.find({});  //user collection me jaoo pura body ka deta de do
    res.send(getdata);
  } catch (error) {
    res.status(404).send(error);
  }
});

// farji suraj       
app.get("/hello",(req,res)=>{          //localhost:8080/hello
  res.send("jjjjjjjj");
})

app.get("/user/:id", async (req, res) => {             //localhost:8080/user/777uuvhb88nmnmnmnm88   in get
  try {
    const id = req.params.id;
    const getiddata = await user.findById({ _id: id });
    res.send(getiddata);
  } catch (error) {
    res.status(404).send(error);
  }
});

// for update

app.patch("/update/:id", async (req, res) => {      //locahost:8080/update/hhhhhhhhhh888888888888888777        in update      jo update karna ho {"name":"kkkkkk"}      
  try {
    const id = req.params.id;
    const updatedata = await user.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updatedata);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete


app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
//     console.log("Received DELETE request with ID:", id); // Add this line for debugging
    const deletedata = await user.findByIdAndDelete({ _id: id });
//     console.log("Deleted data:", deletedata); // Add this line for debugging
    res.send(deletedata);
  } catch (error) {
//     console.error("Error:", error); // Add this line for debugging
    res.status(500).send(error);
  }
});


app.listen(8080, () => {
  console.log(`server successfully created`);
});


     
