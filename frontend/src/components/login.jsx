import {Button, Card, Checkbox, Label, TextInput, Dropdown, DropdownItem} from "flowbite-react"
import { useState } from "react";

export const LoginForm=()=>{
    const [loginForm, setLoginForm] = useState({
    email:"",
    password: "",
    role: ""
    })

    return<>
                <div className="flex justify-center items-center min-h-screen dark:bg-gray-700">
  <Card className="max-w-md w-full">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
    Login to your account
  </h2>
  <p className="text-sm text-gray-500 text-center mb-4">
    Please enter your details to continue.
  </p>
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" >Email</Label>
        </div>
        <TextInput 
          id="email" 
          type="email" 
          placeholder="user@gmail.com"
          onChange={(e)=>setLoginForm({...loginForm, email:e.target.value})} 
          required 
          shadow 
          />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" >Password</Label>
          </div>
        <TextInput 
          id="password" 
          type="password" 
          placeholder="password"
          onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})} 
          required 
          shadow 
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-2">
     <Label htmlFor="email" value="Your email" >Select Login Type</Label>
  <Dropdown label={loginForm.role.toLocaleUpperCase()|| "Select Role"} >
  <DropdownItem onClick={()=>setLoginForm({...loginForm, role:"admin"})}>ADMIN</DropdownItem>
  <DropdownItem onClick={()=>setLoginForm({...loginForm, role:"user"})}>USER</DropdownItem>
</Dropdown>
</div>
      </div>
      <Button type="submit">Log In</Button>
    </form>
  </Card>
</div>
        </>
}