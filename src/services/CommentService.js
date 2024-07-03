class CommentService {
    commentsUrl = "https://jsonplaceholder.typicode.com/comments";

    async getCommentsByPostId(postId) {
        const response = await fetch(`${this.commentsUrl}?postId=${postId}`);
        if ( !response.ok ) {
            throw new Error("Failed to fetch comments!")
        }
        return await response.json();
    }
}

export const commentService = new CommentService();