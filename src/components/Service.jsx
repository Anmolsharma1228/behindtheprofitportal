import React from 'react'

const Service = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-black text-white py-12">
      <h1 className='text-center font-bold text-3xl py-6 text-yellow-500'>Services</h1>
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 text-center gap-8">
    <div className="px-4 py-10 bg-gray-900 rounded-xl shadow">
      <h3 className="text-2xl font-semibold text-yellow-400">Alpha move stategy</h3>
      <p className="mt-2 text-gray-400 text-lg">Event based and for seasonal purpose</p>
    </div>
    <div className="px-4 py-10 bg-gray-900 rounded-xl shadow">
      <h3 className="text-2xl font-semibold text-green-400">BTP turbotrades stategy</h3>
      <p className="mt-2 text-gray-400 text-lg">For builidng your portfolio , long term..</p>
    </div>

  </div>
</section>

  )
}

export default Service