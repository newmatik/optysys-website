import Frappe from '../images/frappe.png'

export default function FrappeIncubatorSection() {
    return (
        <div className="bg-gray-950 py-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-4xl font-cal text-white">100% Open Source</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            optysys is built on Frappe Framework and is built using 100% free and open source software.
                        </p>
                        <div className="mt-8 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Our tech stack
                            </a>
                            <a target='_blank' href="https://github.com/newmatik/optysys" className="text-sm font-semibold text-white">
                                Star us on Github <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-xl flex flex-col items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <img
                            className="max-h-14 w-full object-contain"
                            src={Frappe}
                            alt="Frappe"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
