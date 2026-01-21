const blogPost = {
    title: 'My regular routine',
    body: ' Usually I wake up brush my teeth, eat breakfast and go to school. After that I study and relax!',
    author: 'Mark',
    views: 1245,
    comments: [
        { author: 'Anonymous', body: 'Wow such a great blog!!' },
        { author: 'Charlie', body: 'Cant wait for another blog.' }
    ],
    isLive: true
};

console.log(blogPost);

function Post (title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};

let post = new Post('My first Blog','This is a body of my blog, which is not posted yet','John');
console.log(post);
