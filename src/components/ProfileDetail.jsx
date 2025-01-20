import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from './ProfileContext';
import MapComponent from './MapComponent';

const ProfileDetail = () => {
  const { id } = useParams();
  const { profiles } = useContext(ProfileContext);
  const [showMap, setShowMap] = useState(true); // Set default state to showMap
  const profile = profiles.find(p => p.name === id);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-4">
        <div className='flex flex-col md:flex-row'>
            {profile?.photo ? 
              <img src={profile?.photo} alt={profile.name} className="w-5/12 border border-black rounded-lg p-4 shadow-lg h-1/4 object-fit mb-4" /> :
              <img src={`https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw`} alt={profile.name} className="w-5/12 border border-black rounded-lg p-4 shadow-lg h-1/4 object-fit mb-4" /> 
            }
            <div className='flex flex-col p-4 justify-end'>
                <h2 className="text-2xl font-semibold mb-2">
                    <span className='font-bold'>Name: </span>
                    {profile.name}
                </h2>
                <p className="text-gray-600 mb-4">
                    <span className='font-bold'>Description: </span>
                    {profile.description}
                </p>
            </div>
        </div>
        <div className="mb-4">
        <p className="text-gray-600 mb-2"><strong>Gender:</strong> {profile.gender}</p> 
        <p className="text-gray-600 mb-2"><strong>DOB:</strong> {profile.dob}</p>
        <p className="text-gray-600 mb-2"><strong>Age:</strong> {profile.age}</p> 
        <p className="text-gray-600 mb-2"><strong>Job:</strong> {profile.job}</p> 
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {profile.email}</p> 
        <p className="text-gray-600 mb-2"><strong>Phone:</strong> {profile.phone}</p> 
        <p className="text-gray-600 mb-2"><strong>Mobile:</strong> {profile.mobile}</p> 
        <p className="text-gray-600 mb-4"><strong>Address:</strong> {profile.address}</p>
          <p><strong>Latitude:</strong> {profile.location.lat}</p>
          <p><strong>Longitude:</strong> {profile.location.lng}</p>
        </div>
        <button
          onClick={handleShowMap}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          {showMap ? 'Hide Location on Map' : 'Show Location on Map'}
        </button>
      </div>
      {showMap && (
        <div className="w-full md:w-1/2 h-screen m-4">
          <MapComponent profile={profile} />
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
