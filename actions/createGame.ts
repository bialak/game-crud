const createGame = (event) => {
	event.preventDefault();

	const data = {};

	for (const [name, value] of new FormData(event.target)) {
		data[name as string] = value;
	}

	fetch("api/games", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then(async (response) => await console.log(response.json()));
};

export default createGame;
