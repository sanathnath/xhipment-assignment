import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function PostContext({ children }) {
  const [post, setPost] = useState();
  return (
    <Context.Provider value={{ post, setPost }}>
        {children}
    </Context.Provider>
  );
}

export const PostState = () => {
  return useContext(Context);
};
export default PostContext;
