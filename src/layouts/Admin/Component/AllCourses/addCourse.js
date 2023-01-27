import { InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAddCourseMutation } from 'Redux/Features/Course/courseApi'
import { getCookie } from 'Utlis/cookie'

export const AddCourse = () => {
  let token=getCookie('atoken');
  const [course,setCourse]=useState();
    const [formData,setFormData]=useState({
      name:'',
      type:'Free',
      total_modules:'',
      url_slug:[],
      author:'',
      duration:'',
      description:'',
    })
    // const [addCourse,data]=useAddCourseMutation();
    const handleChange=(e)=>{
      // console.log(e.target.value)
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    // console.log(formData)
    const handleSubmit=async()=>{
      // let data={body:formData,token:token}
        // await addCourse(data)
        axios({
          method: 'post',
          url: 'http://20.235.242.77:3306/api/course/free/',
          headers: {
            authorization: `Bearer ${token}`,
        },
          data: formData
      })
        // console.log(data)
  //     
    }
    useEffect(() => {
        (async () => {
          axios({
            // method: 'post',
            url: 'http://20.235.242.77:3306/api/course/free/',
          //   headers: {
          //     authorization: `Bearer ${token}`,
          // },
          //   data: formData
        }).then(function (response) {
          console.log(response);
      })
      
          // console.log(data)
        })();
      }, [token]);
  return (
    <>
       <MDBox style={{backgroundColor:"white"}} mx={35} pt={4} pb={3} px={3} width={600} >
            <MDTypography variant="h4" fontWeight="medium" mx={22}  mb={4}>
                  Add New Course
                </MDTypography>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="name" type="text" label="Course Name" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select sx={{ mt:2, height:50, minWidth: 200 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.type}
                    label="type"
                    name='type'
                    onChange={(e)=>handleChange(e)}
                  >
                    <MenuItem value={"Free"}>Free</MenuItem>
                    <MenuItem value={"Paid"}>Paid</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>

                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="total_modules" type="text" label="Total Module" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="author" type="text" label="Author" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="duration" type="text" label="Duration" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="description" type="text" label="Description" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="url_slug" type="text" label="url" fullWidth />
                  </MDBox>
                  {/* <MDBox mb={2}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder=" Description"
                      style={{ width: 200 ,backgroundColor:'white'}}
                    /> 
                  </MDBox>*/}
                  {/*<MDBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MDTypography>
                  </MDBox> */}
                  <MDBox mt={4} mb={1}>
                    <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                     Add Course
                    </MDButton>
                  </MDBox> 
                  </MDBox>
                  </MDBox>
    </>
  )
}
