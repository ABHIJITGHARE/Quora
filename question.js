
import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, description, author } = req.body;
  const question = await Question.create({ title, description, author });
  res.json(question);
});

router.get('/', async (req, res) => {
  const questions = await Question.find().populate('author', 'username');
  res.json(questions);
});

export default router;
