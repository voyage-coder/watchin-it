import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const shorts = [
  {
    id:1,
    title:"Amazing trick shot 🎯",
    views:"1.2M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1517649763962-0c623066013b"
  },
  {
    id:2,
    title:"Cat backflip 🐱",
    views:"890K",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
  },
  {
    id:3,
    title:"Cooking hack",
    views:"2.1M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id:4,
    title:"Street magic",
    views:"450K",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1520975922323-8a3fdfc4f4c5"
  },
  {
    id:5,
    title:"5 second life hacks",
    views:"3.4M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id:6,
    title:"Amazing trick shot 🎯",
    views:"1.2M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1517649763962-0c623066013b"
  },
  {
    id:7,
    title:"Cat backflip 🐱",
    views:"890K",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
  },
  {
    id:8,
    title:"Cooking hack",
    views:"2.1M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id:9,
    title:"Street magic",
    views:"450K",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1520975922323-8a3fdfc4f4c5"
  },
  {
    id:10,
    title:"5 second life hacks",
    views:"3.4M",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
];

const videos = [
  {
    id:1,
    title:"Learn React in 30 Minutes",
    description:"Build modern React apps step by step",
    channel:"CodeLab",
    channelImg:"https://randomuser.me/api/portraits/men/32.jpg",
    views:"420K views",
    time:"3 days ago",
    thumbnail:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration:"32:14"
  },
  {
    id:2,
    title:"Learn React in 30 Minutes",
    description:"Build modern React apps step by step",
    channel:"CodeLab",
    channelImg:"https://randomuser.me/api/portraits/men/32.jpg",
    views:"420K views",
    time:"3 days ago",
    thumbnail:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration:"32:14"
  },
  {
    id:3,
    title:"Learn React in 30 Minutes",
    description:"Build modern React apps step by step",
    channel:"CodeLab",
    channelImg:"https://randomuser.me/api/portraits/men/32.jpg",
    views:"420K views",
    time:"3 days ago",
    thumbnail:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration:"32:14"
  },
  {
    id:4,
    title:"Build Full Stack Project",
    description:"React + Node + MongoDB tutorial",
    channel:"DevSimplified",
    channelImg:"https://randomuser.me/api/portraits/men/45.jpg",
    views:"820K views",
    time:"1 month ago",
    thumbnail:"https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration:"18:42"
  },
  {
    id:5,
    title:"Build Full Stack Project",
    description:"React + Node + MongoDB tutorial",
    channel:"DevSimplified",
    channelImg:"https://randomuser.me/api/portraits/men/45.jpg",
    views:"820K views",
    time:"1 month ago",
    thumbnail:"https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration:"18:42"
  },
  {
    id:6,
    title:"Learn React in 30 Minutes",
    description:"Build modern React apps step by step",
    channel:"CodeLab",
    channelImg:"https://randomuser.me/api/portraits/men/32.jpg",
    views:"420K views",
    time:"3 days ago",
    thumbnail:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration:"32:14"
  },
  {
    id:7,
    title:"Learn React in 30 Minutes",
    description:"Build modern React apps step by step",
    channel:"CodeLab",
    channelImg:"https://randomuser.me/api/portraits/men/32.jpg",
    views:"420K views",
    time:"3 days ago",
    thumbnail:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration:"32:14"
  },
  {
    id:8,
    title:"Build Full Stack Project",
    description:"React + Node + MongoDB tutorial",
    channel:"DevSimplified",
    channelImg:"https://randomuser.me/api/portraits/men/45.jpg",
    views:"820K views",
    time:"1 month ago",
    thumbnail:"https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration:"18:42"
  },
];

export default function Hero(){

  const navigate = useNavigate();

  const openVideo = (video)=>{
    navigate("/watch",{state:video})
  }

  return (
    <div className="px-6 py-6 space-y-12">

      {/* SHORTS SECTION */}

      <div>

        <h2 className="text-xl font-semibold text-white mb-5">
          🔥 Shorts
        </h2>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">

          {shorts.map((short)=>(
            
            <div
            key={short.id}
            onClick={()=>openVideo(short)}
            className="group min-w-[180px] h-[320px] rounded-xl overflow-hidden relative cursor-pointer"
            >

              <img
              src={short.thumbnail}
              className="w-full h-full object-cover"
              />

              {/* hover play button */}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                <div className="bg-black/60 p-4 rounded-full">
                  <Play size={28} className="text-white"/>
                </div>

              </div>

              {/* bottom text */}

              <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent text-white">

                <p className="text-sm font-semibold">
                  {short.title}
                </p>

                <p className="text-xs opacity-80">
                  👁 {short.views} • {short.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* RECOMMENDED VIDEOS */}

      <div>

        <h2 className="text-xl font-semibold text-white mb-6">
          📈 Recommended
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {videos.map((video)=>(
            
            <div
            key={video.id}
            onClick={()=>openVideo(video)}
            className="cursor-pointer group"
            >

              <div className="relative rounded-xl overflow-hidden">

                <img
                src={video.thumbnail}
                className="w-full h-[180px] object-cover group-hover:scale-105 transition"
                />

                <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-1 rounded text-white">
                  {video.duration}
                </span>

              </div>

              <p className="text-gray-400 text-xs mt-1">
                {video.description}
              </p>

              <div className="flex items-center gap-2 mt-2">

                <img
                  src={video.channelImg}
                  className="w-7 h-7 rounded-full"
                />

                <div className="text-xs text-gray-300">

                  <p>{video.channel}</p>

                  <p className="text-gray-500">
                    {video.views} • {video.time}
                  </p>

                </div>

              </div>
            </div>

          ))}

        </div>

      </div>

    </div>
  )
}