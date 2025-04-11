
import express from 'express';
import Answer from '../models/Answer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { content, question, author } = req.body;
  const answer = await Answer.create({ content, question, author });
  res.json(answer);
});

router.get('/:questionId', async (req, res) => {
  const answers = await Answer.find({ question: req.params.questionId }).populate('author', 'username');
  res.json(answers);
});

export default router;
