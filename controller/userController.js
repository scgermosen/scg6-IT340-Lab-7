import User from "./models/Users.js";

// ADDING DATA TO DB
export const create = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser;
        const {username} = newUsername;
        const userExist = await User.findOne({email})
        const usernameExist = await User.findOne({username})

        // IF CONDITIONAL FOR WHEN THE USER ALREADY REGISTERED
        if(userExist){
            return res.status(400).json({ message: "This user already registered and exist in DB. :)"})
        }

        if(usernameExist){
            return res.status(400).json({ message: "This username already registered and exists in DB. :) "})
        }

        // SAVE THE NEW USER
        const savedData = await newUser.save();
        res.status(200).json(savedData);
    
    //  CATCH ANY ERROR
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}