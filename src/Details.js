import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

// const Details = (props) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, "", 4)}</code>
//     </pre>
//   );
// };

class Details extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    try {
      const { animal } = await pet.animal(+this.props.id);
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    } catch (error) {
      console.error("Details", error);
    }
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
