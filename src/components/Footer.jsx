import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="text-center text-lg-left" id="footer">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p className="par-footer">
              Central Library 123 <br />
              Main Street Anytown, USA 12345
              <br />
              library@email.com <br />
              555-555-5555
            </p>
            <a href="#" className="on-the-top">
              Back on the top!
            </a>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Today's Quote</h5>

            <p className="par-footer" id="quote-par">
              "Reading is the key that opens doors to many good things in life.
              Reading shaped my dreams, and more reading helped me make my
              dreams come true. Reading has made me smarter, happier, and helped
              me discover the world around me. Reading is the magic potion that
              will change your life and make you more confident, optimistic, and
              a successful person. The more you read, the more things you will
              know. The more that you learn, the more places you'll go."
              <br />- Dr. Seuss
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright: Jelena Stevanović
      </div>
    </MDBFooter>
  );
}

export default Footer;
