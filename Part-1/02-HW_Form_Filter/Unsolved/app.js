// Assign the data from `data.js` to a descriptive variable
var people = data;
// Select the button
var button = d3.select("#button");

// Complete the click handler for the form
button.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");
  // Get value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Use the form input to filter the data by blood type
  function filterBlood (blood){
    return blood.bloodType == inputValue
  };
  var filtered =  people.filter(filterBlood)
  console.log(filtered);

  // BONUS: Calculate summary statistics for the age field of the filtered data
var age = filtered.map(person=>person.age);
  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
var mean = math.mean(age);
var median = math.median(age);
var mode = math.mode(age);
var variance = math.var(age);
var standard = math.std(age);
  // Finally, add the summary stats to the `ul` tag
var list=d3.select(".summary");
list.html("");
list.append("li").text(mean);
list.append("li").text(median);
list.append("li").text(mode);
list.append("li").text(variance);
list.append("li").text(standard);

});

// var tbody = d3.select("tbody");

// // Use d3 to create a bootstrap striped table
// // // http://getbootstrap.com/docs/3.3/css/#tables-striped
// table.attr("class", "table-striped");

// data.forEach((bloodTaable) => {
//   var row = tbody.append("tr");
//   Object.entries(bloodTable).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });



