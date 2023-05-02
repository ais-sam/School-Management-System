import { Button, Label, TextInput } from "flowbite-react"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/home')
  }
  return (
    <div className="bg-d-blue flex items-center justify-center w-full h-screen">
      <div>
        <h2 className="text-center mb-6 font-bold text-4xl text-white">Welcome</h2>
        <form className="flex flex-col gap-4 bg-white p-6 rounded-md lg:w-80 text-start" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@email.com"
              required={false}
              className=" rounded-none"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required={false} />
          </div>
          
          <Button className="bg-d-red hover:bg-d-blue rounded-md mt-3" type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default Login