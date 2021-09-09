import mongoose from 'mongoose';
async function connect(){
    try{
        await mongoose.connect(process.env.URI_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log('connect to DB successfully!!')
        }catch(error){
          console.log('connect failure!!');
    };
};
export default { connect };
