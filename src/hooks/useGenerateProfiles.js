import { faker } from '@faker-js/faker'

const useGenerateProfiles = (num) => {
  const profiles = [];
  const newYork = { lat: 40.7128, lng: -74.0060 }; 
  const centralLat = 40.7128;  
  const centralLng = -74.0060; 
  const latRange = 0.1; 
  const lngRange = 0.1; 

  for (let i = 0; i < num; i++) {
    const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    const profile = { 
      name: faker.person.fullName(), 
      photo: faker.image.avatar(), 
      gender: faker.person.sex(),
      description: faker.lorem.sentences(1),
      email: faker.internet.email(), 
      phone: faker.phone.number(), 
      mobile: faker.phone.number(), 
      job: faker.person.jobTitle(), 
      dob: dob.toISOString().split('T')[0], // Format date as YYYY-MM-DD 
      age: new Date().getFullYear() - dob.getFullYear(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`,
      location: { 
        lat: (centralLat - (latRange / 2)) + (Math.random() * latRange), 
        lng: (centralLng - (lngRange / 2)) + (Math.random() * lngRange) 
      }
    };
    profiles.push(profile);
  }

  return profiles;
};

export default useGenerateProfiles;
