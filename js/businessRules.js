var businessRulesList =
[
  // Top-level objects are rules sections.
  // ruleSectionName: A string representing the name of the section.
  // rules: An object array that contains all of the section's component rules.
  // ruleNumber: A string representing the number of the rule. Always in the form "n.n.[...].n"
  // ruleName: A string representing the name of the rule.
  // ruleDescriptionMarkup: An HTML string containing the rule description. <p> tags encouraged to separate multiline rules. <ul> tags may be used as well. Double-quotes will need to be escaped.

  /**** Design Business Rules ****/
  {
    ruleSectionName: "Design",
    rules: [
      {
        ruleNumber: "1.1.1",
        ruleName: "Discrete Independent Content",
        ruleDescriptionMarkup: "<p>Independent LCOs shall be discrete blocks of learning content that do not make reference to placement in a hierarchy or to other LCOs anywhere in the content.</p>",
        ruleNA: true
      },
      {
        ruleNumber: "1.1.2",
        ruleName: "Consistent Content Titles",
        ruleDescriptionMarkup: "<p>All LCOs shall contain the same topic title in content packaging resources and in the instructional content presented to the learner.</p>"
      },
      {
        ruleNumber: "1.1.3",
        ruleName: "Internal Learning Content",
        ruleDescriptionMarkup: "<p>Instructional content that directly contributes to satisfying mastery requirements for an LCO must be located within its content package and not referenced by an external URL.</p>"
      },
      {
        ruleNumber: "1.1.4",
        ruleName: "Metadata Requirement",
        ruleDescriptionMarkup: "<p>Metadata is required for all content packages and their LCOs or launchable assets.</p>"
      },
      {
        ruleNumber: "1.1.5",
        ruleName: "External Metadata Files",
        ruleDescriptionMarkup: "<p>Metadata for an object must be contained with its own valid XML file that conforms to the IEEE LOM model schema and is referenced within the content packaging model.</p>"
      },
      {
        ruleNumber: "1.2.1",
        ruleName: "Single-SCO Content Packages",
        ruleDescriptionMarkup: "<p>SCORM 2004 3rd Edition content packages must be limited to a single SCO for the purposes of modularity and interoperability.</p>"
      },
      {
        ruleNumber: "1.2.2",
        ruleName: "Army Metadata Fields",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition metadata files must be formatted to include the following fields to meet Army requirements:</p>" +
          "<ul>" +
          "<li>General Identifier Fields: Catalog; Entry</li>" +
          "<li>General Fields: Title; Language; Description; Keywords; Type of Metadata</li>" +
          "<li>Life Cycle Fields: Version; Status of Package Submittal; Proponent's Role; Proponent's Name, Address and Email; Date of Submittal</li>" +
          "<li>Metadata Fields: Catalog Identifier; Entry Identifier; Schema; Language</li>" +
          "<li>Technical Fields: Format</li>" +
          "<li>Rights Fields: Cost; Copyright and Other Restrictions</li>" +
          "<li>Classification Fields: MOS and Skill Level; SQI; ASI; Task Numbers and Task Descriptions; Learning Objectives; 508 Compliant; Security Level (Foreign Disclosure)</li>" +
          "</ul>"
      }
    ]
  }, /**** End Design Business Rules ****/

  /**** Development Business Rules ****/
  {
    ruleSectionName: "Development",
    rules: [
      {
        ruleNumber: "2.1.1",
        ruleName: "Allowable File Name Characters",
        ruleDescriptionMarkup: "<p>Files in Army learning content packages shall contain only the following allowable characters from the RFC 3986 unreserved character set:</p><p><code>_ - . A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9</code></p>"
      },
      {
        ruleNumber: "2.1.2",
        ruleName: "Allowable Folder Name Characters",
        ruleDescriptionMarkup: "<p>Folders in Army learning content packages shall contain only the following allowable characters from the RFC 3986 unreserved character set:</p><p><code>_ - A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9</code></p>"
      },
      {
        ruleNumber: "2.1.3",
        ruleName: "External URI Encoding",
        ruleDescriptionMarkup: "<p>External resource names that contain characters not in the allowable lists (see Business Rules 2.1.1 and 2.1.2) shall be referenced in Army learning content using a percent-encoded URL.</p>"
      },
      {
        ruleNumber: "2.1.4",
        ruleName: "File Extension Separation",
        ruleDescriptionMarkup: "<p>A single period character (\".\") shall be used to separate a file's name from its extension.</p>"
      },
      {
        ruleNumber: "2.1.5",
        ruleName: "Maximum File Path Length",
        ruleDescriptionMarkup: "<p>File paths in Army learning content packages shall not exceed 256 characters in length.</p>"
      },
      {
        ruleNumber: "2.1.6",
        ruleName: "Browser Data Storage",
        ruleDescriptionMarkup: "<p>Learning content shall not store data using the web browser's built-in methods such as cookies or Web Storage.</p>"
      },
      {
        ruleNumber: "2.1.7",
        ruleName: "Server-side Technology",
        ruleDescriptionMarkup: "<p>Learning content shall not make use of any server-side technologies such as scripting or database implementations.</p>"
      },
      {
        ruleNumber: "2.1.8",
        ruleName: "Error-Free Code",
        ruleDescriptionMarkup: "<p>All code in learning content must run without producing errors.</p>"
      },
      {
        ruleNumber: "2.1.9",
        ruleName: "Bookmarking Requirement",
        ruleDescriptionMarkup: "<p>Non-assessment LCOs shall contain functionality to bookmark the learner's progress whenever the learner exits the content.</p>",
        ruleNA: true
      },
      {
        ruleNumber: "2.1.10",
        ruleName: "Assessment Data Obfuscation",
        ruleDescriptionMarkup: "<p>Credit-producing assessment learning content must obfuscate question and answer data so that the data is not in a plaintext format easily recognizable by the learner.</p>",
        ruleNA: true
      },
      {
        ruleNumber: "2.1.11",
        ruleName: "Consistent Exit Behavior",
        ruleDescriptionMarkup: "<p>Learning content must record the learner's progress consistently regardless of the method through which the learner exits the content.</p>"
      },
      {
        ruleNumber: "2.1.12",
        ruleName: "Adobe Flash Restriction",
        ruleDescriptionMarkup: "<p>Learning content must not use Adobe's Flash technology at any point during runtime, nor include any Flash files in deliverables.</p>"
      },
      {
        ruleNumber: "2.2.1",
        ruleName: "Window Closure",
        ruleDescriptionMarkup: "<p>Unless required by the LMS, SCORM 2004 3rd Edition learning content must not forcefully close the LMS player nor instruct the learner to close the LMS player using the browser exit button.</p>"
      },
      {
        ruleNumber: "2.2.2",
        ruleName: "SCORM Manifest and Schemas",
        ruleDescriptionMarkup: "<p>SCORM 2004 3rd Edition content packages must contain a manifest file (imsmanifest.xml) and all of the SCORM 2004 3rd Edition base and extension schemas in the root level of the package.</p>"
      },
      {
        ruleNumber: "2.2.3",
        ruleName: "SCORM Content Package Files",
        ruleDescriptionMarkup: "<p>All files that make up the content for a SCORM 2004 3rd Edition SCO must be contained within its content package and referenced in the imsmanifest.xml file.</p>"
      },
      {
        ruleNumber: "2.2.4",
        ruleName: "SCORM Objectives Global to System",
        ruleDescriptionMarkup: "<p>The <code>adlseq:objectivesGlobalToSystem</code> attribute of the organization element must be set to \"false\" in all Army SCORM 2004 3rd Edition content packages.</p>"
      },
      {
        ruleNumber: "2.2.5",
        ruleName: "Assessment Objective Satisfaction",
        ruleDescriptionMarkup: "<p>SCORM 2004 3rd Edition assessment SCOs shall include the <code>imsss:primaryObjective</code> element in the manifest and set the <code>satisfiedByMeasure</code> attribute of the element to \"true\".</p>",
        ruleNA: true
      },
      {
        ruleNumber: "2.2.6",
        ruleName: "Assessment Mastery Score Declaration",
        ruleDescriptionMarkup: "<p>SCORM 2004 3rd Edition assessment SCOs shall include a <code>imsss:primaryObjective</code> element in the manifest and declare a mastery score using the <code>imsss:minNormalizedMeasure</code> element.</p>",
        ruleNA: true
      },
      {
        ruleNumber: "2.2.7",
        ruleName: "SCORM Data Model",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition SCOs must track learner performance using only the SCORM 2004 3rd Edition data model; assessment SCOs must use the Interactions data model element to record all learner performance.</p>"
      },
      {
        ruleNumber: "2.2.8",
        ruleName: "SCORM Required API Calls for Assessments",
        ruleDescriptionMarkup: "<p>Credit-producing assessment SCORM 2004 3rd Edition SCOs must at a minimum use the SCORM API as follows:</p>" +
          "<p><strong>Method Calls (call at least once):</strong></p>" +
          "<ul><code>" +
          "<li>Initialize</li>" +
          "<li>GetLastError</li>" +
          "<li>Commit</li>" +
          "<li>Terminate</li>" +
          "</code></ul>" +
          "<p><strong>Data Model Elements (set a valid value at least once):</strong></p>" +
          "<ul><code>" +
          "<li>cmi.exit</li>" +
          "<li>cmi.completion_status</li>" +
          "<li>cmi.scaled_score</li>" +
          "<li>cmi.session_time</li>" +
          "<li>cmi.interactions.n.correct.response.n.pattern</li>" +
          "<li>cmi.interactions.n.learner_response</li>" +
          "<li>cmi.interactions.n.latency</li>" +
          "<li>cmi.interactions.n.timestamp</li>" +
          "<li>cmi.interactions.n.type</li>" +
          "<li>cmi.interactions.n.result</li>" +
          "</code></ul>",
        ruleNA: true
      },
      {
        ruleNumber: "2.2.9",
        ruleName: "SCORM Required API Calls for Non-Assessments",
        ruleDescriptionMarkup: "<p>Credit-producing non-assessment SCORM 2004 3rd Edition SCOs must at a minimum use the SCORM API as follows:</p>" +
          "<p><strong>Method Calls (call at least once):</strong></p>" +
          "<ul><code>" +
          "<li>Initialize</li>" +
          "<li>Commit</li>" +
          "<li>Terminate</li>" +
          "</code></ul>" +
          "<p><strong>Data Model Elements (set a valid value at least once):</strong></p>" +
          "<ul><code>" +
          "<li>cmi.exit</li>" +
          "<li>cmi.success_status</li>" +
          "<li>cmi.completion_status</li>" +
          "<li>cmi.location</li>" +
          "<li>cmi.session_time</li>" +
          "</code></ul>",
        ruleNA: true
      },
      {
        ruleNumber: "2.2.10",
        ruleName: "SCORM Navigation Request",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition SCOs must set an appropriate navigation request using the <code>adl.nav.request</code> data model element during run-time.</p>"
      }
    ]
  }, /**** End Development Business Rules ****/

  /**** Testing Business Rules ****/
  {
    ruleSectionName: "Testing",
    rules: [
      {
        ruleNumber: "3.1.1",
        ruleName: "Target Platform Testing",
        ruleDescriptionMarkup: "<p>All LCOs must be tested on the target delivery platform testing environment with content configuration settings identical to the live version of the platform.</p>"
      },
      {
        ruleNumber: "3.1.2",
        ruleName: "Computer Configuration",
        ruleDescriptionMarkup: "<p>All LCOs must be tested using a computer configuration (i.e., hardware, operating system, web browser) that at a minimum matches the Baseline Home Computer Configuration.</p>"
      },
      {
        ruleNumber: "3.1.3",
        ruleName: "Conformance Testing Tools",
        ruleDescriptionMarkup: "<p>All LCOs must be validated with conformance testing tools and methods required by the Army for the specific IMI type.</p>"
      },
      {
        ruleNumber: "3.2.1",
        ruleName: "SCORM Strict Mode",
        ruleDescriptionMarkup: "<p>All SCOs must be tested on the target delivery platform testing environment using strict conformance settings when available. Any configuration options that relax conformance shall not be active.</p>"
      },
      {
        ruleNumber: "3.2.2",
        ruleName: "SCORM Conformance Testing Tools",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition content packages and SCOs must be pass the validation tests in the following conformance testing tools:</p>" +
          "<ul>" +
          "<li>ADL SCORM 2004 3rd Edition Conformance Test Suite</li>" +
          "<li>SCORM Resource Validator</li>" +
          "<li>Metadata Editor</li>" +
          "<li>Army Multi Log Parser</li>" +
          "</ul>"
      },
      {
        ruleNumber: "3.2.2.1",
        ruleName: "ADL Scorm 2004 3rd Edition Conformance Test Suite Result",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition content packages and SCOs must produce a passing result using the ADL Scorm 2004 3rd Edition Conformance Test Suite's Content Package Conformance Test.</p>"
      },
      {
        ruleNumber: "3.2.2.2",
        ruleName: "Resource Validator Result",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition content packages and SCOs must produce a passing result using the Resource Validator.</p>"
      },
      {
        ruleNumber: "3.2.2.3",
        ruleName: "Metadata Editor Result",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition content packages and SCOs must produce a passing result using the Metadata Editor's Batch Validate feature.</p>"
      },
      {
        ruleNumber: "3.2.2.4",
        ruleName: "Army Multi Log Parser Result",
        ruleDescriptionMarkup: "<p>All SCORM 2004 3rd Edition content packages and SCOs must produce a passing result using the Army Multi Log Parser.</p>"
      }
    ]
  }, /**** End Testing Business Rules ****/

  /**** Delivery Business Rules ****/
  {
    ruleSectionName: "Delivery",
    rules: [
      {
        ruleNumber: "4.1.1",
        ruleName: "Content Package Deliverables",
        ruleDescriptionMarkup: "<p>All LCOs must be contained in an approved content package format that the ALCMC delivery platform natively supports.</p>"
      },
      {
        ruleNumber: "4.1.2",
        ruleName: "Gold Copy Deliverables",
        ruleDescriptionMarkup: "<p>A \"gold copy\" of all LCOs and all file-based content that is consumable by the learner must be delivered to the Government on a physical medium such as DVD-ROM.</p>"
      },
      {
        ruleNumber: "4.1.3",
        ruleName: "Source Material Deliverables",
        ruleDescriptionMarkup: "<p>All other contract deliverables aside from LCOs, such as development source files, answer keys and test logs, must be delivered to the Government in a usable format and include any supporting software or tools.</p>"
      },
      {
        ruleNumber: "4.2.1",
        ruleName: "SCORM Content Package Deliverables",
        ruleDescriptionMarkup: "<p>All SCOs for use by learners must be contained in a package interchange file (PIF) per the SCORM 2004 3rd Edition specification that the ALCMC delivery platform natively supports.</p>"
      },
      {
        ruleNumber: "4.2.2",
        ruleName: "SCORM Validation Deliverables",
        ruleDescriptionMarkup: "<p>All SCOs delivered to the Army must also be accompanied by proof of passing results from Army SCORM 2004 3rd Edition conformance testing tools.</p>"
      }
    ]
  } /**** End Delivery Business Rules ****/
];
