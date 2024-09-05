const { Schema, model } = require('mongoose');
import { Document, Model } from 'mongoose';

// Define an interface representing a document in MongoDB
interface IData extends Document {
  Day: Date;
  Age: string;
  Gender: string;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

// Create a Mongoose schema based on the interface
const dataSchema = new Schema({
  Day: { type: Date, required: true },
  Age: { type: String, required: true },
  Gender: { type: String, required: true },
  A: { type: Number, required: true },
  B: { type: Number, required: true },
  C: { type: Number, required: true },
  D: { type: Number, required: true },
  E: { type: Number, required: true },
  F: { type: Number, required: true },
});

// Create a Mongoose model and cast it to the correct type
const DataModel: Model<IData> = model('Data', dataSchema);

export default DataModel;
