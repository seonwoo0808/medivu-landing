'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotPandoc from '@/images/screenshots/pandoc.png'

const features = [
  {
    title: 'PanDoc.io AI Report',
    description:
      'Generate comprehensive diagnostic reports in seconds using advanced AI algorithms, reducing paperwork and allowing you to focus on patient care.',
    image: screenshotPandoc,
  },
  {
    title: 'Remote Consultation (Preparing)',
    description:
      'Connect with patients anytime, anywhere through our secure telemedicine platform, ensuring continuous care and convenience for both doctors and patients.',
    image: null,
  },
]

export function Overview() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="overview"
      aria-label="Products overview"
      className="relative overflow-hidden bg-violet-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your medical practice
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Medivu offers a comprehensive suite of products designed to
            streamline medical workflows and enhance patient care.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg data-selected:not-data-focus:outline-hidden lg:text-white',
                            feature.image === null
                              ? 'cursor-not-allowed'
                              : selectedIndex === featureIndex
                                ? 'text-blue-600 lg:text-white'
                                : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                          disabled={feature.image === null}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    {feature.image === null ? (
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          Preparing content. Please check back later.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="relative sm:px-6 lg:hidden">
                          <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                          <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                            {feature.description}
                          </p>
                        </div>
                        <div className="mt-10 w-180 overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-271.25">
                          <Image
                            className="w-full"
                            src={feature.image}
                            alt=""
                            priority
                            sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                          />
                        </div>
                      </>
                    )}
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
