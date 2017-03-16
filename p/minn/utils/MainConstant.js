/**
* @auth:minn
* @qq:394286006
*/
module.exports = {
  global:{
    userInfo: null,
    isLogin:false,
    locale:{locale:'zh_CN',name:'中文',isLoad:false},
    currentLocale:'zh_CN',
    pkg:'locale',
    prefix:'resources',
    locales:[{name:'中文',locale:'zh_CN',isLoad:false},
             {name:'English',locale:'en_US',isLoad:false},
             {name:'German (Germany)', locale:'de_DE',isLoad:false},
  		   {name:'French (France)', locale:'fr_FR',isLoad:false},
  		   {name:'Japanese (Japan)', locale:'ja_JP',isLoad:false},
  		   {name:'русский (Россия)', locale:'ru_RU',isLoad:false},
  		   {name:'한국의 (한국)', locale:'ko_KR',isLoad:false}],
    messageResource:null
          },
   url:'http://192.168.1.2:8080',
   app:'/admin',
   UNKNOWN:'unknown',
   PREFIX_AUTO_COMPOMENT:'dynamy',
   sizePerPage:20,
   sizePerPageList:[20,30,40,50],
   CONNECT:'connect',
   CONNECTED:'connected',
   CONNECTING:'connecting',
   CONNECTFAIL:'connectFail'
};
