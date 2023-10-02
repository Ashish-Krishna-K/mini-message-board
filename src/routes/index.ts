import express from 'express';

const router = express.Router();

type MessageType = {
  text: string;
  user: string;
  added: Date;
};

const messages: MessageType[] = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Messageboard' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect('/');
});

export { router as indexRouter };
