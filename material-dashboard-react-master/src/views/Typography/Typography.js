import React from 'react'

import TextField from "@material-ui/core/TextField";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const styles={

  TextField: {
  
}}

const Typography = () => {
  return (
    <>
     <h3> REGISTER FORM</h3>
    <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name"
                    id="Name"
                    formControlProps={{
                      fullWidth:true
                    }}
                  />
      
       </GridItem>
       </GridContainer>
       <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    type="email"
                    id="Name"
                    formControlProps={{
                      fullWidth:true
                    }}
                  />
       </GridItem>
       </GridContainer>
       <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="Name"
                    formControlProps={{
                      fullWidth:true
                    }}
                  />
       </GridItem>
       </GridContainer>
       <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Contact"
                    id="Name"
                    formControlProps={{
                      fullWidth:true
                    }}
                  />
       </GridItem>
       </GridContainer>

       <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
                <span> DOB </span>
                <TextField
                   id="date"
                    label=""
                    type="date"
                    format="MM/dd/yyyy"
                  defaultValue="1997-01-01"
                  
                    />
       </GridItem>
       </GridContainer>

       <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Location"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                    labelText="Acheivement"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Intrest"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Sports"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
       
         
       
    </>
  )
}

export default Typography
