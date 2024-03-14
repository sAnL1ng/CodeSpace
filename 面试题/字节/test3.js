function timeout(time, num) {
  setTimeout(() => {
    console.log(num + '号任务已执行');
  }, time)
}

timeout(10000, 1)
timeout(5000, 2)
timeout(3000, 3)
timeout(4000, 4)
timeout(5000, 5)

// 23145

console.log(document);