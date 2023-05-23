import React from 'react'
import Skeleton from "react-loading-skeleton";



export default function SkeletonCard() {
    return (
        <div className="grid grid-cols-12 gap-4">
            {
                Array(16).fill(0).map((_, index) => (
                    <div className="md:col-span-2 sm:col-span-6 rounded-t" key={index}>
                        <picture className="">
                            <Skeleton className="h-[18rem]" />
                        </picture>
                        <div className="bg-white min-h-[6rem] border-t-4 border-indigo-500 rounded-b text-sm text-black p-2">
                            <div className="flex gap-2 ">
                                    <Skeleton style={{ width: "45px", padding: "3px", backgroundColor: "gray", }} />
                                    <Skeleton style={{ width: "75px", padding: "3px", backgroundColor: "gray" }} />
                            </div>

                            <label className="font-bold mb-2 block"><Skeleton style={{ width: "30%", padding: "3px", marginTop: "5px", backgroundColor: "gray" }} /> </label>
                            <Skeleton style={{ width: "25%", padding: "5px", backgroundColor: "gray" }} />
                            <div>
                                <Skeleton style={{ width: "100%", padding: "5px", marginTop: "5px", backgroundColor: "gray" }} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
