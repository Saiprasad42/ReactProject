import axios from 'axios';

export default class CommentApi {
	static async getAllComments() {
		try {
			const response = await axios.get('http://localhost:3000/comments');
			return response.data;
		} catch (error) {
			console.log(`getAllComments failed: ${error.message}`);
			throw error;
		}
	}

	static async saveComment(comment) {
		try {
			const response = await axios.post('http://localhost:3000/comments', comment);
			return response.data;
		} catch (error) {
			console.log(`saveComment failed: ${error.message}`);
			throw error;
		}
	}

	/*static async deleteComment(id) {
		try {
			const response = await axios.delete(`http://localhost:3000/comments/${id}`);
			return response.data;
		} catch (error) {
			console.log(`deleteComment failed: ${error.message}`);
			throw error;
		}
	}*/
}
