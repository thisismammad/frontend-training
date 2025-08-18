// promises
 
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

const prom = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Done");
	}, 3000);
});

prom.then((data) => {
	console.log(data);
});

fetch("https://jsonplaceholder.typicode.cm/todos/1")
	.then((response) => {
		return response.json();
	})
	.catch((err) => {
		console.log(err); 
	})
	.then((data) => {
		console.log(data);
	});
