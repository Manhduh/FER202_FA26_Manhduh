
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import banners from "../data/banners";

function MyCarousel() {
  return (
    <Container className="my-4">
      <Carousel fade>
        {banners.map((banner) => (
          <Carousel.Item key={banner.id} interval={3000}>
            <img
              className="d-block w-100"
              src={banner.image}
              alt={banner.title}
              style={{
                height: "500px",
                objectFit: "cover"
              }}
            />

            <Carousel.Caption>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default MyCarousel;
