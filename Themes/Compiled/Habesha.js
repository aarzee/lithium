(f,m,h,g,a,n){function t(a){a.beginPath();a.arc(b/2,c-e-1,e,0,Math.PI);a.lineTo(1,e+1);a.arc(b/2,e+1,e,Math.PI,0);a.lineTo(b-1,c-e-1);a.clip();a.lineWidth=Math.floor(f/20);a.strokeStyle=u}var p=document.createElement("canvas"),k=p.getContext("2d"),q=document.createElement("canvas"),d=q.getContext("2d"),l=document.createElement("canvas"),v=l.getContext("2d"),b=2+f/4,c=2+f/2,e=f/8,r=Math.ceil(f/16),w=5*b+4*r,u="rgb("+n.join()+")";l.width=w;l.height=c;p.width=b;p.height=c;q.width=b;q.height=c;t(k);k.stroke();n=k.getImageData(0,0,b,c);d.fillStyle=u;g&&(d.fillStyle="#FF3B30");a&&(d.fillStyle="#FFCC01");h&&(d.fillStyle="#4CD964");t(d);d.fill();d.stroke();h=d.getImageData(0,0,b,c);for(a=0;5>a;a++)m<=20*a?g=n:m>=20*(a+1)?g=h:(v.putImageData(h,a*(b+r),0),g=k.getImageData(0,0,b,(c-6)*(1-(m-20*a)/20)+3)),v.putImageData(g,a*(b+r),0);return l.toDataURL("image/png")}