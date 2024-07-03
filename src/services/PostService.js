class PostService {
    postsUrl = "https://jsonplaceholder.typicode.com/posts";

    async getPostsByUserId(userId) {
        const response = await fetch(`${this.postsUrl}?userId=${userId}&_limit=20`);
        if ( !response.ok ) {
            throw new Error("Failed to fetch posts!")
        }
        return await response.json();
    }

    async getPost(postId) {
        const response = await fetch(`${this.postsUrl}/${postId}`);
        if ( !response.ok ) {
            throw new Error("Failed to fetch post!")
        }
        return await response.json();
    }

    async addNewPost(newPostBody) {
        const response = await fetch(this.postsUrl, {
            method: 'POST',
            body: JSON.stringify({
                title: newPostBody.title,
                body: newPostBody.body,
                userId: Number(newPostBody.userId),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if( !response.ok ) {
            throw new Error("Failed to add post!")
        }

        return await response.json();
    }

    async editPost(post) {
        const response = await fetch(`${this.postsUrl}/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if ( !response.ok ) {
            throw new Error("Failed to edit post!")
        }

        return await response.json();
    }

    async deletePost(postId) {
        const response = await fetch(`${this.postsUrl}/${postId}`, {
            method: 'DELETE',
        });

        if ( !response.ok ) {
            throw new Error("Failed to edit post!")
        } else {
            console.log("Successfully deleted!");
        }
    }
}

export const postService = new PostService();