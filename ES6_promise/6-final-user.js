import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const usersDataPromise = signUpUser(firstName, lastName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((err) => ({ status: 'rejected', value: err.toString() }));

  const filesDataPromise = uploadPhoto(fileName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((err) => ({ status: 'rejected', value: err.toString() }));

  const [usersData, filesData] = await Promise.all([usersDataPromise, filesDataPromise]);

  return [usersData, filesData];
}