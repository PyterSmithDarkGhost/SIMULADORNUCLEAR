
(function($,Edge,compId){var _=null,y=true,n=false,x61='203px',x91='476px',e37='${_borda12}',x15='rgba(124,124,124,1)',e39='${_menu}',x96='144px',i='none',x6='rgba(192,192,192,1)',x75='quadro1energianuclear12',e107='${__14e}',e33='${_fissao-nuclear12}',e34='${_layout}',x77='112px',x42='rgba(255,255,255,1)',e40='${_Text6}',ta='text-align',e43='${_Stage}',x25='stage',e48='${_fusao-nuclear-4}',rz='rotateZ',x2='4.0.0.359',c='color',zx='scaleX',x98='torio5',x92='258px',e28='${_comecarCopy2}',p='px',x29='pointer',x100='torio',rbl='border-bottom-left-radius',x104='106px',e59='${symbolSelector}',e32='${_Rectangle}',x97='133px',x10='rgba(124,124,124,1.00)',e36='${_back}',x8='24',mw='min-width',e74='${_Text2}',x79='f',x87='fissao-nuclear142',x55='99px',x85='142px',b='block',x70='Text2',a='Base State',x89='u',x44='hidden',x58='begin',s='style',x12='17',e30='${_Text3}',x56='16px',lf='left',x84='back',bg='background-color',x57='auto',e45='${_comecar}',x76='568px',x86='201px',tp='top',e60='${_Text}',ov='overflow',e46='${_torio2}',e50='${_formula}',x106='formula',zy='scaleY',e26='${_Rectangle2}',x103='517px',x102='_14e',e101='${_torio5}',x22='rgba(25,25,25,1.00)',o='opacity',x94='h',x93='fusao-nuclear-42',g='image',po='center',ql='linear',r='deg',x13='\'Times New Roman\', Times, serif',d='display',e90='${_fissao-nuclear142}',x83='7px',rtl='border-top-left-radius',x63='Urnio',x27='@@0@@px @@1@@px',x='text',e66='${_Urnio}',x65='link',e38='${_u}',x54='0px',x82='93px',h='height',e49='${_begin}',dt='Default Timeline',e35='${_comecarCopy}',e80='${_quadro1energianuclear12}',e47='${_Text7}',x67='87px',e31='${_Text5}',e95='${_fusao-nuclear-42}',x68='8px',rbr='border-bottom-right-radius',fs='font-size',x14='400',xc='rgba(0,0,0,1)',x9='Arial, Helvetica, sans-serif',t='transform',l='normal',x1='4.0.0',x72='justify',x3='rgba(0,0,0,0)',x52='Text',rtr='border-top-right-radius',w='width',ff='font-family',m='rect',x73='menu',e41='${_Rectangle3}',x69='rgba(14,14,14,1)',x20='30',x62='190px',x51='Times New Roman, Times, serif';var im='images/';var g78='quadro1energianuclear12.png',g24='fissao-nuclear12.png',g5='borda12.png',g4='preview.jpg',g99='torio5.png',g105='14e.png',g88='fissao-nuclear14.png',g17='fusao-nuclear-4.png',g18='torio2.png',g64='567945c32d18e3336f5ce68aeefe26fa.jpg';var s71="Menu",s81="voltar",s53="Começar<br>",s23="Urânio 238<br>",s19="Tório 234",s11="No decaimento alfa o elemento emite uma partícula com 2 prótons e 2 nêutrons.Logo, o urânio 238 transforma-se em um novo elemento o tório.",s7="No decaimento alfa",s16="<br>",s21="Hélio";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'layout',t:g,r:['0px','21px','1000px','577px','auto','auto'],f:[x3,im+g4,'0px','0px'],tf:[[],[],[],['1','1.07395']]},{id:'borda12',t:g,r:['16px','11px','976px','608px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'comecarCopy2',t:m,r:['853px','553px','108px','37px','auto','auto'],cu:['pointer'],br:["10px 10px","10px 10px","10px 10px","10px 10px"],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'comecar',t:m,r:['719px','553px','123px','37px','auto','auto'],cu:['pointer'],br:["10px 10px","10px 10px","10px 10px","10px 10px"],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'begin',t:m,r:['751','538','auto','auto','auto','auto'],cu:['pointer']},{id:'back',t:m,r:['860px','559px','auto','auto','auto','auto']},{id:'Text',t:x,r:['603px','116px','347px','219px','auto','auto'],text:s7,n:[x9,x8,xc,l,i,""]},{id:'comecarCopy',t:m,r:['584px','554px','123px','37px','auto','auto'],cu:['pointer'],br:["10px 10px","10px 10px","10px 10px","10px 10px"],f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'menu',t:m,r:['620','559','auto','auto','auto','auto'],cu:['pointer']},{id:'Rectangle2',t:m,r:['591px','50px','354px','466px','auto','auto'],br:["10px 10px","10px 10px","10px 10px","10px 10px"],f:[x10],s:[0,"rgba(0, 0, 0, 0.0392157)",i]},{id:'Text7',t:x,r:['615px','378px','305px','112px','auto','auto'],text:s11,align:"justify",n:[x13,x12,"rgba(248,248,248,1)",x14,i,l]},{id:'Rectangle',t:m,r:['601px','346px','337px','2px','auto','auto'],f:[x15],s:[0,"rgba(0, 0, 0, 0.0392157)",i]},{id:'Text4',t:x,r:['698px','293px','113px','91px','auto','auto'],text:s16,align:"left",n:[x9,x8,xc,x14,i,l]},{id:'fusao-nuclear-4',t:g,r:['264px','182px','476px','258px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'u',t:m,r:['72px','157px','auto','auto','auto','auto']},{id:'h',t:m,r:['-8','129','auto','auto','auto','auto']},{id:'torio2',t:g,r:['575px','125px','144px','133px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'torio',t:m,r:['50','207','auto','auto','auto','auto']},{id:'Text3',t:x,r:['712px','179px','144px','72px','auto','auto'],text:s19,align:"justify",n:[x13,x20,"rgba(248,248,248,1)",x14,i,l]},{id:'Text6',t:x,r:['719px','274px','196px','72px','auto','auto'],text:s21,align:"justify",n:[x13,x20,"rgba(248,248,248,1)",x14,i,l]},{id:'Rectangle3',t:m,r:['609px','344px','315px','2px','auto','auto'],f:[x22],s:[0,"rgba(0, 0, 0, 0.0392157)",i]},{id:'Text5',t:x,r:['707px','65px','231px','58px','auto','auto'],text:s23,align:"justify",n:[x13,x20,"rgba(248,248,248,1)",x14,i,l]},{id:'fissao-nuclear12',t:g,r:['584px','11px','113px','159px','auto','auto'],f:[x3,im+g24,'0px','0px']},{id:'formula',t:m,r:['50','612','auto','auto','auto','auto']}],sI:[{id:'begin',sN:'begin',a:{}},{id:'h',sN:'h',a:{}},{id:'menu',sN:'menu',a:{}},{id:'u',sN:'u',a:{}},{id:'formula',sN:'formula',a:{}},{id:'torio',sN:'torio',a:{}},{id:'back',sN:'back',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1560972,a:y,tt:[]}}},"begin":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{n:[x51,24,xc,x14,i,l],t:x,id:x52,text:s53,align:po,r:[x54,x54,x55,x56,x57,x57]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4998,a:y,tt:[]}}},"link":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x54,x54,x61,x62,x57,x57],id:x63,t:g,cu:[x29],f:[x3,im+g64,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"menu":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x54,x54,x67,x68,x57,x57],n:[x13,24,x69,x14,i,l],id:x70,text:s71,align:x72,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"f":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x75,o:0,r:[x54,x54,x76,x77,x57,x57],f:[x3,im+g78,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:7540,a:y,tt:[]}}},"back":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{n:[x13,24,xc,x14,i,l],t:x,align:po,id:x70,text:s81,cu:[x29],r:[x54,x54,x82,x83,x57,x57]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"u":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,v:b,r:[x54,x54,x85,x86,x57,x57],id:x87,f:[x3,im+g88,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6165,a:y,tt:[]}}},"h":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,v:i,r:[x54,x54,x91,x92,x57,x57],id:x93,f:[x3,im+g17,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6165,a:y,tt:[]}}},"torio":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,v:i,r:[x54,x54,x96,x97,x57,x57],id:x98,f:[x3,im+g99,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6153,a:y,tt:[]}}},"formula":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x102,t:g,r:[x54,x54,x103,x104,x57,x57],f:[x3,im+g105,x54,x54]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x25];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e26).P(bg,x10,c).P(rtl,[10,10],_,x27).P(rbr,[10,10],_,x27).P(lf,591).P(w,354).P(tp,50).P(rbl,[10,10],_,x27).P(h,466).P(rtr,[10,10],_,x27);A1.A(e28).P(rtl,[10,10],_,x27).P(rbr,[10,10],_,x27).P(lf,853).P(w,108).P(tp,553).P(rbl,[10,10],_,x27).P(h,37).P("cursor",x29).P(rtr,[10,10],_,x27);A1.A(e30).P(lf,712).P(tp,179);A1.A(e31).P(tp,65).P(fs,30).P(lf,707).P(w,231);A1.A(e32).P(h,2).P(tp,346).P(w,337);A1.A(e33).P(tp,11).P(h,159).P(lf,584).P(w,113);A1.A(e34).P(tp,21).P(zy,1.07395,t,_,"").P(h,577,_,_,p).P(lf,0).P(w,1000);A1.A(e35).P(rtl,[10,10],_,x27).P(rbr,[10,10],_,x27).P(lf,584).P(w,123).P(tp,554).P(rbl,[10,10],_,x27).P(h,37).P(rtr,[10,10],_,x27).P("cursor",x29);A1.A(e36).P(lf,860).P(tp,559);A1.A(e37).P(tp,11).P(h,608).P(lf,16).P(w,976);A1.A(e38).P(lf,72).P(tp,157);A1.A(e39).P("cursor",x29);A1.A(e40).P(tp,274).P(lf,719).P(fs,30);A1.A(e41).P(bg,x22,c).P(h,2).P(tp,344).P(lf,609).P(w,315);A1.A(e43).P(bg,x42,c).P(mw,4).P(ov,x44).P(h,620).P(w,1000);A1.A(e45).P(rtl,[10,10],_,x27).P(rbr,[10,10],_,x27).P(lf,719).P(w,123).P(tp,553).P(rbl,[10,10],_,x27).P(h,37).P("cursor",x29).P(rtr,[10,10],_,x27);A1.A(e46).P(lf,575).P(tp,125);A1.A(e47).P(tp,378).P(w,305).P(h,112).P("font-weight",400,_,_,"").P(lf,615,_,_,p).P(fs,17);A1.A(e48).P(lf,264).P(tp,182);A1.A(e49).P(zx,0.87879,t,_,"").P("cursor",x29).P(tp,557,_,_,p).T(928.208,564,83.871,ql).T(1423.062,557,137.91,_,559).P(lf,738).T(928.208,732,83.871).T(1012.079,734,548.893).P(zy,1.14584,t,_,"").T(635.045,1.01,293.163,_,1.15).T(928.208,1.14,83.871).T(1423.062,1);A1.A(e50).P(lf,50).P(tp,632).T(7.258,442,3.033,ql);var S2=symbols[x58];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e59).P(h,16).P(w,99);A2.A(e60).P(tp,0).P(ta,po).P(ff,x51).P(lf,-8).T(4.998,-8).P(o,0,_,_,"").T(0,1,2,ql);var S3=symbols[x65];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e59).P(h,190).P(w,203);A3.A(e66).P(tp,0).P(h,190).P(lf,0).P("cursor",x29).P(w,203);var S4=symbols[x73];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e74).P(tp,0).P(h,8).P(lf,0).P(fs,24);A4.A(e59).P(h,8).P(w,87);var S5=symbols[x79];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e59).P(h,112).P(w,568);A5.A(e80).P(h,112).P(o,1,_,_,"").P(lf,0,_,_,p).P(w,568).P(tp,162).T(7.258,-10,0.282,ql);var S6=symbols[x84];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e74).P(tp,0).P(lf,0).P("cursor",x29);A6.A(e59).P(h,7).P(w,93);var S7=symbols[x89];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e59).P(h,201).P(w,142);A7.A(e90).P(tp,0).P(lf,0).P(d,b).T(6,b).T(6.165,i).P(rz,0,t,_,r).T(2,704,4,ql);var S8=symbols[x94];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e59).P(h,258).P(w,476);A8.A(e95).P(tp,0).P(d,i).T(0,i).T(5.244,i).T(5.674,b).P(lf,-234).T(5.244,50,0.921,ql);var S9=symbols[x100];var tl8=S9.tl[dt].tt,st9=S9.s[a]={},A9=A(_,tl8,st9);A9.A(e59).P(h,133).P(w,144);A9.A(e101).P(tp,0).P(lf,0).P(d,i).T(6.153,b);var S10=symbols[x106];var tl9=S10.tl[dt].tt,st10=S10.s[a]={},A10=A(_,tl9,st10);A10.A(e107).P(tp,0).P(h,106).P(lf,0).P(w,517);A10.A(e59).P(h,106).P(w,517);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-6675406");