const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');const noop=()=>{},ctx=new Proxy({},{get:()=>noop,set:()=>true});const classes=new Set(['choosing']);const el=()=>({hidden:false,dataset:{},classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x)},setAttribute:noop,removeAttribute:noop,addEventListener:noop,append:noop,focus:noop,click(){this.onclick?.()}});const nodes={};const document={body:el(),createElement:el,querySelector:s=>nodes[s]??=(s==='#lcd'?{...el(),getContext:()=>ctx}:el()),querySelectorAll:()=>[],addEventListener:noop};const box={document,window:{addEventListener:noop},localStorage:{getItem:()=>0,setItem:noop},requestAnimationFrame:noop,setTimeout:()=>1,clearTimeout:noop,Math,Set,Map};vm.createContext(box);vm.runInContext(fs.readFileSync('dist/game.js','utf8')+fs.readFileSync('dist/classics.js','utf8')+fs.readFileSync('dist/phones.js','utf8')+';sound=false',box);const run=s=>vm.runInContext(s,box);
run(`selectPhone('7210');extra='bounce';sound=false;`);
for(let levelNo=1;levelNo<=11;levelNo++){
run(`startExtra();extraState.stage=${levelNo};loadBounce(extraState);extraState.inv=0`);
const code=`
(function(){
const clone=a=>JSON.parse(JSON.stringify(a));let initial=clone(extraState);const targets=[...initial.rings.map(r=>r.x),initial.level.width-8];
for(let target=0;target<targets.length;target++){
 let beam=[initial],found=null;const seen=new Set();
 for(let step=0;step<180&&!found;step++){
  const next=[];
  for(const p of beam)for(const dir of [-1,0,1])for(const jump of [false,true]){
   extraState=clone(p);state='play';held.clear();if(dir)held.add(dir<0?'left':'right');if(jump)classicInput('2',extraState);
   extraState.t+=.06;classicUpdate(.06,extraState);const q=extraState;
   if(q.lives<3||state==='over')continue;
   if(target===targets.length-1?(q.stage!==initial.stage||state==='win'):q.rings[target].taken){found=clone(q);break;}
   const key=[Math.round(q.x/3),Math.round(q.y/3),Math.round(q.vy/15),q.grounded].join(',');if(seen.has(key))continue;seen.add(key);
   const ty=target<initial.rings.length?initial.rings[target].y:106;
   next.push({q:clone(q),rank:Math.abs(q.x-targets[target])+Math.abs(q.y-ty)*.7});
  }
  beam=next.sort((a,b)=>a.rank-b.rank).slice(0,80).map(n=>n.q);
 }
 if(!found)return {passed:false,target,x:initial.x};initial=found;
}
return {passed:true};
})()`;
const result=run(code);console.log('Bounce route',levelNo,result);if(!result.passed)process.exitCode=1;
}
