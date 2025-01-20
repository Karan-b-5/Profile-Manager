import React, { useState, useEffect } from 'react';
import { useGetCoordinates } from '../hooks/useGetCoordinates';
import loadGoogleMaps from '../utils/loadGoogleMaps';

const ProfileModal = ({ isOpen, closeModal, onSave, profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    photo: '',
    description: '',
    email: '',
    phone: '',
    mobile: '',
    job: '',
    dob: '',
    age: '',
    address: '',
    location: { lat: '', lng: '' }
  });

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    } else {
      setFormData({
        name: '',
        gender: '',
        photo: '',
        description: '',
        email: '',
        phone: '',
        mobile: '',
        job: '',
        dob: '',
        age: '',
        address: '',
        location: { lat: '', lng: '' }
      });
    }
  }, [profile]);

  

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
  };

  const handleGetCoordinates = async (e) => {
    e.preventDefault();
    const value = formData?.address
      try { 
        const coordinates = await useGetCoordinates(value); 
        setFormData({ ...formData, location: coordinates }); 
      } catch (error) { 
        window.alert('Failed to fetch coordinates:', error); 
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetCoordinates(e);
    onSave(formData);
    closeModal();
  };

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white h-4/5 overflow-y-auto p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{profile ? 'Edit Profile' : 'Create Profile'}</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="block mb-2">
            Photo URL:
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Description:
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Phone:
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Mobile:
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Job:
            <input
              type="text"
              placeholder="Job"
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Date of Birth:
            <input
              type="date"
              placeholder="DOB"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Age:
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Address:
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <button onClick={handleGetCoordinates} className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Get Coordinates
          </button>
          <label className="block mt-2 mb-2">
            Latitude:
            <input
              type="text"
              placeholder="Latitude"
              name="lat"
              value={formData.location.lat}
              onChange={(e) => setFormData({ ...formData, location: { ...formData.location, lat: e.target.value } })}
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="block mb-2">
            Longitude:
            <input
              type="text"
              placeholder="Longitude"
              name="lng"
              value={formData.location.lng}
              onChange={(e) => setFormData({ ...formData, location: { ...formData.location, lng: e.target.value } })}
              className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300"
            />
          </label>
          <div className="flex gap-4 mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Save
            </button>
            <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
