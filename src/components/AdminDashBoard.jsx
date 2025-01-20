import React, { useState, useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import ProfileModal from './ProfileModal';

const AdminDashboard = () => {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleEdit = (profile) => {
    setCurrentProfile(profile);
    setIsModalOpen(true);
  };

  const handleDelete = (name) => {
    setProfiles(profiles.filter(profile => profile.name !== name));
  };

  const handleSave = (profile) => {
    if (currentProfile) {
      // Update existing profile
      const updatedProfiles = profiles.map(p => p.name === currentProfile.name ? profile : p);
      setProfiles(updatedProfiles);
    } else {
      // Add new profile
      setProfiles([...profiles, profile]);
    }
    setCurrentProfile(null);
  };

  const openCreateModal = () => {
    setCurrentProfile(null);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <hr />
      <div className='flex justify-center mt-4'>
        <h2 className="text-3xl mx-auto font-semibold mb-4">User Profiles</h2>
      </div>
      <div className='flex justify-end mb-2'>
        <button onClick={openCreateModal} className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Create New Profile
        </button>
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        onSave={handleSave}
        profile={currentProfile}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {profile?.photo ? 
              <img src={profile?.photo} alt={profile.name} className="w-full h-48 object-fit" /> : 
              <img src={`https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw`} alt={profile.name} className="w-full h-48 object-fit" />
            }
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <p className="text-gray-600 mb-2"><strong>Age:</strong> {profile.age}</p> 
              <p className="text-gray-600 mb-2"><strong>Gender:</strong> {profile.gender}</p> 
              <p className="text-gray-600 mb-4"><strong>Address:</strong> {profile.address}</p>
              <hr className='mb-2'/>
              <div className="flex justify-around items-end">
                <button onClick={() => handleEdit(profile)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
                <button onClick={() => handleDelete(profile.name)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
