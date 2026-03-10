// ===== 游戏核心逻辑 =====

// 游戏状态
const gameState = {
  currentLevel: 1,
  currentQuestion: 1,
  totalQuestions: 100,
  currentScore: 0,
  correctCount: 0, // 记录正确答题数
  currentWord: null,
  userAnswer: [],
  letterOptions: [],
  availableLetters: [],
  questionQueue: [],
  lastAnswerCorrect: null // 记录上一题是否正确
};

// DOM 元素
const elements = {
  welcomeScreen: document.getElementById('welcomeScreen'),
  gameScreen: document.getElementById('gameScreen'),
  endScreen: document.getElementById('endScreen'),
  gameBackground: document.getElementById('gameBackground'),
  levelBadge: document.getElementById('levelBadge'),
  currentQuestion: document.getElementById('currentQuestion'),
  totalQuestions: document.getElementById('totalQuestions'),
  currentScore: document.getElementById('currentScore'),
  wordEmoji: document.getElementById('wordEmoji'),
  wordMeaning: document.getElementById('wordMeaning'),
  letterSlots: document.getElementById('letterSlots'),
  letterButtons: document.getElementById('letterButtons'),
  resultModal: document.getElementById('resultModal'),
  resultIcon: document.getElementById('resultIcon'),
  resultTitle: document.getElementById('resultTitle'),
  resultWord: document.getElementById('resultWord'),
  resultSentences: document.getElementById('resultSentences'),
  finalScore: document.getElementById('finalScore'),
  performance: document.getElementById('performance')
};

// 初始化游戏
function initGame() {
  // 初始化语音
  if (window.speechSynthesis) {
    // 获取声音列表
    var voices = window.speechSynthesis.getVoices();
    // 预播放一个静音来激活引擎
    var u = new SpeechSynthesisUtterance(' ');
    u.volume = 0;
    window.speechSynthesis.speak(u);
  }

  // 绑定难度选择按钮
  document.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
      const level = parseInt(card.dataset.level);
      startGame(level);
    });
  });

  // 绑定操作按钮
  document.getElementById('btnBack').addEventListener('click', showWelcomeScreen);
  document.getElementById('btnHint').addEventListener('click', showHint);
  document.getElementById('btnCheck').addEventListener('click', checkAnswer);
  document.getElementById('btnClear').addEventListener('click', clearAnswer);
  document.getElementById('btnNext').addEventListener('click', nextQuestion);
  document.getElementById('btnRestart').addEventListener('click', restartGame);
  document.getElementById('btnHome').addEventListener('click', showWelcomeScreen);
}

// 开始游戏
function startGame(level) {
  gameState.currentLevel = level;
  gameState.currentQuestion = 1;
  gameState.currentScore = 0;
  gameState.correctCount = 0;

  // 准备100题：每题都随机抽取，确保完全随机
  const levelWords = wordsData[level];
  const questionQueue = [];

  for (let i = 0; i < gameState.totalQuestions; i++) {
    // 每次都从词库中随机选择一个单词
    const randomIndex = Math.floor(Math.random() * levelWords.length);
    questionQueue.push(levelWords[randomIndex]);
  }

  gameState.questionQueue = questionQueue;

  // 更新UI
  elements.levelBadge.textContent = levelInfo[level].name;
  elements.totalQuestions.textContent = gameState.totalQuestions;
  elements.currentScore.textContent = '0';

  // 切换页面
  elements.welcomeScreen.classList.add('hidden');
  elements.endScreen.classList.add('hidden');
  elements.gameScreen.classList.remove('hidden');

  // 加载第一题
  loadQuestion();
}

// 加载题目
function loadQuestion() {
  if (gameState.currentQuestion > gameState.totalQuestions) {
    endGame();
    return;
  }

  gameState.currentWord = gameState.questionQueue[gameState.currentQuestion - 1];
  gameState.userAnswer = new Array(gameState.currentWord.word.length).fill(null);
  gameState.availableLetters = generateLetterOptions(gameState.currentWord.word);

  // 对于幼儿园、小学、中学（等级2、3、4），预先填入2个正确字母
  if (gameState.currentLevel >= 2) {
    const word = gameState.currentWord.word;
    const wordLength = word.length;

    // 生成2个不同的随机位置
    const positions = [];
    while (positions.length < 2) {
      const pos = Math.floor(Math.random() * wordLength);
      if (!positions.includes(pos)) {
        positions.push(pos);
      }
    }

    // 在这些位置填入正确字母
    positions.forEach(pos => {
      gameState.userAnswer[pos] = word[pos];
    });
  }

  // 更新UI
  elements.currentQuestion.textContent = gameState.currentQuestion;
  elements.wordEmoji.textContent = gameState.currentWord.emoji;
  elements.wordMeaning.textContent = gameState.currentWord.meaning;

  // 渲染填空槽和字母按钮
  renderLetterSlots();
  renderLetterButtons();

  // 自动读出单词2次
  setTimeout(function() {
    speakWord(gameState.currentWord.word, 2);
  }, 500);
}

// 生成字母选项（正确答案 + 干扰字母）
function generateLetterOptions(correctWord) {
  const correctLetters = correctWord.split('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // 计算需要添加的干扰字母数量（正确字母数 + 2）
  const totalOptions = correctWord.length + 2;

  // 获取不重复的干扰字母
  const availableDistractors = shuffleArray(
    alphabet.split('').filter(letter => !correctLetters.includes(letter))
  ).slice(0, totalOptions - correctWord.length);

  // 合并并打乱
  return shuffleArray([...correctLetters, ...availableDistractors]);
}

// 渲染填空槽
function renderLetterSlots() {
  elements.letterSlots.innerHTML = '';

  gameState.userAnswer.forEach((letter, index) => {
    const slot = document.createElement('div');
    slot.className = `letter-slot ${letter ? 'filled' : ''}`;
    slot.textContent = letter || '?';
    slot.dataset.index = index;

    // 点击槽位可以移除字母
    slot.addEventListener('click', () => {
      if (gameState.userAnswer[index]) {
        removeLetterFromSlot(index);
      }
    });

    elements.letterSlots.appendChild(slot);
  });
}

// 渲染字母按钮
function renderLetterButtons() {
  elements.letterButtons.innerHTML = '';

  gameState.availableLetters.forEach((letter, index) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.dataset.letter = letter;

    btn.addEventListener('click', () => {
      addLetterToSlot(letter);
    });

    elements.letterButtons.appendChild(btn);
  });
}

// 添加字母到第一个空槽位
function addLetterToSlot(letter) {
  const firstEmptyIndex = gameState.userAnswer.findIndex(l => l === null);

  if (firstEmptyIndex !== -1) {
    gameState.userAnswer[firstEmptyIndex] = letter;
    renderLetterSlots();
    // 播放字母发音
    speakLetter(letter);
  }
}

// 从槽位移除字母
function removeLetterFromSlot(index) {
  gameState.userAnswer[index] = null;
  renderLetterSlots();
}

// 清除答案
function clearAnswer() {
  gameState.userAnswer = new Array(gameState.currentWord.word.length).fill(null);
  gameState.availableLetters = generateLetterOptions(gameState.currentWord.word);
  renderLetterSlots();
  renderLetterButtons();
}

// 显示提示
function showHint() {
  // 找到第一个空位
  const firstEmptyIndex = gameState.userAnswer.findIndex(l => l === null);

  if (firstEmptyIndex !== -1) {
    // 显示正确答案
    const correctLetter = gameState.currentWord.word[firstEmptyIndex];
    gameState.userAnswer[firstEmptyIndex] = correctLetter;

    // 扣分（提示扣1分）
    gameState.currentScore = Math.max(0, gameState.currentScore - 1);
    elements.currentScore.textContent = gameState.currentScore;

    renderLetterSlots();
  }
}

// 检查答案
function checkAnswer() {
  const userAnswerStr = gameState.userAnswer.join('');

  if (userAnswerStr.length !== gameState.currentWord.word.length) {
    alert('请填写完整的单词！');
    return;
  }

  const isCorrect = userAnswerStr === gameState.currentWord.word;

  if (isCorrect) {
    gameState.currentScore += 10;
    gameState.correctCount++;
    elements.currentScore.textContent = gameState.currentScore;

    // 每答对5题播放一次鼓励语音
    if (gameState.correctCount % 5 === 0) {
      setTimeout(() => {
        playEncouragement(gameState.correctCount);
      }, 3000); // 等待例句读完后再播放
    }

    showResult(true);
  } else {
    showResult(false);
  }
}

// 显示结果
function showResult(isCorrect) {
  const word = gameState.currentWord;
  // 记录当前答案是否正确
  gameState.lastAnswerCorrect = isCorrect;

  if (isCorrect) {
    elements.resultIcon.textContent = '🎉';
    elements.resultTitle.textContent = '太棒了！';
    elements.resultTitle.style.color = '#2ECC71';

    // 播放成功音效
    playSuccessSound();

    // 用温柔女声读2遍单词
    speakWord(word.word, 2);

    // 读2遍例句（每句读1遍）
    setTimeout(() => {
      speakSentence(word.sentences[0].english, () => {
        // 第一句读完后再读第二句
        setTimeout(() => {
          speakSentence(word.sentences[1].english);
        }, 800);
      });
    }, 1500);

    // 显示单词
    elements.resultWord.innerHTML = `
      <span class="result-emoji">${word.emoji}</span>
      <span class="result-spelling">${word.word}</span>
      <span class="result-meaning">${word.meaning}</span>
    `;

    // 显示例句
    elements.resultSentences.innerHTML = word.sentences.map(s => `
      <div class="sentence-item">
        <div class="sentence-english">${s.english}</div>
        <div class="sentence-chinese">${s.chinese}</div>
      </div>
    `).join('');

    // 正确时显示"下一题"按钮
    const nextBtn = document.getElementById('btnNext');
    nextBtn.textContent = '下一题 →';
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';

  } else {
    elements.resultIcon.textContent = '😅';
    elements.resultTitle.textContent = '再试一次！';
    elements.resultTitle.style.color = '#E74C3C';

    // 显示单词
    elements.resultWord.innerHTML = `
      <span class="result-emoji">${word.emoji}</span>
      <span class="result-spelling">${'?'.repeat(word.word.length)}</span>
      <span class="result-meaning">${word.meaning}</span>
    `;

    // 错误时不显示例句
    elements.resultSentences.innerHTML = '<div class="sentence-item"><div class="sentence-english">请重新拼写这个单词</div><div class="sentence-chinese">拼写正确后才能继续</div></div>';

    // 错误时显示"重新拼写"按钮
    const nextBtn = document.getElementById('btnNext');
    nextBtn.textContent = '重新拼写 ↺';
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
  }

  elements.resultModal.classList.remove('hidden');
}

// 下一题
function nextQuestion() {
  // 检查上一题是否正确
  if (gameState.lastAnswerCorrect === false) {
    // 如果上一题错误，关闭弹窗并清除答案，让用户重新拼写
    elements.resultModal.classList.add('hidden');
    clearAnswer();
    gameState.lastAnswerCorrect = null;
  } else {
    // 如果上一题正确，进入下一题
    elements.resultModal.classList.add('hidden');
    gameState.currentQuestion++;
    gameState.lastAnswerCorrect = null;
    loadQuestion();
  }
}

// 结束游戏
function endGame() {
  elements.finalScore.textContent = gameState.currentScore;

  // 根据得分显示评价
  const maxScore = gameState.totalQuestions * 10;
  const percentage = gameState.currentScore / maxScore;

  let performanceText = '';
  if (percentage === 1) {
    performanceText = '🏆 太厉害了！你是拼写小天才！';
  } else if (percentage >= 0.8) {
    performanceText = '⭐ 表现得非常棒！继续加油！';
  } else if (percentage >= 0.6) {
    performanceText = '💪 做得不错！再练习一下会更好！';
  } else if (percentage >= 0.4) {
    performanceText = '📚 继续努力，你一定可以的！';
  } else {
    performanceText = '💕 不要灰心，多练习就会进步！';
  }

  elements.performance.textContent = performanceText;

  elements.gameScreen.classList.add('hidden');
  elements.endScreen.classList.remove('hidden');
}

// 重新开始
function restartGame() {
  startGame(gameState.currentLevel);
}

// 显示欢迎页面
function showWelcomeScreen() {
  elements.gameScreen.classList.add('hidden');
  elements.endScreen.classList.add('hidden');
  elements.resultModal.classList.add('hidden');
  elements.welcomeScreen.classList.remove('hidden');
}

// 数组打乱函数
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initGame);

// ===== 音效播放函数 =====
function playSuccessSound() {
  // 使用 Web Audio API 播放成功音效
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // 播放一个欢快的上升音调
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // 设置音调 - 上升的音符
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

    // 设置音量
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);

    // 添加第二个音符 - 延长的欢快音符
    setTimeout(() => {
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1046.5, audioContext.currentTime); // C6
      gain2.gain.setValueAtTime(0.25, audioContext.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      osc2.start(audioContext.currentTime);
      osc2.stop(audioContext.currentTime + 0.5);
    }, 150);
  } catch (e) {
    console.log('音效播放失败:', e);
  }
}

// ===== 语音播放函数 =====

// 播放语音 - 用有道TTS
function speak(text, lang, rate, callback) {
  var type = lang === 'zh-CN' ? 2 : 1;
  var url = 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=' + type;
  var audio = new Audio(url);
  audio.volume = 1;
  audio.onended = function() {
    if (callback) callback();
  };
  audio.play();
}

// 播放字母发音 - 点击字母时调用
function speakLetter(letter) {
  // 用有道TTS
  var url = 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(letter.toLowerCase()) + '&type=1';
  var audio = new Audio(url);
  audio.volume = 1;
  audio.play();
}

// 播放单词 - 连续播放2次
function speakWord(word, times, callback) {
  var count = 0;

  function playNext() {
    if (count < times) {
      speak(word + '.', 'en-US', 0.7, function() {
        count++;
        if (count < times) {
          setTimeout(playNext, 600);
        } else if (callback) {
          callback();
        }
      });
    }
  }

  playNext();
}

// 播放例句
function speakSentence(sentence, callback) {
  speak(sentence, 'en-US', 0.7, callback);
}

// 播放鼓励语音 - 汪汪队主题
function playEncouragement(correctCount) {
  // 汪汪队风格的鼓励语
  var encouragements = [
    "Great job! You're a super star! Like Chase would say, let's go!",
    "Amazing! You're as brave as Marshall! The team is proud of you!",
    "Excellent work! You're as clever as Rocky! Green means go!",
    "Wonderful! You're as fast as Rubble! Let's keep rolling!",
    "Fantastic! You're as helpful as Zuma! Water you waiting for!",
    "Super! Just like Skye, you're doing great! Put your paws up!",
    "太棒了！你和汪汪队一样厉害！",
    "非常好！莱德队长会为你骄傲的！",
    "你真的很棒！阿奇会说：任务完成！",
    "继续加油！豆豆会给你点赞！"
  ];

  var randomIndex = Math.floor(Math.random() * encouragements.length);
  var text = encouragements[randomIndex];

  // 判断语言
  var isEnglish = /[a-zA-Z]/.test(text);
  var lang = isEnglish ? 'en-US' : 'zh-CN';

  speak(text, lang, 0.8);
}


