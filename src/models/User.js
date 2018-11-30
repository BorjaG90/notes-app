const mongoose    = require('mongoose'),
      { Schema }  = mongoose,
      bcrypt      = require("bcryptjs");
      
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); //Genera el hash
  const hash = bcrypt.hash(password, salt); //Cifra la contraseña
  
  return hash; //Devolvemos la constraseña cifrada
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);