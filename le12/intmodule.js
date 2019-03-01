 /**
 * Module voor berekenen kgv en ggd van twee getallen.
 * exporteert de functies kgv, ggd en isInteger
 * 
 */
 
 var intmodule = (function(){
 /**
 * @function  ggd
 * @desc      berekent grootste gemene deler van a en b
 * @param     {integer} a  -  geheel getal   						 
 * @param     {integer} b  -  geheel getal
 * @return    {integer}  -  de ggd van a en b
  */
 function ggd(a,b){
   var rest;
   while(b!==0){
     rest = a % b;
     a = b;
     b = rest;
   }
   return a;
 }
 /**
 * @function  kgv
 * @desc      berekent kleinste gemene veelvoud van a en b
 * @param     {integer} a  -  geheel getal
 * @param     {integer} b  -  geheel getal
 * @return    {integer}  -  het kgv van a en b
  */
 function kgv(a,b){
   return (ggd(a,b)!==0) ? (a*b)/ggd(a,b) : 0;
 }
 
 return {
   kgv : kgv,
   ggd : ggd
 };
})(); 
 
