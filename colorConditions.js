function myFunction() {

  // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number between 1 and 10.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("g1:g314");
// var rule = SpreadsheetApp.newConditionalFormatRule()
//       .whenNumberBetween(4,4)
//       .setBackground("#2b5162")
//       .setRanges([range])
//       .build();
// var rule = SpreadsheetApp.newConditionalFormatRule()
//       .whenNumberBetween(2,2)
//       .setBackground("#4fdfc9")
//       .setRanges([range])
//       .build();
// var rule = SpreadsheetApp.newConditionalFormatRule()
//       .whenNumberBetween(5,5)
//       .setBackground("#27909e")
//       .setRanges([range])
//       .build();
// var rule = SpreadsheetApp.newConditionalFormatRule()
//       .whenNumberBetween(6,6)
//       .setBackground("#2b6476")
//       .setRanges([range])
//       .build();
var rule1=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(1,1)
.setBackground("#4fdfc9")
.setRanges([range])
.build();
var rule2=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(2,2)
.setBackground("#4adac7")
.setRanges([range])
.build();
var rule3=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(3,3)
.setBackground("#44d4c5")
.setRanges([range])
.build();
var rule4=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(4,4)
.setBackground("#40cfc3")
.setRanges([range])
.build();
var rule5=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(5,5)
.setBackground("#3bcac1")
.setRanges([range])
.build();
var rule6=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(6,6)
.setBackground("#37c5be")
.setRanges([range])
.build();
var rule7=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(7,7)
.setBackground("#34bfbc")
.setRanges([range])
.build();
var rule8=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(8,8)
.setBackground("#30bab9")
.setRanges([range])
.build();
var rule9=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(9,9)
.setBackground("#2eb5b6")
.setRanges([range])
.build();
var rule10=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(10,10)
.setBackground("#2bb0b3")
.setRanges([range])
.build();
var rule11=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(11,11)
.setBackground("#2aaab0")
.setRanges([range])
.build();
var rule12=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(12,12)
.setBackground("#28a5ac")
.setRanges([range])
.build();
var rule13=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(13,13)
.setBackground("#28a0a9")
.setRanges([range])
.build();
var rule14=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(14,14)
.setBackground("#279ba5")
.setRanges([range])
.build();
var rule15=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(15,15)
.setBackground("#2796a2")
.setRanges([range])
.build();
var rule16=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(16,16)
.setBackground("#27909e")
.setRanges([range])
.build();
var rule17=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(17,17)
.setBackground("#288b9a")
.setRanges([range])
.build();
var rule18=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(18,18)
.setBackground("#288696")
.setRanges([range])
.build();
var rule19=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(19,19)
.setBackground("#298192")
.setRanges([range])
.build();
var rule20=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(20,20)
.setBackground("#297c8d")
.setRanges([range])
.build();
var rule21=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(21,21)
.setBackground("#2a7789")
.setRanges([range])
.build();
var rule22=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(22,22)
.setBackground("#2a7284")
.setRanges([range])
.build();
var rule23=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(23,23)
.setBackground("#2b6d80")
.setRanges([range])
.build();
var rule24=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(24,24)
.setBackground("#2b697b")
.setRanges([range])
.build();
var rule25=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(25,25)
.setBackground("#2b6476")
.setRanges([range])
.build();
var rule26=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(26,26)
.setBackground("#2c5f71")
.setRanges([range])
.build();
var rule27=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(27,27)
.setBackground("#2c5a6c")
.setRanges([range])
.build();
var rule28=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(28,28)
.setBackground("#2b5667")
.setRanges([range])
.build();
var rule29=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(29,29)
.setBackground("#2b5162")
.setRanges([range])
.build();
var rule30=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(30,30)
.setBackground("#2b4c5d")
.setRanges([range])
.build();
var rule31=SpreadsheetApp.newConditionalFormatRule()
.whenNumberBetween(31,31)
.setBackground("#2a4858")
.setRanges([range])
.build();

var rules = sheet.getConditionalFormatRules();
rules.push(rule1,rule2,rule3,rule4,rule5,rule6,rule7,rule8,rule9,rule10,rule11,rule12,rule13,rule14,rule15,rule16,rule17,rule18,rule19,rule20,rule21,rule22,rule23,rule24,rule25,rule26,rule27,rule28,rule29,rule30,rule31);
sheet.setConditionalFormatRules(rules);
}
