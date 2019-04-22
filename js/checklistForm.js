function constructChecklistForm() {

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
    brsDiv.append("<div id='" + ruleSectionNameIdStr + "' class='businessRuleSection'>");

    // Populate ruleSectionName span.
    brSecDiv = $("#" + ruleSectionNameIdStr);
    brSecDiv.append("<h2><span class='ruleSectionName'>" + brListSecObj["ruleSectionName"] + "</span> Business Rules</h2>");

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
      brRuleTextDiv.append("<span class='ruleDescriptionMarkup'>" + brListRuleObj.ruleDescriptionMarkup + "</span>");

      // Begin building the radio group div.
      brDiv.append("<div id='" + ruleIdStr + "_radioGroup' class='radioGroup'>");
      brRadioDiv = $("#" + ruleIdStr + "_radioGroup");

      // Build the "Rating" label.
      brRadioDiv.append("<label for='" + ruleIdStr + "_radioGroup'>Rating:</label>");
      // <label for="1-1-1_radioGroup">Rating:</label>

      // Build the "Yes" radio item.
      brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_y' name='" + ruleIdStr + "_radio' value='Y'>");
      brRadioDiv.append("<label for='" + ruleIdStr + "_radio_y'>Yes</label>");

      // Build the "No" radio item.
      brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_n' name='" + ruleIdStr + "_radio' value='N'>");
      brRadioDiv.append("<label for='" + ruleIdStr + "_radio_n'>No</label>");

      // Build the "N/A" radio item
      brRadioDiv.append("<input type='radio' id='" + ruleIdStr + "_radio_na' name='" + ruleIdStr + "_radio' value='N/A'>");
      brRadioDiv.append("<label for='" + ruleIdStr + "_radio_na'>N/A</label>");

      // Build the textarea div.
      brDiv.append("<label for='" + ruleIdStr + "_comments'>Additional comments:</label><br>")
      brDiv.append("<textarea id='" + ruleIdStr + "_comments' name='" + ruleIdStr + "_comments' rows='3' cols='60' maxlength='512'></textarea>");

    } // End businessRuleSection loop.

  } // End businessRulesList loop.

} // End constructChecklistForm()

// Helper function to convert a ruleNumber in n.n.[...].n format to n-n-[...]-n format.
// For use in assigning id names for elements.
function convertRuleNumToIdStr(ruleNum) {
  return ruleNum.replace(/\./g, "-");
} // convertRuleNumToIdStr(ruleNum)
