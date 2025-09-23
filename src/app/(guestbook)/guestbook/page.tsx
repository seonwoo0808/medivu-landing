import Link from 'next/link'
import qrcode from '@/images/qrcode-medivu.co.png'

export default function GuestbookPage() {
  return (
    <div className="min-h-screen content-center bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="item-center relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Guestbook
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-300">
            We are launching soon. Sign up to get notified when we launch.
          </p>
          <div className="my-10 flex justify-center">
            <img
              src={qrcode.src}
              alt="Description of image"
              className="h-96 w-96 rounded-2xl bg-white/70 p-3 shadow-lg ring-1 ring-white/90"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href={'/guestbook/form'}
              className="flex-none rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
            >
              No Mobile Phone? Write with this device
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
