import React from 'react';
import "./Select.scss"
const Select = ({characters,setUniqueInfo,error}) => {

  const searchCharacter = (char)=>{
    let findCharacter = characters.find(el=> el.name === char)
    setUniqueInfo(findCharacter)
  }

  let oneElement = characters.length === 1
  
  return (
      <div className='select'>
      <select className='select-field' name="characters" onChange={(e)=>searchCharacter(e.target.value)} disabled={error || oneElement ? true : false}>
          { !oneElement && <option value="none">---</option>}
          {characters.map((el,i)=>{
              return(
              <option key={i} value={el.name}>{el.name}</option>
              )
          })}
      </select>
      </div>
  );
};

export default Select;
