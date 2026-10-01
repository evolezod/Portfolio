/*
  ============================================================
  EVOL EZOD / DOZE PORTFOLIO DATA
  ============================================================

  THIS IS THE MAIN FILE YOU EDIT.

  Add a project to the "projects" list.
  Add a song to the "tracks" list.

  Paths are relative to this file.

  Example audio:
    assets/audio/achromatic/a-room-that-forgot-us.mp3

  Example image:
    assets/images/projects/achromatic.svg

  You do NOT need to edit index.html or script.js when adding
  normal projects/tracks.
*/

const portfolioData = {

  projects: [
    {
      id: "achromatic",
      title: "ACHROMATIC",
      shortTitle: "ACHROMATIC",
      number: "001",
      category: "Psychological Horror / Liminal",
      description: "Music built around isolation, forgotten spaces and the feeling that somewhere familiar has quietly forgotten you.",
      image: "assets/images/projects/achromatic.svg",
      status: "IN DEVELOPMENT",
      role: "Composer / Music Producer",
      platform: "Roblox",
      tags: ["LIMINAL", "HORROR", "ATMOSPHERIC"],
      tracks: ["a-room-that-forgot-us"]
    },

    {
      id: "retrorooms",
      title: "RETROROOMS",
      shortTitle: "RETROROOMS",
      number: "002",
      category: "Liminal Horror / Nostalgia",
      description: "A soundtrack for forgotten and misremembered Roblox spaces, built around nostalgia, isolation and old memories.",
      image: "assets/images/projects/retrorooms.png",
      status: "IN DEVELOPMENT",
      role: "Composer / Music Producer",
      platform: "Roblox",
      tags: ["NOSTALGIC", "LIMINAL", "RETRO"],
      tracks: ["i-miss-the-theme", "emergency-care", "sunflower"]
    },

    {
      id: "unpublished",
      title: "UNPUBLISHED",
      shortTitle: "UNPUBLISHED",
      number: "003",
      category: "Retro Horror / Exploration",
      description: "Music for an exploration experience built around forgotten Roblox games, relics and fragments of old worlds.",
      image: "assets/images/projects/unpublished.svg",
      status: "IN DEVELOPMENT",
      role: "Composer / Music Producer",
      platform: "Roblox",
      tags: ["RETRO", "HORROR", "EXPLORATION"],
      tracks: []
    }

    /*
      TO ADD ANOTHER PROJECT:

      ,
      {
        id: "my-new-game",
        title: "MY NEW GAME",
        shortTitle: "MY NEW GAME",
        number: "004",
        category: "Liminal / Ambient",
        description: "A short description of the project.",
        image: "assets/images/projects/my-new-game.jpg",
        status: "IN DEVELOPMENT",
        role: "Composer / Music Producer",
        platform: "Roblox / PC",
        tags: ["LIMINAL", "AMBIENT"],
        tracks: ["my-new-track"]
      }
    */
  ],

  tracks: [
    {
      id: "a-room-that-forgot-us",
      title: "A Room That Forgot Us",
      project: "ACHROMATIC",
      projectId: "achromatic",
      description: "Eerie and forgotten lobby atmosphere.",
      audio: "assets/audio/achromatic/a-room-that-forgot-us.mp3"
    },

    {
      id: "i-miss-the-theme",
      title: "I Miss The Theme",
      project: "RETROROOMS",
      projectId: "retrorooms",
      description: "Nostalgic music for a place that feels almost remembered.",
      audio: "assets/audio/retrorooms/i-miss-the-theme.mp3"
    },

    {
      id: "emergency-care",
      title: "Emergency Care",
      project: "RETROROOMS",
      projectId: "retrorooms",
      description: "Atmospheric environmental music.",
      audio: "assets/audio/retrorooms/emergency-care.mp3"
    },

    {
      id: "sunflower",
      title: "Sunflower",
      project: "RETROROOMS",
      projectId: "retrorooms",
      description: "A softer nostalgic piece from the archive.",
      audio: "assets/audio/retrorooms/sunflower.mp3"
    }

    /*
      TO ADD ANOTHER TRACK:

      ,
      {
        id: "my-new-track",
        title: "My New Track",
        project: "MY NEW GAME",
        projectId: "my-new-game",
        description: "Short description.",
        audio: "assets/audio/other/my-new-track.mp3"
      }
    */
  ]

};
