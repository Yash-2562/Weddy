// Venues.js
import VendorCard from '../components/VendorCard'; 

const Venues = () => {
  const venueData = [
    {
      name: 'Wood resort',
      location: 'Mumbai',
      price: '50000',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668439991057-7e70186ea56b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Rajput palace',
      location: 'Goa',
      price: '60000',
      imageUrl: 'https://images.unsplash.com/photo-1723816003393-ca6be8892dce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Bangla House',
      location: 'Kolkata',
      price: '55000',
      imageUrl: 'https://images.unsplash.com/photo-1741358706701-ae7ba62b1804?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
