
/**
 * 重複顯示文字左右相同的文字，文字中間需要空格
 * @param text 要重複的文字
 * @param count 重複次數
 * @returns 格式化後的字符串
 */
function repeatText(text: string, count: number): string {
    if (count <= 0) return text;
    const repeatedText = Array(count).fill(text).join(' ');
    return `${repeatedText} ${text} ${repeatedText}`;
}

// 測試範例
console.log(repeatText("文字", 3)); // 輸出: "文字 文字 文字 文字 文字 文字 文字"
