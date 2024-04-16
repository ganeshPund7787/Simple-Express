export const LoginUser = async (req, res) => { 
    const { name, email, password } = req.body;
    const UserExist = await User.findOne({ email });
    
    if (!UserExist) {       
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        });
    }

    if (UserExist.password != password) {
        return res.status(404).json({
            success: false,
            message: "Incorrect Username or password"
        });
    }

    res.status(202).json({
        message: "User Resister succesfuly"
    })
}