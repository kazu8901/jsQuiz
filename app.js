const quiz = [
  {
    question: "好きなコーヒーはどれ？",
    answers: [
      'カフェオレ',
    'ブラック',
    'カフェラテ',
    'カプチーノ',
    ],
    correct: 'カフェオレ'
  },

  {
    question: "デュフフ？",
    answers: [
      'フヒヒ',
      'コポォ',
      'サヒヒ',
      '!?',
    ],
    correct: 'コポォ'
  },

  {
    question: "論者はどれ？",
    answers: [
      'なんだろう',
      '教師',
      'んんwww',
      'ワイ',
    ],
    correct: 'んんwww'
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// HTMLオブジェクトを取ってくる場合は「$」をつける
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setQuiz();
  } else {
    window.alert('終了!正解数は' + score + '/' + quizLength + 'です！');
    location.reload();
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}