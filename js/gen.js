let word = document.getElementById("search")

function google() {
    window.open("https://google.com/search?q="+ word.value,'_blank')
  }
function yahoo() {
    window.open( "https://search.yahoo.co.jp/search?p="+ word.value,'_blank')
  }
function bing() {
    window.open( "https://www.bing.com/search?q="+ word.value,'_blank')
  }
function duckduckgo() {
    window.open( "https://duckduckgo.com/?q="+ word.value,'_blank')
  }
function baidu() {
    window.open( "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+ word.value,'_blank')
  }
function yandex() {
    window.open( "https://yandex.com/search/?text="+ word.value,'_blank')
  }