import "./Collection.css";
import Navbar from "../components/Navbar"
import ruby from "../assets/images/collection/ruby.jpg";
import emerald from "../assets/images/collection/emerald.jpg";
import catseye from "../assets/images/collection/catseye.jpg";
import topaz from "../assets/images/collection/topaz.jpg";
import amethyst from "../assets/images/collection/amethyst.jpg";
import blue from "../assets/images/collection/blue.jpg";
const collection = [
  {
    id: 1,
    name: "Blue Sapphire",
    image:blue,
    description:
      "Known for its deep royal blue color and exceptional brilliance.",
  },
  {
    id: 2,
    name: "Ruby",
    image:ruby,
    description:
      "A vibrant red gemstone symbolizing passion, love, and prosperity.",
  },
  {
    id: 3,
    name: "Emerald",
    image:emerald,
    description:
      "A precious green gemstone admired for its beauty and rarity.",
  },
  {
    id: 4,
    name: "Amethyst",
    image:amethyst,
    description:
      "A stunning purple quartz believed to bring peace and clarity.",
  },
  {
    id: 5,
    name: "Topaz",
    image:topaz,
    description:
      "A brilliant gemstone available in blue, yellow, and golden shades.",
  },
  {
    id: 6,
    name: "Cat's Eye",
    image:catseye,
    description:
      "Famous for its unique glowing band that resembles a cat's eye.",
  },
];

function Collection() {
  const handleCardClick = (gem) => {
    console.log(gem.name);

    // You'll handle navigation here
    // navigate(`/gem/${gem.id}`);
  };

  return (
<div>
    <Navbar />
    <div className="gem-page">
       
      <div className="page-header">
        
        <h1>Our Gemstone Collection</h1>
        <p>
          Discover the beauty of nature through our carefully selected
          gemstones.
        </p>
      </div>

      <div className="gem-grid">
        {collection.map((gem) => (
          <div
            className="gem-card"
            key={gem.id}
            onClick={() => handleCardClick(gem)}
          >
            <img src={gem.image} alt={gem.name} />

            <div className="card-content">
              <h2>{gem.name}</h2>

              <p>{gem.description}</p>

              <button>View Details →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Collection;