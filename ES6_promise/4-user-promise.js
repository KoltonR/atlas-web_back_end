export default function signUpUser(firstName, lastName) {
    const thePromise = new Promise((resolve) => {
      resolve(
        { firstName, lastName },
      );
    });
    return thePromise;
  }
