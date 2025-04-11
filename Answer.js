
import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  content: String,
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Answer', answerSchema);
