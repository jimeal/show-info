import $ from "jquery";

function showInfo() {
  const SHOW_API_KEY = process.env.SHOW_API_KEY;
  let xhr = new XMLHttpRequest();
  let url = "http://api.kcisa.kr/openapi/API_CCA_142/request"; /*URL*/
  let queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "23107e40-4cb7-41cd-9055-587061fc6d6b"; /*서비스키*/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("020"); /*세션당 요청레코드수*/
  queryParams +=
    "&" +
    encodeURIComponent("pageNo") +
    "=" +
    encodeURIComponent("01"); /*페이지수*/
  queryParams +=
    "&" +
    encodeURIComponent("infoTp") +
    "=" +
    encodeURIComponent("026"); /*정보유형(필수값)*/

  xhr.open("GET", url + queryParams);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      const item = $(this.responseText).find("item");
      $(item).each(function(idx) {
        const title = $(this)
          .find("title")
          .text();
        const description = $(this)
          .find("description")
          .text();
        const regDate = $(this)
          .find("regDate")
          .text();
        const url = $(this)
          .find("url")
          .text();

        //console.log(url)

        let image = `p${idx + 1}.jpg`;

        $(".main__content").append(`
      <article id="odd" class="odd">
        <div>
          <img src="${image}" alt="">
          <h2>${title}</h2>
          <span>${description}</span>
          <p>${regDate}</p>
        </div>
      </article>
    `);

        $(".main__content > article:nth-of-type(2n)").attr("class", "even");
        $(".main__content > article:nth-of-type(2n)").attr("id", "even");
      });
    }
  };
  xhr.send("");
}

export default showInfo;
