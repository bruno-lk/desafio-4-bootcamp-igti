import mongoose from 'mongoose';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const studentSchema = mongoose.Schema({
  name: { type: String, requered: true },
  subject: { type: String, requered: true },
  type: { type: String, requered: true },
  value: { type: Number, requered: true, min: 0 },
  lastModified: { type: Date, default: Date.now, requered: true },
});

const studentModel = mongoose.model('students', studentSchema);

export { db, studentModel };
