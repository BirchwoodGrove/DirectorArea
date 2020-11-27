var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.74630888095533,
        "pitch": -0.6469097233796486,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.947339950092127,
          "pitch": -0.6592383397992734,
          "rotation": 1.5707963267948966,
          "target": "1-lounge"
        },
        {
          "yaw": 2.71247336058717,
          "pitch": -0.6643951211686012,
          "rotation": 4.71238898038469,
          "target": "5-room-crossroads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4331438495458855,
        "pitch": 0.11954078530845891,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.0175335170563873,
          "pitch": 0.03075998442469796,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.716829832777881,
          "pitch": -0.003963519204143395,
          "rotation": 0,
          "target": "2-lounge-b"
        },
        {
          "yaw": 3.1312272727886246,
          "pitch": 0.04880030609779773,
          "rotation": 4.71238898038469,
          "target": "3-laundry-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lounge-b",
      "name": "Lounge B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7178783569297664,
          "pitch": 0.28988531251381033,
          "rotation": 0,
          "target": "1-lounge"
        },
        {
          "yaw": 0.14043604678372823,
          "pitch": 0.12963099679212498,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": -0.033296460294163666,
          "pitch": 0.07752160751737058,
          "rotation": 0,
          "target": "3-laundry-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laundry-area",
      "name": "Laundry area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.143259780568723,
        "pitch": 0.20647744975360816,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.6547985531619904,
          "pitch": 0.06564006014433588,
          "rotation": 0,
          "target": "4-lounge-toilet"
        },
        {
          "yaw": -1.9773494320654557,
          "pitch": 0.14136822703870422,
          "rotation": 13.351768777756625,
          "target": "1-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lounge-toilet",
      "name": "Lounge Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.747903065776258,
        "pitch": 0.22863282306263422,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.0671507691197615,
          "pitch": 0.035936383006056616,
          "rotation": 0,
          "target": "3-laundry-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-room-crossroads",
      "name": "Room Crossroads",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5005083896245033,
        "pitch": 0.13128862681810105,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.7878283288245669,
          "pitch": 0.14199809467779545,
          "rotation": 0,
          "target": "7-ravis-room"
        },
        {
          "yaw": -3.111493795100575,
          "pitch": 0.06587725954166679,
          "rotation": 5.497787143782138,
          "target": "9-julies-room"
        },
        {
          "yaw": 2.126975150393511,
          "pitch": -0.04564100442465957,
          "rotation": 0,
          "target": "6-julies-toilet"
        },
        {
          "yaw": 0.6070912700991435,
          "pitch": 0.13124815899354658,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-julies-toilet",
      "name": "Julie's Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2599249362422995,
          "pitch": -0.013553136947678013,
          "rotation": 0,
          "target": "5-room-crossroads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ravis-room",
      "name": "Ravi's Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7052405812224283,
        "pitch": 0.14563281897408764,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.2298719592725487,
          "pitch": -0.035422971890938015,
          "rotation": 1.5707963267948966,
          "target": "5-room-crossroads"
        },
        {
          "yaw": -2.4122862171929125,
          "pitch": -0.0015682838458044301,
          "rotation": 5.497787143782138,
          "target": "8-ravis-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ravis-toilet",
      "name": "Ravi's Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7214262934720583,
        "pitch": 0.1884482924162132,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.7543793226948932,
          "pitch": 0.14441815329900543,
          "rotation": 0,
          "target": "7-ravis-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-julies-room",
      "name": "Julie's Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9357846292740666,
        "pitch": 0.3092503849789665,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.7436793677375437,
          "pitch": 0.11943938133212129,
          "rotation": 0.7853981633974483,
          "target": "5-room-crossroads"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
