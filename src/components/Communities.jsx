import React, { useState } from "react";
import {
  Users,
  RefreshCw,
  Plus,
  Search,
  Star,
  MessageCircle,
  Bookmark,
  Share2
} from "lucide-react";

const joinedCommunities = [
  { id: 1, name: "Watchinit", members: 7 },
  { id: 2, name: "TechTalk", members: 18 },
  { id: 3, name: "AnimeClub", members: 21 }
];

const recommendedCommunities = [
  { name: "fhg", members: 3, owner: "Dhanush Kumar", desc: "sdhgf" },
  { name: "jaiii ballaya", members: 3, owner: "The Scifi", desc: "kindha meedha oopu, Ballaya babu thopu.." },
  { name: "123", members: 5, owner: "Find Me Out", desc: "hkkjfsd" },
  { name: "Crazy BOYZ", members: 4, owner: "Find Me Out", desc: "Here just for fun" },
  { name: "Film club", members: 4, owner: "First channel in cinishine", desc: "Explore movies together" },
  { name: "WOW", members: 1, owner: "Admin", desc: "Just wow community" }
];

const videos = [
  { id: 1, title: "Nature Drone", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "Ocean Waves", url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, title: "Wildlife", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, title: "City Timelapse", url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 5, title: "Forest Walk", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, title: "Mountain Landscape", url: "https://www.w3schools.com/html/movie.mp4" }
];

export default function Communities() {

  const [selectedCommunity, setSelectedCommunity] = useState(null);

  return (

    <div className="h-screen flex flex-col bg-black text-white">

      {/* HEADER */}

      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800">

        <div className="flex items-center gap-2 font-semibold text-lg">
          <Users size={20} className="text-purple-400" />
          Communities
        </div>

        <div className="flex items-center gap-4">

          <RefreshCw size={18} className="cursor-pointer text-zinc-400 hover:text-white" />

          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-sm">
            <Plus size={16} />
            Create
          </button>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-[300px_1fr_380px] flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}

        <aside className="border-r border-zinc-800 p-4 overflow-y-auto">

          {/* Search */}

          <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-xl mb-4">
            <Search size={16} />
            <input
              placeholder="Search communities..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* All Communities */}

          <div
            onClick={() => setSelectedCommunity(null)}
            className={`flex gap-3 items-center p-3 rounded-xl cursor-pointer ${
              selectedCommunity === null
                ? "bg-purple-900/40"
                : "hover:bg-zinc-900"
            }`}
          >

            <div className="w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
              <Users size={18} className="text-purple-300" />
            </div>

            <div>
              <p className="text-sm font-medium">All Communities</p>
              <p className="text-xs text-zinc-400">Mixed feed</p>
            </div>

          </div>

          <div className="h-px bg-zinc-800 my-4" />

          <p className="text-xs text-zinc-400 mb-2">Joined Communities</p>

          {joinedCommunities.map((community) => (

            <div
              key={community.id}
              onClick={() => setSelectedCommunity(community)}
              className="flex gap-3 items-center p-3 rounded-xl cursor-pointer hover:bg-zinc-900"
            >

              <div className="w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
                <Users size={18} className="text-purple-300" />
              </div>

              <div>
                <p className="text-sm">{community.name}</p>
                <p className="text-xs text-zinc-400">{community.members} members</p>
              </div>

            </div>

          ))}

        </aside>


        {/* FEED */}

        <main className="overflow-y-auto p-6 flex flex-col gap-6">

          {videos.map((video) => (

            <div key={video.id} className="bg-zinc-900 rounded-xl p-4">

              {/* header */}

              <div className="flex items-center gap-2 mb-2">

                <div className="w-8 h-8 rounded-full bg-zinc-700" />

                <div>
                  <p className="text-sm font-medium">Dhanush Kumar</p>
                  <p className="text-xs text-zinc-400">2d ago</p>
                </div>

              </div>

              <p className="text-sm mb-2">{video.title}</p>

              {/* video */}

              <div className="aspect-video rounded-lg overflow-hidden bg-black">

                <video controls className="w-full h-full object-cover">
                  <source src={video.url} type="video/mp4" />
                </video>

              </div>

              {/* actions */}

              <div className="flex gap-5 mt-3 text-zinc-400">

                <MessageCircle size={18} />
                <Bookmark size={18} />
                <Share2 size={18} />

              </div>

            </div>

          ))}

        </main>


        {/* RIGHT SIDEBAR */}

        <aside className="border-l border-zinc-800 p-4 overflow-y-auto">

          <p className="text-xs text-zinc-400 tracking-wider mb-3">
            RECOMMENDED COMMUNITIES
          </p>

          {recommendedCommunities.map((community, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-4 mb-4"
            >

              <div className="flex gap-3">

                <div className="w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
                  <Users size={18} className="text-purple-300" />
                </div>

                <div className="flex-1">

                  <p className="text-sm font-medium">{community.name}</p>

                  <p className="text-xs text-zinc-400">
                    {community.members} members
                  </p>

                  <p className="text-xs text-blue-400 flex items-center gap-1">
                    <Star size={12} />
                    {community.owner}
                  </p>

                </div>

                <button className="px-2 py-[2px] text-xs rounded-md bg-gradient-to-r from-purple-600 to-purple-500">
                  Join
                </button>

              </div>

              <p className="text-xs text-zinc-400 mt-2">
                {community.desc}
              </p>

            </div>

          ))}

        </aside>

      </div>

    </div>

  );
}