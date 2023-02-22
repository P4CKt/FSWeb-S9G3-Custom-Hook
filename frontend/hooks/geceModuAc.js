import React, { useState } from 'react';
import localStorageKullan from "./localStorageKullan";

export default function useGeceModu (key,baslangicDegeri)  {


 const [trueOr,setTrueOr]=localStorageKullan(key,baslangicDegeri);

 const isTrue= ()=>{
trueOr===false? setTrueOr(true): setTrueOr(false)
 }

  return [trueOr,setTrueOr,isTrue];


};
