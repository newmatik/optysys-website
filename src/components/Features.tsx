import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react';

const features = [
    {
        name: 'Lorem ipsum dolor sit amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue.',
        video: "videos/Channels.mp4",
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        description:
            'Praesent ut semper nisl. Sed euismod, nisl quis aliquam dapibus, nunc nisl ultricies nunc, nec aliquam nisl nunc quis nisl.',
        video: "videos/DM.mp4",
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        description:
            'Sed euismod, nisl quis aliquam dapibus, nunc nisl ultricies nunc, nec aliquam nisl nunc quis nisl.',
        video: "videos/Files.mp4"
    },
]

export default function Features() {
    return (
        <div className="bg-gray-950 py-0 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold text-white sm:text-4xl font-cal">Lorem Ipsum</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Optysys can run on your ERPNext (or any Frappe) instance, so it doesn't cost anything. Don't use ERPNext or Frappe Cloud? No problem, you can host it yourself.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    {/* <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"> */}
                    {features.map((feature, index) => (
                        <div key={feature.name} className={"flex justify-between pb-16 flex-col lg:flex-row lg:items-center " + (index % 2 === 0 ? "" : "lg:flex-row-reverse")}>
                            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 lg:mx-4">
                                {feature.video &&
                                    <VideoCard video={feature.video} />
                                }
                            </div>
                            <div className='lg:w-1/2 w-full mb-8 lg:mb-0 lg:mx-4'>
                                <dt className="text-2xl font-semibold mb-4 leading-7 text-white">
                                    {feature.name}
                                </dt>
                                <dd className="mt-1flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto text-lg">{feature.description}</p>
                                </dd>
                            </div>
                        </div>
                    ))}
                    {/* </dl> */}
                </div>
            </div>
        </div>
    )
}

const VideoCard = ({ video }: { video: string }) => {

    return <video
        className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 object-center aspect-[4/3]" loop muted playsInline autoPlay preload='metadata'>
        <source src={video} type="video/mp4" />
    </video>
}
