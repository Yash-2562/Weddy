// Photographers.js
import VendorCard from '../components/VendorCard';

const Photographers = () => {
  const photographerData = [
    {
      name: 'Photographer 1',
      location: 'Mumbai',
      price: '30000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Photographer 2',
      location: 'Delhi',
      price: '35000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more Photographer data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {photographerData.map((photographer, index) => (
        <VendorCard key={index} {...photographer} />
      ))}
    </div>
  );
};

export default Photographers;
