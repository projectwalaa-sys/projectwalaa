const projects=[
 {title:"AI Based Disease Prediction System",tags:["Python","Machine Learning"],course:"B.Tech / MCA",icon:"🧠"},
 {title:"E-Commerce Website",tags:["Java","Spring Boot"],course:"B.Tech / MCA",icon:"🛒"},
 {title:"Student Management System",tags:["PHP","MySQL"],course:"BCA / MCA",icon:"🎓"},
 {title:"IoT Based Smart Agriculture System",tags:["IoT","Arduino"],course:"B.Tech / M.Tech",icon:"🌱"},
 {title:"Employee Management System (HRMS)",tags:["ServiceNow","ITSM","HRSD"],course:"M.Tech / MBA",icon:"👥"}
];
function renderProjects(list=projects){
 const grid=document.getElementById("projectGrid");
 grid.innerHTML=list.map(p=>`<article class="project"><div class="project-image">${p.icon}</div><div class="project-body"><h3>${p.title}</h3>${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}<div class="meta">👤 ${p.course}</div></div></article>`).join("");
}
function searchProjects(){
 const q=document.getElementById("searchInput").value.trim().toLowerCase();
 if(!q){renderProjects();return}
 const filtered=projects.filter(p=>(p.title+" "+p.tags.join(" ")+" "+p.course).toLowerCase().includes(q));
 renderProjects(filtered);
 document.getElementById("projects").scrollIntoView({behavior:"smooth"});
}
function subscribe(e){e.preventDefault();alert("Thank you! Subscription feature will be connected to your email service when the backend is added.");e.target.reset();}
renderProjects();