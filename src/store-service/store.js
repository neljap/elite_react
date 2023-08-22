
export const sample = {
  registeredAt: null,
  email:null,
  fullname:null,
  phoneNumber:null,
  profilePicture: [],
  referralId: null,
  referredBy: null,
  time: null,
  totalDeposit: null,
  totalReferrals:null,
  totalWithdrawal:null,
  uid:null,
  verified:null,
  verifyDocs: []
};

function storageAvailable(type){// = "localStorage" | "sessionStorage") {
  let storage = null;

  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


function startSession(){
  if(storageAvailable()){
    let data = JSON.stringify(sample);
    sessionStorage.setItem(data);
  }
}

function updateInfo(){}