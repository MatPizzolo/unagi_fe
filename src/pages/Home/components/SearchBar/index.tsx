import React, {useState, ChangeEvent} from 'react'
import {styled} from "@mui/material/styles";
import { Box, TextField, Typography } from '@mui/material';


const SearchBarTextField = () => {
    const [searchValue, setSearchValue] = useState<string>();

    const SearchBarTextField = styled(TextField)({
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    })

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchValue(event.target.value)
    }

    return (
    <SearchBarTextField placeholder='Que resto andas buscando?' variant="outlined" value={searchValue} onChange={handleSearchInput} sx={{backgroundColor: "#DAAD86"}}/>
  )
}

export default SearchBarTextField