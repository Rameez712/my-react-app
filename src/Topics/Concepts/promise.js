import React from 'react';

class PromiseExample extends React.Component {
  fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Change this to simulate success or failure

        if (success) {
          resolve('Data successfully fetched!');
        } else {
          reject('Error fetching data!');
        }
      }, 2000); // Simulating a 2-second delay
    });
  }

   fetchDataWithoutPromise() {
    let success = false;
    setTimeout(() => {
       success = true; // Change this to simulate success or failure
    }, 2000); // Simulating a 2-second delay

    return success;
  }

  fetchDataWithoutPromise2() {

    return true;
  }
  
  

  async handleButtonClick() {
   let fetchDataWithPromise =  await  this.fetchDataWithPromise()
    //  .then((result) => {
    //    console.log(result);
    //  })
    //  .catch((error) => {
    //    console.error(error);
    //  });
   console.log("fetchDataWithoutPromise - "+ fetchDataWithPromise);

   let fetchDataWithoutPromise2 =  this.fetchDataWithoutPromise2();
   console.log("fetchDataWithoutPromise2 - "+ fetchDataWithoutPromise2);


    
    // this.fetchDataWithPromise()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <div>
        <h1>Promise Example</h1>
        <button onClick={() => this.handleButtonClick()}>Fetch Data</button>
      </div>
    );
  }
}

export default PromiseExample;
