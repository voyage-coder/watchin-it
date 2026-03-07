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
  }
];

const videos = [
  {
    id:1,
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
    description:"React + Node + MongoDB tutorial",
    channel:"DevSimplified",
    channelImg:"https://randomuser.me/api/portraits/men/45.jpg",
    views:"820K views",
    time:"1 month ago",
    thumbnail:"https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration:"18:42"
  },
  {
    id:3,
    description:"Master JS fundamentals quickly",
    channel:"JS Academy",
    channelImg:"https://randomuser.me/api/portraits/men/12.jpg",
    views:"1.1M views",
    time:"2 weeks ago",
    thumbnail:"https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    duration:"24:51"
  },
  {
    id:4,
    description:"Design beautiful interfaces",
    channel:"DesignHub",
    channelImg:"https://randomuser.me/api/portraits/women/22.jpg",
    views:"310K views",
    time:"5 days ago",
    thumbnail:"https://images.unsplash.com/photo-1558655146-d09347e92766",
    duration:"14:18"
  }
];

export default function Hero(){

  const navigate = useNavigate();

  const openVideo = (video)=>{
    navigate("/watch",{state:video});
  };

  return (

    <div
      className="
      px-4 sm:px-6 lg:px-10
      py-10
      space-y-14
      bg-gradient-to-b
      from-[#020617]
      via-[#0b1228]
      to-[#111c3a]
      min-h-screen
      "
    >

      {/* FILTER BAR */}

      <div className="flex justify-center">

        <div
          className="
          flex
          overflow-x-auto
          gap-1 sm:gap-2
          text-white
          bg-[#0b1228]/70
          backdrop-blur
          border border-[#1f2a44]
          rounded-full
          px-2 sm:px-4
          py-1.5 sm:py-2
          no-scrollbar
          "
        >

          {["All","Shorts","Videos","Posts","Music"].map((item)=>(
            
            <button
              key={item}
              className="
              whitespace-nowrap
              px-2 sm:px-4
              py-1
              text-[10px] sm:text-xs md:text-sm
              font-medium
              text-white
              rounded-full
              transition-all duration-200
              hover:bg-[#1f2a44]
              hover:-translate-y-[1px]
              "
            >
              {item}
            </button>

          ))}

        </div>

      </div>


      {/* SHORTS */}

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-3">

        {shorts.map((short)=>(
          
          <div
            key={short.id}
            onClick={()=>openVideo(short)}
            className="
            group
            min-w-[140px]
            sm:min-w-[180px]
            h-[260px]
            sm:h-[320px]
            rounded-xl
            overflow-hidden
            relative
            cursor-pointer
            transition
            hover:-translate-y-2
            hover:scale-[1.04]
            "
          >

            <img
              src={short.thumbnail}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

              <div className="bg-[#0b1228]/80 p-3 sm:p-4 rounded-full backdrop-blur">
                <Play size={24} className="text-white"/>
              </div>

            </div>

            <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-[#020617]/95 to-transparent text-white">

              <p className="text-xs sm:text-sm font-semibold">
                {short.title}
              </p>

              <p className="text-[10px] sm:text-xs opacity-80">
                👁 {short.views} • {short.time}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* VIDEOS */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        "
      >

        {videos.map((video)=>(
          
          <div
            key={video.id}
            onClick={()=>openVideo(video)}
            className="cursor-pointer group"
          >

            <div className="relative rounded-xl overflow-hidden">

                          <div className="flex items-center gap-2 mt-2">

              <img
                src={video.channelImg}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full"
              />

              <div className="text-xs text-gray-300">

                <p>{video.channel}</p>

                <p className="text-gray-500">
                  {video.views} • {video.time}
                </p>

              </div>

            </div>

              <img
                src={video.thumbnail}
                className="w-full h-[170px] sm:h-[190px] object-cover group-hover:scale-105 transition"
              />

              <span className="absolute bottom-2 right-2 text-xs bg-[#020617]/90 px-2 py-1 rounded text-white">
                {video.duration}
              </span>

            </div>

            <p className="text-gray-400 text-xs mt-1">
              {video.description}
            </p>



          </div>

        ))}

      </div>

    </div>

  );
}