window.onload=function(){document.getElementById("L-letter"),document.getElementById("U-letter"),document.getElementById("C-letter"),document.getElementById("A-letter"),document.getElementById("BORLETTI");let e=document.getElementById("name");document.getElementById("header"),document.getElementById("drawing-container");let t=document.getElementById("pound-symbol"),s=document.getElementById("w_top_right");document.getElementById("w_right"),document.getElementById("w_bottom");let n=document.getElementById("w_left");document.getElementById("w_top_left");let c=document.getElementById("toolbelt"),a=document.getElementById("toolbeltg"),i=a.children,o=document.getElementById("g_pencils"),l=document.getElementById("w_pencil_1"),d=document.getElementById("w_pencil_2"),r=document.getElementById("w_bp"),m=document.getElementById("w_hammer"),v=document.getElementById("w_wrench"),L=document.getElementById("w_phone"),h=document.getElementById("school_path"),f=document.getElementById("work_path"),p=document.getElementById("projects_path"),y=document.getElementById("contact_path"),E=document.getElementById("projects_text"),g=document.getElementById("school_text"),w=document.getElementById("work_text"),u=document.getElementById("contact_text"),b=document.getElementById("g_projects"),I=document.getElementById("g_school"),B=document.getElementById("g_work"),k=document.getElementById("g_contact"),$=document.getElementById("school-container"),j=document.getElementById("work-container"),_=document.getElementById("projects-container"),x=document.getElementById("contact-container"),T=document.getElementById("linkedin"),A=document.getElementById("github"),C=document.getElementById("projects-clickshare"),H=document.getElementById("projects-xylo"),J=document.getElementById("projects-studynet"),M=document.getElementById("projects-pointandprove"),O=document.getElementById("gohome"),P=document.getElementById("age");P&&setInterval(()=>{let e=dayjs().diff(dayjs("2003-03-28"),"year",!0);P.innerText=e.toString().substring(0,12)},50);var R=!1,S="main",U="main",V=!0;function X(e){return new Promise(t=>setTimeout(t,e))}function Z(e){e.scrollIntoView({behavior:"smooth"})}function q(){l.classList.remove("pencil_1_active"),d.classList.remove("pencil_2_active"),r.classList.remove("blueprint_active"),m.classList.remove("hammer_active"),v.classList.remove("wrench_active"),L.classList.remove("phone_active"),h.classList.remove("school_path_active"),h.classList.add("school_path_inactive"),f.classList.remove("work_path_active"),f.classList.add("work_path_inactive"),p.classList.remove("projects_path_active"),p.classList.add("projects_path_inactive"),y.classList.remove("contact_path_active"),y.classList.add("contact_path_inactive"),E.classList.add("projects_text_inactive"),w.classList.add("work_text_inactive"),g.classList.add("school_text_inactive"),u.classList.add("contact_text_inactive"),I.style.display="none",B.style.display="none",b.style.display="none",k.style.display="none"}function z(){S="school",q(),I.style.display="unset",l.classList.add("pencil_1_active"),d.classList.add("pencil_2_active"),h.classList.remove("school_path_inactive"),h.classList.add("school_path_active"),g.classList.remove("school_text_inactive")}function D(){S="projects",q(),b.style.display="unset",r.classList.add("blueprint_active"),p.classList.remove("projects_path_inactive"),p.classList.add("projects_path_active"),E.classList.remove("projects_text_inactive")}function F(){S="work",q(),B.style.display="unset",m.classList.add("hammer_active"),v.classList.add("wrench_active"),f.classList.remove("work_path_inactive"),f.classList.add("work_path_active"),w.classList.remove("work_text_inactive")}function G(){S="contact",q(),k.style.display="unset",L.classList.add("phone_active"),y.classList.remove("contact_path_inactive"),y.classList.add("contact_path_active"),u.classList.remove("contact_text_inactive")}function K(){for(let e of(O.classList.remove("home-btn-off"),X(1e3).then(()=>c.classList.add("scale-belt-school")),$.classList.remove("container-off"),i)){let t=e.id;"g_pencils"==t||"g_school"==t||e.classList.add("invisible")}U="school",X(200).then(()=>Z($))}function N(){for(let e of(O.classList.add("home-btn-off"),c.classList.remove("scale-belt-school"),$.classList.add("container-off"),i)){let t=e.id;"g_pencils"==t||"g_school"==t||e.classList.remove("invisible")}U="main"}function Q(){for(let e of(O.classList.remove("home-btn-off"),X(1e3).then(()=>c.classList.add("scale-belt-work")),j.classList.remove("container-off"),i)){let t=e.id;"w_hammer"==t||"w_wrench"==t||"g_work"==t||e.classList.add("invisible")}U="work",X(200).then(()=>Z(j))}function W(){for(let e of(O.classList.add("home-btn-off"),c.classList.remove("scale-belt-work"),j.classList.add("container-off"),i)){let t=e.id;"w_hammer"==t||"w_wrench"==t||"g_work"==t||e.classList.remove("invisible")}U="main"}function Y(){for(let e of(O.classList.remove("home-btn-off"),X(1e3).then(()=>c.classList.add("scale-belt-projects")),_.classList.remove("container-off"),i)){let t=e.id;"w_bp"==t||"g_projects"==t||e.classList.add("invisible")}U="projects",X(200).then(()=>Z(_))}function ee(){for(let e of(O.classList.add("home-btn-off"),c.classList.remove("scale-belt-projects"),_.classList.add("container-off"),i)){let t=e.id;"w_bp"==t||"g_projects"==t||e.classList.remove("invisible")}U="main"}function et(){for(let e of(O.classList.remove("home-btn-off"),X(1e3).then(()=>c.classList.add("scale-belt-contact")),x.classList.remove("container-off"),i)){let t=e.id;"w_contact"!=t&&e.classList.add("invisible")}U="contact",X(200).then(()=>Z(x))}function es(){for(let e of(O.classList.add("home-btn-off"),c.classList.remove("scale-belt-contact"),x.classList.add("container-off"),i)){let t=e.id;"w_contact"!=t&&e.classList.remove("invisible")}U="main"}t.addEventListener("click",()=>{V?(s.classList.add("move-left"),n.classList.add("move-left"),V=!1):(s.classList.remove("move-left"),n.classList.remove("move-left"),V=!0)}),o.addEventListener("mouseover",()=>{"main"==U&&(ec(),z())}),r.addEventListener("mouseover",()=>{"main"==U&&(ec(),D())}),v.addEventListener("mouseover",()=>{"main"==U&&(ec(),F())}),m.addEventListener("mouseover",()=>{"main"==U&&(ec(),F())}),L.addEventListener("mouseover",()=>{"main"==U&&(ec(),G())}),o.addEventListener("click",()=>{"school"==U?N():"main"==U&&K()}),I.addEventListener("click",()=>{"school"==U?N():"main"==U&&"school"==S&&K()}),v.addEventListener("click",()=>{"work"==U?W():"main"==U&&Q()}),m.addEventListener("click",()=>{"work"==U?W():"main"==U&&Q()}),B.addEventListener("click",()=>{"work"==U?W():"main"==U&&"work"==S&&Q()}),r.addEventListener("click",()=>{"projects"==U?ee():"main"==U&&Y()}),b.addEventListener("click",()=>{"projects"==U?ee():"main"==U&&"projects"==S&&Y()}),riseContact=function(){!function e({timing:t,draw:s,duration:n}){let c=performance.now();requestAnimationFrame(function e(a){let i=(a-c)/n;i>1&&(i=1);s(t(i)),i<1&&requestAnimationFrame(e)})}({duration:2e3,timing:function(e){return e},draw:function(e){elem.style.width=100*e+"%"}})},L.addEventListener("click",()=>{"contact"==U?es():"main"==U&&et()}),k.addEventListener("click",()=>{"contact"==U?es():"main"==U&&"contact"==S&&et()}),c.addEventListener("mouseleave",()=>{"main"==U&&(S="",q())}),toolLoopIdx=0,toolLoopList=[z,D,F,G];var en=window.setInterval(function e(){toolLoopList[toolLoopIdx](),toolLoopIdx=(toolLoopIdx+1)%4},2500);function ec(){R||window.clearInterval(en),R=!0}function ea(){switch(U){case"school":N();case"work":W();case"projects":ee();case"contact":es()}}H.addEventListener("click",()=>{window.open("https://www.youtube.com/watch?v=XMbejw6Zr9w&feature=youtu.be&ab_channel=LucaBorletti","_blank").focus()}),J.addEventListener("click",()=>{window.open("https://devpost.com/software/studynet","_blank").focus()}),C.addEventListener("click",()=>{window.open("https://www.youtube.com/watch?v=TBaPf3226Hs&ab_channel=Jack","_blank").focus()}),M.addEventListener("click",()=>{window.open("http://www.pointandprove.com/","_blank").focus()}),T.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/lucaborletti/","_blank").focus()}),A.addEventListener("click",()=>{window.open("https://github.com/luca-borletti","_blank").focus()}),O.addEventListener("click",()=>{ea()}),e.addEventListener("click",()=>{ea()})};