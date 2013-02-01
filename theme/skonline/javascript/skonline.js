// JavaScript Document

///Show-Hide Layers
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


//Display:Block/None
function ChangeDisplay(id, action) {
       if (action=="hide") {
            document.getElementById(id).style.display = "none";
       } else {
            document.getElementById(id).style.display = "block";
       }
}

//Links and Jumps to the appropriate iFrame
function loadiFrameAndJump(u)
{
document.getElementById('Unit1Iframe').setAttribute('src',u)
window.location.href="#Unit1Anchor"
}


//Jump to Unit2 iFrame
function loadiFrameAndJumpTwo(u)
{
document.getElementById('Unit2Iframe').setAttribute('src',u)
window.location.href="#Unit2Anchor"
}

//Jump to Unit3 iFrame
function loadiFrameAndJumpThree(u)
{
document.getElementById('Unit3Iframe').setAttribute('src',u)
window.location.href="#Unit3Anchor"
}

//Jump to Unit4 iFrame
function loadiFrameAndJumpFour(u)
{
document.getElementById('Unit4Iframe').setAttribute('src',u)
window.location.href="#Unit4Anchor"
}

//Jump to Unit5 iFrame
function loadiFrameAndJumpFive(u)
{
document.getElementById('Unit5Iframe').setAttribute('src',u)
window.location.href="#Unit5Anchor"
}

//Jump to Unit6 iFrame
function loadiFrameAndJumpSix(u)
{
document.getElementById('Unit6Iframe').setAttribute('src',u)
window.location.href="#Unit6Anchor"
}

//Jump to Unit7 iFrame
function loadiFrameAndJumpSeven(u)
{
document.getElementById('Unit7Iframe').setAttribute('src',u)
window.location.href="#Unit7Anchor"
}

//Jump to Unit8 iFrame
function loadiFrameAndJumpEight(u)
{
document.getElementById('Unit8Iframe').setAttribute('src',u)
window.location.href="#Unit8Anchor"
}

//Jump to Unit9 iFrame
function loadiFrameAndJumpNine(u)
{
document.getElementById('Unit9Iframe').setAttribute('src',u)
window.location.href="#Unit9Anchor"
}

//Jump to Unit10 iFrame
function loadiFrameAndJumpTen(u)
{
document.getElementById('Unit10Iframe').setAttribute('src',u)
window.location.href="#Unit10Anchor"
}

//Opens external links in a new window
function dpSmartLink(u,n,w,h,p) { // v1.4 by David Powers
  var a,j,k,x,y,f='';if(!n){n='';}if(w){f+='width='+w+',';}if(h){f+='height='+h+',';}
  if(p){p=p.split(':');if(p[0]!='z'){p[0]=='c'?(x=(screen.width-w)/2):x=p[0];f+='left='+x+',';}
  if(p[1]!='z'){if(p[0]=='c'){y=(screen.height-h-p[1])/2;if(navigator.appName.indexOf('Op')!=-1){
  y-=96;y=y<0?0:y;}}else{y=p[1];}f+='top='+y+',';}}a=arguments.length;if(a>5){for (k=5;k<a;k++){
  switch(arguments[k]){case 'all':f+='toolbar,menubar,location,scrollbars,status,resizable,';break;
  case 't':f+='toolbar,';break; case 'm':f+='menubar,';break;case 'l':f+='location,';break;
  case 'sc':f+='scrollbars,';break;case 's':f+='status,';break;case 'r':f+='resizable,';}}}
  if(f.charAt(f.length-1)==','){f=f.slice(0,-1);}j=window.open(u,n,f);j.focus();
  document.MM_returnValue=false;
}


// 

 // ================================================
  //PVII TREE Menu Magic 2 scripts
  //Copyright (c) 2009 Project Seven Development
  //www.projectseven.com
  //Version:  2.1.2 - build: 1-12
  //================================================
  
//

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

/*P7tmscripts.js*/
function P7_TMenu(b,og) { //v2.5 by Project Seven Development(PVII)
 var i,s,c,k,j,tN,hh;if(document.getElementById){
 if(b.parentNode && b.parentNode.childNodes){tN=b.parentNode.childNodes;}else{return;}
 for(i=0;i<tN.length;i++){if(tN[i].tagName=="DIV"){s=tN[i].style.display;
 hh=(s=="block")?"none":"block";if(og==1){hh="block";}tN[i].style.display=hh;}}
 c=b.firstChild;if(c.data){k=c.data;j=k.charAt(0);if(j=='+'){k='-'+k.substring(1,k.length);
 }else if(j=='-'){k='+'+k.substring(1,k.length);}c.data=k;}if(b.className=='p7plusmark'){
 b.className='p7minusmark';}else if(b.className=='p7minusmark'){b.className='p7plusmark';}}
}

function P7_setTMenu(){ //v2.5 by Project Seven Development(PVII)
 var i,d='',h='<style type=\"text/css\">';if(document.getElementById){
 var tA=navigator.userAgent.toLowerCase();if(window.opera){
 if(tA.indexOf("opera 5")>-1 || tA.indexOf("opera 6")>-1){return;}}
 for(i=1;i<20;i++){d+='div ';h+="\n#p7TMnav div "+d+"{display:none;}";}
 document.write(h+"\n</style>");}
}
P7_setTMenu();

function P7_TMopen(){ //v2.5 by Project Seven Development(PVII)
 var i,x,d,hr,ha,ef,a,ag;if(document.getElementById){d=document.getElementById('p7TMnav');
 if(d){hr=window.location.href;ha=d.getElementsByTagName("A");if(ha&&ha.length){
 for(i=0;i<ha.length;i++){if(ha[i].href){if(hr.indexOf(ha[i].href)>-1){
 ha[i].className="p7currentmark";a=ha[i].parentNode.parentNode;while(a){
 if(a.firstChild && a.firstChild.tagName=="A"){if(a.firstChild.onclick){
 ag=a.firstChild.onclick.toString();if(ag&&ag.indexOf("P7_TMenu")>-1){
 P7_TMenu(a.firstChild,1);}}}a=a.parentNode;}}}}}}}
}

function P7_TMall(a){ //v2.5 by Project Seven Development(PVII)
 var i,x,ha,s,tN;if(document.getElementById){ha=document.getElementsByTagName("A");
 for(i=0;i<ha.length;i++){if(ha[i].onclick){ag=ha[i].onclick.toString();
 if(ag&&ag.indexOf("P7_TMenu")>-1){if(ha[i].parentNode && ha[i].parentNode.childNodes){
 tN=ha[i].parentNode.childNodes;}else{break;}for(x=0;x<tN.length;x++){
 if(tN[x].tagName=="DIV"){s=tN[x].style.display;if(a==0&&s!='block'){P7_TMenu(ha[i]);
 }else if(a==1&&s=='block'){P7_TMenu(ha[i]);}break;}}}}}}
}

function P7_TMclass(){ //v2.5 by Project Seven Development(PVII)
 var i,x,d,tN,ag;if(document.getElementById){d=document.getElementById('p7TMnav');
 if(d){tN=d.getElementsByTagName("A");if(tN&&tN.length){for(i=0;i<tN.length;i++){
 ag=(tN[i].onclick)?tN[i].onclick.toString():false;if(ag&&ag.indexOf("P7_TMenu")>-1){
 tN[i].className='p7plusmark';}else{tN[i].className='p7defmark';}}}}}
}


/* SpryTabbedPanels.js - Revision: Spry Preview Release 1.4 */

// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

var Spry;
if (!Spry) Spry = {};
if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.TabbedPanels = function(element, opts)
{
	this.element = this.getElement(element);
	this.defaultTab = 0; // Show the first panel by default.
	this.bindings = [];
	this.tabSelectedClass = "TabbedPanelsTabSelected";
	this.tabHoverClass = "TabbedPanelsTabHover";
	this.tabFocusedClass = "TabbedPanelsTabFocused";
	this.panelVisibleClass = "TabbedPanelsContentVisible";
	this.focusElement = null;
	this.hasFocus = false;
	this.currentTabIndex = 0;
	this.enableKeyboardNavigation = true;

	Spry.Widget.TabbedPanels.setOptions(this, opts);

	// If the defaultTab is expressed as a number/index, convert
	// it to an element.

	if (typeof (this.defaultTab) == "number")
	{
		if (this.defaultTab < 0)
			this.defaultTab = 0;
		else
		{
			var count = this.getTabbedPanelCount();
			if (this.defaultTab >= count)
				this.defaultTab = (count > 1) ? (count - 1) : 0;
		}

		this.defaultTab = this.getTabs()[this.defaultTab];
	}

	// The defaultTab property is supposed to be the tab element for the tab content
	// to show by default. The caller is allowed to pass in the element itself or the
	// element's id, so we need to convert the current value to an element if necessary.

	if (this.defaultTab)
		this.defaultTab = this.getElement(this.defaultTab);

	this.attachBehaviors();
};

Spry.Widget.TabbedPanels.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
}

Spry.Widget.TabbedPanels.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.TabbedPanels.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.TabbedPanels.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.TabbedPanels.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.TabbedPanels.prototype.getTabGroup = function()
{
	if (this.element)
	{
		var children = this.getElementChildren(this.element);
		if (children.length)
			return children[0];
	}
	return null;
};

Spry.Widget.TabbedPanels.prototype.getTabs = function()
{
	var tabs = [];
	var tg = this.getTabGroup();
	if (tg)
		tabs = this.getElementChildren(tg);
	return tabs;
};

Spry.Widget.TabbedPanels.prototype.getContentPanelGroup = function()
{
	if (this.element)
	{
		var children = this.getElementChildren(this.element);
		if (children.length > 1)
			return children[1];
	}
	return null;
};

Spry.Widget.TabbedPanels.prototype.getContentPanels = function()
{
	var panels = [];
	var pg = this.getContentPanelGroup();
	if (pg)
		panels = this.getElementChildren(pg);
	return panels;
};

Spry.Widget.TabbedPanels.prototype.getIndex = function(ele, arr)
{
	ele = this.getElement(ele);
	if (ele && arr && arr.length)
	{
		for (var i = 0; i < arr.length; i++)
		{
			if (ele == arr[i])
				return i;
		}
	}
	return -1;
};

Spry.Widget.TabbedPanels.prototype.getTabIndex = function(ele)
{
	var i = this.getIndex(ele, this.getTabs());
	if (i < 0)
		i = this.getIndex(ele, this.getContentPanels());
	return i;
};

Spry.Widget.TabbedPanels.prototype.getCurrentTabIndex = function()
{
	return this.currentTabIndex;
};

Spry.Widget.TabbedPanels.prototype.getTabbedPanelCount = function(ele)
{
	return Math.min(this.getTabs().length, this.getContentPanels().length);
};

Spry.Widget.TabbedPanels.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.TabbedPanels.prototype.onTabClick = function(e, tab)
{
	this.showPanel(tab);
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOver = function(e, tab)
{
	this.addClassName(tab, this.tabHoverClass);
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOut = function(e, tab)
{
	this.removeClassName(tab, this.tabHoverClass);
};

Spry.Widget.TabbedPanels.prototype.onTabFocus = function(e, tab)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.tabFocusedClass);
};

Spry.Widget.TabbedPanels.prototype.onTabBlur = function(e, tab)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.tabFocusedClass);
};

Spry.Widget.TabbedPanels.ENTER_KEY = 13;
Spry.Widget.TabbedPanels.SPACE_KEY = 32;

Spry.Widget.TabbedPanels.prototype.onTabKeyDown = function(e, tab)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != Spry.Widget.TabbedPanels.ENTER_KEY && key != Spry.Widget.TabbedPanels.SPACE_KEY))
		return true;

	this.showPanel(tab);

	if (e.stopPropagation)
		e.stopPropagation();
	if (e.preventDefault)
		e.preventDefault();

	return false;
};

Spry.Widget.TabbedPanels.prototype.preorderTraversal = function(root, func)
{
	var stopTraversal = false;
	if (root)
	{
		stopTraversal = func(root);
		if (root.hasChildNodes())
		{
			var child = root.firstChild;
			while (!stopTraversal && child)
			{
				stopTraversal = this.preorderTraversal(child, func);
				try { child = child.nextSibling; } catch (e) { child = null; }
			}
		}
	}
	return stopTraversal;
};

Spry.Widget.TabbedPanels.prototype.addPanelEventListeners = function(tab, panel)
{
	var self = this;
	Spry.Widget.TabbedPanels.addEventListener(tab, "click", function(e) { return self.onTabClick(e, tab); }, false);
	Spry.Widget.TabbedPanels.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(e, tab); }, false);
	Spry.Widget.TabbedPanels.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(e, tab); }, false);

	if (this.enableKeyboardNavigation)
	{
		// XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
		// rely on adding the tabindex attribute if it is missing to enable keyboard navigation
		// by default.

		// Find the first element within the tab container that has a tabindex or the first
		// anchor tag.
		
		var tabIndexEle = null;
		var tabAnchorEle = null;

		this.preorderTraversal(tab, function(node) {
			if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
			{
				var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
				if (tabIndexAttr)
				{
					tabIndexEle = node;
					return true;
				}
				if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
					tabAnchorEle = node;
			}
			return false;
		});

		if (tabIndexEle)
			this.focusElement = tabIndexEle;
		else if (tabAnchorEle)
			this.focusElement = tabAnchorEle;

		if (this.focusElement)
		{
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "focus", function(e) { return self.onTabFocus(e, tab); }, false);
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "blur", function(e) { return self.onTabBlur(e, tab); }, false);
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "keydown", function(e) { return self.onTabKeyDown(e, tab); }, false);
		}
	}
};

Spry.Widget.TabbedPanels.prototype.showPanel = function(elementOrIndex)
{
	var tpIndex = -1;
	
	if (typeof elementOrIndex == "number")
		tpIndex = elementOrIndex;
	else // Must be the element for the tab or content panel.
		tpIndex = this.getTabIndex(elementOrIndex);
	
	if (!tpIndex < 0 || tpIndex >= this.getTabbedPanelCount())
		return;

	var tabs = this.getTabs();
	var panels = this.getContentPanels();

	var numTabbedPanels = Math.max(tabs.length, panels.length);

	for (var i = 0; i < numTabbedPanels; i++)
	{
		if (i != tpIndex)
		{
			if (tabs[i])
				this.removeClassName(tabs[i], this.tabSelectedClass);
			if (panels[i])
			{
				this.removeClassName(panels[i], this.panelVisibleClass);
				panels[i].style.display = "none";
			}
		}
	}

	this.addClassName(tabs[tpIndex], this.tabSelectedClass);
	this.addClassName(panels[tpIndex], this.panelVisibleClass);
	panels[tpIndex].style.display = "block";

	this.currentTabIndex = tpIndex;
};

Spry.Widget.TabbedPanels.prototype.attachBehaviors = function(element)
{
	var tabs = this.getTabs();
	var panels = this.getContentPanels();
	var panelCount = this.getTabbedPanelCount();

	for (var i = 0; i < panelCount; i++)
		this.addPanelEventListeners(tabs[i], panels[i]);

	this.showPanel(this.defaultTab);
};

// SpryCollapsiblePanel.js - version 0.7 - Spry Pre-Release 1.6.1
//
// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

var Spry;
if (!Spry) Spry = {};
if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.CollapsiblePanel = function(element, opts)
{
	this.element = this.getElement(element);
	this.focusElement = null;
	this.hoverClass = "CollapsiblePanelTabHover";
	this.openClass = "CollapsiblePanelOpen";
	this.closedClass = "CollapsiblePanelClosed";
	this.focusedClass = "CollapsiblePanelFocused";
	this.enableAnimation = true;
	this.enableKeyboardNavigation = true;
	this.animator = null;
	this.hasFocus = false;
	this.contentIsOpen = true;

	this.openPanelKeyCode = Spry.Widget.CollapsiblePanel.KEY_DOWN;
	this.closePanelKeyCode = Spry.Widget.CollapsiblePanel.KEY_UP;

	Spry.Widget.CollapsiblePanel.setOptions(this, opts);

	this.attachBehaviors();
};

Spry.Widget.CollapsiblePanel.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Spry.Widget.CollapsiblePanel.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.CollapsiblePanel.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.CollapsiblePanel.prototype.hasClassName = function(ele, className)
{
	if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)
		return false;
	return true;
};

Spry.Widget.CollapsiblePanel.prototype.setDisplay = function(ele, display)
{
	if( ele )
		ele.style.display = display;
};

Spry.Widget.CollapsiblePanel.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.CollapsiblePanel.prototype.onTabMouseOver = function(e)
{
	this.addClassName(this.getTab(), this.hoverClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.onTabMouseOut = function(e)
{
	this.removeClassName(this.getTab(), this.hoverClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.open = function()
{
	this.contentIsOpen = true;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.CollapsiblePanel.PanelAnimator(this, true, { duration: this.duration, fps: this.fps, transition: this.transition });
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "block");

	this.removeClassName(this.element, this.closedClass);
	this.addClassName(this.element, this.openClass);
};

Spry.Widget.CollapsiblePanel.prototype.close = function()
{
	this.contentIsOpen = false;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.CollapsiblePanel.PanelAnimator(this, false, { duration: this.duration, fps: this.fps, transition: this.transition });
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "none");

	this.removeClassName(this.element, this.openClass);
	this.addClassName(this.element, this.closedClass);
};

Spry.Widget.CollapsiblePanel.prototype.onTabClick = function(e)
{
	if (this.isOpen())
		this.close();
	else
		this.open();

	this.focus();

	return this.stopPropagation(e);
};

Spry.Widget.CollapsiblePanel.prototype.onFocus = function(e)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.onBlur = function(e)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.CollapsiblePanel.KEY_UP = 38;
Spry.Widget.CollapsiblePanel.KEY_DOWN = 40;

Spry.Widget.CollapsiblePanel.prototype.onKeyDown = function(e)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != this.openPanelKeyCode && key != this.closePanelKeyCode))
		return true;

	if (this.isOpen() && key == this.closePanelKeyCode)
		this.close();
	else if ( key == this.openPanelKeyCode)
		this.open();
	
	return this.stopPropagation(e);
};

Spry.Widget.CollapsiblePanel.prototype.stopPropagation = function(e)
{
	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.attachPanelHandlers = function()
{
	var tab = this.getTab();
	if (!tab)
		return;

	var self = this;
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "click", function(e) { return self.onTabClick(e); }, false);
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(e); }, false);
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(e); }, false);

	if (this.enableKeyboardNavigation)
	{
		// XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
		// rely on adding the tabindex attribute if it is missing to enable keyboard navigation
		// by default.

		// Find the first element within the tab container that has a tabindex or the first
		// anchor tag.
		
		var tabIndexEle = null;
		var tabAnchorEle = null;

		this.preorderTraversal(tab, function(node) {
			if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
			{
				var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
				if (tabIndexAttr)
				{
					tabIndexEle = node;
					return true;
				}
				if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
					tabAnchorEle = node;
			}
			return false;
		});

		if (tabIndexEle)
			this.focusElement = tabIndexEle;
		else if (tabAnchorEle)
			this.focusElement = tabAnchorEle;

		if (this.focusElement)
		{
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "focus", function(e) { return self.onFocus(e); }, false);
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "blur", function(e) { return self.onBlur(e); }, false);
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "keydown", function(e) { return self.onKeyDown(e); }, false);
		}
	}
};

Spry.Widget.CollapsiblePanel.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.CollapsiblePanel.prototype.preorderTraversal = function(root, func)
{
	var stopTraversal = false;
	if (root)
	{
		stopTraversal = func(root);
		if (root.hasChildNodes())
		{
			var child = root.firstChild;
			while (!stopTraversal && child)
			{
				stopTraversal = this.preorderTraversal(child, func);
				try { child = child.nextSibling; } catch (e) { child = null; }
			}
		}
	}
	return stopTraversal;
};

Spry.Widget.CollapsiblePanel.prototype.attachBehaviors = function()
{
	var panel = this.element;
	var tab = this.getTab();
	var content = this.getContent();

	if (this.contentIsOpen || this.hasClassName(panel, this.openClass))
	{
		this.addClassName(panel, this.openClass);
		this.removeClassName(panel, this.closedClass);
		this.setDisplay(content, "block");
		this.contentIsOpen = true;
	}
	else
	{
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);
		this.setDisplay(content, "none");
		this.contentIsOpen = false;
	}

	this.attachPanelHandlers();
};

Spry.Widget.CollapsiblePanel.prototype.getTab = function()
{
	return this.getElementChildren(this.element)[0];
};

Spry.Widget.CollapsiblePanel.prototype.getContent = function()
{
	return this.getElementChildren(this.element)[1];
};

Spry.Widget.CollapsiblePanel.prototype.isOpen = function()
{
	return this.contentIsOpen;
};

Spry.Widget.CollapsiblePanel.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.CollapsiblePanel.prototype.focus = function()
{
	if (this.focusElement && this.focusElement.focus)
		this.focusElement.focus();
};

/////////////////////////////////////////////////////

Spry.Widget.CollapsiblePanel.PanelAnimator = function(panel, doOpen, opts)
{
	this.timer = null;
	this.interval = 0;

	this.fps = 60;
	this.duration = 500;
	this.startTime = 0;

	this.transition = Spry.Widget.CollapsiblePanel.PanelAnimator.defaultTransition;

	this.onComplete = null;

	this.panel = panel;
	this.content = panel.getContent();
	this.doOpen = doOpen;

	Spry.Widget.CollapsiblePanel.setOptions(this, opts, true);

	this.interval = Math.floor(1000 / this.fps);

	var c = this.content;

	var curHeight = c.offsetHeight ? c.offsetHeight : 0;
	this.fromHeight = (doOpen && c.style.display == "none") ? 0 : curHeight;

	if (!doOpen)
		this.toHeight = 0;
	else
	{
		if (c.style.display == "none")
		{
			// The content area is not displayed so in order to calculate the extent
			// of the content inside it, we have to set its display to block.

			c.style.visibility = "hidden";
			c.style.display = "block";
		}

		// Clear the height property so we can calculate
		// the full height of the content we are going to show.

		c.style.height = "";
		this.toHeight = c.offsetHeight;
	}

	this.distance = this.toHeight - this.fromHeight;
	this.overflow = c.style.overflow;

	c.style.height = this.fromHeight + "px";
	c.style.visibility = "visible";
	c.style.overflow = "hidden";
	c.style.display = "block";
};

Spry.Widget.CollapsiblePanel.PanelAnimator.defaultTransition = function(time, begin, finish, duration) { time /= duration; return begin + ((2 - time) * time * finish); };

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.start = function()
{
	var self = this;
	this.startTime = (new Date).getTime();
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.stop = function()
{
	if (this.timer)
	{
		clearTimeout(this.timer);

		// If we're killing the timer, restore the overflow property.

		this.content.style.overflow = this.overflow;
	}

	this.timer = null;
};

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.stepAnimation = function()
{
	var curTime = (new Date).getTime();
	var elapsedTime = curTime - this.startTime;

	if (elapsedTime >= this.duration)
	{
		if (!this.doOpen)
			this.content.style.display = "none";
		this.content.style.overflow = this.overflow;
		this.content.style.height = this.toHeight + "px";
		if (this.onComplete)
			this.onComplete();
		return;
	}

	var ht = this.transition(elapsedTime, this.fromHeight, this.distance, this.duration);

	this.content.style.height = ((ht < 0) ? 0 : ht) + "px";

	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.CollapsiblePanelGroup = function(element, opts)
{
	this.element = this.getElement(element);
	this.opts = opts;

	this.attachBehaviors();
};

Spry.Widget.CollapsiblePanelGroup.prototype.setOptions = Spry.Widget.CollapsiblePanel.prototype.setOptions;
Spry.Widget.CollapsiblePanelGroup.prototype.getElement = Spry.Widget.CollapsiblePanel.prototype.getElement;
Spry.Widget.CollapsiblePanelGroup.prototype.getElementChildren = Spry.Widget.CollapsiblePanel.prototype.getElementChildren;

Spry.Widget.CollapsiblePanelGroup.prototype.setElementWidget = function(element, widget)
{
	if (!element || !widget)
		return;
	if (!element.spry)
		element.spry = new Object;
	element.spry.collapsiblePanel = widget;
};

Spry.Widget.CollapsiblePanelGroup.prototype.getElementWidget = function(element)
{
	return (element && element.spry && element.spry.collapsiblePanel) ? element.spry.collapsiblePanel : null;
};

Spry.Widget.CollapsiblePanelGroup.prototype.getPanels = function()
{
	if (!this.element)
		return [];
	return this.getElementChildren(this.element);
};

Spry.Widget.CollapsiblePanelGroup.prototype.getPanel = function(panelIndex)
{
	return this.getPanels()[panelIndex];
};

Spry.Widget.CollapsiblePanelGroup.prototype.attachBehaviors = function()
{
	if (!this.element)
		return;

	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var cpanel = cpanels[i];
		this.setElementWidget(cpanel, new Spry.Widget.CollapsiblePanel(cpanel, this.opts));
	}
};

Spry.Widget.CollapsiblePanelGroup.prototype.openPanel = function(panelIndex)
{
	var w = this.getElementWidget(this.getPanel(panelIndex));
	if (w && !w.isOpen())
		w.open();
};

Spry.Widget.CollapsiblePanelGroup.prototype.closePanel = function(panelIndex)
{
	var w = this.getElementWidget(this.getPanel(panelIndex));
	if (w && w.isOpen())
		w.close();
};

Spry.Widget.CollapsiblePanelGroup.prototype.openAllPanels = function()
{
	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var w = this.getElementWidget(cpanels[i]);
		if (w && !w.isOpen())
			w.open();
	}
};

Spry.Widget.CollapsiblePanelGroup.prototype.closeAllPanels = function()
{
	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var w = this.getElementWidget(cpanels[i]);
		if (w && w.isOpen())
			w.close();
	}
};



/***********************************************
* Ajax Includes script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

//To include a page, invoke ajaxinclude("afile.htm") in the BODY of page
//Included file MUST be from the same domain as the page displaying it.

var rootdomain="http://"+window.location.hostname;

function ajaxinclude(url) {
var page_request = false;
if (window.XMLHttpRequest) // if Mozilla, Safari etc
page_request = new XMLHttpRequest();
else if (window.ActiveXObject){ // if IE
try {
page_request = new ActiveXObject("Msxml2.XMLHTTP");
} 
catch (e){
try{
page_request = new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e){}
}
}
else
return false;
page_request.open('GET', url, false); //get page synchronously 
page_request.send(null);
writecontent(page_request);
}

function writecontent(page_request){
if (window.location.href.indexOf("http")==-1 || page_request.status==200)
document.write(page_request.responseText);
}




