// import { useWallet } from "@solana/wallet-adapter-react";
// import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
// import { useEffect, useState } from "react";
// import { Button } from "src/components/Button";
// import { PostForm } from "src/components/PostForm";
// import { useBlog } from "src/context/Blog";
// import { useHistory } from 'react-router-dom';

// export const Dashboard = () => {
//     const history = useHistory()

//     const [connecting, setConnecting] = useState(false)
//     const { select } = useWallet()

//     const [postTitle, setPostTitle] = useState("")
//     const [postContent, setPostContent] = useState("")
    
//     // Static Data
//     const user = {
//         name: "Random Robot",
//         avatar: "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg",
//     }

//     const connected = true
//     const posts = []
//     const createPost = () => {

//     }
//     const showModal = false
//     const setShowModal = () => {

//     }
// }

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Test1 from './Test1'; // Your component for listing discussions
import Test2 from './Test2'; // Your component for viewing a discussion

function Discussion(){
    return (
        <div>
        <Routes>
          <Route path="/pa" element={<Test1 />} />
          <Route path="/pb" element={<Test2 />} />
        </Routes>
        <h1>Discussion</h1> {/* This should ideally be outside the <Routes> */}
       
<Link to="/discussion/pa">Go to Test1</Link>
<Link to="/discussion/pb">Go to Test2</Link>
      </div>
    );
}
export default Discussion;