function constructChecklistForm() {

  // Update document and page title to reflect current rules version.
  document.title = document.getElementById("pageTitle").innerHTML = "Army Business Rules Checklist for SCORM 2004 3rd Edition CMI " + businessRulesVersion;

  // Declare variables for the various divs. These will serve as temporary handles during iteration.
  // brsDiv: Holds the outer businessRules div.
  // brSecDiv: Holds the businessRuleSection div.
  // brDiv: Holds the businessRule div.
  // brRuleTextDiv: Holds the ruleText div.
  // brRadioDiv: Holds the radioGroup div.
  var brsDiv, brSecDiv, brDiv, brRuleTextDiv, brRadioDiv;

  // Grab businessRules div.
  brsDiv = $('#businessRules');

  // Remove any existing elements.
  brsDiv.html("");

  // Populate businessRules div with businessRuleSection divs.
  // Iterate over each section object in businessRulesList.
  for (var i = 0; i < businessRulesList.length; i++) {

    // Store the business rule list section object.
    var brListSecObj = businessRulesList[i];

    // Create the id name for the current businessRuleSection div.
    var ruleSectionNameIdStr = "businessRuleSection_" + brListSecObj.ruleSectionName;

    // Begin building the businessRuleSection div.
    brsDiv.append("<section id='" + ruleSectionNameIdStr + "' class='businessRuleSection'>");

    // Populate ruleSectionName span.
    brSecDiv = $("#" + ruleSectionNameIdStr);
    brSecDiv.append('<div class="section-title"><h2><span class="ruleSectionName">' + brListSecObj["ruleSectionName"] + ' Business Rules</h2></div>');
    brSecDiv.append('<div class="section-body">');
    brSecDiv = $("#" + ruleSectionNameIdStr + " > .section-body");

    // Populate businessRuleSection div with businessRule divs.
    // Iterate over each object in current businessRulesList object's rules array.
    for (var j = 0; j < brListSecObj["rules"].length; j++) {

      // Store the business rule list rule object.
      var brListRuleObj = brListSecObj["rules"][j];

      // Create the id name for the current businessRule div.
      var ruleIdStr = convertRuleNumToIdStr(brListRuleObj.ruleNumber);

      // Begin building the businessRule div.
      brSecDiv.append("<div id='" + ruleIdStr + "' class='businessRule'>");
      brDiv = $("#" + ruleIdStr);

      // Begin building the ruleText div.
      brDiv.append("<div id='" + ruleIdStr + "_ruleText' class='ruleText'>");
      brRuleTextDiv = $("#" + ruleIdStr + "_ruleText");

      // Add the inner elements to the ruleText div. Populate the ruleNumber, ruleName, and ruleDescriptionMarkup spans.
      brRuleTextDiv.append("<h3>Business Rule <span class='ruleNumber'>" + brListRuleObj.ruleNumber + "</span>: <span class='ruleName'>" + brListRuleObj.ruleName + "</span></h3>");
      brRuleTextDiv.append("<div class='ruleDescriptionMarkup'>" + brListRuleObj.ruleDescriptionMarkup + "</div>");

      // Begin building the radio group div.
      brDiv.append("<div id='" + ruleIdStr + "_radioGroup' class='radioGroup'>");
      brRadioDiv = $("#" + ruleIdStr + "_radioGroup");

      // Build the "Rating" label.
      brRadioDiv.append("<label for='" + ruleIdStr + "_radioGroup'>Rating:</label>");

      // Build the "Yes" radio item.
      brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_y' name='" + ruleIdStr + "_radio' value='Y'>");
      brRadioDiv.append("<label for='" + ruleIdStr + "_radio_y'>Yes</label>");

      // Build the "No" radio item.
      brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_n' name='" + ruleIdStr + "_radio' value='N' checked>");
      brRadioDiv.append("<label for='" + ruleIdStr + "_radio_n'>No</label>");

      // Build the "N/A" radio item if this rule is eligible
      if (brListRuleObj.ruleNA) {

        // Store this business rule into a list depending on whether it's an assessment or non-assessment rule.
        if (brListRuleObj.ruleNA === "assessment") {
          brAssessment.push(ruleIdStr);
        } else if (brListRuleObj.ruleNA === "non-assessment") {
          brNonAssessment.push(ruleIdStr);
        }

        brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_na' class='radio_na' name='" + ruleIdStr + "_radio' value='N/A' disabled>");
        brRadioDiv.append("<label class='radio_na' for='" + ruleIdStr + "_radio_na'>N/A</label>");
      }

      // Build the textarea div.
      brDiv.append("<label for='" + ruleIdStr + "_comments'>Additional comments:</label><br>")
      brDiv.append("<textarea id='" + ruleIdStr + "_comments' name='" + ruleIdStr + "_comments' rows='3' cols='60' maxlength='512'></textarea>");

    } // End businessRuleSection loop.

  } // End businessRulesList loop.

  // Add the toggleExamNA function to the course info radio.
  // Use a closure to pass the radio as a parameter to the event-setting function.
  $("input[type=radio][name=isExam_radio]").change(function () {
    return toggleExamNA(this.value);
  });

  // Select "No" option for the above radio to trigger the function.
  $("#isExam_radio_n").click();

  // Make info and submit sections visible.
  $(".infoSection, #submitDiv").show();

} // End constructChecklistForm()

// Helper function to convert a ruleNumber in n.n.[...].n format to n-n-[...]-n format.
// For use in assigning id names for elements.
function convertRuleNumToIdStr(ruleNum) {
  return ruleNum.replace(/\./g, "-");
} // End convertRuleNumToIdStr(ruleNum)

// Function to disable certain rules and set them to N/A depending on whether this is a scoring or non-scoring package.
function toggleExamNA(val) {

  // Declare variables to be used in this function. One will point to brAssessment and the other will point to brNonAssessment.
  // brsDisabled: Refers to the list of rules that will be disabled and N/A.
  // brsEnabled: Refers to the list of rules that will be enabled and unchecked.
  // commentStrSnip: Holds a small snippet of string data that will be used to construct the comment message.
  var brsDisabled, brsEnabled, commentStrSnip;

  // Depending on the radio value, either the assessment or non-assessment rules will be disabled.
  switch (val) {

    // Disable non-assessment rules, enable assessment rules.
    case "Y":
      brsDisabled = brNonAssessment;
      brsEnabled = brAssessment;
      commentStrSnip = "n ";
      break;

    // Disable assessment rules, enable non-assessment rules.
    case "N":
      brsDisabled = brAssessment;
      brsEnabled = brNonAssessment;
      commentStrSnip = " non-";
      break;
  }

  // Disable the appropriate set of rules.
  for (var i = 0; i < brsDisabled.length; i++) {
    $("#" + brsDisabled[i]).addClass("brNA");
    $("#" + brsDisabled[i] + "_radio_y, #" + brsDisabled[i] + "_radio_n").prop("checked", false).prop("disabled", true);
    $("#" + brsDisabled[i] + "_radio_na").prop("checked", true);
    $("#" + brsDisabled[i] + "_comments").prop("value", "This is a" + commentStrSnip + "assessment package.").prop("disabled", true);
  }

  // Enable the appropriate set of rules.
  for (var i = 0; i < brsEnabled.length; i++) {
    $("#" + brsEnabled[i]).removeClass("brNA");
    $("#" + brsEnabled[i] + "_radio_y, #" + brsEnabled[i] + "_radio_n").prop("disabled", false);
    $("#" + brsEnabled[i] + "_radio_na").prop("checked", false);
    $("#" + brsEnabled[i] + "_comments").prop("value", "").prop("disabled", false);
  }
} // End toggleExamNA(val)

// Rudimentary form validation based on 4 info fields having something in them
// TODO: Add validation based on info fields + all BRs evaluated
$('input[type=text]').keyup(function(e) {
  var inputs = $('input[type=text]');
  var numValid = 0;
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value.trim().length > 0) {
      numValid++;
    }
    if(numValid == 4) {
      $('#generateChecklist').prop('disabled', false);
    } else {
      $('#generateChecklist').prop('disabled', true);
    }
  }
});
