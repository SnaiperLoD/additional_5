module.exports = function check(str, bracketsConfig) {
  let initial=str;
  const size=bracketsConfig.length;
  
  for(let n=initial.length; n>=0; n--) 
  {
    for(let k=0; k<size; k++)
    {
      if(initial[n]==bracketsConfig[k][0])
      {
        initial=initial.replace(bracketsConfig[k].join(''), '');
      }
    }
  }

  return (initial === "");
}
