
(function($,Edge,compId){var _=null,y=true,n=false,x56='29px',e34='${_Text2}',x8='rgba(122,144,147,1.00)',x27='rgba(9,9,9,1.00)',b='block',x59='Text2',x15='rgba(188,207,209,1.00)',x47='hidden',dt='Default Timeline',e52='${_sobre}',i='none',x6='rgba(192,192,192,1)',x19='52',e23='${_Text3}',lf='left',bg='background-color',x57='auto',rbr='border-bottom-right-radius',e41='${_Rectangle2Copy}',fs='font-size',tp='top',x12='400',ov='overflow',xc='rgba(0,0,0,1)',x21='stage',e62='${symbolSelector}',e43='${_Rectangle2}',x2='4.0.0.359',x55='117px',c='color',x3='rgba(0,0,0,0)',x45='rgba(255,255,255,1)',x61='sobre',g='image',po='center',e39='${_photo}',x58='Georgia, Times New Roman, Times, serif',x14='\'Times New Roman\', Times, serif',e53='${_RoundRectCopy2}',e33='${_Text4}',e36='${_RoundRect2}',rtl='border-top-left-radius',x22='@@0@@px @@1@@px',e50='${_RoundRectCopy}',x='text',e38='${_radicao-simbolo8Copy}',e48='${_Rectangle2Copy2}',e46='${_Stage}',m='rect',x54='0px',e44='${_Text6}',h='height',e42='${_radicao-simbolo8}',e40='${_radicao-simbolo8Copy2}',e49='${_paper2}',e37='${_RoundRect2Copy}',e51='${_RoundRect}',x1='4.0.0',ff='font-family',p='px',x25='pointer',e26='${_Text5}',x35='rgba(252,252,252,1.00)',rbl='border-bottom-left-radius',x10='28',e30='${_RectangleCopy2}',a='Base State',e31='${_Rectangle}',e32='${_preview}',o='opacity',l='normal',d='display',x24='justify',e29='${_RectangleCopy}',x28='rgba(122,144,147,1)',rtr='border-top-right-radius',w='width',ta='text-align',ql='linear',s='style',x11='Times New Roman, Times, serif';var im='images/';var g17='paper2.png',g7='radicao-simbolo8.png',g4='preview.jpg',g5='photo.jpg';var s18="Extras",s20="Menu",s13="Decaimento Gama",s60="Sobre",s9="Tempo Meia Vida",s16="Prótons,Nêutrons e Quarks";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'preview',t:g,r:['0','0px','1000px','627px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'photo',t:g,r:['229px','53px','550px','550px','auto','auto'],o:0.48717948717949,f:[x3,im+g5,'0px','0px']},{id:'RoundRect2Copy',t:m,r:['165px','542px','131px','38px','auto','auto'],br:["10px","10px","10px","10px"],f:[x6],s:[0,xc,i]},{id:'Rectangle2Copy2',t:m,r:['417px','480px','73px','1px','auto','auto'],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'radicao-simbolo8Copy2',t:g,r:['339px','459px','73px','68px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'radicao-simbolo8Copy',t:g,r:['625px','317px','73px','68px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'Rectangle2Copy',t:m,r:['555px','357px','73px','1px','auto','auto'],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'radicao-simbolo8',t:g,r:['227px','203px','73px','68px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'RoundRect',t:m,r:['368px','196px','387px','83px','auto','auto'],br:["22px 22px","22px 22px","22px 22px","22px 22px"],f:[x6],s:[0,xc,i]},{id:'Rectangle',v:b,t:m,r:['398px','210px','368px','71px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['465px','220px','278px','34px','auto','auto'],cu:['pointer'],text:s9,align:"left",n:[x11,x10,"rgba(252,252,252,1.00)",x12,i,l]},{id:'Rectangle2',t:m,r:['296px','237px','73px','1px','auto','auto'],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'RoundRectCopy2',t:m,r:['489px','438px','387px','83px','auto','auto'],br:["22px 22px","22px 22px","22px 22px","22px 22px"],f:[x6],s:[0,xc,i]},{id:'RectangleCopy2',v:b,t:m,r:['514px','452px','368px','71px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Text4',t:x,r:['553px','462px','308px','34px','auto','auto'],cu:['pointer'],text:s13,align:"center",n:[x14,x10,"rgba(252,252,252,1)",x12,i,l]},{id:'RoundRect2',t:m,r:['21px','544px','125px','35px','auto','auto'],br:["10px","10px","10px","10px"],f:[x15],s:[0,"rgb(0, 0, 0)",i]},{id:'RoundRectCopy',t:m,r:['156px','319px','387px','83px','auto','auto'],br:["22px 22px","22px 22px","22px 22px","22px 22px"],f:[x6],s:[0,xc,i]},{id:'RectangleCopy',v:b,t:m,r:['179px','333px','368px','71px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Text3',t:x,r:['202px','341px','317px','36px','auto','auto'],cu:['pointer'],text:s16,align:"justify",n:[x14,x10,"rgba(252,252,252,1)",x12,i,l]},{id:'paper2',t:g,r:['168px','12px','702px','169px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'Text6',t:x,r:['425px','63px','368px','66px','auto','auto'],text:s18,align:"left",n:[x14,x19,"rgba(9,9,9,1.00)",x12,i,l]},{id:'Text5',t:x,r:['42px','544px','83px','22px','auto','auto'],cu:['pointer'],text:s20,align:"center",n:[x14,x10,"rgba(9,9,9,1.00)",x12,i,l]},{id:'sobre',t:m,r:['65','610','auto','auto','auto','auto'],cu:['pointer']}],sI:[{id:'sobre',sN:'sobre',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:750,a:y,tt:[]}}},"sobre":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x54,x54,x55,x56,x57,x57],n:[x58,27,xc,l,i,''],id:x59,text:s60,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x21];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e23).P(tp,341).P(ta,x24).P(h,36).P("cursor",x25).P(lf,202).P(w,317);A1.A(e26).P(tp,544).P(lf,42).P("cursor",x25).P(c,x27,c);A1.A(e29).P(bg,x28,c).P(h,54).P(tp,333).P(d,b).P(o,1,_,_,"").P(lf,179,_,_,p).P(w,340);A1.A(e30).P(bg,x28,c).P(tp,452).P(h,54).P(d,b).P(o,1,_,_,"").P(lf,514,_,_,p).P(w,340);A1.A(e31).P(bg,x28,c).P(tp,210).P(d,b).P(h,54).P(o,1,_,_,"").P(lf,398,_,_,p).P(w,340);A1.A(e32).P(h,627).P(tp,0).P(w,1000);A1.A(e33).P(tp,462).P(ta,po).P(lf,553).P("cursor",x25);A1.A(e34).P(tp,220).P(lf,465).P(c,x35,c).P(ff,x11).P("cursor",x25).P(fs,28);A1.A(e36).P(bg,x15,c).P(h,35).P(tp,544).P(lf,21).P(w,125);A1.A(e37).P(tp,542).P(lf,165).P(w,131);A1.A(e38).P(h,68).P(tp,317).P(lf,625).P(w,73);A1.A(e39).P(tp,53).P(h,550).P(o,0.49,_,_,"").P(lf,229,_,_,p).P(w,550);A1.A(e40).P(h,68).P(tp,459).P(lf,339).P(w,73);A1.A(e41).P(h,1).P(tp,357).P(lf,555).P(w,73);A1.A(e42).P(tp,203).P(h,68).P(lf,227).P(w,73);A1.A(e43).P(h,1).P(lf,296).P(w,73);A1.A(e44).P(c,x27,c).P(tp,63).P(lf,425).P(fs,52);A1.A(e46).P(bg,x45,c).P(w,1000).P(h,622).P(ov,x47);A1.A(e48).P(tp,480).P(h,1).P(lf,417).P(w,73);A1.A(e49).P(tp,12).P(h,169).P(lf,168).P(w,702);A1.A(e50).P(tp,319).P(rtl,[22,22],_,x22).P(rbl,[22,22],_,x22).P(rbr,[22,22],_,x22).P(h,83).P(rtr,[22,22],_,x22).P(w,387).P(lf,-401).T(0,151,0.75,ql);A1.A(e51).P(tp,196).P(rbl,[22,22],_,x22).P(rtl,[22,22],_,x22).P(rbr,[22,22],_,x22).P(h,83).P(rtr,[22,22],_,x22).P(w,387).P(lf,1008).T(0,373,0.75,ql);A1.A(e52).P("cursor",x25).P(tp,546).T(0,546).P(lf,172).T(0,172);A1.A(e53).P(tp,438).P(rbl,[22,22],_,x22).P(rtl,[22,22],_,x22).P(rbr,[22,22],_,x22).P(h,83).P(rtr,[22,22],_,x22).P(w,387).P(lf,1023).T(0,487,0.75,ql);var S2=symbols[x61];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e34).P(tp,0).P(ta,po).P(ff,x58).P(lf,0).P(fs,27);A2.A(e62).P(h,29).P(w,117);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-418593");