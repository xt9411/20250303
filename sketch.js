let input;
let slider;
let button;
let dropdown;
let isBouncing = false;
let offsets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput(); // 產生一個文字框
  input.size(200); // 文字框大小
  input.style('font-size', '24px'); // 文字框字體大小
  input.value('Hello'); // 文字框預設值
  input.position(10, 10); // 文字框座標

  slider = createSlider(24, 50, 32); // 產生一個滑桿，範圍從24到50，預設值為32
  slider.position(input.x + input.width + 10, 10); // 滑桿位置在文字框右側

  button = createButton('Toggle Bounce'); // 產生一個按鈕
  button.position(slider.x + slider.width + 10, 10); // 按鈕位置在滑桿右側
  button.mousePressed(toggleBounce); // 設定按鈕按下時的回調函數

  dropdown = createSelect(); // 產生一個下拉式選單
  dropdown.position(button.x + button.width + 10, 10); // 下拉式選單位置在按鈕右側
  dropdown.option('淡江大學');
  dropdown.option('淡江教科');
  dropdown.option('第三周筆記');
  dropdown.changed(goToLink); // 設定選單改變時的回調函數
}

function draw() {
  background(220);
  let txt = input.value(); // 取得文字框的值
  let textSizeValue = slider.value(); // 取得滑桿的值作為文字大小
  let repeatedTxt = ''; // 重複的文字
  textSize(textSizeValue); // 設定文字大小
  let txtWidth = textWidth(txt + ' '); // 計算單個文字的寬度
  let repeatCount = Math.ceil(width / txtWidth); // 計算需要重複的次數

  for (let i = 0; i < repeatCount; i++) {
    repeatedTxt += txt + ' ';
  }

  textAlign(CENTER, CENTER);
  let y = 50;
  while (y < height) {
    for (let i = 0; i < repeatCount; i++) {
      let offsetY = isBouncing ? sin(frameCount * 0.1 + i) * 20 : 0; // 計算每個文字的垂直偏移量
      text(txt, (i * txtWidth) + txtWidth / 2, y + offsetY);
    }
    y += textSizeValue + 10; // 調整每行文字的垂直間距
  }
}

function toggleBounce() {
  isBouncing = !isBouncing; // 切換跳動狀態
}

function goToLink() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selected === '淡江教科') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  } else if (selected === '第三周筆記') {
    window.open('https://hackmd.io/@nn8HNOmOTcGYy2MQDnIFYg/SyzTQFzskg', '_blank');
  }
}
