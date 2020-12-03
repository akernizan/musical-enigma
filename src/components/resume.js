import React, { useState } from "react";

const Resume = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-11/12 mx-10'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'>
                Buffy | Fullstack Engineer, New York, NY 2019 - 2020
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'>
                BounceX | Software Engineer, New York, NY 2016 - 2019
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'>
                Sesame Workshop | Frontend Developer, New York, NY 2015 - 2016
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? "block" : "hidden"} id='link1'>
                  <ul className='list-disc list-inside'>
                    <li>
                      Optimized legacy codebase with Gatsbyjs and Contentful to
                      transition to a highly performant headless state in order
                      to follow the latest web standards as well as refactor and
                      remove redundant code.
                    </li>
                    <li>
                      Leveraged Cypress testing to document the core
                      functionality of the code relying on the ease of
                      debuggability and cross-browser testing.
                    </li>
                    <li>
                      Maintained legacy Shopify site using Liquid, jQuery, and
                      yarn to preserve the stability of the codebase.
                    </li>
                    <li>
                      Worked with Product and Design teams to replicate
                      wireframes from Abstract and Sketch.
                    </li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id='link2'>
                  <ul className='list-disc list-inside'>
                    <li>
                      Produced GDPR compliant custom client campaign
                      integrations using JavaScript, jQuery, and Php.
                    </li>
                    <li>
                      Built in house application, using Php and SQL, to
                      visualize client tracking variables and all of the
                      campaigns they effected. To reduce redundancy and to make
                      code removal easier.
                    </li>
                    <li>
                      Streamlined the email service provider(ESP) integration
                      process through the creation and dispersal of custom
                      documentation.
                    </li>
                    <li>
                      Conducted intra-departmental presentations on the proper
                      debugging process of ESP campaigns/APIs, leading to faster
                      turnaround and better communication.
                    </li>
                    <li>
                      Provided onboarding training and technical mentorship to
                      other engineers via code reviews and peer programming.
                    </li>
                    <li>
                      Utilized TDD to build new features and products for
                      clients to make sure integrations did not break the
                      clients’ sites.
                    </li>
                  </ul>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id='link3'>
                  <ul className='list-disc list-inside'>
                    <li>
                      Constructed "Special Projects Department" portfolio site
                      using jQuery, uiBootstrap, and AngularJs to utilize it’s
                      MVC architecture and streamline the codebase for easier
                      updates.
                    </li>
                    <li>
                      Created custom HTML/CSS/JavaScript English learning games
                      for preK children in China and Japan using a custom
                      content management system.
                    </li>
                    <li>
                      Worked directly with project managers, animators, and
                      writers to discuss code limitations and alternatives to
                      meet deadlines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
