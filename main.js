let NETWORTH = 0;
let numberOfTries = 10;

const getRandom = () => Math.round(Math.random() *100);
const funEmoji = '🐸';
const RANDOM_FUN_EMOJIS =  {
  10: '🙈',
  20: '🐶',
  30: '🐕',
  40: '🐩',
  50: '🦒',
  60: '🐫',
  70: '🐎',
  80: '🦁',
  90: '🦍',
  100: '🐳'
}
document.addEventListener('readystatechange', (event) => {
  if (document.readyState === 'interactive') {
    document.getElementById('emojiHolder').innerHTML = funEmoji;
  }
});
const getSomeGoodies = () => {
  if ([500, 600, 700].includes(NETWORTH)) {
    NETWORTH +=500;
  }
}
const handleClick = (val) => {
  document.getElementById('emojiHolder').innerHTML = RANDOM_FUN_EMOJIS[Math.round((+val/10)) * 10] || '🔥';
  if (numberOfTries <= 0 ) {
    document.getElementById('emojiHolder').innerHTML = '🎉';
    return;
    // document.getElementById('networths').innerHTML = `Your Net Worth: $${NETWORTH}`;  
  }
    NETWORTH += +val;
    document.getElementById('networths').innerHTML = `Your Net Worth: $${NETWORTH}`;
  numberOfTries--;
}
let res = confirm(`Do you wanna play this game? You have $${NETWORTH} to begin!`)
if (!res) {
  alert('See you later!');
}




