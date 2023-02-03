import mongoose from "mongoose";

const lifUrl = "";
// const localUrl = "mongodb://localhost/sodcreativity";

const localUrl = "mongodb+srv://eben1909:victoria-19@cluster0.u3wri8y.mongodb.net/?retryWrites=true&w=majority";


export const config = async () => {
  try {
    const connect = await mongoose.connect(localUrl);
    console.log("Connnected to ", connect.connection.host);
  } catch (error: any) {
    console.log("An error occured in Config", error.message);
    process.exit(1);
  }
};
