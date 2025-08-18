const students = [];

const getTop = (list, score) => {
	return list.filter((item) => item.score >= score);
};

const getAverage = (list) => {
	return (list.reduce((result, item) => (result += item.score), 0) / list.length).toFixed(2);
};

const addLabel = (list) => {
	getTop(list, 90).map((item) => {
		item.label = "Excellent";
	});
	return list;
};

const addStudent = (list, student) => {
	list.push(student);
};

const $ = document;
const name = $.querySelector("#name");
const score = $.querySelector("#score");
const form = $.querySelector("form");
const list = $.querySelector(".list");
const average = $.querySelector("#average");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	addStudent(students, { name: name.value, score: Number(score.value) });
  list.innerHTML = ""
	students.forEach((item) => {
		const li = $.createElement("li");
		li.classList.add("list-item");
		li.innerHTML = `Name: ${item.name} - Score: ${item.score}`;
		list.appendChild(li);
		average.innerHTML = getAverage(students);
	});
	name.value = "";
	score.value = "";
});
