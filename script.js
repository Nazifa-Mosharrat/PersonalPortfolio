const tabs=document.querySelectorAll('.tab');
const panels=document.querySelectorAll('.panel');
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');

function showTab(id){
  panels.forEach(p=>p.classList.toggle('active',p.id===id));
  tabs.forEach(t=>t.classList.toggle('active',t.dataset.tab===id));
  history.replaceState(null,'','#'+id);
  window.scrollTo({top:0,behavior:'smooth'});
  nav.classList.remove('open');
}
tabs.forEach(t=>t.addEventListener('click',()=>showTab(t.dataset.tab)));
menu.addEventListener('click',()=>nav.classList.toggle('open'));
const initial=location.hash.slice(1);
if(initial && document.getElementById(initial)) showTab(initial);

// Typing headline
const typedRole = document.getElementById('typedRole');
const roles = ['AI Researcher', 'Full Stack Engineer', 'RAG Developer', 'AI Systems Builder'];
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole(){
  if(!typedRole) return;
  const current = roles[roleIndex];
  typedRole.textContent = current.slice(0, charIndex);
  if(!deleting && charIndex < current.length){charIndex++;setTimeout(typeRole,85);}
  else if(!deleting){deleting=true;setTimeout(typeRole,1200);}
  else if(charIndex>0){charIndex--;setTimeout(typeRole,42);}
  else{deleting=false;roleIndex=(roleIndex+1)%roles.length;setTimeout(typeRole,250);}
}
typeRole();

// Small personal typing loop in the profile panel.
const sideTyping = document.getElementById('sideTyping');
const sidePhrases = [
  'Full stack engineering meets practical AI research.',
  'Turning research ideas into useful systems.',
  'Open to selected freelance projects.'
];
let sideIndex=0, sideChar=0, sideDeleting=false;
function typeSide(){
  if(!sideTyping) return;
  const phrase=sidePhrases[sideIndex];
  sideTyping.textContent=phrase.slice(0,sideChar);
  if(!sideDeleting && sideChar<phrase.length){sideChar++;setTimeout(typeSide,30);}
  else if(!sideDeleting){sideDeleting=true;setTimeout(typeSide,1500);}
  else if(sideChar>0){sideChar--;setTimeout(typeSide,18);}
  else{sideDeleting=false;sideIndex=(sideIndex+1)%sidePhrases.length;setTimeout(typeSide,300);}
}
typeSide();

// Subtle cursor light.
document.addEventListener('pointermove', e=>{
  document.documentElement.style.setProperty('--mx', e.clientX+'px');
  document.documentElement.style.setProperty('--my', e.clientY+'px');
});
