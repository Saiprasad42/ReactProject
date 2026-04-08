import axios from 'axios';

export default class IssueApi {
	static async getAllIssues() {
		try {
			const response = await axios.get('http://localhost:3000/issues');
			return response.data;
		} catch (error) {
			console.log(`getAllIssues failed: ${error.message}`);
			throw error;
		}
	}

	static async submitIssue(issue) {
		try {
			const response = await axios.post('http://localhost:3000/issues',issue);
			return response.data;
		} catch (error) {
			console.log('Error:', error);
			throw error;
		}
	}
	static async deleteIssue(id) {
		try {
			const response = await axios.delete(`http://localhost:3000/issues/${id}`);
			return response.data;
		} catch (error) {
			console.log(`deleteIssue failed: ${error.message}`);
			throw error;
		}
	}
}
