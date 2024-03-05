import { User } from "../models/User.models.js";


// check if server is running or not
const check = async(req, res) => {
    res.json({
        message: "server is running successfully"
    })

}

// insert user at the database
const register = async(req, res) => {
    console.log(req.body);
    res.json({
        data: "hehehehh"
    })

    // const { userName, email, password } = req.body;

    // await User({
    //     userName,
    //     email,
    //     password
    // }).save()
    // console.log(userName)
    // res.end()


}



// login user
const login = async(req, res) => {
    const { userName, password } = req.body
    console.log(userName)

    const user = await User.findOne({ userName });
    if (user.password == password) {
        res.json({
            message: "user is authorize"
        })
    } else {
        res.json({
            message: "INvalid parameters!!!!!!!!!!!"
        })
    }


    res.end()

}
export { check, register, login }