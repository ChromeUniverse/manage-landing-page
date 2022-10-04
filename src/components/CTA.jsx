import React from 'react'
import Button from './Button'

function CTA() {
  return (
    <section id="cta" className="bg-brightRed">
    {/* <!-- Flex container --> */}
    <div
      className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:px-12 md:flex-row md:space-y-0">
      {/* <!-- Heading --> */}
      <h2 className="md:w-1/2 text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Simplify how your team works today.
      </h2>
      <Button invert/>
    </div>
  </section>
  )
}

export default CTA