var links = document.getElementsByTagName("link")
var next_url = ""
for (var i=0;i<links.length;i++) {
    var x = links[i]
    if (x.rel == "next") {
        next_url = x.href
        var title
        if (x.title)
            title = x.title
        else
            title = x.href
        chrome.extension.sendRequest({"action":"show_icon", "title":title})
        if (window == top) {
          window.addEventListener("keydown", keyListener, false)
        }
        function keyListener(e) {
          if (e.metaKey && e.keyCode == 39) {
            document.location = next_url
          }
        }
        break
    }
}