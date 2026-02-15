import { BookOpen, LogOut, MessageCircle, Settings, ShoppingBag, TrendingUp, Trophy, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "@/components/dashboard/overview-tab";

export default function Home() {
  return (
    <div>
      <div className="border-b border-white/20">
        <div className="flex items-center justify-between gap-10 px-12 py-7 max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-3.5">
            <div className="w-14 h-14 rounded-full text-white bg-white/10 border border-white/20 flex items-center justify-center">
              <User size={28} />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-white">Welcome back, Sarah!</h1>
              <p className="text-muted">Member since March 2024</p>
            </div>
          </div>
          <div className='flex items-center gap-2.5'>
            <Button variant={'outline'} size={'xs'} className="py-2">
              <Settings />  Settings
            </Button>
            <Button size={'xs'} variant={'ghost'} className="py-2">
              <LogOut /> Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="px-12 py-7 max-w-7xl mx-auto">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview"><TrendingUp /> Overview</TabsTrigger>
            <TabsTrigger value="stories"><BookOpen /> Stories</TabsTrigger>
            <TabsTrigger value="forums"><MessageCircle /> Forums</TabsTrigger>
            <TabsTrigger value="challenges"><Trophy /> Challenges</TabsTrigger>
            <TabsTrigger value="orders"><ShoppingBag /> Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
