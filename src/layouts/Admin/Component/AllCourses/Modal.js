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
  const [name, setSetName] = React.useState()
  const [formData, setFormData] = React.useState()
  const handleChange = (e) => {
    if (e.target.name === 'name') {
      // setFormData({...formData,name:e.target.value})
    }
    else if (e.target.name === 'links') {
      let links = [];


    }
  }
  //input field
  const handleClick = () => {
    setCounter(counter + 1);
  }

  const handleDelete = () => {
    if (counter > 0) setCounter(counter - 1);
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
          Resource
          <MDBox mb={2}>
            <MDInput onClick={(e) => handleChange(e)} name="name" type="text" label="Video Name" fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDInput name="links" type="text" label="Video Links" fullWidth />
          </MDBox>
          {/* onChange={(e)=>handleChange(e)} 
onChange={(e)=>handleChange(e)}  */}


          <div className="App">
          
            {Array.from(Array(counter)).map((c, index) => {
              return <>
               Resource
                <MDBox mb={2}>
                  <MDInput name="name" type="text" label="Video Name" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput name="links" type="text" label="Video Links" fullWidth />
                </MDBox>
              </>
            })}
          </div>
          <Button onClick={handleClick}>Add </Button>
          <Button onClick={handleDelete}>delete</Button>
          <br />
          <Button onClick={handleClick}>Save </Button>


        </Box>
      </Modal>
    </div>
  );
}