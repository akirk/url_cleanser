if (window.location.search != "") {
  window_href = window.location.href;
  
  // Remove tracking crap
  window_href = window_href.replace(/([&?])utm_source=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
  window_href = window_href.replace(/([&?])utm_medium=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
  window_href = window_href.replace(/([&?])utm_campaign=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
  window_href = window_href.replace(/([&?])utm_content=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
  window_href = window_href.replace(/([&?])utm_term=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
  window_href = window_href.replace(/([&?])partner=[^&]*(?:&|$)/, '$1'); // From nytimes.com feeds
  window_href = window_href.replace(/([&?])emc=[^&]*(?:&|$)/, '$1');  // From nytimes.com feeds
  window_href = window_href.replace(/([&?])lsrc=[^&]*(?:&|$)/, '$1');  // From macworld.com feeds
  window_href = window_href.replace(/([&?])eref=[^&]*(?:&|$)/, '$1'); // From cnn.com feeds
  window_href = window_href.replace(/([&?])ref=[^&]*(?:&|$)/, '$1'); // From cbc.ca/news feeds
  window_href = window_href.replace(/([&?])bn=[^&]*(?:&|$)/, '$1'); // From thestar.com links
  window_href = window_href.replace(/([&?])cmpid=[^&]*(?:&|$)/, '$1'); // From theglobeandmail.com links
  window_href = window_href.replace(/([&?])feature=(?:related|player_embedded)/, '$1'); // For YouTube
  
  // If the string ends with the '?' character (no more GET variables left), remove it
  window_href = window_href.replace(/[&?]$/, '');
  
  // If the href has changed, update it
  if (window.location.href != window_href) {
    window.location.href = window_href;
  }
}
