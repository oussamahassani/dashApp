import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {User} from '../../models/user/index.js';

const generateAccessToken = (userId, role, email, etat) => {
    const payload = { userId, role, email, etat };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
    return token;
}

// Function to generate a refresh token
const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET);
}
// Controller function to handle user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password, mochkel hna" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password wala hna" });
        }

        

        // Generate tokens with user information
        const accessToken = generateAccessToken(user._id, user.role, user.email, user.etat);
        const refreshToken = generateRefreshToken(user._id);
       
        // Set tokens as cookies
        res.cookie("accessToken", accessToken,{ httpOnly: true } );
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        res.status(200).send({msg:"logged in" , token :accessToken});

       // Send response
    } catch (error) {
        console.error(`Error logging in: ${error}`);
        res.status(500).json();
    }
}

// Controller function to handle user logout
export const logout = async (req, res) => {
    try {
        // Clear cookies
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");

        // Send response
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(`Error logging out: ${error.message}`);
        res.status(500).json({ error: "An error occurred while logging out" });
    }
}

