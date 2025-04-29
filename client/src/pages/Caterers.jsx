// Caterers.js
import VendorCard from '../components/VendorCard'; 

const Caterers = () => {
  const catererData = [
    {
      name: 'kohli catering',
      location: 'Mumbai',
      price: '25000',
      imageUrl: 'https://images.unsplash.com/photo-1716187677911-298b8e551456?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdGVyZXJzJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Kasis premium',
      location: 'Delhi',
      price: '5 lakhs',
      imageUrl: 'https://images.unsplash.com/photo-1519226612673-73c0234437ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Kabab junction',
      location: 'Bangalore',
      price: '30000',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
