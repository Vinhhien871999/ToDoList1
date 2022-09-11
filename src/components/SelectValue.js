import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'high', label: 'high' },
  { value: 'mid', label: 'mid' },
  { value: 'low', label: 'low' }
]
export default function SelectValue() {
  return (
    <div className='App' style={{width:'166px',marginLeft:'42px'}}>
      <Select options={options} style={{marginBottom:'30px',marginLeft:'103px'}}/>
    </div>
    
  );
}
