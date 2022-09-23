# Plotly_Belly_Button_Biodiversity


## Overview 
The partially completed dashboard displays demographic information but now needs to visualize the bacterial data for each volunteer. Specifically, volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, the volunteers will be able to identify whether that species is found in their navel.

## Resources
### Data Source 
- [samples.json](https://github.com/lkachury/Plotly_Belly_Button_Biodiversity/blob/main/samples.json) file

### Software
- Visual Studio Code 1.69
- JavaScript and HTML
- Bootstrap 3 and CSS
- Chrome Developer Tools
- D3 (Data Driven Document) Javascript library

## Results
For reference: 
- The complete [index.html](https://github.com/lkachury/Plotly_Belly_Button_Biodiversity/blob/main/index.html) file used to build the webpage
- The complete [charts.js](https://github.com/lkachury/Plotly_Belly_Button_Biodiversity/blob/main/charts.js) file used to build the graphs in the webpage
- The complete [style.css](https://github.com/lkachury/Plotly_Belly_Button_Biodiversity/blob/main/static/css/style.css) file used to style the webpage

### Deliverable 1: Create a Horizontal Bar Chart 
Using JavaScript, Plotly, and D3.js, a horizontal bar was created chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart displays the ```sample_values``` as the values, the ```otu_ids``` as the labels, and the ```otu_labels``` as the hover text for the bars on the chart. 

1. Code was written to create the arrays when a sample is selected from the dropdown menu:
<br /> ![image](https://user-images.githubusercontent.com/108038989/191837078-54d78dd1-a80a-499e-9d4f-bfb2685c20d8.png)

2. Code was written to create the trace object in the ```buildCharts()``` function, and it contains the following:
- The y values are the ```otu_idsv in descending order
- The x values are the ```sample_values``` in descending order
- The hover text is the ```otu_labels``` in descending order.
<br /> ![image](https://user-images.githubusercontent.com/108038989/191837443-2948fe28-210a-44a6-b390-074431a17264.png)

3. Code was written to create the layout array in the ```buildCharts()``` function that creates a title for the chart:
<br /> ![image](https://user-images.githubusercontent.com/108038989/191837603-e20d591e-5652-49ca-a24a-fbf1d159c6c5.png)

4. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and the bar chart has the following: 
- The top 10 ```sample_values``` are sorted in descending order
- The top 10 ```sample_values``` as values
- The ```otu_ids``` as the labels
<br /> ![image](https://user-images.githubusercontent.com/108038989/191836161-80b3703f-fcf2-4c26-9359-c9f05c509536.png)

### Deliverable 2: Create a Bubble Chart 
Using JavaScript, Plotly, and D3.js, a bubble chart was created that displays the information when an individual’s ID is selected from the dropdown menu webpage. 

1. The code for the trace object in the ```buildCharts()``` function does the following:
- Sets the ```otu_ids``` as the x-axis values
- Sets the ```sample_values``` as the y-axis values
- Sets the ```otu_labels``` as the hover-text values
- Sets the ```sample_values``` as the marker size
- Sets the ```otu_ids``` as the marker colors
<br /> ![image](https://user-images.githubusercontent.com/108038989/191850499-719eeb9b-2a51-4fa4-b69b-35c25232b004.png)

2. The code for the layout in the ```buildCharts()``` function does the following:
- Creates a title
- Creates a label for the x-axis
- The text for a bubble is shown when hovered over
<br /> ![image](https://user-images.githubusercontent.com/108038989/191850424-81565b85-dc85-4b6a-be71-73066fc986bb.png)

3. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard. All three charts work according to their requirements when a sample is selected from the dropdown menu: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/191850640-c601b061-9940-40fc-a64f-45abb6ec96a7.png)

### Deliverable 3: Create a Gauge Chart 
Using JavaScript, Plotly, and D3.js, a gauge chart was created that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.

1. The code to build the gauge chart does the following: 
- Creates a title for the chart.
- Creates the ranges for the gauge in increments of two, with a different color for each increment.
- Adds the washing frequency value on the gauge chart.
- The indicator shows the level for the washing frequency on the gauge.
- The gauge is added to the dashboard.
- The gauge fits in the margin of the ```<div>``` element.
<br /> ![image](https://user-images.githubusercontent.com/108038989/191885267-cbb1a5f0-93da-4bdb-8252-9fef7a743f5b.png)

2. When the webpage loads, the bar and bubble chart are working according to the requirements in Deliverable 1 and 2, respectively, and the gauge chart is working according to the requirements listed for this Deliverable:
<br /> ![image](https://user-images.githubusercontent.com/108038989/191885307-60879ca0-1d1e-4f28-adcb-f2d7402df1cb.png)

### Deliverable 4: Customize the Dashboard
Use HTML and Bootstrap to customize the webpage for the dashboard.

1. The webpage has three customizations: 
- The first customization was adding an image to the jumbotron: <br /> ![image](https://user-images.githubusercontent.com/108038989/191893528-0b052391-00f7-4f10-92b5-171166c38baa.png)

- The second customization was adding some background color: <br /> ![image](https://user-images.githubusercontent.com/108038989/191893819-b88731ba-94f5-4d62-85d1-0c3f2c050f68.png) <br /> ![image](https://user-images.githubusercontent.com/108038989/191893796-ba6282e7-a30b-4246-8ff7-986dec3ad2b8.png) <br /> and then adding a variety of compatible colors to the webpage: <br /> ![image](https://user-images.githubusercontent.com/108038989/191894000-f04da142-8fb3-4489-8dd1-e219f321c5ad.png) <br /> ![image](https://user-images.githubusercontent.com/108038989/191894090-8246ce1e-c281-4e7b-8972-a6baa30b371f.png)

- The third customization was making the webpage mobile-responsive:
<br /> ![image](https://user-images.githubusercontent.com/108038989/191894543-d327dc80-863b-4ea9-8365-e432723879c5.png)

2. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and all three charts are working according to the requirements when a sample is selected from the dropdown menu: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/191893414-cc47b441-3664-4364-b817-c0cd7328eca7.png)

## Summary
The web app was deployed to my GitHub pages: https://lkachury.github.io/Plotly_Belly_Button_Biodiversity/
