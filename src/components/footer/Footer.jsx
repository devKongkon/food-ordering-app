import { Container } from "../../index"
function Footer() {
  return (
    <footer className="bg-gray-600 py-10 text-white text-xl ">
      <Container>
        <div className="flex justify-between">
          <div>Logo</div>
          <div>Delivery Time</div>
          <div>Contact</div>
          <div>Newsletter</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
