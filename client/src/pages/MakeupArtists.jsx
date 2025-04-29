// MakeupArtists.js
import VendorCard from '../components/VendorCard'; 

const MakeupArtists = () => {
  const makeupArtistData = [
    {
      name: 'Sweta Beauty Patlour',
      location: 'Mumbai',
      price: '15000',
      imageUrl: 'https://images.unsplash.com/photo-1684868265714-fd2300637c23?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Fine MakeOvers',
      location: 'Delhi',
      price: '18000',
      imageUrl: 'https://media.istockphoto.com/id/1167208757/photo/makeup-artist-in-her-studio-during-training.jpg?s=2048x2048&w=is&k=20&c=FEKCly2X4ceg4rQFdReN0-STgyOMRX1I1PZ1NsKNsZQ=',
    },
    {
      name: 'Make up by Riya',
      location: 'Bangalore',
      price: '20000',
      imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
