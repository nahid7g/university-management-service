import mongoose from "mongoose";
import app from "./app";
import config from "./config/index"

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database connected successfully`)
    } catch (error) {
        console.error(error);
    }
}

main()

app.listen(config.port,() => {
    console.log(`Server is running on port`)
})