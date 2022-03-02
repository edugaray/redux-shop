import axios from "axios";


// A mock function to mimic making an async request for data

const productApi = async () => {
	const url = './data.json';
	try {
		const response = await axios.get(url);
	return response.data;
	}
	catch (err) {
		console.log(err);
	}
}
export default productApi();