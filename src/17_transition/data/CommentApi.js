import axios from 'axios';

export default class CommentApi {   
    static async getAllComments(){
        try{
            const response = await axios.get('http://localhost:3000/comments');
			return response.data;
		} catch(error) {
			console.log(`getAllComments failed: ${error.message}`);
			throw error;
		}
    }

    static async submitComment(comment) {
        try{
            const response = await axios.post('http://localhost:3000/comments',comment);
            return response.data;
        } catch(error) {
            console.log(`submitComment failed: ${error.message}`);
            throw error;
        }
    }

    /*static async deleteIssue(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/issues/${id}`);
            return response.data;
        }catch(error) {
            console.log(`deleteIssue failed: ${error.message}`);
            throw error;
        }
    } */
}