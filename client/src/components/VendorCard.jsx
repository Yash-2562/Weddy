// VendorCard.js - This is the reusable card component
const VendorCard = ({ name, location, price, imageUrl }) => {
    return (
      <div className="bg-white  p-4 rounded-lg  shadow-lg">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-semibold">₹{price}</p>
            <p className="text-sm text-gray-500">Starting Price</p>
          </div>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
            Book Now
          </button>
        </div>
      </div>
    );
  };
  
  export default VendorCard;
  