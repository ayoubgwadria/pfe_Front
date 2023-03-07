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
function Register() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [telephone, setTelephone] = useState("")
  const [emplacement, setEmplacement] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [domaine, setDomaine] = useState("")
  const [message, setMessage] = useState("")
  const HandleRegister = () => {
    var obj = { nom: nom, prenom: prenom, email: email, mot_de_passe: password, telephone: telephone, emplacement: emplacement, latitude: latitude, longitude: longitude, domaine: domaine }
    axios.post(`${BASE_URL}users/register`, obj).then((res) => { setMessage(res.data.message) }).catch((error) => { setMessage(error.response.data.message) })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Inscription</p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Nom' value={nom} type='text' className='w-50' onChange={(e) => { setNom(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Prenom' value={prenom} type='text' className='w-50' onChange={(e) => { setPrenom(e.target.value) }} />
                </div>



                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='email' value={email} type='email' className='w-100' onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='mot de passe' value={password} type='password' className='w-100' onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Telephone' value={telephone} type='text' className='w-50' onChange={(e) => { setTelephone(e.target.value) }} />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Emplacement' value={emplacement} type='text' className='w-50' onChange={(e) => { setEmplacement(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Latitude' value={latitude} type='text' className='w-50' onChange={(e) => { setLatitude(e.target.value) }} />
                  <MDBInput label='Longitude' value={longitude} type='text' className='w-50' onChange={(e) => { setLongitude(e.target.value) }} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='domaine' value={domaine} type='text' className='w-100' onChange={(e) => { setDomaine(e.target.value) }} />
                </div>

                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="J'ai lu et j'accepte les termes" />
                </div>


                <MDBBtn className='mb-4' size='lg' onClick={HandleRegister}> s'inscrire</MDBBtn>
                {message}
                <p className="text-center mb-4">Vous avez déjà un compte ?<a href='/'>Connectez-vous</a></p>

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

export default Register;
