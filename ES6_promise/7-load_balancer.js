export default function loadBalancer(chinaDownload, USDownload) {
    return new Promise((resolve, reject) => {
      let resolved = false;
  
      const resolveWrapper = (value) => {
        if (!resolved) {
          resolved = true;
          resolve(value);
        }
      };
  
      const rejectWrapper = (reason) => {
        if (!resolved) {
          resolved = true;
          reject(reason);
        }
      };
  
      chinaDownload.then(resolveWrapper).catch(rejectWrapper);
      USDownload.then(resolveWrapper).catch(rejectWrapper);
    });
  }