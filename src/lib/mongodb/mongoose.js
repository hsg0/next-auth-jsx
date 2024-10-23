import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true)

    if (initialized) {
        console.log('Already connected to MongoDB')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "next-auth-jsx",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        initialized = true;
    }
        catch (error) {
            console.error('Error connecting to MongoDB:', error)
        }
             
    }









