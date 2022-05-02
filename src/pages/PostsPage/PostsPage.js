import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../../components";
import {Outlet, useParams} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(()=>{
        if (userId){
            postsService.getByUserId(userId).then(({data})=>setPosts(data))
        }else{
            postsService.getAll().then(({data})=>setPosts(data))
        }
    },[])

    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post=><Post key={post.id} post={post} flag={!userId}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};


export {PostsPage};