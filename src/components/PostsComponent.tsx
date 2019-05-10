import React, {useEffect, useState} from 'react'
import {IRestResponse, RestClient} from "typed-rest-client/RestClient";
import {IPost} from "./IPost";


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    async function getPosts() {
        let api: RestClient = new RestClient('rest-samples',
            'http://jsonplaceholder.typicode.com')

        let response: IRestResponse<IPost[]> = await api.get<IPost[]>('/posts')

        console.log(response.statusCode)
        setPosts(response.result!)

    }

    useEffect(() => {
        console.log("useEffect in PostsComponent")
        if (posts.length > 0) return
        getPosts()
    })

    return(
        <div>
            {posts.map((item:IPost, key: number) =>
                <div key={key}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <br/>
                </div>
            )}
        </div>
    )

};

export default PostsComponent