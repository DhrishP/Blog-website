import Post from "./Components/Post";


export default function Home() {
  return (
<>
<div className="flex flex-wrap items-center justify-center h-screen ">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, ex vitae tincidunt mollis, odio felis condimentum mauris, id finibus lectus justo eu arcu.</p>
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
         
            <div className="font-semibold text-3xl mt-10">Links <span className="text-md">👇</span></div>
              <Post/>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <img src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" className="rounded" />
      </div>
    </div>
</>
  )
}
