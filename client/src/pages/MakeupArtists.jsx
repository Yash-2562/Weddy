// MakeupArtists.js
import VendorCard from '../components/VendorCard'; 

const MakeupArtists = () => {
  const makeupArtistData = [
    {
      name: 'Makeup Artist 1',
      location: 'Mumbai',
      price: '15000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Makeup Artist 2',
      location: 'Delhi',
      price: '18000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Makeup Artist 3',
      location: 'Bangalore',
      price: '20000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more Makeup Artist data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {makeupArtistData.map((makeupartist, index) => (
        <VendorCard key={index} {...makeupartist} />
      ))}
    </div>
  );
};

export default MakeupArtists;
