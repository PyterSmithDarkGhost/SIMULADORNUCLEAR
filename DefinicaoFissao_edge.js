
(function($,Edge,compId){var _=null,y=true,n=false,e46='${_Text2}',x42='Text2',e16='${_RoundRect2Copy}',x30='rgba(253,253,253,1.00)',x27='hidden',e31='${_begin}',s='style',e32='${_menu}',i='none',x6='rgba(192,192,192,1)',e18='${_Text3}',e21='${_borda2}',lf='left',x34='90px',bg='background-color',x36='auto',fs='font-size',tp='top',x13='400',ov='overflow',xc='rgba(0,0,0,1)',x15='stage',x2='4.0.0.359',c='color',x3='rgba(0,0,0,0)',g='image',po='center',x20='\'Times New Roman\', Times, serif',e41='${_Text4}',e17='${_RoundRect2}',m='rect',x33='0px',h='height',x45='menu',x44='72px',x9='50',x7='rgba(250,251,251,1)',x22='pointer',e26='${_Stage}',x1='4.0.0',x39='begin',e40='${symbolSelector}',e23='${_giphy}',x35='32px',e28='${_preview}',e24='${_RoundRectCopy}',l='normal',x37='Text4',x19='justify',e29='${_Text}',a='Base State',x='text',w='width',dt='Default Timeline',ta='text-align',ql='linear',x12='20',ff='font-family',x25='rgba(255,255,255,1)',x10='Times New Roman, Times, serif';var im='images/';var g14='giphy.gif',g5='borda2.png',g4='preview.jpg';var s8="Fissão Nuclear...",s11="Fissão nuclear ocorre quando um átomo é bombardeado por um nêutron.Ocorre sobretudo, com núcleos pesados, que após  serem atingidos por um nêutron,liberam uma grande quantidade de energia, sendo que a  cada colisão são liberados novos nêutrons.   Dentre os elementos químicos mais utilizados no processo de fissão encontra-se o urânio 235 , nesse caso, temos uma reação em cadeia, onde o urânio se dividirá em duas partes praticamente iguais.",s43="Menu",s38="começar";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'preview',t:g,r:['0px','0','1000px','622px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'borda2',t:g,r:['13px','18px','973px','586px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'RoundRectCopy',t:m,r:['53px','194px','893px','290px','auto','auto'],br:["10px","10px","10px","10px"],f:[x6],s:[0,xc,i]},{id:'RoundRect2Copy',t:m,r:['688px','520px','113px','40px','auto','auto'],br:["10px","10px","10px","10px"],f:[x7],s:[0,"rgb(0, 0, 0)",i]},{id:'menu',t:m,r:['874','567','auto','auto','auto','auto'],cu:['pointer']},{id:'RoundRect2',t:m,r:['819px','520px','113px','40px','auto','auto'],br:["10px","10px","10px","10px"],f:[x7],s:[0,"rgb(0, 0, 0)",i]},{id:'begin',t:m,r:['998','567','auto','auto','auto','auto'],cu:['pointer']},{id:'Text',t:x,r:['279px','47px','517px','92px','auto','auto'],text:s8,align:"center",n:[x10,x9,"rgba(253,253,253,1.00)",l,i,""]},{id:'Text3',t:x,r:['76px','250px','568px','307px','auto','auto'],text:s11,align:"justify",n:[x10,x12,xc,x13,i,l]},{id:'giphy',t:g,r:['658px','209px','274px','250px','auto','auto'],f:[x3,im+g14,'0px','0px']}],sI:[{id:'menu',sN:'menu',a:{}},{id:'begin',sN:'begin',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"begin":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:x,r:[x33,x33,x34,x35,x36,x36],id:x37,text:s38,align:lf,n:[x20,24,xc,x13,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"menu":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:x,id:x42,text:s43,r:[x33,x33,x44,x35,x36,x36],n:[x10,24,xc,l,i,'']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x15];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e16).P(h,40).P(tp,520).P(lf,688).P(w,113);A1.A(e17).P(tp,520).P(h,40).P(lf,819).P(w,113);A1.A(e18).P(tp,250).P(ta,x19).P(fs,20).P(h,307).P(ff,x20).P(lf,76).P(w,568);A1.A(e21).P(tp,18).P(h,586).P(lf,13).P(w,973);A1.A(e23).P(h,250).P(tp,209).P(lf,658).P(w,274);A1.A(e24).P(tp,194).P(h,290).P(lf,53).P(w,893);A1.A(e26).P(bg,x25,c).P(w,1000).P(h,622).P(ov,x27);A1.A(e28).P(h,622).P(lf,0).P(w,1000);A1.A(e29).P(tp,47).P(ta,po).P(c,x30,c).P(ff,x10).P(lf,279).P(fs,50);A1.A(e31).P("cursor",x22).P(tp,522).T(0,522).P(lf,835).T(0,835);A1.A(e32).P("cursor",x22).P(lf,717).T(0,717).P(tp,525).T(0,525);var S2=symbols[x39];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e40).P(h,32).P(w,90);A2.A(e41).P(lf,0).P(tp,0);var S3=symbols[x45];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e46).P(tp,0).P(ff,x10).P(lf,0);A3.A(e40).P(h,32).P(w,72);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-95906184");