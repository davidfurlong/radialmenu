var rd = document.createElement('div');
rd.className = 'radialmenu';
rd.innerHTML = 
	"\
      <ul>\
        <li><a href='http://news.ycombinator.com'>HN</a></li>\
        <li><a href='http://google.com'>Google</a></li>  \
        <li><a href='http://reddit.com'>Reddit</a></li>\
        <li><a href='http://facebook.com'>Facebook</a></li> \
        <li><a href='http://localhost'>Localhost</a></li> \
        <li><a href='http://index.html'>Index</a></li> \
      </ul>\
    "
document.body.appendChild(rd);

/*
var sq = document.createElement('script');
sq.src = 'https://code.jquery.com/jquery-2.1.0.min.js';
(document.head||document.documentElement).appendChild(sq);

*/
/*
var s = document.createElement('script');
s.src = chrome.extension.getURL('radialmenu.js');
(document.head||document.documentElement).appendChild(s);
*/
/*
s.onload = function() {
    s.parentNode.removeChild(s);
};
sq.onload = function() {
    sq.parentNode.removeChild(sq);
};
*/

