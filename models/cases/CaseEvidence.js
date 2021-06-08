const mongoose = require("mongoose");
const {genIDs} = require("../../utils/genID");

const Schema = mongoose.Schema;

const caseEvidenceSchema = new Schema(
  {
    // ID of the file
    fileID: {
      type: String,
    },

    // ID of case in question
    caseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
    },

    // file name
    fileName: {
      type: String,
    },

    // Link path to the file
    URLs: [{
      type: String,
    }],
  },
  {timestamps: true}
);

caseEvidenceSchema.pre("save", function (next) {
  this.fileID = genIDs("SEVF");
  next();
});

const CaseEvidence = mongoose.model("CaseEvidence", caseEvidenceSchema);

module.exports = CaseEvidence;
