import React from 'react';
import styled from 'styled-components'

import { sets, slots } from './constants'
import { Stats } from './types'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type ToolbarProps = {
    set: number,
    handleSelectSet: (event: any) => void,
    slot: number,
    handleSelectSlot: (event: any) => void,
    json: object,
    handleUploadJson: (event: any) => void,
    stat: Stats | null,
    setStat: (event: any) => void
}

const Wrapper = styled.div`
    display: flex;
    * {
        margin-right: 15px;
    }
`

/*
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
*/

function Toolbar({
    set,
    handleSelectSet,
    slot,
    handleSelectSlot,
    json,
    handleUploadJson,
    stat,
    setStat,
}: ToolbarProps) {
  return (
    <Wrapper>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Set</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={set}
            label="Set"
            onChange={handleSelectSet}
          >
            {Object.entries(sets).map(([key, value]) => (
              <MenuItem value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Slot</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={slot}
            label="Slot"
            onChange={handleSelectSlot}
          >
            {Object.entries(slots).map(([key, value]) => (
              <MenuItem value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Grind Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stat || ''}
            label="Grind Type"
            onChange={setStat}
          >
            {Object.entries(Stats).filter(([key, value]) => isNaN(Number(key))).slice(0,7).map(([key, value]) => (
              <MenuItem value={value}>{key}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <input type="file" accept=".json" onChange={handleUploadJson}/>
    </Wrapper>
  );
}

export default Toolbar;
