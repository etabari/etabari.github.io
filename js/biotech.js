setTimeout(function(){
  for(c of document.getElementsByClassName("body")[0].getElementsByTagName("p"))c.style.display="block";
  for(c of document.getElementsByClassName("paywall"))c.style.display="none";
  for(c of document.getElementsByClassName("header"))c.style.display="none";
  for(c of document.getElementsByClassName("premium"))c.style.display="none";
  x=document.createElement('span');x.innerText="biotech-news:";p[0].insertBefore(x,p[0].firstChild);
},800);
