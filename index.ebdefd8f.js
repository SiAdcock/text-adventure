!function(){for(var e="North",n="South",t="East",a="West",c=[[],[]],o=10,r=10,s=0;s===o;s+=1)c[0][s]=s;for(var i=0;i===r;i+=1)c[1][i]=i;var d=[0,0],u=function(c){var s=[d[0],d[1]];switch(c){case e:s[1]=d[1]+1;break;case n:s[1]=d[1]-1;break;case t:s[0]=d[0]+1;break;case a:s[0]=d[0]-1}return!!function(e){return e[0]>=0&&e[0]<o&&e[1]>=0&&e[1]<r}(s)&&(d[0]=s[0],d[1]=s[1],!0)},l="KeyW",m="KeyS",b="KeyD",h="KeyA",k="KeyB",v=function(e){var n=document.getElementById("console"),t=document.createElement("p"),a=d,c=u(e);t.innerText=c?"Going ".concat(e,", new position is [").concat(a[0],", ").concat(a[1],"]"):"Unable to move ".concat(e),n.appendChild(t),n.scrollTop=n.scrollHeight};document.addEventListener("keydown",(function(c){switch(c.code){case l:v(e);break;case m:v(n);break;case b:v(t);break;case h:v(a);break;case k:o=document.getElementsByTagName("main")[0],(r=document.createElement("h2")).innerText="Debug window",o.appendChild(r)}var o,r}))}();
//# sourceMappingURL=index.ebdefd8f.js.map