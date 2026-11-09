/* COSTIN public catalogue. Publishable key only; RLS protects draft and private records. */
(async function(){
 const root=document.getElementById('costin-live-catalogue');
 if(!root)return;
 const endpoint='https://uhsntcdasnosvfmhxamf.supabase.co/rest/v1/';
 const headers={'apikey':'sb_publishable_RlGRkDNESHE1YHGZEv10OQ_nrqhPhNy','Accept':'application/json'};
 try{
  const [pr,lr]=await Promise.all([
   fetch(endpoint+'products?select=id,sku,name,description,price,currency&status=eq.published&order=created_at.desc',{headers}),
   fetch(endpoint+'listings?select=product_id,platform,listing_url,status&status=eq.published',{headers})
  ]);
  if(!pr.ok||!lr.ok)throw new Error('Catalogue unavailable');
  const products=await pr.json(),listings=await lr.json();
  if(!Array.isArray(products)||!products.length)return;
  const heading=document.createElement('h2');heading.textContent='Digital Products';root.appendChild(heading);
  for(const p of products){
   const card=document.createElement('article');card.className='costin-products';
   const content=document.createElement('div');
   const tag=document.createElement('span');tag.className='costin-kicker';tag.textContent='COSTIN DIGITAL DOWNLOAD';content.appendChild(tag);
   const title=document.createElement('h3');title.textContent=p.name;content.appendChild(title);
   const description=document.createElement('p');description.textContent=p.description||'';content.appendChild(description);
   const price=document.createElement('strong');price.textContent=new Intl.NumberFormat('en-IN',{style:'currency',currency:p.currency||'INR',maximumFractionDigits:0}).format(Number(p.price));content.appendChild(price);
   const listing=listings.find(l=>l.product_id===p.id&&l.platform==='gumroad'&&l.status==='published');
   if(listing&&listing.listing_url){try{const u=new URL(listing.listing_url);if(u.protocol==='https:'&&u.hostname.endsWith('.gumroad.com')){const wrap=document.createElement('p');const a=document.createElement('a');a.className='costin-button';a.textContent='View product';a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';wrap.appendChild(a);content.appendChild(wrap)}}catch(e){}}
   card.appendChild(content);root.appendChild(card);
  }
 }catch(err){console.warn('COSTIN catalogue is temporarily unavailable');}
})();
