// sanitization
function sanitize(string) {
	return string.replace(/</g, '&lt;' )
			     .replace(/>/g, '&gt;');
}

// Tagged templates
const safeHTML = (template, ...expressions) => {
	return template.reduce((first, second, i) => {
		return first + sanitize(expressions[i-1]) + second;
	});
};

//declaring the variables
const comments = [];
const currentdate = new Date();
const datetime = `Date: ${currentdate.getDate()}.${currentdate.getMonth()+1}.${currentdate.getFullYear()}
| Time: ${currentdate.getHours()}:${currentdate.getMinutes()}`
const input = document.querySelector("#user-input");
const button = document.querySelector("#comment");
const target = document.querySelector("#target");

// creating the render method to display the input text as html
const render = () => {
	console.log(comments);
		const commentItem = comments.map(comment => safeHTML`<li>${datetime} <br> Comment: ${comment} </li>`)
								    .join('');
		console.log(commentItem);
		target.innerHTML = commentItem;	
} 

// creating the addTodo to add the value from the input in comments array
const addTodo = (e) => {
	const element = document.querySelector("#error");
	if (input.value != ''){
		comments.push(input.value);
		input.value = '';
		element.classList.remove("displayError");
		render();
	} else {
		// creating error message
    	element.classList.add("displayError");
	}
}


// adding event listener for the comment button
button.addEventListener('click', addTodo);

var date = new Date();
const oldYear = date.getYear();
const newYear = date.getFullYear();
console.log(oldYear);
console.log(newYear);