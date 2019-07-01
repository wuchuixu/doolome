(function() {
  mui.init({
    preloadPages:[
      {
        id: 'html/flow.html',
        url: 'html/flow.html'
      }
    ],
    swipeBack: true //启用右滑关闭功能
  });
  mui.plusReady(function() {
    var self = plus.webview.currentWebview();
    
    plus.navigator.setStatusBarBackground('#ffffff');
    plus.navigator.setStatusBarStyle('dark');
    
    // 创建子webview窗口 并初始化
    var aniShow = {};
    util.initSubpage(aniShow);
    
    var 	nview = plus.nativeObj.View.getViewById('tabBar'),
      activePage = plus.webview.currentWebview(),
      targetPage,
      subpages = util.options.subpages,
      pageW = window.innerWidth,
      currIndex = 0;
    
      
    /**
     * 根据判断view控件点击位置判断切换的tab
     */
    // nview.addEventListener('click', function(e) {
    //   var clientX = e.clientX;
    //   if(clientX > 0 && clientX <= parseInt(pageW * 0.25)) {
    //     currIndex = 0;
    //   } else if(clientX > parseInt(pageW * 0.25) && clientX <= parseInt(pageW * 0.45)) {
    //     currIndex = 1;
    //   } else if(clientX > parseInt(pageW * 0.45) && clientX <= parseInt(pageW * 0.8)) {
    //     currIndex = 2;
    //   } else {
    //     currIndex = 3;
    //   }
    //   // 匹配对应tab窗口	
    //   if(currIndex > 0) {
    //     targetPage = plus.webview.getWebviewById(subpages[currIndex - 1]);
    //   } else {
    //     targetPage = plus.webview.currentWebview();
    //   }

    //   if(targetPage == activePage) {
    //     return;
    //   }

    //   if(currIndex !== 3) { 
    //     //底部选项卡切换
    //     util.toggleNview(currIndex);
    //     // 子页面切换
    //     util.changeSubpage(targetPage, activePage, aniShow);
    //     //更新当前活跃的页面
    //     activePage = targetPage;
    //   } else {
    //     //第四个tab 打开新窗口
    //     plus.webview.open('html/new-webview.html', 'new', {}, 'slide-in-right', 200);
    //   }
    // });
    var flowPage = null;
    mui("#home-product-list").on('tap', '.home-product-item', function(){
      //获取id
      var id = this.getAttribute("data-id");
      //传值给详情页面，通知加载新数据
      if(!flowPage) {
        flowPage = plus.webview.getWebviewById('html/flow.html');
      }
      mui.fire(flowPage, 'getDetail', { id: id });
      //打开新闻详情
      mui.openWindow({
        id: 'html/flow',
        url: 'html/flow.html',
        // show: {
        //   aniShow: 'zoom-out'
        // }
      });
    });
  });
})();