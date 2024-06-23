const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/Elansol_Task';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log('Connected to db...');

        console.log();
    } catch (err) {
        console.error();
    }
}

module.exports = mongoDB;