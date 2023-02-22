import { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const SamplePage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`https://dev-backend-springboot.as.r.appspot.com/api/v1/hello/${name}`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
        ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
        qui officiate descent molls anim id est labours.
      </Typography>
      <TextField label="Name" value={name} onChange={handleNameChange} />
      <Button variant="contained" onClick={handleButtonClick}>
        Submit
      </Button>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        Response: {message}
      </Typography>
    </MainCard>
  );
};

export default SamplePage;
