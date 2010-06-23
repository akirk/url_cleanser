if (window.location.search != "") {
  window_href = window.location.href;
  
  // Remove tracking crap
  window_href = window_href.replace(/utm_source=[^&]*(&|$)/, ''); // Google analytics tracking variable
  window_href = window_href.replace(/utm_medium=[^&]*(&|$)/, ''); // Google analytics tracking variable
  window_href = window_href.replace(/utm_campaign=[^&]*(&|$)/, ''); // Google analytics tracking variable
  window_href = window_href.replace(/utm_content=[^&]*(&|$)/, ''); // Google analytics tracking variable
  window_href = window_href.replace(/utm_term=[^&]*(&|$)/, ''); // Google analytics tracking variable
  window_href = window_href.replace(/partner=[^&]*(&|$)/, ''); // From nytimes.com feeds
  window_href = window_href.replace(/emc=[^&]*(&|$)/, '');  // From nytimes.com feeds
  window_href = window_href.replace(/lsrc=[^&]*(&|$)/, '');  // From macworld.com feeds
  window_href = window_href.replace(/eref=[^&]*(&|$)/, ''); // From cnn.com feeds
  window_href = window_href.replace(/ref=[^&]*(&|$)/, ''); // From cbc.ca/news feeds
  window_href = window_href.replace(/bn=[^&]*(&|$)/, ''); // From thestar.com links
  window_href = window_href.replace(/cmpid=[^&]*(&|$)/, ''); // From theglobeandmail.com links
  
  // If the string ends with the '?' character (no more GET variables left), remove it
  window_href = window_href.replace(/\?$/, '');
  
  // If the href has changed, update it
  if (window.location.href != window_href) {
    window.location.href = window_href;
  }
}
