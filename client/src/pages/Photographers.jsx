// Photographers.js
import VendorCard from '../components/VendorCard';

const Photographers = () => {
  const photographerData = [
    {
      name: 'Samar Studio',
      location: 'Mumbai',
      price: '30000',
      imageUrl: 'https://images.unsplash.com/photo-1506434304575-afbb92660c28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: '  Kunal Photography ',
      location: 'Delhi',
      price: '35000',
      imageUrl: 'https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGhlciUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
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
