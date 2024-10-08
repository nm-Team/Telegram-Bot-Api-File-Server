import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 8082,
    binPath: process.env.BIN_PATH,
};
