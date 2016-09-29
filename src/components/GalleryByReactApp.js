'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

// 获取图片数据信息
var imgDatas = require('../data/imgData.json');

// 通过自执行函数，将图片名信息转化成图片路径信息，添加入图片数据数组里
imgDatas = (function genImgUrl(dataArr){

    for (var i = 0; i < dataArr.length; i++) {
        // 为每个图片对象添加url属性
        dataArr[i].url = require('../images/' + dataArr[i].fileName );
    }

    return dataArr;

})(imgDatas)


var GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
            <section className="img_container"></section>

            <nav className="controller_nav"></nav>
      </section>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
