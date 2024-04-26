import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then(value => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).catch(error => ({ status: 'rejected', reason: error.message }))
  ];

  return Promise.all(promises);
}
