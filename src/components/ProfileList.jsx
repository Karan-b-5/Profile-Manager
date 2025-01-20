import React, { useState, useEffect, useContext } from 'react';
// import loadGoogleMaps from '../utils/loadGoogleMaps';
import MapComponent from './MapComponent';
import useGenerateProfiles from '../hooks/useGenerateProfiles';
import { ProfileContext } from './ProfileContext';
import { useNavigate } from 'react-router-dom';

// const profiles = [
//   { name: 'John Doe', photo: 'john.jpg', description: 'Software Engineer', location: { lat: 37.7749, lng: -122.4194 } },
//   { name: 'Jane Smith', photo: 'jane.jpg', description: 'Designer', location: { lat: 34.0522, lng: -118.2437 } }
// ];


const ProfileList = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  // const [profiles, setProfiles] = useState([]);
  const { profiles, setProfiles } = useContext(ProfileContext);
  console.log(profiles);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(''); 
  const [genderFilter, setGenderFilter] = useState(''); 
  // const [ageFilter, setAgeFilter] = useState(''); 
  const [ageFilterType, setAgeFilterType] = useState(''); 
  const [ageFilterValue, setAgeFilterValue] = useState('');
  const [locationFilter, setLocationFilter] = useState(''); 
  
  const handleSearch = (e) => { setSearchQuery(e.target.value); }; 

  const handleFilter = (e) => { const { name, value } = e.target; 
    switch (name) { 
      case 'gender': 
        setGenderFilter(value); 
        break; 
      // case 'age': 
      //   setAgeFilter(value); 
      //   break; 
      case 'ageType': 
        setAgeFilterType(value); 
        break; 
      case 'ageValue':  
        setAgeFilterValue(value); 
        break;
      case 'location': 
        setLocationFilter(value); 
        break; 
      default: 
        break; 
    } 
  }; 
  
  // const filteredProfiles = profiles.filter((profile) => { 
    // return ( (searchQuery === '' || profile.name.toLowerCase().includes(searchQuery.toLowerCase())) && (genderFilter === '' || profile.gender === genderFilter) && (ageFilter === '' || profile.age === parseInt(ageFilter)) && (locationFilter === '' || profile.address.toLowerCase().includes(locationFilter.toLowerCase())) );
  // });

  const filteredProfiles = profiles.filter((profile) => { 
    const isAgeFilterValid = () => { 
      if (ageFilterType === 'above') { 
        return profile.age >= ageFilterValue; 
      } 
      if (ageFilterType === 'below') { 
        return profile.age <= ageFilterValue; 
      } 
      return true; 
    }; 
    return ( 
      (searchQuery === '' || profile.name.toLowerCase().includes(searchQuery.toLowerCase())) && 
      (genderFilter === '' || profile.gender === genderFilter) && 
      (ageFilterValue === '' || isAgeFilterValid()) && 
      (locationFilter === '' || profile.address.toLowerCase().includes(locationFilter.toLowerCase())) 
    ); 
  });
  

  // useEffect(() => { 
  //   const data = useGenerateProfiles(10); // Generate 10 dummy profiles 
  //   setProfiles(data); 
  // }, []);

  const showMap = (profile) => { 
    // setSelectedProfile(profile);
    navigate(`/profile/${profile.name}`); // Navigate to the profile detail page 
  };


  return (
    <>
      <div className="text-center"> 
        <hr className="mb-4"/> 
        <h1 className="text-4xl font-bold mb-6 ">Profile List</h1> 
        <hr className="my-4"/> 
      </div>

      

      <div className="mb-8 flex flex-wrap justify-center gap-4 mx-auto w-full max-w-2xl border-b-2 pb-4"> 
        <input type="text" placeholder="Search by name" value={searchQuery} onChange={handleSearch} className="px-4 py-2 basis-full rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none" /> 
        <div className='flex items-center space-x-2 basis-full justify-center'>
          <h2 className='font-semibold text-xl'>Filter By Gender</h2>
          <select name="gender" value={genderFilter} onChange={handleFilter} className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none basis-4/12"> 
            <option value="">All Genders</option> 
            <option value="male">Male</option> 
            <option value="female">Female</option> 
          </select> 
        </div>
        <div className="flex gap-2 items-center"> 
          <h2 className='font-semibold text-xl'>Filter By Age</h2>
          <select name="ageType" value={ageFilterType} onChange={handleFilter} className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"> 
            <option value="above">Above</option> 
            <option value="below">Below</option> 
          </select> 
          <input type="number" placeholder="Age" name="ageValue" value={ageFilterValue} onChange={handleFilter} className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none" /> 
        </div> 
        <input type="text" placeholder="Search by Location (City or Country)" name="location" value={locationFilter} onChange={handleFilter} className="px-4 basis-full py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none" /> 
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:border border-black transition-all ease-linear hover:shadow-xl hover:scale-105 duration-300">
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
              <button onClick={() => showMap(profile)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Summary</button>
            </div>
          </div>
        ))}
        {selectedProfile && <MapComponent profile={selectedProfile} />}
      </div>
    </>
  );
};

export default ProfileList;


