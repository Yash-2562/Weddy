// Venues.js
import VendorCard from '../components/VendorCard'; 

const Venues = () => {
  const venueData = [
    {
      name: 'Venue 1',
      location: 'Mumbai',
      price: '50000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Venue 2',
      location: 'Goa',
      price: '60000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Venue 3',
      location: 'Kolkata',
      price: '55000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more Venue data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {venueData.map((venue, index) => (
        <VendorCard key={index} {...venue} />
      ))}
    </div>
  );
};

export default Venues;
