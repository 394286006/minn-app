/**
* @auth:minn
* @qq:394286006
*/
class PropertiesResourceReader {
  constructor(pkg,locales,prefix,callback,app) {
    this.properties={};
    this.locales=locales;
    this.callback=callback;
    this.loaded=false;
    this.app=app;
    this.fileLoad(pkg,locales,prefix);

  }

  static getInstance(pkg,locales,prefix,callback,app){
    return new PropertiesResourceReader(pkg,locales,prefix,callback,app);
  }

  fileLoad(pkg,locales,prefix){

    if(locales instanceof Array){
      for(var i=0;i<locales.length;i++){
        let locale=locales[i];
        this.properties[locale.locale]={};
         this.ajaxLoad(pkg,locale,prefix);
       }
      }else{
        let locale=locales;
        this.properties[locale.locale]={};
        this.ajaxLoad(pkg,locale,prefix);

      }

  }

  ajaxLoad(pkg,locale,prefix){
    fetch(pkg+'/'+locale.locale+'/'+prefix+'.properties')
          .then((response) =>  response.text())
          .then((responseText) => {
          // let data=JSON.parse(responseText);
          let data=responseText;
            this.file2Map(data,locale.locale);
              locale.isLoad=true;
           if(this.loaded){
                 if(typeof this.callback!=='undefined'){
                   this.callback(this);
                 }
              }else{
               this.checkLoad();
              }
          }).catch(e => {console.log(`error ${e}`)});

  }

  checkLoad(){

    if(this.loaded){
        if(typeof this.callback!=='undefined'){
              this.callback(this);
         }
    }else{
       if(this.locales instanceof Array){
          for(var i=0;i<this.locales.length;i++){

             if(this.locales[i].isLoad){
               this.loaded=true;
             }else{
               break;
             }
          }
        }else{
           this.loaded=this.locales.isLoad;
        }

     if(this.loaded){
        if(typeof this.callback!=='undefined'){
              this.callback(this);
         }
    }
    }


  }

  isLoaded(){
    return this.loaded;
  }

 file2Map(text,locale){
      let linesArray;
      let curMap;
      text = '' + text;
      if (!text){
        console.log('Invalid contents.');
        return;
      }

      curMap = this.properties[locale];

      linesArray = text.split('\n');
      if (linesArray){
        linesArray.forEach(function (line, index, array){
          let keyValPair,
            value = '';

          line = line.trim();

          if (line === '' || line.charAt(0) === '#'){
            return;
          }

          keyValPair = line.match(/([^=]*)=(.*)$/);
          if (keyValPair && keyValPair[1]){
            if (keyValPair[2]){
              value = keyValPair[2].trim();
            }

            curMap[keyValPair[1].trim()] = value;
          }else{
            console.log('Invalid line : ' + line);
          }
        });
      }
    }

   convertUnicodeString(str) {
      let convertedText = str.replace(/\\u[\dA-Fa-f]{4}/g, function (unicodeChar) {
        return String.fromCharCode(parseInt(unicodeChar.replace(/\\u/g, ''), 16));
      });
      return convertedText;
    }

   get(key,locale){
      var value='';
      if (typeof this.properties[locale][key] !== 'undefined'){
            value = this.properties[locale][key];
        }
      return this.convertUnicodeString(value);
   }


}
export default PropertiesResourceReader;
