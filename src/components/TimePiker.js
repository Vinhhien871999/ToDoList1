import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import '../App.css'
export default function TimePiker() {
    const [value, onChange] = useState(new Date());
    
  return (
    <div>
      <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
    </div>
  )
}
