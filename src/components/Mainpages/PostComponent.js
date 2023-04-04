import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, CardHeader, CardImg, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';

function RenderPostContent({posts}) {
    return (
        posts.posts.map(post => (
          <RenderPostItem key={post.id} post={post} />
        ))
      );
}

function RenderPostItem({post}){
    return(
        <Card className="mb-3">
            <CardHeader><h6>{post.name}</h6></CardHeader>
            {post.image ? <CardImg src={baseUrl + post.image} width="100%" height="250px"/> : null}
                    <CardBody>
                        <CardText>{post.content}
                        </CardText>
                    </CardBody>
                    <CardFooter className="text-right text-muted small"><p>
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(post.updatedAt)))}
                    </p></CardFooter>
        </Card>
    )
}

const Post = (props) => {
    // const post = props.post.map((post)=>{
    //     return(
    //             <div key={post.id} className="col-6 m-3">
    //             <RenderPostItem post={post}/>
    //         </div>

    //     );
    // });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="m-1">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Posts</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Posts</h3>
                    <hr />
                </div>
            </div>
            <div className="col-6 m-3">
            <div className="d-flex flex-column-reverse">
            <RenderPostContent 
            posts={props.post}
            />
            </div>
            </div>
        </div>
    )
}

export default Post;