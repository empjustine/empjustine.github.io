const capsizeCssCore = require("@capsizecss/core");
const fontMetrics = require("@capsizecss/metrics/sourceCodePro");

const capsizeOptions = {
  capHeight: 16,
  leading: 16 * 1.25,
  fontMetrics,
};

console.log(JSON.stringify(capsizeCssCore.precomputeValues(capsizeOptions)));
console.log(
  capsizeCssCore.createStyleString("capsizedText", capsizeOptions),
);

/*
{"fontSize":"24.2424px","lineHeight":"20px","capHeightTrim":"-0.108em","baselineTrim":"-0.057em"}

.capsizedText {
  font-size: 24.2424px;
  line-height: 20px;
}

.capsizedText::before {
  content: "";
  margin-bottom: -0.108em;
  display: table;
}

.capsizedText::after {
  content: "";
  margin-top: -0.057em;
  display: table;
}
*/
