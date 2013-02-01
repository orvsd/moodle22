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




//Apex SSO
function SSOencrypt()
{ 
  var key="ApexLearning";
   var baseUrl="https://www.apexvs.com/ApexUI/Default.aspx";
   var sourceOrgID = "378891";
  //var externalUserID = document.getElementById("externalUserID").value;
  var externalUserID = $username;

   
  //Encrypt SourceOrgID and ExternalUserID  
  var encryptedSourceOrgID =
    convertToURLEncoding(PerformEncryption(key, sourceOrgID));
  var encryptedExternalUserID =
    convertToURLEncoding(PerformEncryption(key, externalUserID));  

  //Construct QueryString
  var QueryString = "?" +
    "sourceOrgID=" + encryptedSourceOrgID +
    "&externalUserID=" + encryptedExternalUserID;
  
  //Construct SSO URL link
 /* I commented all of this out, since it was unnecessary and made the function malfunction--kaw
 var SSOUrl = document.getElementById("baseUrl").value + QueryString;
  
  document.getElementById("encryptedSourceOrgID").value = encryptedSourceOrgID;
  document.getElementById("encryptedExternalUserID").value = encryptedExternalUserID;
  document.getElementById("SSOUrl").href = SSOUrl;//I capitalized the U in the first "SSOurl"
  document.getElementById("SSOUrl").innerHTML = SSOUrl;*/
  
    /*Construct SSO URL link -- I wrote this one instead*/
  var SSOUrl = baseUrl + QueryString;
  
  document.Inputs.txtSSOUrl.value = SSOUrl;//Show QueryString in form (Written by me)
  document.getElementById("ApexLink").setAttribute("href",SSOUrl);
}

/* rijndael.js      Rijndael Reference Implementation
   Copyright (c) 2001 Fritz Schneider
 
 This software is provided as-is, without express or implied warranty.  
 Permission to use, copy, modify, distribute or sell this software, with or
 without fee, for any purpose and by any individual or organization, is hereby
 granted, provided that the above copyright notice and this paragraph appear 
 in all copies. Distribution as a part of an application or binary must
 include the above copyright notice in the documentation and/or other materials
 provided with the application or distribution.


   As the above disclaimer notes, you are free to use this code however you
   want. However, I would request that you send me an email 
   (fritz /at/ cs /dot/ ucsd /dot/ edu) to say hi if you find this code useful
   or instructional. Seeing that people are using the code acts as 
   encouragement for me to continue development. If you *really* want to thank
   me you can buy the book I wrote with Thomas Powell, _JavaScript:
   _The_Complete_Reference_ :)

   This code is an UNOPTIMIZED REFERENCE implementation of Rijndael. 
   If there is sufficient interest I can write an optimized (word-based, 
   table-driven) version, although you might want to consider using a 
   compiled language if speed is critical to your application. As it stands,
   one run of the monte carlo test (10,000 encryptions) can take up to 
   several minutes, depending upon your processor. You shouldn't expect more
   than a few kilobytes per second in throughput.

   Also note that there is very little error checking in these functions. 
   Doing proper error checking is always a good idea, but the ideal 
   implementation (using the instanceof operator and exceptions) requires
   IE5+/NS6+, and I've chosen to implement this code so that it is compatible
   with IE4/NS4. 

   And finally, because JavaScript doesn't have an explicit byte/char data 
   type (although JavaScript 2.0 most likely will), when I refer to "byte" 
   in this code I generally mean "32 bit integer with value in the interval 
   [0,255]" which I treat as a byte.

   See http://www-cse.ucsd.edu/~fritz/rijndael.html for more documentation
   of the (very simple) API provided by this code.

                                               Fritz Schneider
                                               fritz at cs.ucsd.edu
 
*/

/****************************************************************************************************
Common settings required for both encrypt and decrypt.
/****************************************************************************************************/
// Allowed values for bit size are 128, 192, or 256
var keySizeInBits = 128;
var blockSizeInBits = 128;
// Allowed value ased "ECB" and "CBC". If the "CBC" is not given, "ECB" is assumed.
// Mode "CBC": If the same data is encrypted, the output is different everytime, it relies on some random numbers.
// But on decryption, the same data is obtained for each of the output.
// Mode "ECB": No random numbers are used. Every time the output is same for the same input.
var encryptionMode = "ECB";


// This function formats the key so that if it is greater than the key length(128, 192, or 256 bits), the extra part is ignored.
// If it is less than the key length(128, 192, or 256 bits), it is padded with 0s at the end.
function formatKey(keyText) 
{
    var keySizeInBytes = keySizeInBits / 8;
    var i;

    if (keyText.length > keySizeInBytes)
    {
        keyText = keyText.substr(0, keySizeInBytes);
    }

    keyText = keyText.split("");

    // Unicode issues here (ignoring high byte)
    for (i=0; i<keyText.length; i++)
        keyText[i] = keyText[i].charCodeAt(0) & 0xFF;

    if (keyText.length < keySizeInBytes)
    {
        for (i = keySizeInBytes - keyText.length; i > 0 && i < keySizeInBytes; i--) 
            keyText[keyText.length] = 0;
    }

    return keyText;
}


// This function takes the key in string format and the data to encrypt in string format.
// It returns the base64 encoded string.
function PerformEncryption(keyString, dataToEncryptString)
{
    // Get an array of key with which encryption is to be done.
    var keyArray = formatKey(keyString); 

    // Pad the plain text with zero if it is not a multiple of the block size.
    var ptArray = formatPlaintext(dataToEncryptString);

    // Encrypt the data and get it in an array.
    var cipherTextArray = rijndaelEncrypt(ptArray, keyArray, encryptionMode);

    // Return base64 encoded cipher text.
    return Base64.encode(cipherTextArray);
}

// Data to decrypt should be base64 encoded.
// The key is in string format.
// The function returns the decrypted string.
function PerformDecryption(keyString, dataToDecryptString)
{
    // Get an array of key with which decryption is to be done.
    var keyArray = formatKey(keyString); 

    // Decode the base64 encoded string.
    var base64decodedstring = decode64(dataToDecryptString);
    
    // Convert the decoded cipher text into an array.
    var cipherTextArray = formatPlaintext(base64decodedstring);
    
    // Return the actual decrypted string.
    return byteArrayToString(rijndaelDecrypt(cipherTextArray, keyArray, encryptionMode));
}


///////  You shouldn't have to modify anything below this line except for
///////  the function getRandomBytes().
//
// Note: in the following code the two dimensional arrays are indexed as
//       you would probably expect, as array[row][column]. The state arrays
//       are 2d arrays of the form state[4][Nb].


// The number of rounds for the cipher, indexed by [Nk][Nb]
var roundsArray = [ ,,,,[,,,,10,, 12,, 14],, 
                        [,,,,12,, 12,, 14],, 
                        [,,,,14,, 14,, 14] ];

// The number of bytes to shift by in shiftRow, indexed by [Nb][row]
var shiftOffsets = [ ,,,,[,1, 2, 3],,[,1, 2, 3],,[,1, 3, 4] ];

// The round constants used in subkey expansion
var Rcon = [ 
0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 
0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 
0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 
0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 
0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91 ];

// Precomputed lookup table for the SBox
var SBox = [
 99, 124, 119, 123, 242, 107, 111, 197,  48,   1, 103,  43, 254, 215, 171, 
118, 202, 130, 201, 125, 250,  89,  71, 240, 173, 212, 162, 175, 156, 164, 
114, 192, 183, 253, 147,  38,  54,  63, 247, 204,  52, 165, 229, 241, 113, 
216,  49,  21,   4, 199,  35, 195,  24, 150,   5, 154,   7,  18, 128, 226, 
235,  39, 178, 117,   9, 131,  44,  26,  27, 110,  90, 160,  82,  59, 214, 
179,  41, 227,  47, 132,  83, 209,   0, 237,  32, 252, 177,  91, 106, 203, 
190,  57,  74,  76,  88, 207, 208, 239, 170, 251,  67,  77,  51, 133,  69, 
249,   2, 127,  80,  60, 159, 168,  81, 163,  64, 143, 146, 157,  56, 245, 
188, 182, 218,  33,  16, 255, 243, 210, 205,  12,  19, 236,  95, 151,  68,  
23,  196, 167, 126,  61, 100,  93,  25, 115,  96, 129,  79, 220,  34,  42, 
144, 136,  70, 238, 184,  20, 222,  94,  11, 219, 224,  50,  58,  10,  73,
  6,  36,  92, 194, 211, 172,  98, 145, 149, 228, 121, 231, 200,  55, 109, 
141, 213,  78, 169, 108,  86, 244, 234, 101, 122, 174,   8, 186, 120,  37,  
 46,  28, 166, 180, 198, 232, 221, 116,  31,  75, 189, 139, 138, 112,  62, 
181, 102,  72,   3, 246,  14,  97,  53,  87, 185, 134, 193,  29, 158, 225,
248, 152,  17, 105, 217, 142, 148, 155,  30, 135, 233, 206,  85,  40, 223,
140, 161, 137,  13, 191, 230,  66, 104,  65, 153,  45,  15, 176,  84, 187,  
 22 ];

// Precomputed lookup table for the inverse SBox
var SBoxInverse = [
 82,   9, 106, 213,  48,  54, 165,  56, 191,  64, 163, 158, 129, 243, 215, 
251, 124, 227,  57, 130, 155,  47, 255, 135,  52, 142,  67,  68, 196, 222, 
233, 203,  84, 123, 148,  50, 166, 194,  35,  61, 238,  76, 149,  11,  66, 
250, 195,  78,   8,  46, 161, 102,  40, 217,  36, 178, 118,  91, 162,  73, 
109, 139, 209,  37, 114, 248, 246, 100, 134, 104, 152,  22, 212, 164,  92, 
204,  93, 101, 182, 146, 108, 112,  72,  80, 253, 237, 185, 218,  94,  21,  
 70,  87, 167, 141, 157, 132, 144, 216, 171,   0, 140, 188, 211,  10, 247, 
228,  88,   5, 184, 179,  69,   6, 208,  44,  30, 143, 202,  63,  15,   2, 
193, 175, 189,   3,   1,  19, 138, 107,  58, 145,  17,  65,  79, 103, 220, 
234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116,  34, 231, 173,
 53, 133, 226, 249,  55, 232,  28, 117, 223, 110,  71, 241,  26, 113,  29, 
 41, 197, 137, 111, 183,  98,  14, 170,  24, 190,  27, 252,  86,  62,  75, 
198, 210, 121,  32, 154, 219, 192, 254, 120, 205,  90, 244,  31, 221, 168,
 51, 136,   7, 199,  49, 177,  18,  16,  89,  39, 128, 236,  95,  96,  81,
127, 169,  25, 181,  74,  13,  45, 229, 122, 159, 147, 201, 156, 239, 160,
224,  59,  77, 174,  42, 245, 176, 200, 235, 187,  60, 131,  83, 153,  97, 
 23,  43,   4, 126, 186, 119, 214,  38, 225, 105,  20,  99,  85,  33,  12,
125 ];

// This method circularly shifts the array left by the number of elements
// given in its parameter. It returns the resulting array and is used for 
// the ShiftRow step. Note that shift() and push() could be used for a more 
// elegant solution, but they require IE5.5+, so I chose to do it manually. 

function cyclicShiftLeft(theArray, positions) {
  var temp = theArray.slice(0, positions);
  theArray = theArray.slice(positions).concat(temp);
  return theArray;
}

// Cipher parameters ... do not change these
var Nk = keySizeInBits / 32;                   
var Nb = blockSizeInBits / 32;
var Nr = roundsArray[Nk][Nb];

// Multiplies the element "poly" of GF(2^8) by x. See the Rijndael spec.

function xtime(poly) {
  poly <<= 1;
  return ((poly & 0x100) ? (poly ^ 0x11B) : (poly));
}

// Multiplies the two elements of GF(2^8) together and returns the result.
// See the Rijndael spec, but should be straightforward: for each power of
// the indeterminant that has a 1 coefficient in x, add y times that power
// to the result. x and y should be bytes representing elements of GF(2^8)

function mult_GF256(x, y) {
  var bit, result = 0;
  
  for (bit = 1; bit < 256; bit *= 2, y = xtime(y)) {
    if (x & bit) 
      result ^= y;
  }
  return result;
}

// Performs the substitution step of the cipher. State is the 2d array of
// state information (see spec) and direction is string indicating whether
// we are performing the forward substitution ("encrypt") or inverse 
// substitution (anything else)

function byteSub(state, direction) {
  var S;
  if (direction == "encrypt")           // Point S to the SBox we're using
    S = SBox;
  else
    S = SBoxInverse;
  for (var i = 0; i < 4; i++)           // Substitute for every byte in state
    for (var j = 0; j < Nb; j++)
       state[i][j] = S[state[i][j]];
}

// Performs the row shifting step of the cipher.

function shiftRow(state, direction) {
  for (var i=1; i<4; i++)               // Row 0 never shifts
    if (direction == "encrypt")
       state[i] = cyclicShiftLeft(state[i], shiftOffsets[Nb][i]);
    else
       state[i] = cyclicShiftLeft(state[i], Nb - shiftOffsets[Nb][i]);

}

// Performs the column mixing step of the cipher. Most of these steps can
// be combined into table lookups on 32bit values (at least for encryption)
// to greatly increase the speed. 

function mixColumn(state, direction) {
  var b = [];                            // Result of matrix multiplications
  for (var j = 0; j < Nb; j++) {         // Go through each column...
    for (var i = 0; i < 4; i++) {        // and for each row in the column...
      if (direction == "encrypt")
        b[i] = mult_GF256(state[i][j], 2) ^          // perform mixing
               mult_GF256(state[(i+1)%4][j], 3) ^ 
               state[(i+2)%4][j] ^ 
               state[(i+3)%4][j];
      else 
        b[i] = mult_GF256(state[i][j], 0xE) ^ 
               mult_GF256(state[(i+1)%4][j], 0xB) ^
               mult_GF256(state[(i+2)%4][j], 0xD) ^
               mult_GF256(state[(i+3)%4][j], 9);
    }
    for (var i = 0; i < 4; i++)          // Place result back into column
      state[i][j] = b[i];
  }
}

// Adds the current round key to the state information. Straightforward.

function addRoundKey(state, roundKey) {
  for (var j = 0; j < Nb; j++) {                 // Step through columns...
    state[0][j] ^= (roundKey[j] & 0xFF);         // and XOR
    state[1][j] ^= ((roundKey[j]>>8) & 0xFF);
    state[2][j] ^= ((roundKey[j]>>16) & 0xFF);
    state[3][j] ^= ((roundKey[j]>>24) & 0xFF);
  }
}

// This function creates the expanded key from the input (128/192/256-bit)
// key. The parameter key is an array of bytes holding the value of the key.
// The returned value is an array whose elements are the 32-bit words that 
// make up the expanded key.

function keyExpansion(key) {
  var expandedKey = new Array();
  var temp;

  // in case the key size or parameters were changed...
  Nk = keySizeInBits / 32;                   
  Nb = blockSizeInBits / 32;
  Nr = roundsArray[Nk][Nb];

  for (var j=0; j < Nk; j++)     // Fill in input key first
    expandedKey[j] = 
      (key[4*j]) | (key[4*j+1]<<8) | (key[4*j+2]<<16) | (key[4*j+3]<<24);

  // Now walk down the rest of the array filling in expanded key bytes as
  // per Rijndael's spec
  for (j = Nk; j < Nb * (Nr + 1); j++) {    // For each word of expanded key
    temp = expandedKey[j - 1];
    if (j % Nk == 0) 
      temp = ( (SBox[(temp>>8) & 0xFF]) |
               (SBox[(temp>>16) & 0xFF]<<8) |
               (SBox[(temp>>24) & 0xFF]<<16) |
               (SBox[temp & 0xFF]<<24) ) ^ Rcon[Math.floor(j / Nk) - 1];
    else if (Nk > 6 && j % Nk == 4)
      temp = (SBox[(temp>>24) & 0xFF]<<24) |
             (SBox[(temp>>16) & 0xFF]<<16) |
             (SBox[(temp>>8) & 0xFF]<<8) |
             (SBox[temp & 0xFF]);
    expandedKey[j] = expandedKey[j-Nk] ^ temp;
  }
  return expandedKey;
}

// Rijndael's round functions... 

function Round(state, roundKey) {
  byteSub(state, "encrypt");
  shiftRow(state, "encrypt");
  mixColumn(state, "encrypt");
  addRoundKey(state, roundKey);
}

function InverseRound(state, roundKey) {
  addRoundKey(state, roundKey);
  mixColumn(state, "decrypt");
  shiftRow(state, "decrypt");
  byteSub(state, "decrypt");
}

function FinalRound(state, roundKey) {
  byteSub(state, "encrypt");
  shiftRow(state, "encrypt");
  addRoundKey(state, roundKey);
}

function InverseFinalRound(state, roundKey){
  addRoundKey(state, roundKey);
  shiftRow(state, "decrypt");
  byteSub(state, "decrypt");  
}

// encrypt is the basic encryption function. It takes parameters
// block, an array of bytes representing a plaintext block, and expandedKey,
// an array of words representing the expanded key previously returned by
// keyExpansion(). The ciphertext block is returned as an array of bytes.

function encrypt(block, expandedKey) {
  var i;  
  if (!block || block.length*8 != blockSizeInBits)
     return; 
  if (!expandedKey)
     return;

  block = packBytes(block);
  addRoundKey(block, expandedKey);
  for (i=1; i<Nr; i++) 
    Round(block, expandedKey.slice(Nb*i, Nb*(i+1)));
  FinalRound(block, expandedKey.slice(Nb*Nr)); 
  return unpackBytes(block);
}

// decrypt is the basic decryption function. It takes parameters
// block, an array of bytes representing a ciphertext block, and expandedKey,
// an array of words representing the expanded key previously returned by
// keyExpansion(). The decrypted block is returned as an array of bytes.

function decrypt(block, expandedKey) {
  var i;
  if (!block || block.length*8 != blockSizeInBits)
     return;
  if (!expandedKey)
     return;

  block = packBytes(block);
  InverseFinalRound(block, expandedKey.slice(Nb*Nr)); 
  for (i = Nr - 1; i>0; i--) 
    InverseRound(block, expandedKey.slice(Nb*i, Nb*(i+1)));
  addRoundKey(block, expandedKey);
  return unpackBytes(block);
}

// This method takes a byte array (byteArray) and converts it to a string by
// applying String.fromCharCode() to each value and concatenating the result.
// The resulting string is returned. Note that this function SKIPS zero bytes
// under the assumption that they are padding added in formatPlaintext().
// Obviously, do not invoke this method on raw data that can contain zero
// bytes. It is really only appropriate for printable ASCII/Latin-1 
// values. Roll your own function for more robust functionality :)

function byteArrayToString(byteArray) {
  var result = "";
  for(var i=0; i<byteArray.length; i++)
    if (byteArray[i] != 0) 
      result += String.fromCharCode(byteArray[i]);
  return result;
}

// This function takes an array of bytes (byteArray) and converts them
// to a hexadecimal string. Array element 0 is found at the beginning of 
// the resulting string, high nibble first. Consecutive elements follow
// similarly, for example [16, 255] --> "10ff". The function returns a 
// string.

function byteArrayToHex(byteArray) {
  var result = "";
  if (!byteArray)
    return;
  for (var i=0; i<byteArray.length; i++)
    result += ((byteArray[i]<16) ? "0" : "") + byteArray[i].toString(16);

  return result;
}

// This function converts a string containing hexadecimal digits to an 
// array of bytes. The resulting byte array is filled in the order the
// values occur in the string, for example "10FF" --> [16, 255]. This
// function returns an array. 

function hexToByteArray(hexString) {
  var byteArray = [];
  if (hexString.length % 2)             // must have even length
    return;
  if (hexString.indexOf("0x") == 0 || hexString.indexOf("0X") == 0)
    hexString = hexString.substring(2);
  for (var i = 0; i<hexString.length; i += 2) 
    byteArray[Math.floor(i/2)] = parseInt(hexString.slice(i, i+2), 16);
  return byteArray;
}

// This function packs an array of bytes into the four row form defined by
// Rijndael. It assumes the length of the array of bytes is divisible by
// four. Bytes are filled in according to the Rijndael spec (starting with
// column 0, row 0 to 3). This function returns a 2d array.

function packBytes(octets) {
  var state = new Array();
  if (!octets || octets.length % 4)
    return;

  state[0] = new Array();  state[1] = new Array(); 
  state[2] = new Array();  state[3] = new Array();
  for (var j=0; j<octets.length; j+= 4) {
     state[0][j/4] = octets[j];
     state[1][j/4] = octets[j+1];
     state[2][j/4] = octets[j+2];
     state[3][j/4] = octets[j+3];
  }
  return state;  
}

// This function unpacks an array of bytes from the four row format preferred
// by Rijndael into a single 1d array of bytes. It assumes the input "packed"
// is a packed array. Bytes are filled in according to the Rijndael spec. 
// This function returns a 1d array of bytes.

function unpackBytes(packed) {
  var result = new Array();
  for (var j=0; j<packed[0].length; j++) {
    result[result.length] = packed[0][j];
    result[result.length] = packed[1][j];
    result[result.length] = packed[2][j];
    result[result.length] = packed[3][j];
  }
  return result;
}

// This function takes a prospective plaintext (string or array of bytes)
// and pads it with zero bytes if its length is not a multiple of the block 
// size. If plaintext is a string, it is converted to an array of bytes
// in the process. The type checking can be made much nicer using the 
// instanceof operator, but this operator is not available until IE5.0 so I 
// chose to use the heuristic below. 
function formatPlaintext( plaintext ) {

    var bpb = blockSizeInBits / 8;               // bytes per block
    var i;

    // if primitive string or String instance
    if (typeof plaintext == "string" || plaintext.indexOf) {

        plaintext = plaintext.split("");

        // Unicode issues here (ignoring high byte)
        for (i=0; i < plaintext.length; i++) {

            plaintext[i] = plaintext[i].charCodeAt(0) & 0xFF;
        }
    } 

    for (i = bpb - (plaintext.length % bpb); i > 0 && i < bpb; i--) {
        plaintext[plaintext.length] = 0;
    }

    return plaintext;
}

// Returns an array containing "howMany" random bytes. YOU SHOULD CHANGE THIS
// TO RETURN HIGHER QUALITY RANDOM BYTES IF YOU ARE USING THIS FOR A "REAL"
// APPLICATION.

function getRandomBytes(howMany) {
  var i;
  var bytes = new Array();
  for (i=0; i<howMany; i++)
    bytes[i] = Math.round(Math.random()*255);
  return bytes;
}

// rijndaelEncrypt(plaintext, key, mode)
// Encrypts the plaintext using the given key and in the given mode. 
// The parameter "plaintext" can either be a string or an array of bytes. 
// The parameter "key" must be an array of key bytes. If you have a hex 
// string representing the key, invoke hexToByteArray() on it to convert it 
// to an array of bytes. The third parameter "mode" is a string indicating
// the encryption mode to use, either "ECB" or "CBC". If the parameter is
// omitted, ECB is assumed.
// 
// An array of bytes representing the cihpertext is returned. To convert 
// this array to hex, invoke byteArrayToHex() on it. If you are using this 
// "for real" it is a good idea to change the function getRandomBytes() to 
// something that returns truly random bits.
function rijndaelEncrypt(plaintext, key, mode) {

  var expandedKey, i, aBlock;
  var bpb = blockSizeInBits / 8;          // bytes per block
  var ct;                                 // ciphertext

  if (!plaintext || !key)
    return;
  if (key.length*8 != keySizeInBits)
    return; 
  if (mode == "CBC")
    ct = getRandomBytes(bpb);             // get IV
  else {
    mode = "ECB";
    ct = new Array();
  }

  // convert plaintext to byte array and pad with zeros if necessary. 
  // plaintext = formatPlaintext(plaintext);

  expandedKey = keyExpansion(key);
  
  for (var block=0; block<plaintext.length / bpb; block++) {
    aBlock = plaintext.slice(block*bpb, (block+1)*bpb);
    if (mode == "CBC")
      for (var i=0; i<bpb; i++) 
        aBlock[i] ^= ct[block*bpb + i];
    ct = ct.concat(encrypt(aBlock, expandedKey));
  }

  return ct;
}

// rijndaelDecrypt(ciphertext, key, mode)
// Decrypts the using the given key and mode. The parameter "ciphertext" 
// must be an array of bytes. The parameter "key" must be an array of key 
// bytes. If you have a hex string representing the ciphertext or key, 
// invoke hexToByteArray() on it to convert it to an array of bytes. The
// parameter "mode" is a string, either "CBC" or "ECB".
// 
// An array of bytes representing the plaintext is returned. To convert 
// this array to a hex string, invoke byteArrayToHex() on it. To convert it 
// to a string of characters, you can use byteArrayToString().

function rijndaelDecrypt(ciphertext, key, mode) {
  var expandedKey;
  var bpb = blockSizeInBits / 8;          // bytes per block
  var pt = new Array();                   // plaintext array
  var aBlock;                             // a decrypted block
  var block;                              // current block number

  if (!ciphertext || !key || typeof ciphertext == "string")
    return;
  if (key.length*8 != keySizeInBits)
    return; 
  if (!mode)
    mode = "ECB";                         // assume ECB if mode omitted

  expandedKey = keyExpansion(key);
 
  // work backwards to accomodate CBC mode 
  for (block=(ciphertext.length / bpb)-1; block>0; block--) {
    aBlock = 
     decrypt(ciphertext.slice(block*bpb,(block+1)*bpb), expandedKey);
    if (mode == "CBC") 
      for (var i=0; i<bpb; i++) 
        pt[(block-1)*bpb + i] = aBlock[i] ^ ciphertext[(block-1)*bpb + i];
    else 
      pt = aBlock.concat(pt);
  }

  // do last block if ECB (skips the IV in CBC)
  if (mode == "ECB")
    pt = decrypt(ciphertext.slice(0, bpb), expandedKey).concat(pt);

  return pt;
}

//First things first, set up our array that we are going to use.
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + //all caps
"abcdefghijklmnopqrstuvwxyz" + //all lowercase
"0123456789+/="; // all numbers plus +/=

/*****
*
*   Base64.js
*
*   copyright 2003, Kevin Lindsey
*   licensing info available at: http://www.kevlindev.com/license.txt
*
*****/

/*****
*
*   encoding table
*
*****/
Base64.encoding = [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "+", "/"
];


/*****
*
*   constructor
*
*****/
function Base64() {}


/*****
*
*   encode
*
*****/
Base64.encode = function(data) {
    var result = [];
    var ip57   = Math.floor(data.length / 57);
    var fp57   = data.length % 57;
    var ip3    = Math.floor(fp57 / 3);
    var fp3    = fp57 % 3;
    var index  = 0;
    var num;
    
    for ( var i = 0; i < ip57; i++ ) {
        for ( j = 0; j < 19; j++, index += 3 ) {
            num = data[index] << 16 | data[index+1] << 8 | data[index+2];
            result.push(Base64.encoding[ ( num & 0xFC0000 ) >> 18 ]);
            result.push(Base64.encoding[ ( num & 0x03F000 ) >> 12 ]);
            result.push(Base64.encoding[ ( num & 0x0FC0   ) >>  6 ]);
            result.push(Base64.encoding[ ( num & 0x3F     )       ]);
        }
        result.push("\n");
    }

    for ( i = 0; i < ip3; i++, index += 3 ) {
        num = data[index] << 16 | data[index+1] << 8 | data[index+2];
        result.push(Base64.encoding[ ( num & 0xFC0000 ) >> 18 ]);
        result.push(Base64.encoding[ ( num & 0x03F000 ) >> 12 ]);
        result.push(Base64.encoding[ ( num & 0x0FC0   ) >>  6 ]);
        result.push(Base64.encoding[ ( num & 0x3F     )       ]);
    }

    if ( fp3 == 1 ) {
        num = data[index] << 16;
        result.push(Base64.encoding[ ( num & 0xFC0000 ) >> 18 ]);
        result.push(Base64.encoding[ ( num & 0x03F000 ) >> 12 ]);
        result.push("==");
    } else if ( fp3 == 2 ) {
        num = data[index] << 16 | data[index+1] << 8;
        result.push(Base64.encoding[ ( num & 0xFC0000 ) >> 18 ]);
        result.push(Base64.encoding[ ( num & 0x03F000 ) >> 12 ]);
        result.push(Base64.encoding[ ( num & 0x0FC0   ) >>  6 ]);
        result.push("=");
    }

    return result.join("");
};




//Heres the encode function
function encode64(inp)
{
var out = ""; //This is the output
var chr1, chr2, chr3 = ""; //These are the 3 bytes to be encoded
var enc1, enc2, enc3, enc4 = ""; //These are the 4 encoded bytes
var i = 0; //Position counter

do { //Set up the loop here
chr1 = inp.charCodeAt(i++); //Grab the first byte
chr2 = inp.charCodeAt(i++); //Grab the second byte
chr3 = inp.charCodeAt(i++); //Grab the third byte

//Here is the actual base64 encode part.
//There really is only one way to do it.
enc1 = chr1 >> 2;
enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
enc4 = chr3 & 63;

if (isNaN(chr2)) {
enc3 = enc4 = 64;
} else if (isNaN(chr3)) {
enc4 = 64;
}

//Lets spit out the 4 encoded bytes
out = out + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);

// OK, now clean out the variables used.
chr1 = chr2 = chr3 = "";
enc1 = enc2 = enc3 = enc4 = "";

} while (i < inp.length); //And finish off the loop

//Now return the encoded values.
return out;
}

//Heres the decode function
function decode64(inp)
{
    var out = ""; //This is the output
    var chr1, chr2, chr3 = ""; //These are the 3 decoded bytes
    var enc1, enc2, enc3, enc4 = ""; //These are the 4 bytes to be decoded
    var i = 0; //Position counter

    inp = inp.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do { //Here's the decode loop.

        //Grab 4 bytes of encoded content.
        enc1 = keyStr.indexOf(inp.charAt(i++));
        enc2 = keyStr.indexOf(inp.charAt(i++));
        enc3 = keyStr.indexOf(inp.charAt(i++));
        enc4 = keyStr.indexOf(inp.charAt(i++));

        //Heres the decode part. There's really only one way to do it.
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        //Start to output decoded content
        out = out + String.fromCharCode(chr1);

        if (enc3 != 64) {
            out = out + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
        out = out + String.fromCharCode(chr3);
    }

    //now clean out the variables used
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";

    } while (i < inp.length); //finish off the loop

    //Now return the decoded values.
    return out;
}



// Converted to URL encoded chars
var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,";
// deleted these chars from the include list ";", "/", "?", ":", "@", "=", "&" and #
// so that we could analyze actual URLs

function isUnsafe(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
    if (unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123)
    { return false; } // found no unsafe chars, return false
        else
    { return true; }
}

function decToHex(num, radix)
// part of the hex-ifying functionality
{
    var hexString = "";
    while (num >= radix)
        {
        temp = num % radix;
        num = Math.floor(num / radix);
        hexString += hexVals[temp];
        }
    hexString += hexVals[num];
    return reversal(hexString);
}

function reversal(s) // part of the hex-ifying functionality
{
    var len = s.length;
    var trans = "";
    for (i=0; i<len; i++)
        { trans = trans + s.substring(len-i-1, len-i); }
    s = trans;
    return s;
}

function convert(val) // this converts a given char to url hex form
{ return  "%" + decToHex(val.charCodeAt(0), 16); }


function convertToURLEncoding(val)
// changed Mar 25, 2002: added if on 122 and else block on 129 to exclude Unicode range
{
    var len     = val.length;
    var backlen = len;
    var i       = 0;

    var newStr  = "";
    var frag    = "";
    var encval  = "";
    var original = val;

    for (i=0;i<len;i++)
    {
        if (val.substring(i,i+1).charCodeAt(0) < 255)  //Eliminate the rest of unicode from this
            {
            if (isUnsafe(val.substring(i,i+1)) == false)
                { newStr = newStr + val.substring(i,i+1); }
            else
                { newStr = newStr + convert(val.substring(i,i+1)); }
            }
        else
            {
            //alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
            newStr = original; i=len;                // Short-circuit the loop and exit
            }
    }
    return newStr;
}

