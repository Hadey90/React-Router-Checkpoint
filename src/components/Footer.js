import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css";

function footer() {
  return (
    <>
      <Navbar className="bg-dark mt-4 ">
        <Container>
          <div className="mx-auto">
            <h6 className=" text-white fw-bold ">All Right Researved </h6>
            <h6 className=" text-white fw-bold">www.noRED.com </h6>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default footer;
