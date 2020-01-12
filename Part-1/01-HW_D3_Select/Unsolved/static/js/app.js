// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table.attr("class","table table-striped");
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

grades.forEach(function(studentGrades){
    console.log(studentGrades);
})

grades.forEach((studentGrades) => {
  var row = tbody.append("tr");
  Object.entries(studentGrades).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

