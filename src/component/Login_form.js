import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from "axios"
import { BASE_URL } from '../comon.service';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message,setMessage] =useState("")
  const HandleLogin = () => {
    var obj = { email: email, mot_de_passe: password }
    axios.post(`${BASE_URL}users/login`,obj).then((res)=>{setMessage(res.data.message)}).catch((error)=>{console.log(error)})
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">connexion</p>



                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='email' value={email} type='email' className='w-100' onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='mot de passe' value={password} type='password' className='w-100' onChange={(e) => { setPassword(e.target.value) }} />
                </div>


                <div className='mb-4 d-flex align-items-center'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label={`J'ai lu et j'accepte`} />
                  <a href='/register' className='ms-2'>les termes</a>
                </div>

                {message}
                <MDBBtn className='mb-4' size='lg' onClick={HandleLogin}> s'inscrire</MDBBtn>
                <p className="text-center mb-4">Vous n'avez pas de compte? <a href='/register'>Inscrivez-vous</a></p>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </div>);
}

export default Login;
