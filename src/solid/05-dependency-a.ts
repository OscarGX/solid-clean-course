import { PostService } from './05-dependency-b';
import { ApiService, JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {
    const localProvider = new LocalDataBaseService();
    const jsonProvider = new JsonDatabaseService();
    const apiProvider = new ApiService();
    const postService = new PostService(apiProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();