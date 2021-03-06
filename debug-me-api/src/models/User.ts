import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  googleId: string;
  email: string;
  token: string;
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  googleId: { type: String, required: false, unique: true}
});

export const User: Model<IUser> = model('User', UserSchema);