import Post from '~/componet/post'
import {posts as postData} from'~/mock/posts'
import {WVList} from'virtua'
import { useState } from 'react'
export default function ForYou(){
    const [posts, setposts] = useState(postData)

    return (
        <WVList
        onRangeChange={(start, end) => {
            console.log('end', end + 1)
            if (end + 1 === posts.length) {
                setposts(prev => [...prev, ...postData])
            }
        }}
    >
           {posts.map(post => <Post post={post} key={post.id}/>)}
        </WVList>
    )
}