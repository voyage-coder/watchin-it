import React, { useState } from "react";
import "../index.css";
import {
Users,
RefreshCw,
Plus,
Search,
LogOut,
Video,
MessageCircle,
Bookmark,
Share2
} from "lucide-react";

const joinedCommunities = [
{ id: 1, name: "Watchinit", members: 7 },
{ id: 2, name: "TechTalk", members: 18 },
{ id: 3, name: "AnimeClub", members: 24 }
];

const recommendedCommunities = [
{ id: 1, name: "Film Club", members: 4 },
{ id: 2, name: "Crazy BOYZ", members: 4 },
{ id: 3, name: "WOW", members: 1 },
{ id: 4, name: "Coding Hub", members: 32 },
{ id: 5, name: "Music Fans", members: 18 },
{ id: 6, name: "Gaming Arena", members: 52 },
{ id: 7, name: "AI World", members: 41 },
{ id: 8, name: "Startup Talk", members: 23 },
{ id: 9, name: "Designers", members: 17 },
{ id: 10, name: "Travel Club", members: 29 },
{ id: 11, name: "Movie Fans", members: 19 },
{ id: 12, name: "Space Lovers", members: 11 }
];

const videos = [
{ id:1, title:"Nature Drone", url:"https://www.w3schools.com/html/mov_bbb.mp4"},
{ id:2, title:"Ocean Waves", url:"https://www.w3schools.com/html/movie.mp4"},
{ id:3, title:"Wildlife Clip", url:"https://www.w3schools.com/html/mov_bbb.mp4"},
{ id:4, title:"City Timelapse", url:"https://www.w3schools.com/html/movie.mp4"},
{ id:5, title:"Forest Walk", url:"https://www.w3schools.com/html/mov_bbb.mp4"},
{ id:6, title:"Mountain Landscape", url:"https://www.w3schools.com/html/movie.mp4"}
];

export default function Communities(){

const [selectedCommunity,setSelectedCommunity] = useState(null);

return (

<div className="communities-page">

{/* HEADER */}

<div className="communities-header">

<div className="header-left">

<Users size={18}/>
<span>{selectedCommunity ? selectedCommunity.name : "Communities"}</span>

</div>

<div className="header-right">

{selectedCommunity && (
<>
<Video size={18}/>
<LogOut size={18}/>
</>
)}

<RefreshCw size={18}/>

<button className="create-btn">
<Plus size={16}/> Create
</button>

</div>

</div>


{/* MAIN LAYOUT */}

<div className="communities-layout">

{/* LEFT SIDEBAR */}

<aside className="left-sidebar">

<div className="search-box">
<Search size={16}/>
<input placeholder="Search communities"/>
</div>

<div
className="community-item active"
onClick={()=>setSelectedCommunity(null)}
>
<Users size={16}/>
All Communities
</div>

<div className="separator"/>

<p className="section-title">Joined Communities</p>

{joinedCommunities.map((c)=>(
<div
key={c.id}
className="community-item"
onClick={()=>setSelectedCommunity(c)}
>
<Users size={16}/>
<div>
<p>{c.name}</p>
<span>{c.members} members</span>
</div>
</div>
))}

</aside>


{/* MIDDLE FEED */}

<main className="feed">

{videos.map(video => (

<div key={video.id} className="post-card">

<div className="post-header">
<div className="avatar"/>
<div>
<h4>Dhanush Kumar</h4>
<p>2d ago</p>
</div>
</div>

<h3 className="post-title">{video.title}</h3>

<video controls>
<source src={video.url} type="video/mp4"/>
</video>

<div className="post-actions">
<MessageCircle size={18}/>
<Bookmark size={18}/>
<Share2 size={18}/>
</div>

</div>

))}

</main>


{/* RIGHT SIDEBAR */}

<aside className="right-sidebar">

<h3 className="right-title">Recommended Communities</h3>

{recommendedCommunities.map(c => (

<div key={c.id} className="recommended-card">

<div className="rec-left">
<Users size={18}/>
<div>
<p>{c.name}</p>
<span>{c.members} members</span>
</div>
</div>

<button className="join-btn">
Join
</button>

</div>

))}

</aside>

</div>

</div>

);
}