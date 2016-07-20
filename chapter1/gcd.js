/**
 * Created by Administrator on 2016/7/20.
 */
"use strict";
/*es5*/
function gcd(p,q) {
   return q==0? q:gcd(q,p%q);
}
/*es6*/
let gcd2=((p,q)=>q==0? q:gcd2(q,p%q));