import httpServer from '#Config/http.js';
import '#Config/env.js';
import connectDB from '#Config/db.js';

const bootstrap = async () => {
    // Trying to connect to database
    try {
        await connectDB(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
    // Default server http runs express listener
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server listen on port ${process.env.PORT}`);
    });
};

bootstrap();
