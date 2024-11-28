import mongoose from "mongoose"

async function conectaNoDB(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.o8kam.mongodb.net/Parceiros?retryWrites=true&w=majority&appName=Cluster0")
return mongoose.connection;
} 

export default conectaNoDB

