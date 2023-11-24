import React,{useState} from 'react'

export default function SignIn() {
    const [formData, setFormData] = useState({});
    // const [user, setUser] = useState({
    //     originalImage: "",
    //     originalVideo: "",
    //     userId: "",
    //     taggedUsers: "",
    //     convertedImageUrl: "",
    //     convertedVideoUrl: "",
    //     contentType: "",
    //     AiData: "",        
    // });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      }
      console.log(formData);
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="originalImage" className="block text-sm font-medium leading-6 text-gray-900" >Original Image</label>
        <div className="mt-2">
          <input id="originalImage" name="originalImage" type="file" autoComplete="originalImage" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <label htmlFor="originalVideo" className="block text-sm font-medium leading-6 text-gray-900">original Video</label>
        <div className="mt-2">
          <input id="originalVideo" name="originalVideo" type="file" autoComplete="originalVideo" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">user Id</label>
        <div className="mt-2">
          <input id="userId" name="userId" type="text" autoComplete="userId" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="taggedUsers" className="block text-sm font-medium leading-6 text-gray-900">tagged Users</label>
        <div className="mt-2">
          <input id="taggedUsers" name="taggedUsers" type="text" autoComplete="taggedUsers" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="convertedImageUrl" className="block text-sm font-medium leading-6 text-gray-900">converted Image Url</label>
        <div className="mt-2">
          <input id="convertedImageUrl" name="convertedImageUrl" type="url" autoComplete="convertedImageUrl" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="convertedVideoUrl" className="block text-sm font-medium leading-6 text-gray-900">converted Video Url</label>
        <div className="mt-2">
          <input id="convertedVideoUrl" name="convertedVideoUrl" type="url" autoComplete="convertedVideoUrl" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="contentType" className="block text-sm font-medium leading-6 text-gray-900">content Type</label>
        <div className="mt-2">
          <input id="contentType" name="contentType" type="text" autoComplete="contentType" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="AiData" className="block text-sm font-medium leading-6 text-gray-900">AI Data</label>
        <div className="mt-2">
          <input id="AiData" name="AiData" type="text" autoComplete="AiData" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
  </div>
</div>
  )
}
