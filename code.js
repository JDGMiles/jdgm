var siteWidth = 840;
var siteHeight = 510;
var scale1 = screen.width /siteWidth;
var scale2 = screen.height /siteHeight;
var scale = Math.min(scale1, scale2);

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', height='+siteHeight+', initial-scale='+scale+'');
