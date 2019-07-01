(function() {
  new Vue({
    el: '#app',
    data: {
      showFooter1: true,
      showSideToolbar: false,
      showSetting: false,
      showResult: false,
      curSpeedId: 1,
      speeds: [
        {
          id: 1,
          text: "快"
        },{
          id: 2,
          text: "中"
        },{
          id: 3,
          text: "慢"
        }
      ],
      curModuleId: 1,
      modules: [
        {
          id: 1,
          text: "智能纠错"
        },{
          id: 2,
          text: "边听边练"
        }
      ],
      curHandId: 1,
      hands: [
        {
          id: 1,
          text: "双手"
        },{
          id: 2,
          text: "左手"
        },{
          id: 3,
          text: "右手"
        }
      ],
      paragraphCheckeds: [1],
      paragraph: [
        {
          id: 1,
          text: "第一段"
        },{
          id: 2,
          text: "第二段"
        },{
          id: 3,
          text: "第三段"
        }
      ]
    },
    created() {
      mui.init({});
      window.addEventListener('getDetail', function(event) {
        var id = event.detail.id;
        console.log(id);
      });
    },
    mounted() {
      var _t = this;
          
      mui.plusReady(function() {
        mui('.mui-scroll-wrapper').scroll({
          scrollX: false, //是否横向滚动
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        _t.renderFlow("https://anteng-demo.oss-cn-shenzhen.aliyuncs.com/Twinkle-twinkle-little-star.musicxml");
      });
    },
    methods: {
      goBack() {
        mui.back();
      },
      handleCheckPg(id) {
        if(this.paragraphCheckeds.includes(id)) {
          var arr = [];
          mui.each(this.paragraphCheckeds, function (i, v) {
            console.log(v);
            if(v != id) {
              arr.push(v);
            }
          });
          this.paragraphCheckeds = arr;
        }else {
          this.paragraphCheckeds.push(id);
        }
      },
      renderFlow(str) {
        mui.showLoading("正在加载..","div");
        var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("flow-container");
        osmd.load(str).then(function() {
          console.log(osmd.IsReadyToRender());
          if(osmd.IsReadyToRender()) {
            osmd.render();
            mui.hideLoading();
          }
        });
      }
    }
  });
})();