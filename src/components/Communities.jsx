import React, { useState } from "react";
import {
  Users,
  RefreshCw,
  Plus,
  Search,
  Star,
  MessageCircle,
  Bookmark,
  Share2,
  ArrowLeft,
  LogOut
} from "lucide-react";

/* ---------------- Recommended Communities ---------------- */

const recommendedCommunities = [
  { name: "fhg", members: 3, owner: "Dhanush Kumar", desc: "sdhgf" },
  { name: "jaiii ballaya", members: 3, owner: "The Scifi", desc: "Ballaya babu thopu.." },
  { name: "123", members: 5, owner: "Find Me Out", desc: "hkkjfsd" },
  { name: "Crazy BOYZ", members: 4, owner: "Find Me Out", desc: "Just for fun" },
  { name: "Film club", members: 4, owner: "Cinishine", desc: "Explore movies together" },
  { name: "WOW", members: 1, owner: "Admin", desc: "Just wow community" }
];

/* ---------------- Videos ---------------- */

const videos = [
  { id: 1, title: "Nature Drone", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "Ocean Waves", url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, title: "Wildlife", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, title: "City Timelapse", url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 5, title: "Forest Walk", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
];

export default function Communities() {

  /* ---------------- STATE ---------------- */

  const [joinedCommunities, setJoinedCommunities] = useState([
    { id: 1, name: "Watchinit", members: 7 },
    { id: 2, name: "TechTalk", members: 18 },
    { id: 3, name: "AnimeClub", members: 21 }
  ]);

  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [activeTab, setActiveTab] = useState("feed");

  /* ---------------- LEAVE COMMUNITY ---------------- */

  const leaveCommunity = () => {
    setJoinedCommunities(prev =>
      prev.filter(c => c.id !== selectedCommunity.id)
    );
    setSelectedCommunity(null);
  };

  /* ---------------- UI ---------------- */

  return (

    <div className="h-screen flex flex-col bg-black text-white">

      {/* ---------------- HEADER ---------------- */}

      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800">

        <div className="flex items-center gap-3">

          {selectedCommunity && (
            <button
              onClick={() => setSelectedCommunity(null)}
              className="p-1 rounded-md hover:bg-zinc-800"
            >
              <ArrowLeft size={20}/>
            </button>
          )}

          <div className="flex items-center gap-2 font-semibold text-lg">
            <Users size={20} className="text-purple-400"/>
            {selectedCommunity ? selectedCommunity.name : "Communities"}
          </div>

        </div>

        <div className="flex items-center gap-4">

          {selectedCommunity && (
            <button
              onClick={leaveCommunity}
              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md "
            >
              <LogOut size={20} className="text-zinc-400 hover:text-white cursor-pointer"/>
            </button>
          )}

          <RefreshCw size={18} className="text-zinc-400 hover:text-white cursor-pointer"/>

          <div className="rounded-xl overflow-hidden">
            <button className="flex items-center gap-1 px-4 py-1.5 rounded-md text-sm bg-gradient-to-r from-purple-600 to-purple-500">
            <Plus size={16}/>
            Create
          </button>
          </div>

        </div>

      </div>


      {/* ---------------- GRID ---------------- */}

      <div className="grid grid-cols-[300px_1fr_380px] flex-1 overflow-hidden">

        {/* ---------------- LEFT SIDEBAR ---------------- */}

        <aside className="border-r border-zinc-800 p-4 overflow-y-auto
        [&::-webkit-scrollbar]:w-[4px]
        [&::-webkit-scrollbar-thumb]:bg-zinc-700
        [&::-webkit-scrollbar-thumb]:rounded-full">

          {/* Search */}

          <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-xl mb-4">
            <Search size={16}/>
            <input
              placeholder="Search communities..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* All Communities */}

          <div
            onClick={()=>{
              setSelectedCommunity(null);
              setActiveTab("feed");
            }}
            className={`flex gap-3 items-center p-3 rounded-xl cursor-pointer
            ${selectedCommunity===null ? "bg-purple-900/40" : "hover:bg-zinc-900"}`}
          >

            <div className="w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
              <Users size={18} className="text-purple-300"/>
            </div>

            <div>
              <p className="text-sm font-medium">All Communities</p>
              <p className="text-xs text-zinc-400">Mixed feed</p>
            </div>

          </div>

          <div className="h-px bg-zinc-800 my-4"></div>

          <p className="text-xs text-zinc-400 mb-2">Joined Communities</p>

          {joinedCommunities.map((community)=>{

            const isSelected = selectedCommunity?.id === community.id;

            return (

              <div
                key={community.id}
                onClick={()=>{
                  setSelectedCommunity(community);
                  setActiveTab("feed");
                }}
                className={`flex gap-3 items-center p-3 rounded-xl cursor-pointer
                ${isSelected ? "bg-purple-900/40" : "hover:bg-zinc-900"}`}
              >

                <div className={`w-10 h-10 flex items-center justify-center rounded-lg
                ${isSelected ? "bg-purple-700/50" : "bg-purple-900/40"}`}>

                  <Users size={18} className="text-purple-300"/>

                </div>

                <div>
                  <p className={`text-sm ${isSelected ? "font-medium text-white" : ""}`}>
                    {community.name}
                  </p>

                  <p className="text-xs text-zinc-400">
                    {community.members} members
                  </p>
                </div>

              </div>

            )

          })}

        </aside>


        {/* ---------------- MIDDLE ---------------- */}

        <main className="overflow-y-auto p-6 flex flex-col gap-6
        [&::-webkit-scrollbar]:w-[4px]
        [&::-webkit-scrollbar-thumb]:bg-zinc-700
        [&::-webkit-scrollbar-thumb]:rounded-full">

          {selectedCommunity === null ? (

            /* MIXED FEED */

            videos.map(video => (

              <div key={video.id} className="bg-zinc-900 rounded-xl p-4">

                <div className="flex items-center gap-2 mb-2">

                  <div className="w-8 h-8 rounded-full bg-zinc-700"></div>

                  <div>
                    <p className="text-sm font-medium">Dhanush Kumar</p>
                    <p className="text-xs text-zinc-400">2d ago</p>
                  </div>

                </div>

                <p className="text-sm mb-2">{video.title}</p>

                <div className="aspect-video rounded-lg overflow-hidden bg-black">

                  <video controls className="w-full h-full object-cover">
                    <source src={video.url} type="video/mp4"/>
                  </video>

                </div>

              </div>

            ))

          ) : (

            /* COMMUNITY PAGE */

            <>

              <div className="border-b border-zinc-800 pb-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 bg-purple-900/40 rounded-lg flex items-center justify-center">
                    <Users size={18}/>
                  </div>

                  <div>
                    <p className="text-lg font-semibold">
                      {selectedCommunity.name}
                    </p>

                    <p className="text-xs text-zinc-400">
                      {selectedCommunity.members} members • 63 items
                    </p>
                  </div>

                </div>

                {/* TABS */}

                <div className="flex gap-6 mt-4 text-sm">

                  <button
                    onClick={()=>setActiveTab("feed")}
                    className={`pb-1 ${
                      activeTab==="feed"
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-zinc-400"
                    }`}
                  >
                    Feed
                  </button>

                  <button
                    onClick={()=>setActiveTab("members")}
                    className={`pb-1 ${
                      activeTab==="members"
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-zinc-400"
                    }`}
                  >
                    Members
                  </button>

                  <button
                    onClick={()=>setActiveTab("about")}
                    className={`pb-1 ${
                      activeTab==="about"
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-zinc-400"
                    }`}
                  >
                    About
                  </button>

                </div>

              </div>

              {/* TAB CONTENT */}

              {activeTab==="feed" && (

                videos.slice(0,2).map(video=>(
                  <div key={video.id} className="bg-zinc-900 rounded-xl p-4">

                    <p className="text-sm mb-2">{video.title}</p>

                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                      <video controls className="w-full h-full object-cover">
                        <source src={video.url} type="video/mp4"/>
                      </video>
                    </div>

                  </div>
                ))

              )}

              {activeTab==="members" && (

                <div>

                  <p className="text-sm font-semibold mb-4">
                    Members (7)
                  </p>

                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-xl mb-4">
                    <Search size={16}/>
                    <input
                      placeholder="Search members..."
                      className="bg-transparent outline-none text-sm w-full"
                    />
                  </div>

                  <div className="space-y-3">

                    {/* OWNER */}

                    <div className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-zinc-700"></div>

                        <div>

                          <p className="text-sm font-medium flex items-center gap-2">
                            Dhanu Admin@1991

                            <span className="text-[10px] bg-yellow-500 text-black px-2 py-[2px] rounded">
                              Owner
                            </span>

                          </p>

                          <p className="text-xs text-zinc-400">
                            @dhanush_kumar · Joined 4d
                          </p>

                        </div>

                      </div>

                      <div className="bg-purple-900/40 p-2 rounded-lg">
                        <MessageCircle size={16}/>
                      </div>

                    </div>


                    {/* MEMBER */}

                    {[
                      ["Kathik Kumar V R","@find_me_out","4d"],
                      ["GOM","@gom_official","3d"],
                      ["Prem","@walter_white","2d"],
                      ["Rajesh","@first_channel_in_cinishine","3d"],
                      ["shiva","@shiva","2d"]
                    ].map((m,i)=>(
                      <div key={i} className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-zinc-700"></div>

                          <div>

                            <p className="text-sm font-medium">
                              {m[0]}
                            </p>

                            <p className="text-xs text-zinc-400">
                              {m[1]} · Joined {m[2]}
                            </p>

                          </div>

                        </div>

                        <div className="bg-purple-900/40 p-2 rounded-lg">
                          <MessageCircle size={16}/>
                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              )}

              {activeTab==="about" && (

              <div className="space-y-6">

                {/* ABOUT CARD */}

                <div className="bg-zinc-900 rounded-xl p-6">

                  <p className="text-sm font-semibold mb-2">
                    About
                  </p>

                  <p className="text-sm text-zinc-400">
                    Just for testing
                  </p>

                </div>


                {/* DETAILS CARD */}

                <div className="bg-zinc-900 rounded-xl p-6">

                  <p className="text-sm font-semibold mb-6">
                    Details
                  </p>

                  <div className="grid grid-cols-2 gap-y-4 text-sm">

                    <p className="text-zinc-400">Type</p>
                    <p>PUBLIC</p>

                    <p className="text-zinc-400">Posting Policy</p>
                    <p>Any member can post</p>

                    <p className="text-zinc-400">Members</p>
                    <p>7</p>

                    <p className="text-zinc-400">Content</p>
                    <p>63</p>

                    <p className="text-zinc-400">Discoverable</p>
                    <p>Yes</p>

                    <p className="text-zinc-400">Created</p>
                    <p>3/3/2026</p>

                    <p className="text-zinc-400">Owner</p>
                    <p>Dhanush Kumar</p>

                  </div>

                </div>

              </div>

            )}

            </>

          )}

        </main>


        {/* ---------------- RIGHT SIDEBAR ---------------- */}

        <aside className="border-l border-zinc-800 p-4 overflow-y-auto
        [&::-webkit-scrollbar]:w-[4px]
        [&::-webkit-scrollbar-thumb]:bg-zinc-700
        [&::-webkit-scrollbar-thumb]:rounded-full">

          {selectedCommunity === null ? (

            <>
              <p className="text-xs text-zinc-400 tracking-wider mb-3">
                RECOMMENDED COMMUNITIES
              </p>

              {recommendedCommunities.map((community,index)=>(
                <div key={index} className="bg-zinc-900 rounded-xl p-4 mb-4">

                  <div className="flex gap-3">

                    <div className="w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
                      <Users size={18}/>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">{community.name}</p>
                      <p className="text-xs text-zinc-400">{community.members} members</p>
                    </div>

                    <button className="px-4 py-1.5 text-sm bg-purple-600 rounded-xl hover:bg-purple-500">
                    Join
                  </button>

                  </div>

                  <p className="text-xs text-zinc-400 mt-2">{community.desc}</p>

                </div>
              ))}
            </>

          ) : (

            <>
            <div className="rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-purple-600">
                <MessageCircle size={18}/>
                Open Chat
              </button>
            </div>

              <div className="mt-6">
                <p className="text-xs text-zinc-400 mb-2">COMMUNITY INFO</p>
                <p className="text-sm text-zinc-300">
                  Just for testing
                </p>
              </div>
            </>

          )}

        </aside>

      </div>

    </div>

  );
}