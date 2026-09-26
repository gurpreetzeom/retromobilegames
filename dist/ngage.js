'use strict';
// Original browser tributes inspired by the N-Gage catalogue, not MMC emulation.
function ngageStart(a){
 if(extra==='snakes3d')snakesStage(a);
 if(extra==='boarding')boardingStage(a);
}
function snakesStage(a){
 a.body=[{x:3,y:1},{x:2,y:1},{x:1,y:1}];a.heading=0;a.pendingTurn=0;a.tick=0;a.energy=90;a.shield=0;a.bonus=1;
 a.path=new Set();for(let x=1;x<=8;x++){a.path.add(x+',1');a.path.add(x+',8');}for(let y=2;y<=7;y++){a.path.add('1,'+y);a.path.add('8,'+y);}a.path.delete('3,1');
 a.walls=[];for(let n=0;n<a.stage-1;n++)a.walls.push({x:3+n%3,y:3+Math.floor(n/3)});
}
function boardingStage(a){
 a.x=96;a.distance=0;a.jump=0;a.jumpV=0;a.inv=1;a.tricks=0;a.gates=0;a.gateTotal=8;a.course=[];
 for(let i=0;i<8;i++){
  const gx=[64,118,80,125,70,111,58,103][(i+a.stage-1)%8];
  a.course.push({kind:'gate',x:gx,z:110+i*115,done:false});
  a.course.push({kind:'tree',x:gx<96?150:40,z:155+i*115,done:false});
  if(i%2===0)a.course.push({kind:'ramp',x:gx,z:75+i*115,done:false});
 }
}
function ngageInput(k,a){
 if(extra==='snakes3d'){
  if(['left','4'].includes(k)&&!a.pendingTurn)a.pendingTurn=-1;
  if(['right','6'].includes(k)&&!a.pendingTurn)a.pendingTurn=1;
  if(k==='7'&&a.bonus){a.bonus--;a.shield=4;}
 }
 if(extra==='boarding'&&['5','ok'].includes(k)){
  if(a.jump===0){a.jumpV=125;a.airTrick=false;beep(400,.04);}else if(!a.airTrick){a.airTrick=true;a.tricks++;a.points+=30;beep(650,.035);}
 }
}
function ngageUpdate(dt,a){
 if(extra==='snakes3d'){
  a.energy-=dt;a.shield=Math.max(0,a.shield-dt);a.tick+=dt;
  if(a.energy<=0){ngageLose(a);return;}
  const rate=(held.has('5')?.09:held.has('8')?.3:.24)-Math.min(.06,(a.stage-1)*.012);
  while(a.tick>=rate&&state==='play'){
   a.tick-=rate;a.heading=(a.heading+a.pendingTurn+4)%4;a.pendingTurn=0;
   const d=[[1,0],[0,1],[-1,0],[0,-1]][a.heading],head={x:a.body[0].x+d[0],y:a.body[0].y+d[1]};
   if(head.x<0||head.x>9||head.y<0||head.y>9||a.walls.some(p=>p.x===head.x&&p.y===head.y)||(!a.shield&&a.body.slice(0,-1).some(p=>p.x===head.x&&p.y===head.y))){ngageLose(a);return;}
   a.body.unshift(head);if(a.path.delete(head.x+','+head.y)){a.points+=10;beep(560,.025);}if(a.body.length>5+Math.floor(a.stage/2))a.body.pop();
   if(!a.path.size){if(a.stage===6){state='win';held.clear();}else{a.stage++;snakesStage(a);}return;}
  }
 }
 if(extra==='boarding'){
  const dir=Number(held.has('6')||held.has('right'))-Number(held.has('4')||held.has('left'));
  a.x=Math.max(25,Math.min(167,a.x+dir*87*dt));a.distance+=dt*(24+a.stage*3);a.inv-=dt;
  if(a.jump>0||a.jumpV>0){a.jumpV-=260*dt;a.jump=Math.max(0,a.jump+a.jumpV*dt);if(a.jump===0)a.jumpV=0;}
  for(const o of a.course){const dz=o.z-a.distance;if(o.done||dz>3)continue;o.done=true;
   if(o.kind==='gate'){if(Math.abs(a.x-o.x)<28){a.gates++;a.points+=50;beep(690,.04);}}
   if(o.kind==='ramp'&&Math.abs(a.x-o.x)<15&&a.jump===0){a.jumpV=150;a.airTrick=false;}
   if(o.kind==='tree'&&Math.abs(a.x-o.x)<12&&a.jump<14&&a.inv<=0){a.lives--;a.inv=2;beep(100,.1);if(!a.lives){state='over';held.clear();}}
  }
  if(state==='play'&&a.distance>1060){if(a.gates<6){state='over';held.clear();}else if(a.stage===3){state='win';held.clear();}else{a.stage++;boardingStage(a);}}
 }
}
function ngageLose(a){a.lives--;held.clear();if(!a.lives)state='over';else snakesStage(a);}
function diamond(x,y,w,h,color){c.fillStyle=color;c.beginPath();c.moveTo(x,y-h);c.lineTo(x+w,y);c.lineTo(x,y+h);c.lineTo(x-w,y);c.closePath();c.fill();}
function ngageDraw(a){
 if(!['snakes3d','boarding'].includes(extra))return;
 c.save();c.translate(0,-(canvas.height-H)/2);
 if(extra==='snakes3d'){
  c.fillStyle='#122335';c.fillRect(0,0,192,224);
  const pt=(x,y)=>({x:96+(x-y)*8,y:47+(x+y)*5});
  for(let y=0;y<10;y++)for(let x=0;x<10;x++){const p=pt(x,y);diamond(p.x,p.y,8,5,a.path.has(x+','+y)?'#49adc8':(x+y)%2?'#304d60':'#3e6071');}
  for(const wall of a.walls){const p=pt(wall.x,wall.y);c.fillStyle='#6e8998';c.fillRect(p.x-5,p.y-11,10,11);diamond(p.x,p.y-11,6,4,'#a5b7b5');}
  [...a.body].reverse().forEach((b,i)=>{const p=pt(b.x,b.y);disc(p.x,p.y-4,4.5,a.shield?'#edce69':i===a.body.length-1?'#ee9e3e':'#93cd78');});
  c.fillStyle='#e7eedf';c.font='bold 11px monospace';c.textAlign='center';c.fillText('SNAKES · TRIBUTE',96,17);c.font='bold 9px monospace';c.fillText('STAGE '+a.stage+' / 6   ♥'+a.lives,96,32);c.fillText('POWER PATH '+a.path.size,96,167);c.fillText('TIME '+Math.ceil(a.energy)+'   '+a.points,96,184);c.font='bold 8px monospace';c.fillText('← / → TURN  5 BOOST',96,205);c.fillText('8 SLOW   7 SHIELD:'+a.bonus,96,219);
 }
 if(extra==='boarding'){
  c.fillStyle='#dcebf2';c.fillRect(0,0,192,224);
  c.fillStyle='#abcbd4';c.beginPath();c.moveTo(0,130);c.lineTo(22,55);c.lineTo(39,83);c.lineTo(62,32);c.lineTo(98,86);c.lineTo(139,43);c.lineTo(192,127);c.fill();
  c.fillStyle='#f5f7ea';c.fillRect(17,80,158,144);
  for(let y=80;y<224;y+=18){c.fillStyle='#c7dee5';c.fillRect(22,y+(a.distance%18),2,8);c.fillRect(168,y+(a.distance%18),2,8);}
  for(const o of a.course){const sy=167-(o.z-a.distance)*.6;if(sy<75||sy>220)continue;
   if(o.kind==='tree'){c.fillStyle='#526755';c.beginPath();c.moveTo(o.x,sy-17);c.lineTo(o.x-10,sy);c.lineTo(o.x+10,sy);c.fill();c.fillStyle='#735f4d';c.fillRect(o.x-2,sy,4,7);}
   if(o.kind==='gate'){c.fillStyle=o.done?'#789c9c':'#ba4b44';c.fillRect(o.x-28,sy-14,2,19);c.fillRect(o.x+27,sy-14,2,19);c.fillRect(o.x-28,sy-14,14,6);c.fillRect(o.x+15,sy-14,14,6);}
   if(o.kind==='ramp'){c.fillStyle='#6aadb7';c.beginPath();c.moveTo(o.x-12,sy);c.lineTo(o.x+12,sy);c.lineTo(o.x+12,sy-10);c.fill();}
  }
  disc(a.x,171,6,'#a7c0c7');if(a.inv<=0||Math.floor(a.inv*10)%2===0){const y=164-a.jump;c.fillStyle='#724336';c.fillRect(a.x-9,y+6,18,3);disc(a.x,y-6,4,'#344f6b');c.fillStyle='#cb6645';c.fillRect(a.x-4,y-2,8,9);}
  text('FLO-BOARDING · TRIBUTE',96,16,9,'center');text('RUN '+a.stage+' / 3  ♥'+a.lives,96,31,9,'center');text('GATES '+a.gates+'/8  '+a.points,96,47,9,'center');text('6 GATES TO QUALIFY',96,209,8,'center');text('5 JUMP / TRICK',96,222,8,'center');
 }
 c.restore();
}
