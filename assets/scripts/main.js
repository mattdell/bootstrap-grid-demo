const init = () => {

	// Container elements
	const container = document.getElementsByClassName('container')[1];
	const containerFluid = document.getElementsByClassName('container-fluid')[0];
	const containerText = document.getElementsByClassName('container-text')[0];
	const containerFluidText = document.getElementsByClassName('container-fluid-text')[0];

	// Row elements
	const rowText = document.getElementsByClassName('row-text');

	// Column elements
	const cols = document.getElementsByClassName('column');


	// Set container text
	containerText.innerText = `Width of container is ${container.offsetWidth}px`;
	containerFluidText.innerText = `Width of container-fluid is ${containerFluid.offsetWidth}px`;

	// Set row text
	_.each(rowText, (row, index) => row.innerText = `Row ${index + 1}`);

	// Set column text
	_.each(cols, col => {
	  const className = col.classList[0]
	  _.each(col.childNodes, child => {
	    child.innerText = `${className}\n${child.offsetWidth}px`
	  })
	})
}

init();

window.addEventListener('resize', init);
