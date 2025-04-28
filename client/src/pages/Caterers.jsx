// Caterers.js
import VendorCard from '../components/VendorCard'; 

const Caterers = () => {
  const catererData = [
    {
      name: 'Caterer 1',
      location: 'Mumbai',
      price: '25000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Caterer 2',
      location: 'Delhi',
      price: '27000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Caterer 3',
      location: 'Bangalore',
      price: '30000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more Caterer data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {catererData.map((caterer, index) => (
        <VendorCard key={index} {...caterer} />
      ))}
    </div>
  );
};

export default Caterers;
