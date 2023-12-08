const login = (req,res)=>{
    res.send("Hello Friend, I am login");
}

const signup = (req,res)=>{
    console.log(req.body)
    res.send("Hello Friend, I am signup");
    
}



module.exports={login,signup}
