import CommentData from './CommentData';

let currentID = 3;

export default class CommentApi {
	static getAllComments() {
		return JSON.parse(JSON.stringify(CommentData.comments));
	}

	static saveComment(comment) {
		comment.id = ++currentID;
		CommentData.comments.push(comment);
	}
}
