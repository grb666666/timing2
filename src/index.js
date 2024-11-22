// 导入 date-fns 的必要函数和中文本地化选项
import { formatDistanceToNow, zhCN } from 'date-fns/locale';
import { formatDistanceToNow as formatDistanceToNowFn } from 'date-fns';

// 设置本地化选项为中文
const locale = zhCN;

// 获取 DOM 元素
const resultElement = document.getElementById('result');
const currentTimeElement = document.getElementById('current-time');
const inputElement = document.getElementById('custom-date');

// 函数：格式化并显示当前时间
function updateCurrentTime() {
  const now = new Date();
  currentTimeElement.textContent = `当前时间: ${now.toLocaleString()}`;
}

// 函数：处理用户输入并显示距离
function handleInputChange() {
  const inputDate = new Date(inputElement.value);
  
  // 检查输入是否为有效日期
  if (isNaN(inputDate)) {
    resultElement.textContent = '请输入有效的日期和时间。';
    return;
  }
  
  // 使用 formatDistanceToNowFn 并传入中文本地化选项
  const distance = formatDistanceToNowFn(inputDate, { addSuffix: true, locale: locale });
  
  // 显示结果为中文
  resultElement.textContent = `选择的日期距离现在 ${distance}`;
}

// 初始调用显示当前时间
updateCurrentTime();

// 每秒更新当前时间
setInterval(updateCurrentTime, 1000);

// 监听输入变化
inputElement.addEventListener('change', handleInputChange);