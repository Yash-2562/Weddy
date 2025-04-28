// Planners.js
import VendorCard from '../components/VendorCard'; 

const Planners = () => {
  const plannerData = [
    {
      name: 'Wedding Planner 1',
      location: 'Mumbai',
      price: '35000',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Wedding Planner 2',
      location: 'Bangalore',
      price: '40000',
      imageUrl: 'https://via.placeholder.com/300',
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
