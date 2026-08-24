"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"  onClick={() => router.push("/photo-feed")} >
            <div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={() => router.push("/photo-feed")} className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-white hover:bg-black/80" aria-label="Close photo">
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
