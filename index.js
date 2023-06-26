document.addEventListener("DOMContentLoaded", function () {
  const beiJing = document.getElementById("beiJing");

  // 等待视频可以播放后再执行操作
  beiJing.addEventListener("canplay", function () {
    beiJing.style.display = "block";
    // 设置播放速度为2倍
    beiJing.playbackRate = 0.5;

    // 开始播放视频
    beiJing.play();
  });
});
function xuanZeJueSe() {
  fetch("./index.json")
    .then((response) => response.json())
    .then((data) => {
      const selectElement = document.getElementById("option1");

      data.forEach((item) => {
        const optionElement = document.createElement("option");
        optionElement.value = item.value;
        optionElement.textContent = item.label;

        selectElement.appendChild(optionElement);
      });
    })
    .catch((error) => {
      console.error("读取 JSON 文件出错:", error);
    });
}
