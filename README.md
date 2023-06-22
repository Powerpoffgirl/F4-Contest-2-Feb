Deployed website link: https://aesthetic-pithivier-f6326a.netlify.app/

Create a social media feed application that allows users to browse and like posts - Here are all the things it needs to have:

A flex of posts, each containing an username, post content, and an image and a button to like the post
A button to load more posts from the API when the user reaches the end of the current list - API : https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20
A count of the number of likes the user has given in the current session
A search bar to filter posts based on the title of the post
Since the image is not coming in the api result use this as your image src in the post component - https://picsum.photos/200?random=${post.id} where post.id is the id given in the object returned by api.

To implement this, you'll need to use the useState hook to manage the state of the posts, the number of likes, and the search term entered by the user. You'll also need to use the useEffect hook to make an API call to get the initial posts.

Make 2 components - search components to filter, post component which will have the state of likes etc, rest everything else can be in your App.js

Figma Link- https://www.figma.com/file/B3y2KYvExAvB9gXIG6tm3K/F4---Contest-2?node-id=0%3A1&t=7ZwQVXA2ASOFX2wO-1"
