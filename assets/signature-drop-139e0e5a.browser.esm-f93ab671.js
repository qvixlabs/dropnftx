var g=Object.defineProperty;var f=(c,e,t)=>e in c?g(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var o=(c,e,t)=>(f(c,typeof e!="symbol"?e+"":e,t),t);import{D as m}from"./QueryParams-57e79923.browser.esm-1bed8f71.js";import{N as w,q as W,A as T,r as y,aa as b,s as A,u as S,G as E,t as N,ab as R,B as i,v as U,x as k,y as p,T as M}from"./index-e9dc9249.js";import{C as x}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as I,D as F,a as v}from"./contract-owner-d0899d6f.browser.esm-ce16f7a5.js";import{C as L}from"./contract-platform-fee-bb93a8e4.browser.esm-9f10d6fb.js";import{C as _}from"./contract-roles-246fe733.browser.esm-f70935f6.js";import{C as B}from"./contract-sales-e8c058ab.browser.esm-9152f0f9.js";import{D}from"./drop-claim-conditions-6965683b.browser.esm-60b58f54.js";import{S as O}from"./erc-721-standard-64a89512.browser.esm-bb591b5d.js";import{E as d}from"./erc-721-74018339.browser.esm-f1040976.js";import{P as G}from"./thirdweb-checkout-696b5d4a.browser.esm-400830a1.js";import"./index-7c8c5a15.js";const l=class l extends O{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,C=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,s,n,a);super(C,a,h);o(this,"createBatch",p(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));o(this,"claimTo",p(async(t,r,a)=>this.erc721.claimTo.prepare(t,r,a)));o(this,"claim",p(async(t,r)=>this.erc721.claim.prepare(t,r)));o(this,"burn",p(async t=>this.erc721.burn.prepare(t)));this.abi=T.parse(s||[]),this.metadata=new y(this.contractWrapper,b,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new _(this.contractWrapper,l.contractRoles),this.royalties=new I(this.contractWrapper,this.metadata),this.sales=new B(this.contractWrapper),this.encoder=new S(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new N(this.contractWrapper),this.platformFees=new L(this.contractWrapper),this.interceptor=new x(this.contractWrapper),this.claimConditions=new D(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new F(this.contractWrapper,this.storage,R.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new v(this.contractWrapper),this.checkout=new G(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||m).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+a);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||m).toNumber(),n=i.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),s=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+a));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(n.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[U("transfer"),k])}async getClaimTransaction(t,r,a){return this.erc721.getClaimTransaction(t,r,a)}async prepare(t,r,a){return M.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};o(l,"contractRoles",w);let u=l;export{u as SignatureDrop};
