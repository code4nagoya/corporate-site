$(function () {
  const video = $("video");
  video.on("loadeddata", function () {
    video.get(0).play();
  });

  // loadData関数をPromiseを返すように変更
  const loadData = (url, containerId, templateFunction) => {
    return $.get(url) // Promiseを返す
      .done(function (data) {
        console.log(data);
        const container = $(containerId).empty();
        data.forEach((item) => container.append(templateFunction(item)));
      });
  };

  const eventTemplate = (data) => `
    <div class="cd-timeline__block">
      <div class="cd-timeline__img cd-timeline__img--movie">
        <i class="font-white fa-solid fa-calendar-days"></i>
      </div>
      <div class="cd-timeline__content text-component">
        <h2>${data.title}</h2>
        <p class="color-contrast-medium">${data.content}</p>
        <div class="flex justify-between items-center">
          <span class="cd-timeline__date">${data.date}</span>
          <a href="${data.url}" target="_blank" class="btn btn--subtle">Read more</a>
        </div>
      </div>
    </div>`;

  const productTemplate = (data) => `
    <div class="slide product-outer product-backgrand" style="background-image: url(${data.background});">
      <div class="product-dot"></div>
      <div class="product-box">
        <a href="${data.url}" target="_blank">
          <img src="${data.icon}" alt="image" class="thumbnail">
        </a>
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>`;

  // 全てのloadData呼び出しをPromise.allでラップして、全ての読み込みが完了した後に処理を行う
  Promise.all([
    loadData("event.json", "#history", eventTemplate),
    loadData("production.json", "#section2", productTemplate),
  ]).then(() => {
    // 全てのデータの読み込みが完了した後にfullPage.jsを初期化
    $("#fullpage").fullpage({
      licenseKey: null,
      sectionsColor: ["#000", "#f6ab00", "#7baabe", "#e8eff5", "#4bbfc3"],
      anchors: ["home", "about", "product", "timeline", "contact"],
      menu: "#menu",
      autoScrolling: false,
      scrollHorizontally: true,
      afterLoad: function (anchorLink, index) {
        if (index === 1) {
          video.get(0).play();
        }
      },
    });
  });

  // Form submission with error handling
  $("form").submit(function (event) {
    event.preventDefault();
    $.post(
      "https://livlog.xyz/postmail/send/0424b2cb051ea363748f3113a157d3a9/",
      $(this).serialize()
    )
      .done(function (json) {
        const data = JSON.parse(json);
        $("#message").html(
          data.status === 200
            ? "正常に送信しました。"
            : getErrorMessage(data.errors.errors[0].code)
        );
      })
      .fail(function () {
        $("#message").html("送信に失敗しました。");
      });
  });

  const getErrorMessage = (code) => {
    switch (code) {
      case 10:
        return "必須項目がありません。";
      case 20:
        return "トークンが違います。";
      case 21:
        return "送信回数が上限を超えています。";
      case 22:
        return "指定以外のドメインからは送信できません。";
      default:
        return "送信に失敗しました。";
    }
  };
});
