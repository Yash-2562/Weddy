// DJs.js
import VendorCard from '../components/VendorCard';
import Dj1 from '../assets/dj1.jpg'
import Dj2 from '../assets/Dj2.jpg'
import Dj3 from '../assets/Dj3.jpg'
const DJs = () => {
  const djData = [
    {
      name: 'Ram Audios',
      location: 'Mumbai',
      price: '20000',
      imageUrl: Dj1,
    },
    {
      name: 'Dj Max',
      location: 'Delhi',
      price: '25000',
      imageUrl: Dj2,
    },
    {
      name: 'Dj Kalia',
      location: 'odisha',
      price: '12000',
      imageUrl: Dj3,
    },
    // Add more DJ data here
  ];

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {djData.map((dj, index) => (
        <VendorCard key={index} {...dj} />
      ))}
    </div>
  );
};

export default DJs;
