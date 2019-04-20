var popupReference = null;

function openChecklistOutputPopup() {
  if(popupReference == null || popupReference.closed)
  {
    popupReference = window.open("");
  }
  else
  {
    popupReference.focus();
  };

  constructChecklistOutput();
}

function constructChecklistOutput() {
  // Declare the string that contains the page HTML and begin constructing the webpage.
  var outputHtmlString = "<!DOCTYPE HTML><html><head><title>Business Rules Checklist</title><link rel='stylesheet' type='text/css' href='css/checklistOutput.css'></head>" +
    "<body><div id='main'><div id='headingSection'><h1>Army Business Rules Checklist for SCORM 2004 3rd Edition CMI v1.1</h1>";

  // Construct the course information section.
  outputHtmlString += "<div id='courseInfo' class='infoSection'><span id='courseName' class='info'><p>Course: ";
  outputHtmlString += $('#courseName').val();
  outputHtmlString += "</p></span><span id='packageName' class='info'><p>Package: ";
  outputHtmlString += $('#packageName').val();
  outputHtmlString += "</p></span></div></div>";

  // Declare variables for the divs that will be iterated over.
  // brSecDivList: Will hold the outer businessRules div.
  // brDivList: Will hold each businessRuleSection div.
  // brDiv: Will hold each businessRule div.
  var brSecDivList, brDivList, brDiv;

  // Declare variables for business rule information.
  // rSecName: Will hold the current rule section name.
  // rNumber: Will hold the current rule number.
  // rName: Will hold the current rule name.
  // rDescMarkup: Will hold the current rule description markup.
  var rSecName, rNumber, rName, rDescMarkup;

  // Grab each businessRuleSection div and stuff them into a list.
  brSecDivList = $('#businessRules').children();

  // Iterate over each business rule section.
  for (var i = 0; i < brSecDivList.length; i++) {
    // Grab each businessRule div and stuff them into a list.
    brDivList = brSecDivList.eq(i).children();

    // Store current rule section name.
    rSecName = brDivList.eq(0)[0].getElementsByClassName("ruleSectionName")[0].innerHTML;

    // Construct the table and headings for the given business rule category.
    outputHtmlString += "<table><caption>";
    outputHtmlString += rSecName;
    outputHtmlString += " Business Rules</caption><thead>";
    outputHtmlString += "<tr><th scope='col'>Rule No.</th><th scope='col'>Rule Description</th><th scope='col'>Rating</th><th scope='col'>Comments</th></tr></thead><tbody><tr>";

    // Iterate over each business rule within the given business rule section.
    for (var j = 1; j < brDivList.length; j++) {
      // Grab the current businessRule div.
      brDiv = brDivList[j];

      // Store rule number, rule name, and rule description markup.
      rNumber = brDiv.getElementsByClassName("ruleNumber")[0].innerHTML;
      rName = brDiv.getElementsByClassName("ruleName")[0].innerHTML;
      rDescMarkup = brDiv.getElementsByClassName("ruleDescriptionMarkup")[0].innerHTML;

      // Construct the row for the given business rule.
      outputHtmlString += "<th scope='row'><p>";
      outputHtmlString += rNumber;
      outputHtmlString += "</p></th>";
      outputHtmlString += "<td><span class='ruleName'><p>";
      outputHtmlString += rName;
      outputHtmlString += "</p></span>";
      outputHtmlString += "<span class='ruleDescription'>";
      outputHtmlString += rDescMarkup;
      outputHtmlString += "</span></td>";
      // outputHtmlString += "<td class='ratingCell" + getRatingCellMarkup( getRadioCheckedValue(brDiv.id+"_radio") ) + "</td>";
      outputHtmlString += "<td class='ratingCell" + getRatingCellMarkup( getRadioCheckedValue(brDiv.id+"_radio") ) + "</td>";
      outputHtmlString += "<td class='ruleComments'>";
      outputHtmlString += getCommentsMarkup( brDiv.getElementsByTagName("textarea")[0] );
      outputHtmlString += "</td></tr>";
    } // End business rule loop.

    // Close the current business rule section table.
    outputHtmlString += "</tbody></table>";
  } // End business rule section loop.

  // Construct the evaluation information section and close the body and html tags.
  outputHtmlString += "<div id='nameAndDate' class='infoSection'><span id='evaluatorName' class='info'><p>Evaluator: ";
  outputHtmlString += $('#evaluatorName').val();
  outputHtmlString += "</p></span><span id='evaluationDate' class='info'><p>Date: ";
  outputHtmlString += new Date().toDateString();
  outputHtmlString += "</p></span></div>";
  outputHtmlString += "</body></html>";

  // Write the HTML to the popup.
  popupReference.document.write(outputHtmlString);
  popupReference.document.close();
}

// Helper function for getting the checked value of a radio component with a given name.
// Used only in getRatingCellMarkup function. Could have anonymized this, but eh.
function getRadioCheckedValue(radioName) {
  var radio = document.getElementsByName(radioName);
  for (var i=0; i<radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value;
    }
  }
  return null;
}

// Helper function to generate a rating cell's markup based on its corresponding radio button status.
function getRatingCellMarkup(radioValue) {
  switch (radioValue) {
    case 'Y':
      return " rating_Y'><img src='img/green.gif'>";
    case 'N':
      return " rating_N'><img src='img/red.gif'>";
    case 'N/A':
      return " rating_NA'><img src='img/gray.gif'>";
    default:
      return " rating_none'>";
  }
}

// Helper function to convert the contents of a comment box to valid HTML.
// Expects a textarea element as input.
function getCommentsMarkup(commentElement) {
  var commentsStr = "<p>" + commentElement.value + "</p>";
  var lineBreakRegex = /\r?\n+/g;
  return commentsStr.replace(lineBreakRegex,"</p><p>");
}
