var express = require('express');
var router = express.Router();
var moment = require('moment');

const getFormattedDate = (date) => {
  return formatted = moment(date).format('MMMM DD YYYY')
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getFormattedDate(new Date())
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getFormattedDate(new Date())
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Message board", messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: "Mini Message board", formName: "Add New Message" });
});

router.post('/new', function (req, res, next) {
  const inputMessage = req.body.messageInput;
  const inputAuthor = req.body.authorInput;

  messages.push({ text: inputMessage, user: inputAuthor, added: getFormattedDate(new Date()) });
  res.redirect('/');
})

module.exports = router;
