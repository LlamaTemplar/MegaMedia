var tweets = [
    {
        tweet: "Sac anime was sooo lit bro",
        timestamp: "Jan 5, 2020"
    },
    {
        tweet: "cute",
        timestamp: "Dec 3, 2019"
    },
    {
        tweet: "TOMORROW IS IN YOUR HANDS....for real this time",
        timestamp: "Nov 7, 2019"
    },
    {
        tweet: "Yaaassss!",
        timestamp: "Oct 28, 2019"
    },
    {
        tweet: "This is just a political move by the President to make his voting base feel like he fought gun violence.",
        timestamp: "Aug 6, 2019"
    },
    {
        tweet: "Lol I think California needs a restart",
        timestamp: "Jul 6, 2019"
    },
    {
        tweet: "Imagine a dystopian society were you have to prove your not a racist",
        timestamp: "Jul 6, 2019"
    },
    {
        tweet: "I see people all time who subscribe to prepackaged ideologies. Not sure why but I know it's easy to listen to what others tell you.",
        timestamp: "Jul 2, 2019"
    },
    {
        tweet: "It's so bizarre seeing big news organizations talk down on Andrew Yang. They mention him, but it's clear that they don't want him to get more support. #LetYangSpeak",
        timestamp: "Jul 1, 2019"
    },
    {
        
        tweet: "I had that same road block with a game I was working on. It was frustrating to fix all the bugs but I knew people would enjoy the game so I pushed myself to finish. It's the outcome that's gonna motivate you.",
        timestamp: "Jun 9, 2019"
    },
    {
        tweet: "I've been watching Sekiro gameplay....now I'm adding more dynamic movements for my own game lol.",
        timestamp: "Apr 15, 2019",
        "video": "https://twitter.com/i/status/1117931964013502464"
    },
    {
        tweet: "My homemade FPS controller works beautifully on this magnificent terrain. #unity3d",
        timestamp: "Apr 14, 2019",
        "video": "https://twitter.com/i/status/1117665077543366657"
    },
    {
        tweet: "I added the ability to dash through multiple enemies while dealing damage to them. It's a little glitchy, but it works using ray casts. #screenshotsaturday #unity3d",
        timestamp: "Apr 6, 2019",
        "video": "https://twitter.com/i/status/1114554938183405568"
    },
    {
        tweet: "Goodbye Sir....so I've been working on Horizon Dream again. The player has a sword now! Person fencing",
        timestamp: "Apr 3 2019",
        "video": "https://twitter.com/i/status/1113648069994639360"
    },
    {
        tweet: "I texted you but you haven't responded",
        timestamp: "Mar 25 2019"
    },
    {
        tweet: "Well first you need some self confidence. Can't stand up for yourself if you don't believe in yourself.",
        timestamp: "Feb 24 2019"
    },
    {
        tweet: "Please love me",
        timestamp: "Jan 21 2019",
        "video": "https://twitter.com/i/status/1087551354262892544"
    },
    {
        tweet: "I'm getting better at probuilder but I find it so cumbersome to use. Ik it's for prototyping but I could build this level in half the time using Blender.",
        timestamp: "Jan 20 2019",
        "image": "https://pbs.twimg.com/media/DxY9YcQVYAAcrvc?format=jpg&name=small"
    },
    {
        tweet: "I'd say what a person likes on social media shows more about themselves than who they follow.",
        timestamp: "Jan 21 2019"
    },
    {
        tweet: "I wasn't expecting this when I enabled physics for my bomb. This is so satisfying! #UE4",
        timestamp: "Jan 21 2019",
        "video": "https://twitter.com/i/status/1087467475430559745"
    },
    {
        tweet: "One thing I love about Half-Life 2, compared to other games, is how immersed I feel. Like I actually feel like I'm part of the game even though I'm sitting in a chair and looking at a screen. I don't get this same feeling from Call of Duty, Wolfenstein, Arma, or Skyrim.",
        timestamp: "Jan 19 2019"
    },
    {
        tweet: "This....this has great potential.",
        timestamp: "Jan 19 2019",
        "image": "https://pbs.twimg.com/media/DxQlcRLUUAE4e1Y?format=jpg&name=small"
    },
    {
        tweet: "Thank you ambassador for representing our people",
        timestamp: "Jan 13 2019"
    },
    {
        tweet: "I really want a Terminator RPG. Like Fallout: New Vegas but set in the world of Terminator. I just rewatched Terminator Salvation and I realized there aren't any modern man vs machine RPGs.",
        timestamp: "Dec 21, 2018"
    },
    {
        tweet: "Halo in Unity3d!",
        timestamp: "Dec 17 2019",
        "image": "https://pbs.twimg.com/media/DupjK4yU0AAn7LN?format=jpg&name=small"
    },
    {
        tweet: "I have been working on a dungeon crawler for the past month. I have been using my own custom tiles to do pathfinding and AI sight. Hiding and revealing rooms have been interesting to program! #unity3d",
        timestamp: "Dec 13 2019"
    },
    {
        tweet: "Hell yea, I just got MHW with my new gtx 1070",
        timestamp: "Dec 10 2019"
    },
    {
        tweet: "I have a game idea. Action FPS but you can only move by skiing. The player will also be able to do crazy and totally unrealistic stunts while shooting enemies",
        timestamp: "Dec 2 2019"
    },
    {
        tweet: "Ikr, men have done such a horrible job!",
        timestamp: "Nov 13 2019"
    },
    {
        tweet: "Offline TV is in San Jose and I'm just sitting around doing homework.",
        timestamp: "Oct 27 2019"
    },
    {
        tweet: "I'm going to be working on other smaller games and hold off Star Quest for the future. I already got a mobile game in mind",
        timestamp: "Sep 29 2019"
    },
    {
        tweet: "Has anyone ever played a game where you can't die? Of course not because my friend and I made the first one ever (Warning: super hard)",
        timestamp: "Sep 2, 2018"
    },
    {
        tweet: "I'm really liking the AOT season 3 OP, I sing it every time it plays",
        timestamp: "Aug 6, 2018"
    },
    {
        tweet: "I did it! I did a game jam and made a game under 48 hours!",
        timestamp: "Jul 22, 2018"
    },
    {
        tweet: "@EpicGames should allow @UnrealEngine users to use Fortnite 3D assets. I would of loved to use high quality and iconic 3D models and weapons when I was learning how to use UE4. Most importantly, this would bring in more new and young users to UE4 instead of @unity3d.",
        timestamp: "Jul 18, 2018"
    },
    {
        tweet: "I started to rewatch Attack on Titan",
        timestamp: "Jul 15, 2018"
    },
    {
        tweet: "After 2 years I finally watched a let's play of Halo 5 Guardians. Overall I thought it was a good halo game. 343 created the most action packed Halo game ever! The story, however, was poorly executed. Mainly b/c it struggled with pointing to what exactly the objective was.",
        timestamp: "Jul 3, 2018"
    },
    {
        tweet: "I'm going do my first game jam! I'm so excited #gm48",
        timestamp: "Jul 3, 2018"
    },
    {
        tweet: "Enemy grenadier in progress. He is trying to predict the direction I'm heading but he seems to be way off sometimes. #screenshotsaturday",
        timestamp: "Jun 23, 2018"
    },
    {
        tweet: "Writing the story for my game. I think it's pretty good so far",
        timestamp: "Jun 17, 2018",
        "image": "https://pbs.twimg.com/media/Df6zu5OVQAE4wX8?format=jpg&name=small"
    },
    {
        tweet: "My phone can't run mobile games :(",
        timestamp: "Jun 16, 2018"
    },
    {
        tweet: "Might actually get a PlayStation. Ghost of Tsushima, Death Stranding, and Cyberpunk 2077 are games I'm looking forward to playing and PlayStation offers me a cheap solution. Upgrading my PC will cost me over $800. Tbh I miss playing games on console.",
        timestamp: "Jun 15, 2018"
    },
    {
        tweet: "I finally have heath for the player. Being invincible is boring",
        timestamp: "Jun 9, 2018"
    },
    {
        tweet: "@profgalloway, I just finished your book. I read it all in your voice",
        timestamp: "Jun 5, 2018"
    },
    {
        tweet: "I made a page for Star Quest and I'll be updating it with new features. It's nothing special yet, but I have a demo that anyone can download. Check it out!",
        timestamp: "May 30, 2018"
    },
    {
        tweet: "I finished my last final today, I feel so happy!",
        timestamp: "May 22, 2018"
    },
    {
        tweet: "Thank you Reddit for redesigning your website",
        timestamp: "Apr 4, 2018"
    },
    {
        tweet: "Turns out my phone is too weak to play PUBG Mobile",
        timestamp: "Mar 21, 2018"
    },
    {
        tweet: "Trying to practice drawing pixel characters. I started by making a fencer",
        timestamp: "Mar 20, 2018",
        "image": "https://pbs.twimg.com/media/DYyqvgqVQAADMLm?format=jpg&name=360x360"
    },
    {
        tweet: "I just downloaded PUBG MOBILE.....review coming soon",
        timestamp: "Mar 19, 2018"
    },
    {
        tweet: "I need to post more about Star Quest! I'm getting close to finishing my first demo.",
        timestamp: "Mar 19, 2018"
    },
    {
        tweet: "My college wifi sucks :(",
        timestamp: "Aug 25, 2017"
    },
    {
        tweet: "I wish I could of went to Stockton Con, but I'm in San Jose now so I'm sure there are bigger… https://instagram.com/p/BYCG80yFfeM/",
        timestamp: "Aug 20, 2017"
    },
    {
        tweet: "I FINALLY GOT A FIDGET SPINNER",
        timestamp: "Aug 20, 2017"
    },
    {
        tweet: "I still need to log into overwatch to get my 2017 summer outfit !",
        timestamp: "Aug 18, 2017"
    },
    {
        tweet: "Tomorrow I'm out, see y'all later. I'm going to paradise !",
        timestamp: "Aug 18, 2017"
    },
    {
        tweet: "Yo same phone that I factory reset so it's like new, who dis ?",
        timestamp: "Aug 16, 2017"
    },
    {
        tweet: "Tbh I'm just waiting for national national day",
        timestamp: "Aug 15, 2017"
    },
    {
        tweet: "It's a me Cole",
        timestamp: "Aug 11, 2017"
    },
    {
        tweet: "Team valor all the way",
        timestamp: "Aug 4, 2017"
    },
    {
        tweet: "I have been play battlefield 4 recently again and I have forgotten how fun it is ! Especially those hardcore servers",
        timestamp: "Aug 4, 2017"
    },
    {
        tweet: "I swear everyone these days are like shoot first ask questions later. Lol theyre all apologizing for criticizing Trump in a misleading video",
        timestamp: "Jul 31, 2017"
    },
    {
        tweet: "Google the Senate lmao",
        timestamp: "Jul 31, 2017"
    },
    {
        tweet: "What if everyone in Congress was a woman",
        timestamp: "Jul 31, 2017"
    },
    {
        tweet: "North Korea fired a missile towards Japan. Good news is the power rangers deflected it.",
        timestamp: "Jul 28, 2017"
    },
    {
        tweet: "North Korea fired a missile towards Japan. Good news is the power rangers deflected it.",
        timestamp: "Jul 28, 2017"
    },
    {
        tweet: "You know Teslas are great when people are literally dying trying to build them.",
        timestamp: "Jul 25, 2017"
    },
    {
        tweet: "ｖａｐｏｒｗａｖｅｘｄ",
        timestamp: "Jul 23, 2017"
    },
    {
        tweet: "My Overwatch-counterstrikego-insurgency-eu4 lifestyle is going good so far",
        timestamp: "Jul 23, 2017"
    },
    {
        tweet: "Yo we should all get Bf3 for PC",
        timestamp: "Jul 23, 2017"
    }
]