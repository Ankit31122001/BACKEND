const checkcred = (req, res, next) => {

    const { name, email, password, cpassword } = req.body
    if (name.length < 3 || password !== cpassword) {
        res.send("Invalid cred")
    }

    else {
        next();
    }
}

module.exports = { checkcred }
