// Planners.js
import VendorCard from '../components/VendorCard'; 

const Planners = () => {
  const plannerData = [
    {
      name: 'Yash Agencies',
      location: 'Mumbai',
      price: '35000',
      imageUrl: 'https://images.unsplash.com/photo-1509316554658-04f9287cdb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Bliss Events',
      location: 'Bangalore',
      price: '40000',
      imageUrl: 'https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // Add more Planner data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {plannerData.map((planner, index) => (
        <VendorCard key={index} {...planner} />
      ))}
    </div>
  );
};

export default Planners;
