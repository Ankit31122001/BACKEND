const Createnote =(req,res)=>{
    res.send("Hello Friend, I am creating");
}
const Deletenote=(req,res)=> {
    res.send("Hello Friend, I am deleting");
}

module.exports={Createnote,Deletenote}