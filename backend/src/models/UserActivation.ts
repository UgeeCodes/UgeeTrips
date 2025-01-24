import mongoose, { Schema, Document, Model } from "mongoose";

// Define the UserActivation interface
interface IUserActivation extends Document {
  email: string;
  activated: boolean; // Example field
  activationCode: string; // Example field
  createdAt: Date;
}

// Define the schema
const UserActivationSchema = new Schema<IUserActivation>({
  email: { type: String, required: true, unique: true },
  activated: { type: Boolean, default: false },
  activationCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define the model
const UserActivation: Model<IUserActivation> = mongoose.model<IUserActivation>(
  "UserActivation",
  UserActivationSchema
);

export default UserActivation;
