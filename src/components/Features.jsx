import React from "react";

function Features() {

  const features = [
    {
      title: 'Track company-wide progress',
      text: `See how your day-to-day tasks fit into the wider vision. Go from
      tracking progress at the milestone level all the way done to the
      smallest of details. Never lose sight of the bigger picture
      again.`,
    },
    {
      title: 'Advanced built-in reports',
      text: `Set internal delivery estimates and track progress toward
      company goals. Our customisable dashboard helps you build out
      the reports you need to keep key stakeholders informed.`,
    },
    {
      title: 'Everything you need in one place',
      text: `Stop jumping from one service to another to communicate, store
      files, track tasks and share documents. Manage offers an
      all-in-one team productivity solution.`,
    },
  ]

  return (
    <section id="features">
      {/* <!-- Flex container --> */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* <!-- What's Different --> */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl text-darkBlue font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-wd-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Out software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* <!-- Numbered list --> */}
        <div className="flex flex-col space-y-8 md:w-1/2">

          {features.map((feature, index) => (
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- Heading --> */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="py-2 text-white font-bold text-center rounded-full md:py-1 bg-brightRed w-14">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-base text-darkBlue font-bold md:mb-4 md:hidden">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-darkBlue text-lg font-bold md:block">
                  {feature.title}
                </h3>
                <p className="text-darkGrayishBlue">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
      
        </div>
      </div>
    </section>
  );
}

export default Features;
