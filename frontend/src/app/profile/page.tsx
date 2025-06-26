// app/profile/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { dummyUser } from '@/lib/DummyUser';
import { 
    UserIcon, 
    EnvelopeIcon, 
    PhoneIcon, 
    MapPinIcon, 
    PencilSquareIcon,
    ChevronRightIcon,
    ListBulletIcon
} from '@heroicons/react/24/solid';

// --- Reusable Sub-Components for the Profile Page ---
// In a larger app, you might move these to their own files.

const ProfileHeader = ({ name, email, image }: { name: string, email: string, image: string }) => (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="relative h-24 w-24 rounded-full overflow-hidden ring-4 ring-indigo-200">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
            <p className="text-md text-gray-500">{email}</p>
        </div>
    </div>
);

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <button className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                <PencilSquareIcon className="w-5 h-5" />
                Edit
            </button>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center gap-4 text-gray-600">
        <div className="text-indigo-500">{icon}</div>
        <div className="flex-grow">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-semibold text-gray-800">{value}</p>
        </div>
    </div>
);

// --- The Main Page Component ---

export default function ProfilePage() {
    const user = dummyUser;
    const memberSinceDate = new Date(user.memberSince).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        My Profile
                    </h1>
                    <p className="text-lg text-gray-600">
                        Manage your personal information and preferences.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left/Main Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <ProfileHeader name={user.name} email={user.email} image={user.profilePicture} />
                        
                        <InfoCard title="Personal Details">
                            <InfoRow icon={<UserIcon className="w-5 h-5"/>} label="Full Name" value={user.name} />
                            <InfoRow icon={<EnvelopeIcon className="w-5 h-5"/>} label="Email Address" value={user.email} />
                            <InfoRow icon={<PhoneIcon className="w-5 h-5"/>} label="Phone Number" value={user.phone} />
                            <InfoRow icon={<UserIcon className="w-5 h-5"/>} label="Member Since" value={memberSinceDate} />
                        </InfoCard>

                        <InfoCard title="Saved Addresses">
                            {user.addresses.map((address, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-lg bg-gray-50 border">
                                    <MapPinIcon className="w-6 h-6 text-indigo-500 mt-1" />
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-bold text-gray-800">{address.type}</h4>
                                            {address.isDefault && (
                                                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Default</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600">{address.line1}, {address.city}, {address.state} - {address.pincode}</p>
                                    </div>
                                </div>
                            ))}
                        </InfoCard>
                    </div>

                    {/* Right/Sidebar Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/my-orders" className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <ListBulletIcon className="w-6 h-6 text-indigo-500"/>
                                            <span className="font-semibold text-gray-700">My Orders</span>
                                        </div>
                                        <ChevronRightIcon className="w-5 h-5 text-gray-400"/>
                                    </Link>
                                </li>
                                {/* Add more links like Settings, Payments, etc. here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}