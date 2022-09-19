(function() {
  let keyword;

  searchInp.oninput = (el) => {
    keyword = el.target.value;
  }

  searchInp.onkeydown = (el) => {
    if(el.keyCode === 13) {
      chrome.tabs.update({url: `https://cn.bing.com/search?q=${keyword}`})
    }
  }
})()