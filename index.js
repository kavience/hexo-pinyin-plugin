"use strict";

var fs = require("fs");
var front = require("hexo-front-matter");
var slugify = require("transliteration").slugify;
var hexo = hexo || {};
var pinyinConfig = hexo.config.pinyin || {};

hexo.extend.filter.register("before_post_render", function (data) {
  if (Object.keys(pinyinConfig).length === 0) {
    return data;
  }

  let {
    enable = true,
    rewrite = false,
    sourceKey = "title",
    targetKey = "translate_title",
    slugifystrOptions,
  } = pinyinConfig;
  if (!enable) {
    return data;
  }

  if (data[sourceKey] && (rewrite || !data[targetKey])) {
    let tmpPost = front.parse(data.raw);
    let tempTranslateTitle = slugify(data[sourceKey], slugifystrOptions);
    data[targetKey] = tempTranslateTitle;
    tmpPost[targetKey] = tempTranslateTitle;
    let postStr = front.stringify(tmpPost);
    postStr = "---\n" + postStr;
    fs.writeFileSync(data.full_source, postStr, "utf-8");
    console.log(
      "Generate pinyin %s for post [%s]",
      tempTranslateTitle,
      data.title
    );
  }

  return data;
});
