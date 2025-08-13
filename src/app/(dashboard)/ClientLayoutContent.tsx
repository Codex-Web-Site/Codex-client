'use client';

import { useRouter } from "next/navigation";
import TopNavbar from "@/components/TopNavbar";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface ClientLayoutContentProps {
  user: User | null;
  profile: { username: string; avatar_url: string } | null;
  children: React.ReactNode;
}

export default function ClientLayoutContent({
  user,
  profile,
  children,
}: ClientLayoutContentProps) {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <TopNavbar user={user} profile={profile} onSignOut={handleSignOut} />
            <main className="flex-1 p-4 md:p-8 bg-gray-100/50">
        {children}
      </main>
    </div>
  );
}
