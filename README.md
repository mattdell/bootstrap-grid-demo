# bootstrap-grid-demo

### Demo
Link to demo: [http://bootstrap-demo.s3-website-eu-west-1.amazonaws.com](http://bootstrap-demo.s3-website-eu-west-1.amazonaws.com)

### Purpose
This demo has been created to demonstrate how column widths are calculated using the bootstrap grid system. When using bootstrap I am often asked how wide is a column by clients and designers and there isn't a clear answer, as, well... it depends. The width of a column in bootstrap is determined by several factors.

### Calculation
First, recall that a column in bootstrap must be a child of a `row` and a row must be a child of a `container` or a `container-fluid`. There should only be one container on a page.

The width of a column is the remainder of what's left over after factoring in

* `container` width
* gutter width either side of 12 columns (15px by default)

A simple calculation for column size would be `(container width - (number of columns * (gutter width * 2))) / number of columns`.

#### When using container
By default there are 4 screen sizes in bootstrap

* x-small
* small
* medium
* large

The width of the container is dependent on the screen size of the client device. Most desktop users will fall into medium or large and most mobile devices will fall into x-small or small.

* x-small will have a `container` width of 100% screen size, or its parent element. This results in a variable column width.
* small will have a `container` of 750px. This results in a column width of 32.5px or roughly 33px.
* medium will have a `container` of 970px. This results in a column width of 50.8333px or roughly 51px.
* large will have a `container` of 1170px. This results in a column width of 67.5px or roughly 68px.

Taking the calculation above and using a large screen and 15px gutters the calculation is `(1170 - (12 * (15 * 2))) / 12 = 67.5`

#### When using container-fluid
`container-fluid` disregards page sizes and its width is simply 100% of screen size, or its parent element. This results in a variable column width that changes with the width of the browser window.

### How to run this repository

* Run `npm install`
* Run `npm start`
* Navigate your browser to [http://localhost:8080](http://localhost:8080)

### Conclusion
Hopefully this is clear to anyone wondering how to calculate the width of a column using a bootstrap grid. If there are any errors please let me know!
