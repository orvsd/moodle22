
/* 

  ================================================
  PVII TREE Menu Magic 2 scripts
  Copyright (c) 2009 Project Seven Development
  www.projectseven.com
  Version:  2.1.2 - build: 1-12
  ================================================
  
*/

// define the image swap file naming convention

// rollover image for any image in the normal state
var p7TMMover='_over';
// image for any trigger that has an open sub menu -no rollover
var p7TMMopen='_overdown';
// image to be used for current marker -no roll over
var p7TMMmark='_down';

var p7TMMi=false,p7TMMa=false,p7TMMctl=[],p7TMMadv=[];
function P7_TMMset(){
	var i,h,sh,hd,x,v;
	if(!document.getElementById){
		return;
	}
	sh='.p7TMM div {display:none;overflow:hidden;}\n';
	sh+='.p7TMMtoggle {display:block !important;}\n';
	if(document.styleSheets){
		h='\n<st' + 'yle type="text/css">\n'+sh+'\n</s' + 'tyle>';
		document.write(h);
	}
	else{
		h=document.createElement('style');
		h.type='text/css';
		h.appendChild(document.createTextNode(sh));
		hd=document.getElementsByTagName('head');
		hd[0].appendChild(h);
	}
}
P7_TMMset();
function P7_TMMaddLoad(){
	if(window.addEventListener){
		if(!/KHTML|WebKit/i.test(navigator.userAgent)){
			document.addEventListener("DOMContentLoaded", P7_TMMinit, false);
		}
		window.addEventListener("load",P7_TMMinit,false);
		window.addEventListener("unload",P7_TMMbb,false);
	}
	else if(document.addEventListener){
		document.addEventListener("load",P7_TMMinit,false);
	}
	else if(window.attachEvent){
		document.write("<script id=p7ie_tmm defer src=\"//:\"><\/script>");
		document.getElementById("p7ie_tmm").onreadystatechange=function(){
			if (this.readyState=="complete"){
				if(p7TMMctl.length>0){
					P7_TMMinit();
				}
			}
		};
		window.attachEvent("onload",P7_TMMinit);
	}
	else if(typeof window.onload=='function'){
		var p7loadit=onload;
		window.onload=function(){
			p7loadit();
			P7_TMMinit();
		};
	}
	else{
		window.onload=P7_TMMinit;
	}
}
P7_TMMaddLoad();
function P7_TMMbb(){
	return;
}
function P7_TMMop(){
	if(!document.getElementById){
		return;
	}
	p7TMMctl[p7TMMctl.length]=arguments;
}
function P7_TMMinit(){
	var i,j,jj,k,tM,tA,tU,lv,pp,clv,fs,tS,d=1,cl,tp,uh=0,cN,tw,ow,oh,sP,cA,oA;
	if(p7TMMi){
		return;
	}
	p7TMMi=true;
	document.p7TMMpreload=[];
	for(k=0;k<p7TMMctl.length;k++){
		tM=document.getElementById(p7TMMctl[k][0]);
		if(tM){
			tM.p7opt=p7TMMctl[k];
			if(navigator.appVersion.indexOf("MSIE 5")>-1){
				tM.p7opt[1]=0;
			}
			tM.p7TMMtmr=null;
			tD=tM.getElementsByTagName("DIV");
			for(i=0;i<tD.length;i++){
				tD[i].setAttribute("id",tM.id+'d'+(i+2));
				tD[i].p7state='closed';
				tD[i].tmmmenu=tM.id;
			}
			tU=tM.getElementsByTagName("UL");
			for(i=0;i<tU.length;i++){
				tU[i].setAttribute("id",tM.id+'u'+(i+1));
				lv=1;
				pp=tU[i].parentNode;
				while(pp){
					if(pp.id&&pp.id==tM.id){
						break;
					}
					if(pp.tagName&&pp.tagName=="UL"){
						lv++;
					}
					pp=pp.parentNode;
				}
				tU[i].tmmlevel=lv;
				clv='level_'+lv;
				P7_TMMsetClass(tU[i],clv);
				tN=tU[i].childNodes;
				if(tN){
					fs=-1;
					jj=0;
					for(j=0;j<tN.length;j++){
						if(tN[j].tagName&&tN[j].tagName=="LI"){
							jj++;
							tA=tN[j].getElementsByTagName("A")[0];
							if(fs<0){
								P7_TMMsetClass(tA,'tmmfirst');
								P7_TMMsetClass(tN[j],'tmmfirst');
							}
							tN[j].p7state='closed';
							fs=j;
							tA.setAttribute("id",tM.id+'a'+(d));
							tA.tmmlevel=lv;
							tA.tmmdiv=tU[i].parentNode.id;
							tA.tmmmenu=tM.id;
							if(i==0){
								P7_TMMsetClass(tN[j],('root_'+jj));
							}
							tS=tN[j].getElementsByTagName("UL");
							if(tS&&tS.length>0){
								tA.tmmsub=tS[0].parentNode.id;
								tA.p7state="closed";
								P7_TMMsetClass(tA,'trig_closed');
								P7_TMMsetClass(tA.parentNode,'trig_closed');
								tA.onclick=function(){
									return P7_TMMtrig(this);
								};
							}
							else{
								tA.tmmsub=false;
								P7_TMMsetClass(tA,'p7tmm_page');
								P7_TMMsetClass(tA.parentNode,'p7tmm_page');
							}
							d++;
							tA.hasImg=false;
							var sr,x,fnA,fnB,swp,s1,s2,s3;
							iM=tA.getElementsByTagName("IMG");
							if(iM&&iM[0]){
								sr=iM[0].getAttribute("src");
								swp=tM.p7opt[3];
								iM[0].tmmswap=swp;
								x=sr.lastIndexOf(".");
								fnA=sr.substring(0,x);
								fnB='.'+sr.substring(x+1);
								s1=fnA+p7TMMover+fnB;
								s2=fnA+p7TMMopen+fnB;
								s3=fnA+p7TMMmark+fnB;
								if(swp==1){
									iM[0].p7imgswap=[sr,s1,s1,s1];
									P7_TMMpreloader(s1);
								}
								else if(swp==2){
									iM[0].p7imgswap=[sr,s1,s2,s2];
									P7_TMMpreloader(s1,s2);
								}
								else if(swp==3){
									iM[0].p7imgswap=[sr,s1,s2,s3];
									P7_TMMpreloader(s1,s2,s3);
								}
								else{
									iM[0].p7imgswap=[sr,sr,sr,sr];
								}
								iM[0].p7state='closed';
								iM[0].mark=false;
								iM[0].rollover=tM.p7opt[10];
								if(swp>0){
									tA.hasImg=true;
									iM[0].onmouseover=function(){
										P7_TMMimovr(this);
									};
									iM[0].onmouseout=function(){
										P7_TMMimout(this);
									};
								}
							}
						}
					}
					if(fs>0){
						P7_TMMsetClass(tA,'tmmlast');
						P7_TMMsetClass(tN[fs],'tmmlast');
					}
				}
			}
			oA=document.getElementById(tM.id+'oa');
			if(oA){
				oA.onclick=function(){
					P7_TMMall(this.id.replace('oa',''),'open',0);
					return false;
				};
			}
			cA=document.getElementById(tM.id+'ca');
			if(cA){
				cA.onclick=function(){
					P7_TMMall(this.id.replace('ca',''),'close',0);
					return false;
				};
			}
			if(tM.p7opt[5]==1){
				P7_TMMcurrentMark(tM);
			}
			if(tM.p7opt[9]>-1){
				P7_TMMall(tM.id,'open',tM.p7opt[9]);
			}
		}
	}
	p7TMMa=true;
}
function P7_TMMpreloader(){
	var i,x;
	for(i=0;i<arguments.length;i++){
		x=document.p7TMMpreload.length;
		document.p7TMMpreload[x]=new Image();
		document.p7TMMpreload[x].src=arguments[i];
	}
}
function P7_TMMimovr(im){
	var m=false,a=im.parentNode,r=im.rollover;
	if(im.mark){
		m=(r>1)?true:false;
	}
	else if(im.p7state=='open'){
		m=(r==1||r==3)?true:false;
	}
	else{
		m=true;
	}
	if(m){
		im.src=im.p7imgswap[1];
	}
}
function P7_TMMimout(im){
	var a=im.parentNode,r=im.rollover;
	if(im.mark){
		if(im.p7state=='open'){
			im.src=im.p7imgswap[2];
		}
		else{
			im.src=im.p7imgswap[3];
		}
	}
	else if(im.p7state=='open'){
		if(r==1||r==3){
			im.src=im.p7imgswap[2];
		}
	}
	else{
		im.src=im.p7imgswap[0];
	}
}
function P7_TMMtrig(ob){
	var a,tM,wH,m=false;
	a=ob;
	tM=document.getElementById(a.tmmmenu);
	if(tM.p7opt[7]==1){
		wH=window.location.href;
		if(a.href!=wH&&a.href!=wH+'#'){
			if(a.href.toLowerCase().indexOf('javascript:')==-1){
				return true;
			}
		}
	}
	if(a.p7state=='closed'){
		P7_TMMopen(a);
	}
	else{
		P7_TMMclose(a);
	}
	return m;
}
function P7_TMMopen(a,bp){
	var sP,tM,tD,iM,op=0;
	if(a.p7state=='open'){
		return;
	}
	tM=document.getElementById(a.tmmmenu);
	tD=document.getElementById(a.tmmsub);
	if(!bp){
		if(tM.p7opt[8]==1){
			P7_TMMtoggle(a);
		}
	}
	a.p7state='open';
	a.parentNode.p7state='open';
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='open';
		iM.src=iM.p7imgswap[2];
	}
	sP=document.getElementById(a.tmmspan);
	a.className=a.className.replace('trig_closed','trig_open');
	a.parentNode.className=a.parentNode.className.replace('trig_closed','trig_open');
	tD.p7state='open';
	op=tM.p7opt[1];
	if(!bp&&p7TMMa&&op>0){
		var v,cl,cw,tw,ch,th,st,frh,dy=10,du=100,tU=tD.getElementsByTagName('UL')[0];
		st=du/dy;
		if(op==1||op==3){
			tD.style.height="1px";
		}
		tD.style.display="block";
		tU.style.visibility='hidden';
		tU.style.position='absolute';
		th=tU.offsetHeight;
		tw=tU.offsetWidth;
		tU.style.position='static';
		v=tw*-1;
		frh=parseInt(th/st);
		frh=(frh<1)?1:frh;
		if(op==1||op==3){
			cw=th;
			if(op==3){
				tU.style.marginLeft=v+'px';
			}
			tU.style.visibility='visible';
			P7_TMManimDown(tD.id,1,th,op,frh,v,tU.id,dy);
		}
		else if(op==2){
			tU.style.marginLeft=v+'px';
			tU.style.visibility='visible';
			P7_TMManimRight(tU.id,v,op);
		}
	}
	else{
		tD.style.display='block';
	}
}
function P7_TMMclose(a,bp){
	var sP,tM,tD,iM;
	if(a.p7state=='closed'){
		return;
	}
	tM=document.getElementById(a.tmmmenu);
	tD=document.getElementById(a.tmmsub);
	a.p7state='closed';
	a.parentNode.p7state='closed';
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='closed';
		if(iM.mark){
			iM.src=iM.p7imgswap[3];
		}
		else{
			iM.src=iM.p7imgswap[0];
		}
	}
	sP=document.getElementById(a.tmmspan);
	a.className=a.className.replace('trig_open','trig_closed');
	a.parentNode.className=a.parentNode.className.replace('trig_open','trig_closed');
	tD.p7state='closed';
	tD.style.display='none';
}
function P7_TMMtoggle(a,bp){
	var i,tC;
	tC=a.parentNode.parentNode.childNodes;
	for(i=0;i<tC.length;i++){
		if(tC[i].tagName&&tC[i].tagName=='LI'){
			if(tC[i].p7state&&tC[i].p7state=='open'&&tC[i]!=a.parentNode){
				P7_TMMclose(tC[i].getElementsByTagName('A')[0]);
			}
		}
	}
}
function P7_TMManimDown(id,ch,th,op,frh,v,tu,dy){
	var el,nh;
	el=document.getElementById(id);
	el.style.height=ch+'px';
	if(ch<th){
		nh=ch+frh;
		nh=(nh>=th)?th:nh;
		setTimeout("P7_TMManimDown('"+id+"',"+nh+","+th+","+op+","+frh+","+v+",'"+tu+"',"+dy+")",dy);
	}
	else{
		el.style.height='auto';
		if(op==3){
			P7_TMManimRight(tu,v,op);
		}
	}
}
function P7_TMManimRight(id,v,op){
	var el,tg=0,fr=8,dy=10;
	el=document.getElementById(id);
	el.style.marginLeft=v+'px';
	if(v!=tg){
		v+=fr;
		v=(v>=tg)?tg:v;
		setTimeout("P7_TMManimRight('"+id+"',"+v+","+op+")",dy);
	}
	else{
		el.style.leftMargin='0';
	}
}
function P7_TMMall(d,ac,lv){
	var i,tM,tA;
	lv=(lv>0)?lv:0;
	tM=document.getElementById(d);
	if(tM){
		tA=tM.getElementsByTagName("A");
		for(i=0;i<tA.length;i++){
			if(tA[i].tmmsub&&(lv==0||tA[i].tmmlevel<=lv)){
				if(ac=='open'){
					if(tA[i].p7state!='open'){
						P7_TMMopen(tA[i],1);
					}
				}
				else{
					if(tA[i].p7state!='closed'){
						P7_TMMclose(tA[i],1);
					}
				}
			}
		}
	}
}
function P7_TMMmark(){
	p7TMMadv[p7TMMadv.length]=arguments;
}
function P7_TMMcurrentMark(el){
	var j,i,k,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,a,im;;
	wH=window.location.href;
	if(el.p7opt[12!=1]){
		wH=wH.replace(window.location.search,'');
	}
	if(wH.charAt(wH.length-1)=='#'){
		wH=wH.substring(0,wH.length-1);
	}
	for(k=0;k<p7TMMadv.length;k++){
		if(p7TMMadv[k][0]&&p7TMMadv[k][0]==el.id){
			mt=p7TMMadv[k];
			cm=true;
			break;
		}
	}
	op=mt[1];
	if(op<1){
		return;
	}
	r1=/index\.[\S]*/i;
	k=-1,kk=-1;
	tA=el.getElementsByTagName("A");
	for(j=0;j<tA.length;j++){
		aU=tA[j].href.replace(r1,'');
		if(op>0){
			if(tA[j].href==wH||aU==wH){
				k=j;
				kk=-1;
			}
		}
		if(op==2){
			if(tA[j].firstChild){
				if(tA[j].firstChild.nodeValue==mt[2]){
					kk=j;
				}
			}
		}
		if(op==3&&tA[j].href.indexOf(mt[2])>-1){
			kk=j;
		}
		if(op==4){
			for(x=2;x<mt.length;x+=2){
				if(wH.indexOf(mt[x])>-1){
					if(tA[j].firstChild&&tA[j].firstChild.nodeValue){
						if(tA[j].firstChild.nodeValue==mt[x+1]){
							kk=j;
						}
					}
				}
			}
		}
	}
	k=(kk>k)?kk:k;
	if(k>-1){
		pp=tA[k].parentNode;
		while(pp){
			if(pp.tagName&&pp.tagName=='LI'){
				P7_TMMsetClass(pp,'li_current_mark');
				a=pp.getElementsByTagName('A');
				if(a&&a[0]){
					P7_TMMsetClass(a[0],'current_mark');
					if(a[0].hasImg){
						im=a[0].getElementsByTagName('IMG')[0];
						im.mark=true;
						im.src=im.p7imgswap[3];
					}
					if(a[0].tmmsub){
						P7_TMMopen(a[0],1);
					}
				}
			}
			else{
				if(pp==el){
					break;
				}
			}
			pp=pp.parentNode;
		}
	}
}
function P7_TMMsetClass(ob,cl){
	var cc,nc,r=/\s+/g;
	cc=ob.className;
	nc=cl;
	if(cc&&cc.length>0&&cc.indexOf(cl)==-1){
		nc=cc+' '+cl;
	}
	nc=nc.replace(r,' ');
	ob.className=nc;
}
function P7_TMMremClass(ob,cl){
	var cc,nc,r=/\s+/g;;
	cc=ob.className;
	if(cc&&cc.indexOf(cl>-1)){
		nc=cc.replace(cl,'');
		nc=nc.replace(r,' ');
		ob.className=nc;
	}
}
function P7_TMMgetPropValue(ob,prop,prop2){
	var h,v=null;
	if(ob){
		if(ob.currentStyle){
			v=eval('ob.currentStyle.'+prop);
		}
		else if(document.defaultView.getComputedStyle(ob,"")){
			v=document.defaultView.getComputedStyle(ob,"").getPropertyValue(prop2);
		}
		else{
			v=eval("ob.style."+prop);
		}
	}
	return v;
}
