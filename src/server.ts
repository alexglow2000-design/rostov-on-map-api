import app from '.';
import config from './config/config';
import sequelize from './db'

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    } catch (e) {
        console.error("Failed to start server:", e);
        process.exit(1); // важно, чтобы Render видел ошибку
    }
}

start();