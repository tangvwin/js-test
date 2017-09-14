
// 引入fs模块
var fs = require('fs');

// 引入file json库
var jsonfile = require('jsonfile');

// 定义要扫描的目标文件夹
var pathString = '/Users/jianfengtang/words-from-the-heart/';
// 全部文件的具体地址
// fileString
// 获取文件列表
var files = fs.readdirSync(pathString);

// 用于存放所有心里话
var writePathString = './all_words.json';

// 用于存放格式不正确的json文件名
var errorPathString = './error_data.json';


//得到jsonFiles
var jsonFiles = [];
for (var i = 0; i < files.length; i++) {
  if (files[i].includes('.json')) {
    jsonFiles.push(files[i]);
    //console.log(files[i]);
  }
}
//console.log(jsonFiles);

//循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
var jsonList = [];
var errorFiles = [];
//var content=new Array();  //不建议用这种方式建立新数组
var content = [];
// 文件读取
for (var i=0;i<jsonFiles.length;i++){
  var fileString=pathString+jsonFiles[i];  //这个代表文件夹名和文件名相加，也就是所有的文件名的具体地址
  console.log(fileString);
  //read Files
  try
  {
    content.push(jsonfile.readFileSync(fileString));
    jsonList.push(jsonFiles[i]); 
  }catch (err){
    errorFiles.push(jsonFiles[i]);    
  }
}
//console.log(jsonList.length)
//console.log(errorFiles.length)
  console.log(content);
jsonfile.writeFileSync(writePathString, content);
  jsonfile.writeFileSync(errorPathString, errorFiles);


