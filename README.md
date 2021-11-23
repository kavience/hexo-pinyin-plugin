## hexo-pinyin-plugin

把中文转换成拼音的 hexo 插件

## 安装与使用

[![NPM](https://nodei.co/npm/hexo-pinyin-plugin.png?compact=true)](https://npmjs.org/package/hexo-pinyin-plugin)

### 安装

```bash
npm install hexo-pinyin-plugin --save
```

### 使用

#### 配置hexo根项目下的`_config.yml`

```yaml
permalink: :category/:translate_title.html # Use hexo-pinyin-plugin

# https://github.com/kavience/hexo-pinyin-plugin
pinyin:
  enable: true
  rewrite: false
  sourceKey: 'title'
  targetKey: 'translate_title'
  slugifystrOptions:  # all options can find here: https://github.com/dzcpy/transliteration#slugifystr-options
    separator: '-'


## DEMO
[Kavience's Blog](https://kavience.com)

## License
MIT
