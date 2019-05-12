module.exports = {
  mapUser: value => {
    let responseData = value.toObject();
    delete responseData.password;
    delete responseData.secret_question;
    delete responseData.secret_answer;

    return responseData;
  },
  mapSeller: value => {
    let responseData = value.toObject();
    delete responseData.password;
    delete responseData.secret_question;
    delete responseData.secret_answer;
    delete responseData.bids;
    delete responseData.auctions;
    delete responseData.verified;
    delete responseData.locked;
    delete responseData.balance;

    return responseData;
  }
};
