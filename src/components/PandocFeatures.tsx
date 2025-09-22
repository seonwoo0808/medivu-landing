'use client'

import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import React from 'react'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: () => React.ReactNode
}

const features: Array<Feature> = [
  {
    name: 'LLM-based Report Generation',
    summary: 'From CT/MRI/X-Ray to structured reports in seconds.',
    description:
      'Generate comprehensive diagnostic reports in seconds using advanced LLM technology, reducing paperwork and allowing you to focus on patient care.',
    image: screenshotProfitLoss,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M7 14a3 3 0 1 0 1 5.83" />
          <path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m2 4a3 3 0 1 1-1 5.83" />
          <path d="M19.736 15.605a4 4 0 0 0 .874-6.636m-.03-.081A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0" />
        </g>
      </svg>
    ),
  },
  {
    name: 'PACS Auto Integration',
    summary:
      'Seamlessly integrates with existing PACS systems for efficient workflow.',
    description:
      'Pandoc.io integrates seamlessly with your existing PACS systems, allowing for automatic retrieval and storage of imaging data, streamlining your workflow and enhancing productivity.',
    image: screenshotInventory,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="#fff" strokeWidth="1.5">
          <path strokeLinecap="round" d="M4 18V6m16 0v12" />
          <path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z" />
          <path d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity="0.5" />
          <path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Secure Independent Operation',
    summary:
      'Operates independently within your hospital network for enhanced security.',
    description:
      'Pandoc.io is designed to operate independently within your hospital network, ensuring that sensitive patient data remains secure and compliant with healthcare regulations.',
    image: screenshotContacts,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M3 4.65V12c0 7.35 9 10.5 9 10.5s9-3.15 9-10.5V4.65L12 1.5z"
            clipRule="evenodd"
          />
          <path
            stroke="#fff"
            strokeLinecap="square"
            strokeWidth="2"
            d="M3 4.65V12c0 7.35 9 10.5 9 10.5s9-3.15 9-10.5V4.65L12 1.5z"
            clipRule="evenodd"
          />
          <path
            stroke="#fff"
            strokeLinecap="square"
            strokeWidth="2"
            d="M8.173 11.172L11 14l5.657-5.657"
          />
        </g>
      </svg>
    ),
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'h-9 w-9 rounded-lg',
          isActive ? 'bg-violet-600' : 'bg-slate-500',
        )}
      >
        <div className="flex h-full items-center justify-center">
          <feature.icon />
        </div>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-violet-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export default function PandocFeatures() {
  return (
    <section
      id="pandoc-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Introducing Pandoc.io
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Pandoc.io is a powerful tool that generates AI reports and
            integrates with existing systems.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
