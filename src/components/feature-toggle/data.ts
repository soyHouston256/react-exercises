const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColor: true,
    showAccordian: true,
    showTreeView: true,
    showTabs : true,
    showStartRating: true,
    showImageSlider: true,
    showLoadMoreData: true,
    showQrCodeGenerator: true,
    showLightDarkMode: true,
    showGithubProfile: true,

  };
  
  function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlagsDataServiceCall;