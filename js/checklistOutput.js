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
  var outputHtmlString = "<!DOCTYPE html><html><head>";

  // Set title of window to "BRBP_<packageName>".
  outputHtmlString += "<title>BRBP_" + $('#packageName').val() + "</title>";

  // Continue constructing the webpage.
  outputHtmlString += "<link rel='stylesheet' type='text/css' href='css/checklistOutput.css'></head>";
  outputHtmlString += "<body><div id='main'>";

  // Construct the heading section.
  outputHtmlString += "<section id='headingSection'><h1>" + document.getElementById("pageTitle").innerHTML + "</h1>";
  outputHtmlString += "<div class='separator'></div>"

  // Begin constructing the course information section.
  outputHtmlString += "<section id='courseInfo' class='infoSection'>";
  outputHtmlString += "<h2>Course and Package Information</h2>";

  // Construct the course name info section.
  outputHtmlString += "<div id='courseName' class='info'><p>Course: ";
  outputHtmlString += $('#courseName').val();
  outputHtmlString += "</p></div>";

  // Construct the package name info section.
  outputHtmlString += "<div id='packageName' class='info'><p>Package: ";
  outputHtmlString += $('#packageName').val();
  outputHtmlString += "</p></div>";

  // Finish constructing the course information and heading sections.
  outputHtmlString += "</section></section>";

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
    brDivList = brSecDivList.eq(i).children().eq(0).children().eq(1).children();
    // console.log(brDivList);

    // Store current rule section name.
    rSecName = brSecDivList.eq(i).children()[0].getElementsByClassName("ruleSectionName")[0].innerHTML;

    // Construct the div for the current section.
    outputHtmlString += "<section id='rulesTable" + rSecName + "'";

    // If this isn't the last table, page break after the div.
    if (i < brSecDivList.length - 1) {
      outputHtmlString += " class='pageBreakAfter'";
    }

    // Finish the opening div tag.
    outputHtmlString += ">";

    // Construct the table and headings for the given business rule category.
    outputHtmlString += "<table><caption>";
    outputHtmlString += rSecName;
    outputHtmlString += "</caption><thead>";
    outputHtmlString += "<tr><th scope='col'>Rule No.</th><th scope='col'>Rule Description</th><th scope='col'>Rating</th><th scope='col'>Comments</th></tr></thead><tbody><tr>";

    // Iterate over each business rule within the given business rule section.
    for (var j = 0; j < brDivList.length; j++) {

      // Grab the current businessRule div.
      brDiv = brDivList[j];

      // Store rule number, rule name, and rule description markup.
      rNumber = brDiv.getElementsByClassName("ruleNumber")[0].innerHTML;
      rName = brDiv.getElementsByClassName("ruleName")[0].innerHTML;
      rDescMarkup = brDiv.getElementsByClassName("ruleDescriptionMarkup")[0].innerHTML;

      // Begin constructing the row for the given business rule.
      // Construct the rule number cell.
      outputHtmlString += "<th scope='row'><p>";
      outputHtmlString += rNumber;
      outputHtmlString += "</p></th>";

      // Begin constructing the rule cell.
      outputHtmlString += "<td><div class='rule'>";

      // Construct the rule name.
      outputHtmlString += "<div class='ruleName'><p>";
      outputHtmlString += rName;
      outputHtmlString += "</p></div>";

      // Construct the rule description.
      outputHtmlString += "<div class='ruleDescription'>";
      outputHtmlString += rDescMarkup;
      outputHtmlString += "</div>";

      // Finish constructing the rule cell.
      outputHtmlString += "</div></td>";

      // Construct the rating cell.
      outputHtmlString += "<td class='ratingCell" + getRatingCellMarkup(brDiv.id+"_radio") + "</td>";

      // Construct the comments cell.
      outputHtmlString += "<td class='ruleComments'>";
      outputHtmlString += getCommentsMarkup( brDiv.getElementsByTagName("textarea")[0] );

      // Finish constructing the row.
      outputHtmlString += "</td></tr>";

    } // End business rule loop.

    // Close the table and current business rule section.
    outputHtmlString += "</tbody></table></section>";

  } // End business rule section loop.

  // Construct the evaluation information section.
  outputHtmlString += "<section id='evaluationInfo' class='infoSection'>";
  outputHtmlString += "<h2>Evaluation Information</h2>";
  outputHtmlString += "<div id='evaluatorName' class='info'><p>Evaluator: ";
  outputHtmlString += $('#evaluatorName').val();
  outputHtmlString += "</p></div>";
  outputHtmlString += "<div id='orgName' class='info'><p>Organization: ";
  outputHtmlString += $('#orgName').val();
  outputHtmlString += "</p></div>";
  outputHtmlString += "<div id='evaluationDate' class='info'><p>Date: ";
  outputHtmlString += new Date().toDateString();
  outputHtmlString += "</p></div>";
  outputHtmlString += "<div id='signatureBox'></div><p>Evaluator's Signature</p>";
  outputHtmlString += "</section>";

  // Finish constructing the webpage.
  outputHtmlString += "</div></body></html>";

  // Write the HTML to the popup.
  popupReference.document.write(outputHtmlString);
  popupReference.document.close();

} // End constructChecklistOutput()

// Helper function to generate a rating cell's markup based on its corresponding radio button status.
// radioName: Name of the radio component whose markup is being generated in form n-n-[...]-n_radio
function getRatingCellMarkup(radioName) {

  // Get the checked value of a radio component with the provided name.
  var radioValue = function (name) {
    var radio = document.getElementsByName(name);
    for (var i=0; i<radio.length; i++) {
      if (radio[i].checked) {
        return radio[i].value;
      }
    }
    return null;
  }(radioName);

  // Return the appropriate markup based on the returned value of the radio component.
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
} // End getRatingCellMarkup(radioName)

// Helper function to convert the contents of a comment box to valid HTML.
// commentElement: Comment box whose contents will be converted to HTML. Expects a textarea element as input.
function getCommentsMarkup(commentElement) {

  // Encase the entire comment in <p> tags.
  var commentsStr = "<p>" + commentElement.value + "</p>";

  // Replace any LFs or CRLFs with a closing followed by an opening <p> tag.
  var lineBreakRegex = /\r?\n+/g;
  return commentsStr.replace(lineBreakRegex,"</p><p>");
} // End getCommentsMarkup(commentElement)
