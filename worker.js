// worker.js
self.addEventListener('message', function (e) {
    // 处理从主线程接收到的消息
    console.log('收到消息：', e.data);
    // 执行一些任务...
});

// 定期执行任务
setInterval(function () {
    // 执行后台任务，例如数据更新、计算等
    console.log('Worker 正在后台运行...', new Date());
}, 10000); // 每1秒执行一次
