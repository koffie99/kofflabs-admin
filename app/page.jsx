import Image from "next/image"
import Login from "./components/Login"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f9fafd] flex items-center justify-center">
      <div>
        <Login />
      </div>
    </div>
  )
}
