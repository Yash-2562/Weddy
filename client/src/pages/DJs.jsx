// DJs.js
import VendorCard from '../components/VendorCard'; 
const DJs = () => {
  const djData = [
    {
      name: 'DJ Name 1',
      location: 'Mumbai',
      price: '20000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'DJ Name 2',
      location: 'Delhi',
      price: '25000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more DJ data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {djData.map((dj, index) => (
        <VendorCard key={index} {...dj} />
      ))}
    </div>
  );
};

export default DJs;
