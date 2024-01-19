import mongoose from "mongoose";
import dotenv from "dotenv"; //Need MongoURI
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany(); //delete mutiple records in db
        await Product.deleteMany(); //delete mutiple records
        await User.deleteMany(); //delete mutiple records

        const createdUsers = await User.insertMany(users); //return array of users into this variable, users inserted
        const adminUser = createdUsers[0]._id; //get admin user from created Users
        const sampleProducts = products.map((product) => { //created variable with all products including admin User
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts); //Insert products into DB

        console.log('Data Imported!'.green.inverse); //green.inverse is the colors libarary for terminal colors
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse); //gives red color in terminal
        process.exit(1); //kill the process with (1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse); //gives red color in terminal
        process.exit(1); //kill the process with (1)
    }
}

console.log(process.argv[2]);

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}