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
      ]
    },
    created() {
      mui.init({});
    },
    mounted() {
      var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("flow-container");
      mui.plusReady(function() {
        mui('.mui-scroll-wrapper').scroll({
          scrollX: false, //是否横向滚动
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        window.addEventListener('getDetail', function(event) {
          var id = event.detail.id;
          console.log(id);
          osmd.load("https://anteng-demo.oss-cn-shenzhen.aliyuncs.com/Twinkle-twinkle-little-star.musicxml").then(function() {
            console.log(osmd.IsReadyToRender());
            if(osmd.IsReadyToRender()) {
              osmd.render();
            }
          });
        });
      });
    },
    methods: {
      goBack() {
        mui.back();
      }
    }
  });
})();