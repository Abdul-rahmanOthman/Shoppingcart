import React, { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password"  value={password} onChange={(e)=>setpassword(e.target.value)} />
<h4>{username} {password}</h4>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
