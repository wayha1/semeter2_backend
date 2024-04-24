import React from 'react'
import { FcAddImage } from 'react-icons/fc';


function AddCategory() {
  return (
    <div className='w-[930px] h-[450px] container flex flex-col m-2 space-y-5'>
      <h1 className="container text-2xl font-bold font-style hover:text-cyan-700">
        {"+ បញ្ចូលទិន្នន័យនៃផលិតផល"}
      </h1>

      <input
        placeholder="ឈ្មោះផលិតផល"
        className="p-2 rounded-lg "
      />

      <input
        placeholder="ព័ត៍មាន"
        className="p-2 rounded-lg "
      />

      <input
        placeholder="តម្លៃ"
        className="p-2 rounded-lg "
      />

      <input
        placeholder="ចំនួន"
        className="p-2 rounded-lg "
      />

    <select className="p-2 rounded-lg">
      <option value="hello">None</option>
      <option value="hello">Cleansers & Toners</option>
      <option value="hi">Moisturizers & Creams</option>
      <option value="hi">Serums & Treatments</option>
    </select>

    <label className="relative overflow-hidden inline-block bg-white w-fit px-4 py-2 rounded-xl">
        <input
          type="file"
          accept="image/*"
          className="font-[100px] absolute l-0 t-0 opacity-0"
        />
        <span className="flex text-xl font-bold font-style">
          <FcAddImage className="mt-1 mr-2" /> Upload Product Image
        </span>
      </label>

      <button
        className="bg-blue-500 w-32 rounded-xl p-2 text-white text-lg font-custom"
      >
        {"Upload"}
      </button>
    </div>
  )
}

export default AddCategory