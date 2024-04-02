import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footerr() {
  return (
    <MDBFooter style={{ backgroundColor: "black", color: "white" }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den-in' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.co.in/webhp' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/gopianimisetti' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='6' lg='4' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon style={{ fontSize: "40px" }} color='secondary' icon='gem' />
                Care Hospitals
              </h6>
              <p>
                CARE Hospitals Group is a multi-Speciality healthcare provider with 16 healthcare facilities serving 7 cities across 6 states in India. A regional leader in South and Central India and counted among the top 5 pan-Indian hospital chains, CARE Hospitals delivers comprehensive care in over 30 medical specialities. CARE Hospitals is part of the Evercare Group, the leading impact-driven healthcare group in South Asia and Africa.
              </p>
            </MDBCol>

            <MDBCol md='6' lg='4' className='mx-auto mb-4'>
              <h6 id='c3' className='text-uppercase fw-bold mb-4'>Branches</h6>
              <p>
                <a href='#c3' className='text-reset'>
                  Madhapur
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Lb nagar
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vijayawada
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vizag
                </a>
              </p>
            </MDBCol>

            <MDBCol md='6' lg='4' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Actions</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Book a appointment
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Feedback
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Covid package
                </a>
              </p>
            </MDBCol>

            <MDBCol md='6' lg='4' className='mx-auto mb-4'>
              <h6 id='c4' className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Hyderabad, NY 10012, TS
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                carehospitals@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'mediumpurple' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Carehospitals.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footerr;
