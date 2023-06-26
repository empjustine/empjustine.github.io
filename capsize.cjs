const capsizeCssCore = require("@capsizecss/core");
const fontMetrics = require("@capsizecss/metrics/sourceCodePro");

let capsizeOptions = {
  capHeight: 16,
  leading: 24,
  fontMetrics,
};

console.log(JSON.stringify(capsizeCssCore.precomputeValues(capsizeOptions)));
console.log(
  capsizeCssCore.createStyleString("sourceCodeProCapsize", capsizeOptions)
);

/*
{"fontSize":"24.2424px","lineHeight":"24px","capHeightTrim":"-0.1905em","baselineTrim":"-0.1395em"}

.capsizedText {
  font-size: 24.2424px;
  line-height: 24px;
}

.capsizedText::before {
  content: "";
  margin-bottom: -0.1905em;
  display: table;
}

.capsizedText::after {
  content: "";
  margin-top: -0.1395em;
  display: table;
}
*/
