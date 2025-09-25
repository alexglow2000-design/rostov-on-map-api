import app from '.';
import config from './config/config';
import sequelize from './db'

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(config.port,  async () => {
            console.log(`Server running on port ${config.port}`);
        });
    } catch (e) {
        console.log(e)
    }
}

start()