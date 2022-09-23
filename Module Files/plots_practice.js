// Create a line chart
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Create a bar chart
//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//};
//var layout = {
//    title: "Luncheon Survey",
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", [trace], layout);

// Create another bar chart
// var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//};
//var layout = {
//    title: "Nonalcoholic Bar Popular Drinks",
//    xaxis: {title: "Drinks"},
//    yaxis: {title: "Percent of Drinks Ordered"}
//};
//Plotly.newPlot("plotArea", [trace], layout);

//var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//    title: "'Bar' Chart",
//    xaxis: {title: "Drinks"},
//    yaxis: {title: "% of Drinks Ordered"}
//   };
//   Plotly.newPlot("plotArea", data, layout);

// Create a pie chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);