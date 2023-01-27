import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Button onClick={handleOpen}>Add Module</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                <MDBox mb={2}>
                    <MDInput name="name" type="text" label="Video Name" fullWidth />
                  </MDBox>
                 {/* onChange={(e)=>handleChange(e)} 
onChange={(e)=>handleChange(e)}  */}
                 
                  
                  <div className="App">
                   
                    {Array.from(Array(counter)).map((c, index) => {
                        return <>
                         <MDBox mb={2}>
                    <MDInput name="total_modules" type="text" label="Video Links" fullWidth />
                  </MDBox></>
                    })}
                    </div>
                    <Button onClick={handleClick}>Add </Button>
                    <Button onClick={()=>setCounter(counter - 1)}>delete</Button>
                    <Button onClick={handleClick}>Save </Button>

          
        </Box>
      </Modal>
    </div>
  );
}