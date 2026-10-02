const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function money(n){return "₦"+Number(n).toLocaleString("en-NG")}
function badge(s){let c=s.toLowerCase();return `<span class="badge ${c}">${s}</span>`}
function toast(msg,type="success"){let t=document.createElement("div");t.className=`toast ${type}`;t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2800)}
function getUser(){return JSON.parse(localStorage.getItem("reignUser")||"null")}
function logout(){localStorage.removeItem("reignUser");location.href="../index.html"}
function authGuard(){if(!getUser()){location.href="login.html";return false}return true}
function navShell(role="admin",active="Dashboard"){
const admin=role==="admin";
const nav=admin?[
["dashboard.html","Dashboard","01"],["admin.html#registry","User Registry","02"],["admin.html#kyc","KYC Review","03"],["admin.html#payouts","Payout Authorisation","04"],["admin.html#risk","Risk Monitor","05"],["admin.html#audit","Audit Log","06"],["admin.html#reports","Reports","07"],["settings.html","Settings","08"]
]:[
["dashboard.html","Dashboard","01"],["dashboard.html#portfolio","Portfolio","02"],["dashboard.html#transactions","Transactions","03"],["settings.html","Settings","04"]
];
document.getElementById("appMount").innerHTML=`<div class="console"><aside class="console-sidebar" id="side"><div class="side-brand"><a class="brand" href="../index.html"><span class="brand-mark"></span>Reign</a><button id="closeSide">×</button></div><div class="console-badge">${admin?"Operations console":"Member workspace"}</div><nav>${nav.map((n,i)=>`<a class="console-link ${active===n[1]?"active":""}" href="${n[0]}"><i>${n[2]}</i><span>${n[1]}</span>${(n[1]==="KYC Review"||n[1]==="Payout Authorisation")?'<em>5</em>':""}</a>`).join("")}</nav><div class="side-user"><div class="avatar">${(getUser()?.name||"AD").split(" ").map(x=>x[0]).join("").slice(0,2)}</div><div><b>${getUser()?.name||"Administrator"}</b><small>${getUser()?.email||"admin@reign.local"}</small></div><button id="logoutBtn">↪</button></div></aside><main class="console-main"><header class="console-top"><button class="menu-toggle" id="openSide">☰</button><div class="breadcrumb">Console / <b>${active}</b></div><div class="top-user"><span class="env-tag">DEMO ENVIRONMENT</span><span>Administrator</span><small>${new Date().toLocaleDateString("en-NG",{day:"2-digit",month:"short",year:"numeric"})}</small></div></header><div class="console-content" id="pageContent"></div></main></div>`;
$("#logoutBtn").onclick=logout;$("#openSide").onclick=()=>$("#side").classList.add("open");$("#closeSide").onclick=()=>$("#side").classList.remove("open");
}
document.addEventListener("DOMContentLoaded",()=>{
const login=$("#loginForm");
if(login) login.onsubmit=e=>{e.preventDefault();let email=$("#email").value.trim(),pass=$("#password").value;if((email==="admin@reign.local"&&pass==="admin123")||(email==="user@reign.local"&&pass==="user123")){let admin=email.startsWith("admin");localStorage.setItem("reignUser",JSON.stringify({name:admin?"Administrator":"Demo User",email,role:admin?"admin":"user"}));location.href=admin?"admin.html":"dashboard.html"}else toast("Invalid demo credentials","error")};
const reg=$("#registerForm");
if(reg) reg.onsubmit=e=>{e.preventDefault();localStorage.setItem("reignUser",JSON.stringify({name:`${$("#firstName").value} ${$("#lastName").value}`,email:$("#regEmail").value,role:"user"}));toast("Account created. Redirecting…");setTimeout(()=>location.href="dashboard.html",700)};
});
