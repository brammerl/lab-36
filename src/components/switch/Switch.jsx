import React from 'react';

import Switch from '@material-ui/core/Switch';
import { useTheme, useDispatch } from '../../hooks/appContext'
const SwitchComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_THEME'})
  }
  return (
    <div>
      <Switch
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

export default SwitchComponent;