'use client';

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold animate-pulse text-green-500">Loading...</div>
        </div>
    );
}
