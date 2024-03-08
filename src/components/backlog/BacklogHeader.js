import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DropdownButton from '../../core-ui-components/DorpdownButton';

const BacklogHeader = ({sidePanelEnabled}) => {

  const onTestViewChange = (value) => {
    console.log(value);
  }

  return (
    <div className='backlog-header'>
        <div className='project-backlog-heading'>
            <p className='backlog-project-name'> Concur Invoice - Team ZULU</p>
            {/* Based on Sprint/Backlog Dynamically take the heading */}
            <h2 className='backlog-heading'>Backlog</h2>
        </div>
        <div className='view-options'>
            <DropdownButton textToDispay='Test View' type=''/>
            <DropdownButton textToDispay='Board' type=''/>
            <DropdownButton textToDispay='Meeting' />
        </div>
    </div>
  )
}

export default BacklogHeader