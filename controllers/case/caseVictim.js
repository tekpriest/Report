const CaseVictim = require("../../models/cases/CaseVictim");
const { successWithData } = require("../../utils/successHandler");
const { tryCatchError } = require("../../utils/errorHandlers");

exports.createCaseVictim = async (req, res, next) => {
  req.body.caseID = req.params.caseID;
  try {
    const newVictim = CaseVictim.create(req.body);
    return successWithData(
      res,
      201,
      "Victim has been successfully added to the case file",
      newVictim
    );
  } catch (err) {
    return tryCatchError(res, err);
  }
};
