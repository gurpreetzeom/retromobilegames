'use strict';
// Newly authored levels and artwork; these are playable tributes, not ROM ports.
const bounceLevels = [
  {name:'FIRST STEPS',width:410,platforms:[[90,94,42],[184,81,48],[283,93,42]],spikes:[[151,14]],rings:[[55,96],[109,79],[205,66],[302,78],[375,96]]},
  {name:'STEPPING STONES',width:460,platforms:[[74,94,38],[136,76,38],[203,58,42],[274,78,40],[341,94,40]],spikes:[[119,13],[321,12]],rings:[[90,79],[152,61],[222,43],[293,63],[360,79]]},
  {name:'LOW ROAD',width:500,platforms:[[102,87,55],[228,77,54],[354,87,52]],spikes:[[175,22],[310,20]],rings:[[62,96],[120,72],[247,62],[374,72],[466,96]]},
  {name:'DOUBLE HOP',width:540,platforms:[[75,93,40],[148,75,42],[222,57,42],[298,75,42],[375,93,42]],spikes:[[126,15],[275,16],[444,20]],rings:[[93,78],[168,60],[243,42],[318,60],[395,78],[501,96]]},
  {name:'THE CROSSING',width:560,platforms:[[96,91,44],[194,86,46],[298,81,46],[402,86,46]],spikes:[[149,24],[253,24],[357,24]],rings:[[50,96],[117,76],[216,71],[320,66],[424,71],[522,96]]},
  {name:'HIGH TRAIL',width:590,platforms:[[80,95,40],[145,78,40],[212,61,45],[286,61,45],[361,78,40],[430,95,42]],spikes:[[183,15],[338,15],[493,18]],rings:[[98,80],[164,63],[234,46],[309,46],[381,63],[451,80],[553,96]]},
  {name:'SAW VALLEY',width:600,platforms:[[112,88,54],[246,82,54],[380,88,54]],spikes:[[192,22],[326,22],[463,20]],rings:[[67,96],[136,73],[270,67],[404,73],[557,96]],saws:[[208,95,16],[343,92,16]]},
  {name:'RIDGELINE',width:640,platforms:[[80,94,40],[145,76,42],[212,58,46],[298,58,46],[382,76,42],[450,94,44]],spikes:[[123,12],[357,14],[519,22]],rings:[[99,79],[165,61],[234,43],[320,43],[403,61],[472,79],[597,96]],saws:[[556,87,12]]},
  {name:'RING RUN',width:690,platforms:[[92,90,48],[201,84,48],[310,78,48],[419,84,48],[528,90,48]],spikes:[[156,20],[265,20],[374,20],[483,20]],rings:[[54,96],[114,75],[223,69],[332,63],[441,69],[550,75],[651,96]],saws:[[603,91,12]]},
  {name:'FINAL ASCENT',width:730,platforms:[[78,94,42],[147,76,42],[218,58,48],[305,58,48],[394,76,44],[468,94,44],[579,87,48]],spikes:[[123,12],[281,12],[370,12],[537,21],[650,15]],rings:[[97,79],[166,61],[240,43],[327,43],[414,61],[489,79],[603,72],[699,96]],saws:[[550,91,10]]},
  {name:'HOME STRETCH',width:790,platforms:[[95,92,48],[204,84,48],[313,76,48],[422,68,48],[531,80,48],[640,92,48]],spikes:[[160,20],[269,20],[378,20],[487,20],[596,20]],rings:[[52,96],[117,77],[226,69],[335,61],[444,53],[553,65],[662,77],[751,96]],saws:[[185,92,10],[510,92,10]]}
];
function classicStart(a){
  if(extra==='bounce')loadBounce(a);
  if(extra==='triple'){a.angle=0;a.heap=[];a.incoming=null;a.cool=1;a.popped=0;a.bonus=0;a.serial=0;}
}
function loadBounce(a){
  const l=bounceLevels[a.stage-1];a.level=l;a.rings=l.rings.map(([x,y])=>({x,y,taken:false}));a.checkpoint=22;a.checkpointActive=false;a.inv=0;bounceRespawn(a);
}
function bounceRespawn(a){a.x=a.checkpoint;a.y=105;a.vx=0;a.vy=0;a.grounded=true;a.camera=0;a.inv=1.2;held.clear();}
function bounceHit(a){if(a.inv>0)return;a.lives--;beep(100,.1);if(a.lives<=0){state='over';held.clear();}else bounceRespawn(a);}
function classicInput(k,a){
  if(extra==='bounce'&&['2','up','5','ok'].includes(k)&&a.grounded){a.vy=-142;a.grounded=false;beep(420,.035);}
  if(extra==='triple'&&['5','ok'].includes(k)&&a.bonus>=1){
    const before=a.heap.length;a.heap=a.heap.filter(b=>Math.hypot(b.x,b.y)<20);a.points+=(before-a.heap.length)*5;a.bonus--;beep(820,.08);
  }
}
function classicUpdate(dt,a){
  // Small substeps avoid tunnelling through platforms on a slow mobile frame.
  const steps=Math.max(1,Math.ceil(dt/.008)),h=dt/steps;
  for(let s=0;s<steps&&state==='play';s++){
    if(extra==='bounce')bounceStep(h,a);else if(extra==='triple')tripleStep(h,a);
  }
}
function bounceStep(dt,a){
  const l=a.level;a.inv-=dt;
  const dir=Number(held.has('6')||held.has('right'))-Number(held.has('4')||held.has('left'));
  a.vx=dir*65;const oldY=a.y;a.x=Math.max(6,Math.min(l.width-6,a.x+a.vx*dt));a.vy+=300*dt;a.y+=a.vy*dt;a.grounded=false;
  for(const [x,y,w] of [[0,112,l.width],...l.platforms]){
    if(a.vy>=0&&oldY+6<=y+.1&&a.y+6>=y&&a.x+5>x&&a.x-5<x+w){a.y=y-6;a.vy=0;a.grounded=true;}
  }
  for(const [x,w] of l.spikes)if(a.x+4>x&&a.x-4<x+w&&a.y+5>105){bounceHit(a);return;}
  for(const [x,y,r] of l.saws||[])if(Math.hypot(a.x-(x+Math.sin(a.t*2)*r),a.y-y)<10){bounceHit(a);return;}
  for(const r of a.rings)if(!r.taken&&Math.hypot(a.x-r.x,a.y-r.y)<12){r.taken=true;a.points+=25;beep(680,.04);}
  if(!a.checkpointActive&&a.x>l.width/2&&a.grounded&&a.y>100&&!l.spikes.some(([x,w])=>Math.abs(a.x-(x+w/2))<w/2+16)){
    a.checkpoint=a.x;a.checkpointActive=true;
  }
  a.camera=Math.max(0,Math.min(l.width-W,a.x-65));
  if(a.x>l.width-21&&a.rings.every(r=>r.taken)){
    a.points+=100;if(a.stage===bounceLevels.length){state='win';held.clear();}else{a.stage++;loadBounce(a);}
  }
}
const popColors=['#c73343','#268456','#d4a518','#327dbd'];
function tripleAttach(a,b){
  // Convert the contact point to the heap's local (rotating) coordinates.
  const co=Math.cos(a.angle),si=Math.sin(a.angle),n={x:b.x*co+b.y*si,y:-b.x*si+b.y*co,color:b.color};a.heap.push(n);
  const group=new Set([n]),queue=[n];
  while(queue.length){const p=queue.pop();for(const q of a.heap)if(!group.has(q)&&q.color===n.color&&Math.hypot(p.x-q.x,p.y-q.y)<11.5){group.add(q);queue.push(q);}}
  if(group.size>=3){a.heap=a.heap.filter(p=>!group.has(p));a.points+=group.size*5;a.popped+=group.size;if(group.size>=4)a.bonus=Math.min(3,a.bonus+1);beep(760,.07);}
  a.stage=1+Math.floor(a.popped/18);
  if(a.heap.some(p=>Math.hypot(p.x,p.y)+5>=43)){state='over';held.clear();}
}
function tripleStep(dt,a){
  a.angle+=dt*2*(Number(held.has('6')||held.has('right'))-Number(held.has('4')||held.has('left')));
  if(!a.incoming&&a.cool<=0){const side=a.serial++%2?1:-1;a.incoming={x:side*94,y:0,color:Math.floor(Math.random()*4)};a.cool=1.1;}
  if(!a.incoming)return;
  const b=a.incoming;b.x-=Math.sign(b.x)*Math.min(Math.abs(b.x),dt*(23+Math.min(26,a.stage*3)));
  const co=Math.cos(a.angle),si=Math.sin(a.angle);
  const hit=Math.hypot(b.x,b.y)<=11||a.heap.some(p=>Math.hypot(b.x-(p.x*co-p.y*si),b.y-(p.x*si+p.y*co))<=10);
  if(hit){tripleAttach(a,b);a.incoming=null;a.cool=.65;}
}
function disc(x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();}
function classicDraw(a){
  if(extra==='bounce'){
    c.fillStyle='#e6f0dc';c.fillRect(0,17,W,111);
    const x=v=>Math.round(v-a.camera);
    c.fillStyle='#748f71';c.fillRect(0,112,W,16);c.fillStyle='#b7cc94';c.fillRect(0,112,W,3);
    for(const [px,py,w] of a.level.platforms){c.fillStyle='#6e8889';c.fillRect(x(px),py,w,6);c.fillStyle='#b5c8bd';c.fillRect(x(px),py,w,2);}
    for(const [sx,w] of a.level.spikes){c.fillStyle='#46576b';for(let p=0;p<w;p+=5){c.beginPath();c.moveTo(x(sx+p),112);c.lineTo(x(sx+p+2.5),103);c.lineTo(x(sx+p+5),112);c.fill();}}
    for(const [sx,sy,r] of a.level.saws||[]){disc(x(sx+Math.sin(a.t*2)*r),sy,5,'#516071');disc(x(sx+Math.sin(a.t*2)*r),sy,2,'#dce8ef');}
    for(const r of a.rings)if(!r.taken){c.strokeStyle='#c99218';c.lineWidth=2;c.beginPath();c.ellipse(x(r.x),r.y,4,8,0,0,Math.PI*2);c.stroke();c.lineWidth=1;}
    const open=a.rings.every(r=>r.taken);c.fillStyle=open?'#419867':'#687c7b';c.fillRect(x(a.level.width-20),88,12,24);c.fillStyle='#cde8cc';c.fillRect(x(a.level.width-16),98,3,3);
    if(a.checkpointActive){line(x(a.checkpoint),96,x(a.checkpoint),111);c.fillStyle='#488b9d';c.fillRect(x(a.checkpoint),96,7,4);}
    if(a.inv<=0||Math.floor(a.inv*12)%2===0){disc(x(a.x),a.y,6,'#c63b3e');disc(x(a.x)-2,a.y-2,2,'#f6a599');}
    text('L'+a.stage+'  RINGS '+a.rings.filter(r=>r.taken).length+'/'+a.rings.length+'  ♥'+a.lives,96,25,8,'center');
    text(a.level.name,96,124,7,'center');
  }
  if(extra==='triple'){
    text('SCORE '+a.points+'  SPEED '+a.stage,96,24,8,'center');
    c.strokeStyle='#99b1bc';c.beginPath();c.arc(96,72,43,0,Math.PI*2);c.stroke();disc(96,72,6,'#263946');
    const co=Math.cos(a.angle),si=Math.sin(a.angle);
    const ball=(x,y,color)=>{disc(x,y,5,popColors[color]);disc(x-1,y-2,1.5,'#f4eee0');};
    for(const p of a.heap)ball(96+p.x*co-p.y*si,72+p.x*si+p.y*co,p.color);
    if(a.incoming)ball(96+a.incoming.x,72+a.incoming.y,a.incoming.color);
    text('4 / 6 ROTATE   5 BONUS:'+a.bonus,96,125,7,'center');
  }
}
