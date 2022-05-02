import {useParams, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {PostDetail} from "../../components";

const SinglePostPage = () => {

    const {state} = useLocation();
    const [post, setPosts] = useState(state);
    const {id} = useParams();

    useEffect(()=>{
        if(!state){
            postsService.getById(id).then(({data})=>setPosts(data))
        }else {
            setPosts(state)
        }
    },[id, state])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {SinglePostPage};