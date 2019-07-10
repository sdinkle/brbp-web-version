function constructChecklistForm() {

  // Update document and page title to reflect current rules version.
  document.title = document.getElementById("pageTitle").innerHTML = "Army Business Rules Checklist for SCORM 2004 3rd Edition CMI v" + businessRulesVersion;

  // Declare variables for the various divs. These will serve as temporary handles during iteration.
  // brsDiv: Holds the outer businessRules div.
  // brSecDiv: Holds the businessRuleSection div.
  // brDiv: Holds the businessRule div.
  // brRuleTextDiv: Holds the ruleText div.
  // brRuleVerifyDiv: Holds the ruleVerify div.
  // brRadioDiv: Holds the radioGroup div.
  var brsDiv, brSecDiv, brDiv, brRuleTextDiv, brRuleVerifyDiv, brRadioDiv, brRadioGroupRadiosDiv, brTextAreaDiv;

  // Grab businessRules div.
  brsDiv = $('#businessRules');

  // Remove any existing elements.
  brsDiv.empty();

  // Populate businessRules div with businessRuleSection divs.
  // Iterate over each section object in businessRulesList.
  for (var i = 0; i < businessRulesList.length; i++) {

    // Store the business rule list section object.
    var brListSecObj = businessRulesList[i];

    // Create the id name for the current businessRuleSection div.
    // Trim any spaces from the section name, then replace any remaining spaces with underscores.
    var ruleSectionNameIdStr = ("businessRuleSection_" + (brListSecObj.ruleSectionName).trim()).replace(/\s/g, "_");

    // Begin building the businessRuleSection div.
    brsDiv.append("<section id='" + ruleSectionNameIdStr + "' class='businessRuleSection container border rounded shadow-sm my-3'>");

    // Populate ruleSectionName span.
    brSecDiv = $("#" + ruleSectionNameIdStr);
    brSecDiv.append('<div class="section-title row bg-brbp-primary px-3 py-2"><h2><span class="ruleSectionName text-white">' + brListSecObj["ruleSectionName"] + ' Business Rules</h2></div>');
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
      brSecDiv.append("<div id='" + ruleIdStr + "' class='businessRule container border-top px-1 py-3'>");
      brDiv = $("#" + ruleIdStr);

      // Begin building the ruleText div.
      brDiv.append("<div id='" + ruleIdStr + "_ruleText' class='ruleText'>");
      brRuleTextDiv = $("#" + ruleIdStr + "_ruleText");

      // Add the inner elements to the ruleText div. Populate the ruleNumber, ruleName, and ruleDescriptionMarkup spans.
      brRuleTextDiv.append("<h3>Business Rule <span class='ruleNumber'>" + brListRuleObj.ruleNumber + "</span>: <span class='ruleName'>" + brListRuleObj.ruleName + "</span></h3>");
      brRuleTextDiv.append("<div class='ruleDescriptionMarkup callout callout-rule'>" + brListRuleObj.ruleDescriptionMarkup + "</div>");

      // Begin building the verification div.
      brDiv.append("<div id='" + ruleIdStr + "_ruleVerify' class='ruleVerify'>");
      brRuleVerifyDiv = $("#" + ruleIdStr + "_ruleVerify");
      brRuleVerifyDiv.append("Verification:");

      // Add each verification tag to the current ruleVerify div.
      for (var k = 0; k < brListRuleObj.ruleVerify.length; k++) {
        brRuleVerifyDiv.append("<span class='badge badge-brbp ml-1'>" + brListRuleObj.ruleVerify[k]);
      }

      // Begin building the radio group div.
      brDiv.append("<div id='" + ruleIdStr + "_radioGroup' class='radioGroup container my-3'>");
      brRadioDiv = $("#" + ruleIdStr + "_radioGroup");

      // Build the "Rating" label.
      brRadioDiv.append("<label id='" + ruleIdStr + "_radioGroupLabel' class='row my-0' for='" + ruleIdStr + "_radioGroup'>Rating:</label>");

      // TODO: Build out the row div for the radios
      brRadioDiv.append("<div id='" + ruleIdStr + "_radioGroupRadios' class='row'>");
      brRadioGroupRadiosDiv = $("#" + ruleIdStr + "_radioGroupRadios");

      // Encase each radio with form-check and form-check-inline divs
      // Build the "Yes" radio item.
      brRadioGroupRadiosDiv.append(
        $("<div class='form-check form-check-inline'>")
        .append(
          "<input class='form-check-input' type='radio' id='" + ruleIdStr + "_radio_y' name='" + ruleIdStr + "_radio' value='Y'><label class='form-check-label' for='" + ruleIdStr + "_radio_y'>Yes</label>"
        )
      );

      // Build the "No" radio item.
      brRadioGroupRadiosDiv.append(
        $("<div class='form-check form-check-inline'>")
        .append(
          "<input class='form-check-input' type='radio' id='" + ruleIdStr + "_radio_n' name='" + ruleIdStr + "_radio' value='N' checked><label class='form-check-label' for='" + ruleIdStr + "_radio_n'>No</label>"
        )
      );

      // Build the "N/A" radio item if this rule applies in a specific context.
      if (brListRuleObj.ruleSpecificity) {

        // Store this business rule into a list depending on whether it's an assessment or non-assessment rule.
        if (brListRuleObj.ruleSpecificity === "assessment") {
          brAssessment.push(ruleIdStr);
        } else if (brListRuleObj.ruleSpecificity === "non-assessment") {
          brNonAssessment.push(ruleIdStr);
        }

        brRadioGroupRadiosDiv.append(
          $("<div class='form-check form-check-inline d-none'>")
          .append(
            "<input class='form-check-input' type='radio' id='" + ruleIdStr + "_radio_na' name='" + ruleIdStr + "_radio' value='N/A'><label class='form-check-label' for='" + ruleIdStr + "_radio_na'>N/A</label>"
          )
        );
      }

      // Build the textarea div.
      brDiv.append("<div id='" + ruleIdStr + "_textarea' class='mt-3'>");
      brTextAreaDiv = $("#" + ruleIdStr + "_textarea");
      brTextAreaDiv.append("<label for='" + ruleIdStr + "_comments'>Additional comments:</label>")
      brTextAreaDiv.append("<textarea id='" + ruleIdStr + "_comments' name='" + ruleIdStr + "_comments' class='form-control' maxlength='512'></textarea>");

    } // End businessRuleSection loop.

  } // End businessRulesList loop.

  // Add the toggleExamNA function to the isExam radio in the course info section, then select "No" to trigger the function.
  // Use a closure to pass the radio as a parameter to the event-setting function.
  $("input[type=radio][name=isExam_radio]").change(function () {
    return toggleExamNA(this.value);
  });
  // $("#isExam_radio_n").click();
  // Bugfix: Directly invoke event function to prevent misfired click on initial page load
  toggleExamNA(document.getElementById("isExam_radio_n").value);

  // Add the toggleIntroNA function to the isIntro radio in the course info section, then select "No" to trigger the function.
  // Use a closure to pass the radio as a parameter to the event-setting function.
  $("input[type=radio][name=isIntro_radio]").change(function () {
    return toggleIntroNA(this.value);
  });
  // $("#isIntro_radio_n").click();
  // Bugfix: Directly invoke event function to prevent misfired click on initial page load
  toggleExamNA(document.getElementById("isIntro_radio_n").value);

  // Add key press validation to the text boxes and textareas.
  $("input[type=text], textarea").keypress(function (e) {
    return validateKeypress(e);
  });

  // Populate the footer rules information.
  $("#footerVersion").text(businessRulesVersion);
  $("#footerLastModified").text(businessRulesLastUpdated);

  // Make loading section invisible.
  $("#loadingScript").hide();

  // Make info and submit sections visible.
  $("#instructions, #courseInfo, #businessRules, #evaluationInfo, #submitDiv, #navFooter").show();

} // End constructChecklistForm()

// Helper function to convert a ruleNumber in n.n.[...].n format to n-n-[...]-n format.
// For use in assigning id names for elements.
function convertRuleNumToIdStr(ruleNum) {
  return ruleNum.replace(/\./g, "-");
} // End convertRuleNumToIdStr(ruleNum)

// Function to disable certain rules marked as assessment- or non-assessment-only and set them to N/A depending on whether this is a scoring or non-scoring package.
// val: Holds the value of the currently selected radio button item.
function toggleExamNA(val) {

  // Declare variables to be used in this function. One will point to brAssessment and the other will point to brNonAssessment.
  // brsDisabled: Refers to the list of rules that will be disabled and N/A.
  // brsEnabled: Refers to the list of rules that will be enabled and unchecked.
  // commentStrSnip: Holds a small snippet of string data that will be used to construct the comment message.
  var brsDisabled, brsEnabled, commentStrSnip;

  // Depending on the governing radio item's value, either the assessment or non-assessment rules will be disabled.
  switch (val) {

    // Disable non-assessment rules, enable assessment rules.
    case "Y":
      brsDisabled = brNonAssessment;
      brsEnabled = brAssessment;
      commentStrSnip = "n ";

      // Ensure that the isIntro radio item is set to "No".
      $("#isIntro_radio_n").click();

      // Disable the isIntro radio item.
      $("#isIntro_radioGroup").addClass("disabled");
      $("#isIntro_radio_y").prop("checked", false).prop("disabled", true);
      $("#isIntro_radio_n").prop("checked", true).prop("disabled", true);

      break;

    // Disable assessment rules, enable non-assessment rules.
    case "N":
      brsDisabled = brAssessment;
      brsEnabled = brNonAssessment;
      commentStrSnip = " non-";

      // Enable the isIntro radio item.
      $("#isIntro_radioGroup").removeClass("disabled");
      $("#isIntro_radio_y").prop("disabled", false);
      $("#isIntro_radio_n").prop("disabled", false);

      break;
  }

  // Disable the appropriate set of rules.
  for (var i = 0; i < brsDisabled.length; i++) {
    setRuleDisabledStatus(brsDisabled[i], true, "This is a" + commentStrSnip + "assessment package.");
  }

  // Enable the appropriate set of rules.
  for (var i = 0; i < brsEnabled.length; i++) {
    setRuleDisabledStatus(brsEnabled[i], false);
  }
} // End toggleExamNA(val)

// Function to disable rule 1.1.1 and set it to N/A depending on whether this is an introductory content package.
// Should another rule that doesn't apply to intro content ever be created, this function would need to be repurposed to account for multiple rules.
// val: Holds the value of the currently selected radio button item.
function toggleIntroNA(val) {

  // Depending on the governing radio item's value, rule 1.1.1 will either be disabled or enabled.
  switch (val) {

    // Disable the rule.
    case "Y":
      setRuleDisabledStatus("1-1-1", true, "This is an introductory content package.");
      break;

    // Enable the rule.
    case "N":
      setRuleDisabledStatus("1-1-1", false);
      break;
  }
} // End toggleIntroNA(val)

// Helper function to disable or enable a rule.
// rule: Holds hypenated name of business rule ID.
// isDisabled: True if the rule is being disabled, false if being enabled.
// commentStr: Holds comment to be displayed if isDisabled is true. Not needed if isDisabled is false.
function setRuleDisabledStatus(rule, isDisabled, commentStr) {
  if (isDisabled) {

    // Disable the rule.
    $("#" + rule).addClass("disabled");
    $("#" + rule + "_radio_y, #" + rule + "_radio_n").prop("checked", false).prop("disabled", true);
    $("#" + rule + "_radio_na").prop("checked", true);
    $("#" + rule + "_comments").prop("value", commentStr).prop("disabled", true).attr("style", "").css("resize", "none");
  } else {

    // Enable the rule.
    $("#" + rule).removeClass("disabled");
    $("#" + rule + "_radio_y, #" + rule + "_radio_n").prop("disabled", false);
    $("#" + rule + "_radio_n").prop("checked", true);
    $("#" + rule + "_comments").prop("value", "").prop("disabled", false).css("resize", "both");
  }
} // End setRuleDisabledStatus(rule, isDisabled, commentStr)

// Function to screen key presses and filter out unwanted characters from text input.
// evt: Holds the event that fired the function. We use it to grab the pressed key.
function validateKeypress(evt) {
  if (evt.key.match(/[^\s\w\-!@#$%\^&*()+=,.?/;:'"\\]/)) {

    // Prevent the input.
    evt.preventDefault();

    // TODO: Display some kind of helpful message.
    console.log("You can't enter " + evt.key);
  }
}

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
