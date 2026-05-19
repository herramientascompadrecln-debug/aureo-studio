/* ── AUREO · templates/invitationScripts.js ─────────────────────
   Returns the inline <script> content for the generated invitation.
   Isolated here so animation logic never bleeds into the generator.
─────────────────────────────────────────────────────────────── */

function buildInvitationScripts({ d, tgtDate, galSlides, hasAudio, ch }) {
  const targetMs = tgtDate.getTime();

  const audioBlock = hasAudio ? `
let aud=document.getElementById('aud'), pl=false;
const bars=document.querySelectorAll('.eq');
function tgm(){
  if(!aud)return;
  if(pl){aud.pause();bars.forEach(b=>b.classList.add('off'))}
  else  {aud.play().catch(()=>{});bars.forEach(b=>b.classList.remove('off'))}
  pl=!pl;
}` : 'function tgm(){}';

  const floatColors = `'${ch}'`;

  return `
/* ── Scroll reveal ── */
const els=document.querySelectorAll('.sr');
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');obs.unobserve(x.target)}})
},{threshold:.1});
els.forEach(el=>obs.observe(el));

/* ── Progress bar ── */
window.addEventListener('scroll',()=>{
  const p=document.getElementById('prog');
  if(p) p.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
},{passive:true});

/* ── Countdown ── */
const T=new Date(${targetMs});
const pad=n=>String(n).padStart(2,'0');
function tick(){
  const diff=T-new Date();
  const el=id=>document.getElementById(id);
  if(diff<=0){['cdd','cdh','cdm','cds'].forEach(id=>{const e=el(id);if(e)e.textContent='00'});return}
  if(el('cdd'))el('cdd').textContent=pad(Math.floor(diff/86400000));
  if(el('cdh'))el('cdh').textContent=pad(Math.floor((diff%86400000)/3600000));
  if(el('cdm'))el('cdm').textContent=pad(Math.floor((diff%3600000)/60000));
  if(el('cds'))el('cds').textContent=pad(Math.floor((diff%60000)/1000));
}
tick();setInterval(tick,1000);

/* ── Reel gallery dots ── */
const rc=document.getElementById('rcon');
const rd=document.querySelectorAll('.rdot');
if(rc&&rd.length){
  rc.addEventListener('scroll',()=>{
    const i=Math.round(rc.scrollTop/(rc.clientHeight||1));
    rd.forEach((d,j)=>d.classList.toggle('on',j===i));
  },{passive:true});
}

/* ── Hero parallax ── */
window.addEventListener('scroll',()=>{
  const h=document.getElementById('hero');
  if(!h||window.scrollY>h.offsetHeight)return;
  const p=h.querySelector('img');
  if(p) p.style.transform='scale(1.07) translateY('+(window.scrollY*.22)+'px)';
},{passive:true});

/* ── Closing floating particles ── */
const fc=document.getElementById('floats');
const sy=['✦','·','✧','⋆','◦','✩'];
function sf(){
  if(!fc)return;
  const e=document.createElement('div');
  e.className='fe';
  e.textContent=sy[Math.floor(Math.random()*sy.length)];
  e.style.cssText='left:'+Math.random()*100+'%;bottom:-20px;font-size:'
    +(Math.random()*9+8)+'px;color:'+${floatColors}
    +(Math.random()*.35+.08).toFixed(2)+';animation-duration:'
    +(Math.random()*8+8)+'s;animation-delay:'+(Math.random()*2)+'s;';
  fc.appendChild(e);
  setTimeout(()=>e.remove(),20000);
}
const co=new IntersectionObserver(e=>{
  if(e[0].isIntersecting){
    for(let i=0;i<8;i++)setTimeout(sf,i*300);
    const iv=setInterval(sf,700);
    co.disconnect();
    setTimeout(()=>clearInterval(iv),26000);
  }
},{threshold:.2});
const cl=document.getElementById('closing');
if(cl)co.observe(cl);

/* ── Music ── */
${audioBlock}
`;
}
