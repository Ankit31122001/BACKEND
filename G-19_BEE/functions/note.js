const{Note} = require('../models/Note');
const Createnote =async (req,res)=>{
    const {title,desc,status} =req.body
    const note = await Note ({title,desc,status});
    note.save()
    res.send("Hello Friend, I am creating" + note);
}

const searchnote =async (req,res)=>{
    const {title} =req.body
    const notes = await Note.find ({title});
    res.send("Hello Friend, I am creating" + notes);
}
const Deletenote=(req,res)=> {
    res.send("Hello Friend, I am deleting");
}

module.exports={Createnote,Deletenote}