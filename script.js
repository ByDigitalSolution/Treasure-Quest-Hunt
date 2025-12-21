(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.Container_933E9EFD_8287_81EC_41BB_5741EC9E85C0",
  "this.Container_958E66DC_86C9_1E29_41E0_95B584930F15",
  "this.Container_9546775F_86CB_1E27_41DB_12AC2D5BEF99",
  "this.Container_1FB38401_0D04_22C4_4194_CF9122B491EB"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "class": "Player",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "camera": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8DEC072A_829D_8014_41B0_AFF459064849",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "camera": "this.panorama_8DEC072A_829D_8014_41B0_AFF459064849_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 0)",
   "camera": "this.panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 2.4
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9962BE9B_869E_8034_41C0_67757E3E495F",
  "this.overlay_9BB3BC72_8682_80F4_41CA_5EF941BAA7D0",
  "this.overlay_9BA23989_868D_8014_41D1_0396A7CEFE7D",
  "this.overlay_9B21C184_868F_801C_41DC_95FCEB5EA0A8",
  "this.overlay_94EDC547_86FB_1227_41D1_F2728DD57F2A",
  "this.overlay_97379628_86C9_7E69_41DB_FCF0A3299B30",
  "this.overlay_94F75506_86C9_7219_41D6_B0166F73F93D",
  "this.overlay_97F6AB57_86C7_3627_41DC_4634F2C59BA9",
  "this.overlay_97BAD808_86C7_3229_41D9_4E7D89F12F92",
  "this.overlay_93831DD6_86FE_F239_41D6_77E220F130B8",
  "this.overlay_97E68A7D_86F9_16EB_41D7_232E15CC1027",
  "this.overlay_975F9CC0_86F9_1219_41CF_FDD060E28CD1",
  "this.overlay_943D2AB3_86C9_367F_41B3_D7D58B84DF23",
  "this.overlay_975AB438_86C9_3269_41C6_D5BDFB7AF79E",
  "this.overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963",
  "this.overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267",
  "this.overlay_9303DC6E_864B_12E9_41B7_8F96401628CF",
  "this.overlay_9339F28B_864B_162F_41A8_079CF2A1744B",
  "this.overlay_91E7ADE2_8659_1219_41DB_990E0289AC2E",
  "this.overlay_90101F67_865B_0EE7_41E0_40BCD3DD0FAC",
  "this.overlay_90A2A135_865B_127B_41D4_2E2186834897",
  "this.overlay_91A4948B_865A_F22F_41D6_2ED599FFBE74",
  "this.overlay_91076D56_867B_1239_41D7_225404B01238",
  "this.overlay_9ECF28DE_8679_1229_41D0_E7FED2DCDF97",
  "this.overlay_9E935C8E_8679_3229_41C1_4EA694A5CBC8",
  "this.overlay_91443596_8679_1239_41D8_ABEFE3B2CDD7"
 ],
 "hfovMin": "135%",
 "label": "dc01cbn-grand-view-park-sf",
 "id": "panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3",
 "pitch": 2.4,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591"
  }
 ],
 "vfov": 90,
 "partial": true,
 "hfov": 180,
 "thumbnailUrl": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_t.jpg"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1DC7E802_0D0C_22C4_4181_68FB605498D4",
  "this.overlay_1D9068C7_0D0C_634C_41A1_AB0F70471733",
  "this.overlay_1C5C3EAD_0D0C_3FDC_41A5_94C3AE53BCE3",
  "this.overlay_1D58B461_0D0C_2347_4172_14F01572D11D",
  "this.overlay_0295EDB2_0D1C_7DC4_41AA_0AEAC46A669B",
  "this.overlay_1DA218B6_0D04_E3CC_41A1_E56EB8EC439D",
  "this.overlay_02C4ECF9_0D0C_2344_4196_185BCC901FCC",
  "this.overlay_1DF915F1_0D0C_6D44_4194_7A26A4E32039",
  "this.overlay_1C76E73C_0D05_ED3D_4199_1538CD5BFCA4",
  "this.overlay_1DD2C015_0D07_E2CC_4176_D2752B784B4A",
  "this.overlay_02AA445D_0D07_E37C_41A8_FBDED6391BCB",
  "this.overlay_02A65E49_0D04_1F47_41A0_1A4EC870BD3A",
  "this.overlay_1F7410C6_0D07_E34C_41A6_FF4297E4CCF1",
  "this.overlay_1C0C91E8_0D0C_2544_4190_2C07CAC30D99",
  "this.overlay_1CBDD3A1_0D1F_E5C7_4187_B83E704AFBA2",
  "this.overlay_1E6BA6FC_0D04_2F3C_415D_9F8399DE0146",
  "this.overlay_1C0E3F16_0D1C_7ECC_41A2_14F2C867721B",
  "this.overlay_18A23B54_0D1C_254D_4197_E0E3600BDF1B",
  "this.overlay_1F958EDC_0D1C_1F7C_418E_ECA106EEFE04",
  "this.overlay_1F43CEF8_0D04_1F45_41A5_BCBE8A906E3F",
  "this.overlay_1C7234CA_0D1C_E344_4164_EC7D07A18188",
  "this.overlay_1C4FA1F5_0D1C_254C_418A_F64BD8EEF020",
  "this.overlay_1C60E2A9_0D1C_27C4_41A4_75A2138DFEC4",
  "this.overlay_1CD93629_0D04_2EC7_4191_CE2EDB94B7E7",
  "this.overlay_1CA9F415_0D04_22CC_41A7_1C45EF9F191A",
  "this.overlay_1C565BF5_0D04_254C_4172_512C88CB1BF2",
  "this.overlay_2C3F3E49_3C6E_3310_41C9_2AFE2E9A4AAE",
  "this.overlay_2C0328C0_3C6E_3F10_41BF_49B5117A7750",
  "this.overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4",
  "this.overlay_2D324AD4_3C66_F330_41C0_267B75B748C7"
 ],
 "hfovMin": "135%",
 "label": "Home",
 "id": "panorama_8CF47A4B_829D_8014_41D1_9D1B82822591",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_t.jpg"
},
{
 "class": "FadeInEffect",
 "easing": "linear",
 "id": "effect_9E779A94_865F_3639_41DB_74AC702AAB6B",
 "duration": 1000
},
{
 "class": "SlideInEffect",
 "easing": "linear",
 "id": "effect_9E16D1AB_8659_F26E_4141_B96EDC1015CF",
 "duration": 1000,
 "from": "top"
},
{
 "class": "SlideInEffect",
 "easing": "linear",
 "id": "effect_9E3650B0_8646_F279_41E0_95C8F1E41F16",
 "duration": 1000,
 "from": "top"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 119,
  "yaw": -159.8,
  "pitch": -5.98
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DEC072A_829D_8014_41B0_AFF459064849_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_2B9A8598_3C26_7131_41CD_8E62709CBC44",
  "this.overlay_2841AAFE_3C2A_10F0_41BA_92C91DA8DA59",
  "this.overlay_282EBBEA_3C2A_3110_418D_8D468687BB72",
  "this.overlay_2808E30F_3C2A_7110_41B9_F396B62658AF",
  "this.overlay_28FB79CC_3C2A_1110_41C1_D23CD3B1479E",
  "this.overlay_293B02B0_3C26_3370_41B4_07A46177CBB8",
  "this.overlay_2FB45BB5_3C26_3170_41B1_89744CFD95FC",
  "this.overlay_28DFF09F_3C3A_0F30_41C0_FEB15C5388BE",
  "this.overlay_2AB9687F_3C3A_1FF0_41B8_3B3E6D5C736A",
  "this.overlay_29C650B9_3C3E_0F70_41C2_D0945476CAD4",
  "this.overlay_2ADFF34B_3C26_7110_41C5_011F5CD13BAD",
  "this.overlay_2AE6672E_3C19_F110_41CD_D5CE4C36B16D",
  "this.overlay_29600424_3C1A_1710_41C6_7771723D66B5",
  "this.overlay_2917B1B4_3C1E_3171_41C3_7EF76E09B3A4",
  "this.overlay_2B7AC026_3C1E_0F10_41B1_03E77AD39BCD",
  "this.overlay_29292DD3_3C1E_1137_41C2_D29EC2A8F04E",
  "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C",
  "this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556",
  "this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E",
  "this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66",
  "this.overlay_2B9CAE8A_3C26_1310_41C5_482A6818BB43",
  "this.overlay_2A10DE00_3C3E_3310_41C2_91734AF9C17A",
  "this.overlay_2BD12203_3C3A_1310_41A5_605C86A58069",
  "this.overlay_2BBCA53A_3C3A_1170_41A0_23FA31BFE63E",
  "this.overlay_2B52A360_3C3B_F110_418E_30BD2E640976",
  "this.overlay_2B149CF3_3C2E_70F0_41AF_E6464FBB2E71",
  "this.overlay_2501617C_3C1A_11F0_41BF_2CFD9F073B83",
  "this.overlay_2AE36D06_3C1A_1110_41CB_BB8761FF8143",
  "this.overlay_2AA3D04F_3C1A_0F10_41CE_621AE64849B3",
  "this.overlay_2A8387DE_3C1A_7130_41BD_DA6391F13B2D",
  "this.overlay_25DD71B9_3C1E_7170_4105_196F97C6D420",
  "this.overlay_250F0CE7_3CE6_3710_41BB_1EC1995D0025",
  "this.overlay_25150B36_3CEA_1170_41C2_86E8CA1741D2",
  "this.overlay_2543548C_3CEA_3711_41A4_BC15000C4231",
  "this.overlay_2529F644_3CEA_1310_41B3_508A10067404",
  "this.overlay_2554C94E_3CEE_F110_41AA_6F80CF743146",
  "this.overlay_25021AF9_3CEA_10F0_41B2_24DD8B245F6E",
  "this.overlay_25392F83_3CEA_F110_41C2_1BFF5642FB67",
  "this.overlay_25590841_3CEA_1F10_41B8_C2952ECEBD34",
  "this.overlay_2481EBDA_3CE6_1130_41C3_5AEE13E13973",
  "this.overlay_25A67B95_3C2A_1130_419C_3A0F81C38AF2",
  "this.overlay_24AC964C_3C26_7310_41C0_CF3F7FB27479",
  "this.overlay_24BFF78A_3C26_7110_41CA_12F9E2AEA0F5",
  "this.overlay_248D7883_3C26_7F10_41C0_77DB81E4F5DD",
  "this.overlay_25FD991A_3C26_7130_41C9_704D982D42D3",
  "this.overlay_265AD0D2_3C66_0F30_41AF_9085B14FD6CE",
  "this.overlay_265BDCE3_3C66_3710_41C5_D43C342F0E2B",
  "this.overlay_2666ADFA_3C66_30F0_417A_06DF65FEC1A9",
  "this.overlay_266F8ED8_3C66_3330_41B7_F7A423CFA71F",
  "this.overlay_25F2021B_3C6A_3330_41C5_3623B2B8FF3D",
  "this.overlay_25393D2E_3C6E_1110_41BE_0FE32B431CA8",
  "this.overlay_2636264C_3C6E_F310_41C6_FD036466058A",
  "this.overlay_25E1475F_3C6E_F130_41A8_C2ACA36ED101",
  "this.overlay_25EE482D_3C6E_FF10_41A8_4CBDA39298F7",
  "this.overlay_23DDF09D_3C6A_0F30_41BC_A49F7B7A03FE",
  "this.overlay_232E64AB_3C6A_1710_41C8_C6BB87D3FB65",
  "this.overlay_24E2C0D2_3C6A_0F31_41BA_3EE991B06C9C",
  "this.overlay_24F4824C_3C6A_1310_41B3_6AD39C3392E2",
  "this.overlay_24FCF367_3C6A_1110_41CD_ADA447392526",
  "this.overlay_245814ED_3C66_3710_41C5_9FFA102D2A01",
  "this.overlay_24C4DEA5_3C66_7310_41B9_3F279B29FE63",
  "this.overlay_24C35632_3C66_7370_41CE_EEA2DFE4A1DD",
  "this.overlay_24DEF6F7_3C66_70F0_4191_D65A0704AAAF",
  "this.overlay_24D7D7AB_3C66_7110_41A0_AABEC19D6AE0"
 ],
 "hfovMin": "150%",
 "label": "2n370uoa-art-gallery",
 "id": "panorama_8DEC072A_829D_8014_41B0_AFF459064849",
 "pitch": 0,
 "hfovMax": 134,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_t.jpg"
},
{
 "class": "SlideInEffect",
 "easing": "linear",
 "id": "effect_9EC9E464_865E_F219_41DC_E4FC8E7769CB",
 "duration": 1000,
 "from": "top"
},
{
 "class": "SlideOutEffect",
 "easing": "linear",
 "id": "effect_9E37C0B3_8646_F27F_41CC_03604A478DF4",
 "duration": 1000,
 "to": "top"
},
{
 "class": "FadeOutEffect",
 "easing": "linear",
 "id": "effect_9E77EA94_865F_3639_41DC_DC954016B0DF",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_8DEC072A_829D_8014_41B0_AFF459064849",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_8DEC072A_829D_8014_41B0_AFF459064849_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "camera": "this.panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 100,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "id": "panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "12.832%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--- MENU"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "backgroundOpacity": 0,
 "width": 573,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": 25,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 116,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--CONTACT"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Button_91BB1354_82FE_803C_41CB_B39F6EA1A2A5"
 ],
 "id": "Container_933E9EFD_8287_81EC_41BB_5741EC9E85C0",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "backgroundImageUrl": "skin/Container_933E9EFD_8287_81EC_41BB_5741EC9E85C0.png",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "mother_cntr"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Label_9180A913_8649_723F_41DD_D06AEC325AD4",
  "this.Label_9138FB65_8659_361B_41DF_494DB4D38176",
  "this.Label_9EAAD59A_8659_1229_41C4_710FD65B023E",
  "this.Label_9E8855F3_865B_1DFE_41DC_C983591DBFB9",
  "this.Label_2BE91923_3C1A_7110_41CB_1EF61A3E2387",
  "this.Label_2B906095_3C26_0F33_41BB_BF560350E764"
 ],
 "id": "Container_958E66DC_86C9_1E29_41E0_95B584930F15",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "score_board"
 },
 "height": "13.997%"
},
{
 "layout": "absolute",
 "children": [
  "this.Label_925970D4_86CB_3239_41DB_3D5A24896FF2"
 ],
 "id": "Container_9546775F_86CB_1E27_41DB_12AC2D5BEF99",
 "backgroundOpacity": 0.56,
 "width": "18.12%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "top": "13.95%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container5745"
 },
 "height": "22.706%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_237DC769_3C7E_1113_41BF_EEB28E9DE98E",
  "this.Container_1E9BF4EC_0D04_635C_41A2_77BEEF84244A"
 ],
 "id": "Container_1FB38401_0D04_22C4_4194_CF9122B491EB",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.78,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "MasterPOPUP"
 },
 "height": "100%"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.59,
   "hfov": 9.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.44
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9318BBFB_863B_15EF_41CC_D8DA4BE7B73A",
   "yaw": 35.59,
   "pitch": -8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 9.31
  }
 ],
 "id": "overlay_9962BE9B_869E_8034_41C0_67757E3E495F",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.99,
   "hfov": 34.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_2_1_0_map.gif",
      "width": 199,
      "height": 174
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -30.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_2_0.png",
      "width": 1549,
      "height": 1350
     }
    ]
   },
   "pitch": 0.06,
   "roll": 0,
   "hfov": 34.51
  }
 ],
 "id": "overlay_9BB3BC72_8682_80F4_41CA_5EF941BAA7D0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.3,
   "hfov": 17.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_3_0.png",
      "width": 765,
      "height": 747
     }
    ]
   },
   "pitch": 3.22,
   "hfov": 17.56
  }
 ],
 "id": "overlay_9BA23989_868D_8014_41D1_0396A7CEFE7D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.76,
   "hfov": 31.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_4_0_map.gif",
      "width": 58,
      "height": 16
     }
    ]
   },
   "pitch": -10.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_4_0.png",
      "width": 1398,
      "height": 382
     }
    ]
   },
   "yaw": -29.76,
   "pitch": -10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 31.58
  }
 ],
 "id": "overlay_9B21C184_868F_801C_41DC_95FCEB5EA0A8",
 "data": {
  "label": "1. What is the name of a young CAT?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.87,
   "hfov": 20.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_15_0_map.gif",
      "width": 85,
      "height": 16
     }
    ]
   },
   "pitch": 8.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_15_0.png",
      "width": 890,
      "height": 166
     }
    ]
   },
   "yaw": -1.87,
   "pitch": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 20.21
  }
 ],
 "id": "overlay_94EDC547_86FB_1227_41D1_F2728DD57F2A",
 "data": {
  "label": "Options:"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 21.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_16_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": 4.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_16_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": 4.04,
   "hfov": 21.01
  }
 ],
 "id": "overlay_97379628_86C9_7E69_41DB_FCF0A3299B30",
 "data": {
  "label": "Q1O[A]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 21.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_17_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_17_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": -2.2,
   "hfov": 21.05
  }
 ],
 "id": "overlay_94F75506_86C9_7219_41D6_B0166F73F93D",
 "data": {
  "label": "Q1O[B]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 20.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_18_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -8.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_18_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": -8.32,
   "hfov": 20.84
  }
 ],
 "id": "overlay_97F6AB57_86C7_3627_41DC_4634F2C59BA9",
 "data": {
  "label": "Q1O[C]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.68,
   "hfov": 20.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_19_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -8.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": 13.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_19_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": -8.32,
   "hfov": 20.84
  }
 ],
 "id": "overlay_97BAD808_86C7_3229_41D9_4E7D89F12F92",
 "data": {
  "label": "Q1correct"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.04,
   "hfov": 21.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_20_1_0_map.gif",
      "width": 200,
      "height": 52
     }
    ]
   },
   "pitch": 4.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_20_0.png",
      "width": 939,
      "height": 248
     }
    ]
   },
   "pitch": 4.08,
   "roll": 0,
   "hfov": 21.33
  }
 ],
 "id": "overlay_93831DD6_86FE_F239_41D6_77E220F130B8",
 "data": {
  "label": "q1o[a]_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.98,
   "hfov": 21.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_21_1_0_map.gif",
      "width": 200,
      "height": 52
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -1.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_21_0.png",
      "width": 938,
      "height": 244
     }
    ]
   },
   "pitch": -2.22,
   "roll": 0,
   "hfov": 21.31
  }
 ],
 "id": "overlay_97E68A7D_86F9_16EB_41D7_232E15CC1027",
 "data": {
  "label": "q1o[b]_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_97BAD808_86C7_3229_41D9_4E7D89F12F92.set('enabled', true); this.overlay_975F9CC0_86F9_1219_41CF_FDD060E28CD1.set('enabled', true); this.overlay_943D2AB3_86C9_367F_41B3_D7D58B84DF23.set('enabled', true); this.overlay_975AB438_86C9_3269_41C6_D5BDFB7AF79E.set('enabled', true); this.overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963.set('enabled', true); this.overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267.set('enabled', true); this.setComponentVisibility(this.Label_925970D4_86CB_3239_41DB_3D5A24896FF2, true, 0, this.effect_9E779A94_865F_3639_41DB_74AC702AAB6B, 'showEffect', false); this.setComponentVisibility(this.Label_925970D4_86CB_3239_41DB_3D5A24896FF2, false, 4000, this.effect_9E77EA94_865F_3639_41DC_DC954016B0DF, 'hideEffect', false); this.setComponentVisibility(this.Label_9180A913_8649_723F_41DD_D06AEC325AD4, true, 0, this.effect_9EC9E464_865E_F219_41DC_E4FC8E7769CB, 'showEffect', false); this.setComponentVisibility(this.Label_9E8855F3_865B_1DFE_41DC_C983591DBFB9, false, 0, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.04,
   "hfov": 21.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_22_1_0_map.gif",
      "width": 200,
      "height": 53
     }
    ]
   },
   "pitch": -8.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_22_0.png",
      "width": 934,
      "height": 253
     }
    ]
   },
   "pitch": -8.23,
   "roll": 0,
   "hfov": 21.21
  }
 ],
 "id": "overlay_975F9CC0_86F9_1219_41CF_FDD060E28CD1",
 "data": {
  "label": "q1o[c}_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_9303DC6E_864B_12E9_41B7_8F96401628CF.set('enabled', true); this.overlay_9339F28B_864B_162F_41A8_079CF2A1744B.set('enabled', true); this.overlay_91E7ADE2_8659_1219_41DB_990E0289AC2E.set('enabled', true); this.overlay_90101F67_865B_0EE7_41E0_40BCD3DD0FAC.set('enabled', true); this.overlay_90A2A135_865B_127B_41D4_2E2186834897.set('enabled', true); this.overlay_91076D56_867B_1239_41D7_225404B01238.set('enabled', true); this.overlay_9ECF28DE_8679_1229_41D0_E7FED2DCDF97.set('enabled', true); this.overlay_9E935C8E_8679_3229_41C1_4EA694A5CBC8.set('enabled', true); this.overlay_9BA23989_868D_8014_41D1_0396A7CEFE7D.set('enabled', false); this.overlay_9B21C184_868F_801C_41DC_95FCEB5EA0A8.set('enabled', false); this.overlay_97379628_86C9_7E69_41DB_FCF0A3299B30.set('enabled', false); this.overlay_94F75506_86C9_7219_41D6_B0166F73F93D.set('enabled', false); this.overlay_97F6AB57_86C7_3627_41DC_4634F2C59BA9.set('enabled', false); this.overlay_97BAD808_86C7_3229_41D9_4E7D89F12F92.set('enabled', false); this.overlay_93831DD6_86FE_F239_41D6_77E220F130B8.set('enabled', false); this.overlay_97E68A7D_86F9_16EB_41D7_232E15CC1027.set('enabled', false); this.overlay_975F9CC0_86F9_1219_41CF_FDD060E28CD1.set('enabled', false); this.overlay_943D2AB3_86C9_367F_41B3_D7D58B84DF23.set('enabled', false); this.overlay_975AB438_86C9_3269_41C6_D5BDFB7AF79E.set('enabled', false); this.overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963.set('enabled', false); this.overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267.set('enabled', false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.85,
   "hfov": 30.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_23_1_0_map.gif",
      "width": 200,
      "height": 50
     }
    ]
   },
   "pitch": -15.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": 2.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_23_0.png",
      "width": 1361,
      "height": 347
     }
    ]
   },
   "pitch": -15.62,
   "roll": 0,
   "hfov": 30.53
  }
 ],
 "id": "overlay_943D2AB3_86C9_367F_41B3_D7D58B84DF23",
 "data": {
  "label": "Next -Q2"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.76,
   "hfov": 19.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_24_0_map.gif",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -16.44
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_24_0.png",
      "width": 880,
      "height": 213
     }
    ]
   },
   "yaw": 4.76,
   "pitch": -16.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 19.4
  }
 ],
 "id": "overlay_975AB438_86C9_3269_41C6_D5BDFB7AF79E",
 "data": {
  "label": "Next Question"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.63,
   "hfov": 14.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_25_1_0_map.gif",
      "width": 200,
      "height": 182
     }
    ]
   },
   "pitch": 0.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": 16.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_25_0.png",
      "width": 624,
      "height": 569
     }
    ]
   },
   "pitch": 0.21,
   "roll": 0,
   "hfov": 14.26
  }
 ],
 "id": "overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963",
 "data": {
  "label": "point_bg"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.69,
   "hfov": 7.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_26_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 1.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_26_0.png",
      "width": 333,
      "height": 301
     }
    ]
   },
   "yaw": 16.69,
   "pitch": 1.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.66
  }
 ],
 "id": "overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267",
 "data": {
  "label": "+1"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.3,
   "hfov": 17.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_27_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_27_0.png",
      "width": 765,
      "height": 747
     }
    ]
   },
   "pitch": 3.22,
   "hfov": 17.56
  }
 ],
 "id": "overlay_9303DC6E_864B_12E9_41B7_8F96401628CF",
 "data": {
  "label": "q2_image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.76,
   "hfov": 31.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_28_0_map.gif",
      "width": 58,
      "height": 16
     }
    ]
   },
   "pitch": -10.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_28_0.png",
      "width": 1398,
      "height": 382
     }
    ]
   },
   "yaw": -29.76,
   "pitch": -10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 31.58
  }
 ],
 "id": "overlay_9339F28B_864B_162F_41A8_079CF2A1744B",
 "data": {
  "label": "2. What is the name of a young DOG?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963.set('enabled', true); this.overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267.set('enabled', true); this.overlay_91A4948B_865A_F22F_41D6_2ED599FFBE74.set('enabled', true); this.overlay_91443596_8679_1239_41D8_ABEFE3B2CDD7.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 21.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_33_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": 4.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_33_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": 4.04,
   "hfov": 21.01
  }
 ],
 "id": "overlay_91E7ADE2_8659_1219_41DB_990E0289AC2E",
 "data": {
  "label": "Q2O[A]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 21.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_34_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_34_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": -2.2,
   "hfov": 21.05
  }
 ],
 "id": "overlay_90101F67_865B_0EE7_41E0_40BCD3DD0FAC",
 "data": {
  "label": "Q2O[B]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "hfov": 20.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_35_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -8.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_35_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": -8.32,
   "hfov": 20.84
  }
 ],
 "id": "overlay_90A2A135_865B_127B_41D4_2E2186834897",
 "data": {
  "label": "Q2O[C]"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.85,
   "hfov": 30.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_36_1_0_map.gif",
      "width": 200,
      "height": 50
     }
    ]
   },
   "pitch": -15.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": 2.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_36_0.png",
      "width": 1361,
      "height": 347
     }
    ]
   },
   "pitch": -15.62,
   "roll": 0,
   "hfov": 30.53
  }
 ],
 "id": "overlay_91A4948B_865A_F22F_41D6_2ED599FFBE74",
 "data": {
  "label": "Next -Q3"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_975AB438_86C9_3269_41C6_D5BDFB7AF79E.set('enabled', true); this.overlay_95F40EB0_86CF_0E79_41DA_6554A7B26963.set('enabled', true); this.overlay_94FA7ECF_86C9_0E27_41C1_243BA8227267.set('enabled', true); this.overlay_91A4948B_865A_F22F_41D6_2ED599FFBE74.set('enabled', true); this.overlay_91076D56_867B_1239_41D7_225404B01238.set('enabled', true); this.overlay_91443596_8679_1239_41D8_ABEFE3B2CDD7.set('enabled', true); this.setComponentVisibility(this.Label_9138FB65_8659_361B_41DF_494DB4D38176, true, 0, this.effect_9E16D1AB_8659_F26E_4141_B96EDC1015CF, 'showEffect', false); this.setComponentVisibility(this.Label_925970D4_86CB_3239_41DB_3D5A24896FF2, true, 0, this.effect_9E3650B0_8646_F279_41E0_95C8F1E41F16, 'showEffect', false); this.setComponentVisibility(this.Label_925970D4_86CB_3239_41DB_3D5A24896FF2, false, 4000, this.effect_9E37C0B3_8646_F27F_41CC_03604A478DF4, 'hideEffect', false); this.setComponentVisibility(this.Label_9180A913_8649_723F_41DD_D06AEC325AD4, false, 0, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.04,
   "hfov": 21.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_37_1_0_map.gif",
      "width": 200,
      "height": 52
     }
    ]
   },
   "pitch": 4.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -2.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_37_0.png",
      "width": 939,
      "height": 248
     }
    ]
   },
   "pitch": 4.08,
   "roll": 0,
   "hfov": 21.33
  }
 ],
 "id": "overlay_91076D56_867B_1239_41D7_225404B01238",
 "data": {
  "label": "q2o[A]_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.98,
   "hfov": 21.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_38_1_0_map.gif",
      "width": 200,
      "height": 52
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -1.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_38_0.png",
      "width": 938,
      "height": 244
     }
    ]
   },
   "pitch": -2.22,
   "roll": 0,
   "hfov": 21.31
  }
 ],
 "id": "overlay_9ECF28DE_8679_1229_41D0_E7FED2DCDF97",
 "data": {
  "label": "q2o[B]_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.99,
   "hfov": 21.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_39_1_0_map.gif",
      "width": 200,
      "height": 54
     }
    ]
   },
   "pitch": -8.36
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -1.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_39_0.png",
      "width": 933,
      "height": 253
     }
    ]
   },
   "pitch": -8.36,
   "roll": 0,
   "hfov": 21.21
  }
 ],
 "id": "overlay_9E935C8E_8679_3229_41C1_4EA694A5CBC8",
 "data": {
  "label": "q2o[C]_hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.67,
   "hfov": 21.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_40_0_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": 4.37
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": 13.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_1_HS_40_0.png",
      "width": 917,
      "height": 225
     }
    ]
   },
   "pitch": 4.37,
   "hfov": 21.01
  }
 ],
 "id": "overlay_91443596_8679_1239_41D8_ABEFE3B2CDD7",
 "data": {
  "label": "Q2correct"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.6,
   "hfov": 9.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_29_1_0_map.gif",
      "width": 96,
      "height": 66
     }
    ]
   },
   "pitch": -10.79
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -98.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_29_0.png",
      "width": 192,
      "height": 132
     }
    ]
   },
   "pitch": -10.79,
   "roll": 0,
   "hfov": 9.88
  }
 ],
 "id": "overlay_1DC7E802_0D0C_22C4_4181_68FB605498D4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.89,
   "hfov": 10.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_30_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1C9712FF_0D04_273C_41A3_36D1E405DE06",
   "yaw": -96.89,
   "pitch": -9.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 10.14
  }
 ],
 "id": "overlay_1D9068C7_0D0C_634C_41A1_AB0F70471733",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.35,
   "hfov": 41.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_31_1_0_map.gif",
      "width": 200,
      "height": 122
     }
    ]
   },
   "pitch": -4.65
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -132.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_31_0.png",
      "width": 848,
      "height": 518
     }
    ]
   },
   "pitch": -4.65,
   "roll": 0,
   "hfov": 41.71
  }
 ],
 "id": "overlay_1C5C3EAD_0D0C_3FDC_41A5_94C3AE53BCE3",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.12,
   "hfov": 27.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_32_0_map.gif",
      "width": 101,
      "height": 16
     }
    ]
   },
   "pitch": 4.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_32_0.png",
      "width": 533,
      "height": 84
     }
    ]
   },
   "yaw": -126.12,
   "pitch": 4.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 27.36
  }
 ],
 "id": "overlay_1D58B461_0D0C_2347_4172_14F01572D11D",
 "data": {
  "label": "Welcome to goPLAY"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.88,
   "hfov": 10.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_33_1_0_map.gif",
      "width": 91,
      "height": 200
     }
    ]
   },
   "pitch": -4.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -146.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_33_0.png",
      "width": 204,
      "height": 447
     }
    ]
   },
   "pitch": -4.75,
   "roll": 0,
   "hfov": 10.51
  }
 ],
 "id": "overlay_0295EDB2_0D1C_7DC4_41AA_0AEAC46A669B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_1DF915F1_0D0C_6D44_4194_7A26A4E32039.set('enabled', true); this.overlay_1F7410C6_0D07_E34C_41A6_FF4297E4CCF1.set('enabled', true); this.overlay_1CBDD3A1_0D1F_E5C7_4187_B83E704AFBA2.set('enabled', true); this.overlay_1E6BA6FC_0D04_2F3C_415D_9F8399DE0146.set('enabled', true); this.overlay_1F958EDC_0D1C_1F7C_418E_ECA106EEFE04.set('enabled', true); this.overlay_1F43CEF8_0D04_1F45_41A5_BCBE8A906E3F.set('enabled', true); this.overlay_1C7234CA_0D1C_E344_4164_EC7D07A18188.set('enabled', true); this.overlay_1C4FA1F5_0D1C_254C_418A_F64BD8EEF020.set('enabled', true); this.overlay_2C3F3E49_3C6E_3310_41C9_2AFE2E9A4AAE.set('enabled', true); this.overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.82,
   "hfov": 11.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_34_1_0_map.gif",
      "width": 111,
      "height": 37
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -145.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_34_0.png",
      "width": 222,
      "height": 74
     }
    ]
   },
   "pitch": 0.7,
   "roll": 0,
   "hfov": 11.43
  }
 ],
 "id": "overlay_1DA218B6_0D04_E3CC_41A1_E56EB8EC439D",
 "data": {
  "label": "game_BTN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.82,
   "hfov": 11.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_35_1_0_map.gif",
      "width": 112,
      "height": 38
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -145.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_35_0.png",
      "width": 225,
      "height": 77
     }
    ]
   },
   "pitch": 0.7,
   "roll": 0,
   "hfov": 11.59
  }
 ],
 "id": "overlay_02C4ECF9_0D0C_2344_4196_185BCC901FCC",
 "data": {
  "label": "game hover"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.82,
   "hfov": 11.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_36_1_0_map.gif",
      "width": 111,
      "height": 37
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -145.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_36_0.png",
      "width": 222,
      "height": 74
     }
    ]
   },
   "pitch": 0.7,
   "roll": 0,
   "hfov": 11.43
  }
 ],
 "id": "overlay_1DF915F1_0D0C_6D44_4194_7A26A4E32039",
 "data": {
  "label": "games_BTN_clicked"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.44,
   "hfov": 12.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_37_0_map.gif",
      "width": 47,
      "height": 16
     }
    ]
   },
   "pitch": 0.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_37_0.png",
      "width": 234,
      "height": 79
     }
    ]
   },
   "yaw": -145.44,
   "pitch": 0.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.08
  }
 ],
 "id": "overlay_1C76E73C_0D05_ED3D_4199_1538CD5BFCA4",
 "data": {
  "label": "Games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.88,
   "hfov": 9.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_38_1_0_map.gif",
      "width": 88,
      "height": 38
     }
    ]
   },
   "pitch": -3.52
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -146.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_38_0.png",
      "width": 177,
      "height": 76
     }
    ]
   },
   "pitch": -3.52,
   "roll": 0,
   "hfov": 9.12
  }
 ],
 "id": "overlay_1DD2C015_0D07_E2CC_4176_D2752B784B4A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.88,
   "hfov": 9.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_39_1_0_map.gif",
      "width": 88,
      "height": 38
     }
    ]
   },
   "pitch": -7.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -146.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_39_0.png",
      "width": 176,
      "height": 77
     }
    ]
   },
   "pitch": -7.42,
   "roll": 0,
   "hfov": 9.08
  }
 ],
 "id": "overlay_02AA445D_0D07_E37C_41A8_FBDED6391BCB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.73,
   "hfov": 9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_40_1_0_map.gif",
      "width": 87,
      "height": 38
     }
    ]
   },
   "pitch": -11.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -146.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_40_0.png",
      "width": 175,
      "height": 77
     }
    ]
   },
   "pitch": -11.22,
   "roll": 0,
   "hfov": 9
  }
 ],
 "id": "overlay_02A65E49_0D04_1F47_41A0_1A4EC870BD3A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.02,
   "hfov": 14.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_41_1_0_map.gif",
      "width": 138,
      "height": 196
     }
    ]
   },
   "pitch": -6.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -135.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_41_0.png",
      "width": 276,
      "height": 393
     }
    ]
   },
   "pitch": -6.05,
   "roll": 0,
   "hfov": 14.16
  }
 ],
 "id": "overlay_1F7410C6_0D07_E34C_41A6_FF4297E4CCF1",
 "data": {
  "label": "Games_dash"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.53,
   "hfov": 11.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_43_0_map.gif",
      "width": 47,
      "height": 16
     }
    ]
   },
   "pitch": -7.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_43_0.png",
      "width": 232,
      "height": 78
     }
    ]
   },
   "yaw": -145.53,
   "pitch": -7.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 11.89
  }
 ],
 "id": "overlay_1C0C91E8_0D0C_2544_4190_2C07CAC30D99",
 "data": {
  "label": "Centers"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.64,
   "hfov": 15.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_44_0_map.gif",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": 0.46
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_44_0.png",
      "width": 309,
      "height": 75
     }
    ]
   },
   "yaw": -133.64,
   "pitch": 0.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.95
  }
 ],
 "id": "overlay_1CBDD3A1_0D1F_E5C7_4187_B83E704AFBA2",
 "data": {
  "label": "Kids Games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_1CA9F415_0D04_22CC_41A7_1C45EF9F191A.set('enabled', true); this.overlay_1C565BF5_0D04_254C_4172_512C88CB1BF2.set('enabled', true); this.overlay_2C0328C0_3C6E_3F10_41BF_49B5117A7750.set('enabled', true); this.overlay_2D324AD4_3C66_F330_41C0_267B75B748C7.set('enabled', true); this.overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4.set('enabled', false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.88,
   "hfov": 6.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_45_1_0_map.gif",
      "width": 67,
      "height": 31
     }
    ]
   },
   "pitch": 0.64
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -137.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_45_0.png",
      "width": 134,
      "height": 62
     }
    ]
   },
   "pitch": 0.64,
   "roll": 0,
   "hfov": 6.92
  }
 ],
 "id": "overlay_1E6BA6FC_0D04_2F3C_415D_9F8399DE0146",
 "data": {
  "label": "kids_games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.74,
   "hfov": 12.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_46_0_map.gif",
      "width": 47,
      "height": 16
     }
    ]
   },
   "pitch": -3.77
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_46_0.png",
      "width": 233,
      "height": 78
     }
    ]
   },
   "yaw": -145.74,
   "pitch": -3.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.04
  }
 ],
 "id": "overlay_1C0E3F16_0D1C_7ECC_41A2_14F2C867721B",
 "data": {
  "label": "Tours"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.77,
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_47_0_map.gif",
      "width": 47,
      "height": 16
     }
    ]
   },
   "pitch": -11.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_47_0.png",
      "width": 232,
      "height": 78
     }
    ]
   },
   "yaw": -145.77,
   "pitch": -11.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 11.72
  }
 ],
 "id": "overlay_18A23B54_0D1C_254D_4197_E0E3600BDF1B",
 "data": {
  "label": "VR Cinema"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.88,
   "hfov": 6.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_48_1_0_map.gif",
      "width": 67,
      "height": 31
     }
    ]
   },
   "pitch": -2.89
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -137.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_48_0.png",
      "width": 134,
      "height": 63
     }
    ]
   },
   "pitch": -2.89,
   "roll": 0,
   "hfov": 6.92
  }
 ],
 "id": "overlay_1F958EDC_0D1C_1F7C_418E_ECA106EEFE04",
 "data": {
  "label": "teen_games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.64,
   "hfov": 15.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_49_0_map.gif",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -3.11
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_49_0.png",
      "width": 309,
      "height": 74
     }
    ]
   },
   "yaw": -133.64,
   "pitch": -3.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.93
  }
 ],
 "id": "overlay_1F43CEF8_0D04_1F45_41A5_BCBE8A906E3F",
 "data": {
  "label": "Teen Games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.88,
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_50_1_0_map.gif",
      "width": 67,
      "height": 31
     }
    ]
   },
   "pitch": -6.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -137.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_50_0.png",
      "width": 134,
      "height": 63
     }
    ]
   },
   "pitch": -6.49,
   "roll": 0,
   "hfov": 6.89
  }
 ],
 "id": "overlay_1C7234CA_0D1C_E344_4164_EC7D07A18188",
 "data": {
  "label": "Edu_games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.64,
   "hfov": 15.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_51_0_map.gif",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -6.71
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_51_0.png",
      "width": 309,
      "height": 74
     }
    ]
   },
   "yaw": -133.64,
   "pitch": -6.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.84
  }
 ],
 "id": "overlay_1C4FA1F5_0D1C_254C_418A_F64BD8EEF020",
 "data": {
  "label": "Edu Games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.88,
   "hfov": 6.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_52_1_0_map.gif",
      "width": 66,
      "height": 31
     }
    ]
   },
   "pitch": -10.02
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -137.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_1_HS_52_0.png",
      "width": 133,
      "height": 63
     }
    ]
   },
   "pitch": -10.02,
   "roll": 0,
   "hfov": 6.84
  }
 ],
 "id": "overlay_1C60E2A9_0D1C_27C4_41A4_75A2138DFEC4",
 "data": {
  "label": "vr_games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.65,
   "hfov": 15.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_53_0_map.gif",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -10.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_53_0.png",
      "width": 309,
      "height": 74
     }
    ]
   },
   "yaw": -133.65,
   "pitch": -10.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.68
  }
 ],
 "id": "overlay_1CD93629_0D04_2EC7_4191_CE2EDB94B7E7",
 "data": {
  "label": "VR Games"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.64,
   "hfov": 25.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_54_1_0_map.gif",
      "width": 168,
      "height": 200
     }
    ]
   },
   "pitch": -9.56
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -115.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_54_0.png",
      "width": 501,
      "height": 595
     }
    ]
   },
   "pitch": -9.56,
   "roll": 0,
   "hfov": 25.37
  }
 ],
 "id": "overlay_1CA9F415_0D04_22CC_41A7_1C45EF9F191A",
 "data": {
  "label": "KidsGames_dash"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_1CA9F415_0D04_22CC_41A7_1C45EF9F191A.set('enabled', false); this.overlay_1C565BF5_0D04_254C_4172_512C88CB1BF2.set('enabled', false); this.overlay_2C0328C0_3C6E_3F10_41BF_49B5117A7750.set('enabled', false); this.overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.8,
   "hfov": 7.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_55_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_55_0.png",
      "width": 157,
      "height": 67
     }
    ]
   },
   "yaw": -107.8,
   "pitch": -21.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.54
  }
 ],
 "id": "overlay_1C565BF5_0D04_254C_4172_512C88CB1BF2",
 "data": {
  "label": "<Back"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.03,
   "hfov": 13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_56_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": 5.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -114.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_56_0.png",
      "width": 256,
      "height": 164
     }
    ]
   },
   "pitch": 5.61,
   "hfov": 13.12
  }
 ],
 "id": "overlay_2C3F3E49_3C6E_3310_41C9_2AFE2E9A4AAE",
 "data": {
  "label": "goPLAY logo"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_1FB38401_0D04_22C4_4194_CF9122B491EB, true, 0, null, null, false); this.setComponentVisibility(this.Container_1E9BF4EC_0D04_635C_41A2_77BEEF84244A, true, 0, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.87,
   "hfov": 22.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_57_0_map.gif",
      "width": 105,
      "height": 16
     }
    ]
   },
   "pitch": -0.02
  }
 ],
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_57_0.png",
      "width": 440,
      "height": 67
     }
    ]
   },
   "yaw": -115.87,
   "pitch": -0.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.67
  }
 ],
 "id": "overlay_2C0328C0_3C6E_3F10_41BF_49B5117A7750",
 "data": {
  "label": "Treasure Chest Hunt"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.25,
   "hfov": 7.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_58_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_58_0.png",
      "width": 144,
      "height": 78
     }
    ]
   },
   "yaw": -131.25,
   "pitch": -14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.23
  }
 ],
 "id": "overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4",
 "data": {
  "label": "<gameType_Back"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.82,
   "hfov": 23.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_59_1_0_map.gif",
      "width": 200,
      "height": 34
     }
    ]
   },
   "pitch": -0.3
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -115.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_59_0.png",
      "width": 465,
      "height": 80
     }
    ]
   },
   "pitch": -0.3,
   "roll": 0,
   "hfov": 23.59
  }
 ],
 "id": "overlay_2D324AD4_3C66_F330_41C0_267B75B748C7",
 "data": {
  "label": "treasure_chest_hover"
 },
 "rollOverDisplay": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "width": 49,
 "paddingBottom": 0,
 "right": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "paddingRight": 0,
 "bottom": 8,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 37,
 "paddingLeft": 0,
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingLeft": 0,
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.64,
   "hfov": 15.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -48.38
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2BBE4BC5_3C2A_1110_41C7_F06571B29664",
   "yaw": -130.64,
   "pitch": -48.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.18
  }
 ],
 "id": "overlay_2B9A8598_3C26_7131_41CD_8E62709CBC44",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.95,
   "hfov": 15.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -46.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2BBE7BC5_3C2A_1110_41CA_02CF15072516",
   "yaw": -47.95,
   "pitch": -46.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.83
  }
 ],
 "id": "overlay_2841AAFE_3C2A_10F0_41BA_92C91DA8DA59",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.17,
   "hfov": 69.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 120
     }
    ]
   },
   "pitch": 2.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -86.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_2_0.png",
      "width": 450,
      "height": 273
     }
    ]
   },
   "pitch": 2.66,
   "roll": 0,
   "hfov": 69.27
  }
 ],
 "id": "overlay_282EBBEA_3C2A_3110_418D_8D468687BB72",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.99,
   "hfov": 21.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -16.91
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -57.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_3_0.png",
      "width": 127,
      "height": 104
     }
    ]
   },
   "pitch": -16.91,
   "hfov": 21.51
  }
 ],
 "id": "overlay_2808E30F_3C2A_7110_41B9_F396B62658AF",
 "data": {
  "label": "chest_IMG"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.46,
   "hfov": 46.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_4_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 15.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_4_0.png",
      "width": 274,
      "height": 45
     }
    ]
   },
   "yaw": -92.46,
   "pitch": 15.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 46.44
  }
 ],
 "id": "overlay_28FB79CC_3C2A_1110_41C1_D23CD3B1479E",
 "data": {
  "label": "Treasure Quest Hunt"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.45,
   "hfov": 36.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_5_1_0_map.gif",
      "width": 108,
      "height": 96
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "items": [
  {
   "yaw": -100.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_5_0.png",
      "width": 217,
      "height": 192
     }
    ]
   },
   "pitch": -0.45,
   "roll": 0,
   "hfov": 36.97
  }
 ],
 "id": "overlay_293B02B0_3C26_3370_41B4_07A46177CBB8",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.73,
   "hfov": 30.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_6_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": 0.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_6_0.png",
      "width": 174,
      "height": 92
     }
    ]
   },
   "yaw": -100.73,
   "pitch": 0.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 30.67
  }
 ],
 "id": "overlay_2FB45BB5_3C26_3170_41B1_89744CFD95FC",
 "data": {
  "label": "Unlock all 10 treasure chests with your mathematical skills.\u000d\u000dCategory: Maths & Numracy\u000dScore: 10goCOINS"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2FB45BB5_3C26_3170_41B1_89744CFD95FC.set('enabled', false); this.overlay_28DFF09F_3C3A_0F30_41C0_FEB15C5388BE.set('enabled', false); this.overlay_29C650B9_3C3E_0F70_41C2_D0945476CAD4.set('enabled', true); this.overlay_2ADFF34B_3C26_7110_41C5_011F5CD13BAD.set('enabled', true); this.overlay_2AE6672E_3C19_F110_41CD_D5CE4C36B16D.set('enabled', true); this.overlay_29600424_3C1A_1710_41C6_7771723D66B5.set('enabled', true); this.overlay_2917B1B4_3C1E_3171_41C3_7EF76E09B3A4.set('enabled', true); this.overlay_2B7AC026_3C1E_0F10_41B1_03E77AD39BCD.set('enabled', true); this.overlay_29292DD3_3C1E_1137_41C2_D29EC2A8F04E.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.72,
   "hfov": 26.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_7_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -99.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_7_0.png",
      "width": 152,
      "height": 67
     }
    ]
   },
   "pitch": -12.75,
   "hfov": 26.15
  }
 ],
 "id": "overlay_28DFF09F_3C3A_0F30_41C0_FEB15C5388BE",
 "data": {
  "label": "treatsure_Quest_playnow_BTN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0); this.overlay_2808E30F_3C2A_7110_41B9_F396B62658AF.set('enabled', false); this.overlay_28FB79CC_3C2A_1110_41C1_D23CD3B1479E.set('enabled', false); this.overlay_2FB45BB5_3C26_3170_41B1_89744CFD95FC.set('enabled', false); this.overlay_28DFF09F_3C3A_0F30_41C0_FEB15C5388BE.set('enabled', false); this.overlay_29C650B9_3C3E_0F70_41C2_D0945476CAD4.set('enabled', false); this.overlay_2ADFF34B_3C26_7110_41C5_011F5CD13BAD.set('enabled', false); this.overlay_2AE6672E_3C19_F110_41CD_D5CE4C36B16D.set('enabled', false); this.overlay_29600424_3C1A_1710_41C6_7771723D66B5.set('enabled', false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.05,
   "hfov": 4.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 15.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -56.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_8_0.png",
      "width": 25,
      "height": 27
     }
    ]
   },
   "pitch": 15.31,
   "hfov": 4.41
  }
 ],
 "id": "overlay_2AB9687F_3C3A_1FF0_41B8_3B3E6D5C736A",
 "data": {
  "label": "close_BTN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.59,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_9_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_9_0.png",
      "width": 193,
      "height": 113
     }
    ]
   },
   "yaw": -99.59,
   "pitch": -1.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_29C650B9_3C3E_0F70_41C2_D0945476CAD4",
 "data": {
  "label": "Q1: To cross the river you need 12 stones. You have 7. How many more do you need?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.63,
   "hfov": 26.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_10_1_0_map.gif",
      "width": 77,
      "height": 27
     }
    ]
   },
   "pitch": 7.95
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -68.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_10_0.png",
      "width": 155,
      "height": 55
     }
    ]
   },
   "pitch": 7.95,
   "roll": 0,
   "hfov": 26.79
  }
 ],
 "id": "overlay_2ADFF34B_3C26_7110_41C5_011F5CD13BAD",
 "data": {
  "label": "optionA"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.49,
   "hfov": 26.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_11_1_0_map.gif",
      "width": 77,
      "height": 26
     }
    ]
   },
   "pitch": -0.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -68.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_11_0.png",
      "width": 155,
      "height": 52
     }
    ]
   },
   "pitch": -0.12,
   "roll": 0,
   "hfov": 26.77
  }
 ],
 "id": "overlay_2AE6672E_3C19_F110_41CD_D5CE4C36B16D",
 "data": {
  "label": "optionB"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.35,
   "hfov": 26.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_12_1_0_map.gif",
      "width": 77,
      "height": 27
     }
    ]
   },
   "pitch": -7.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "yaw": -68.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_12_0.png",
      "width": 155,
      "height": 55
     }
    ]
   },
   "pitch": -7.93,
   "roll": 0,
   "hfov": 26.77
  }
 ],
 "id": "overlay_29600424_3C1A_1710_41C6_7771723D66B5",
 "data": {
  "label": "optionC"
 },
 "rollOverDisplay": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_2B9CAE8A_3C26_1310_41C5_482A6818BB43.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.55,
   "hfov": 18.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_13_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 7.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_13_0.png",
      "width": 104,
      "height": 40
     }
    ]
   },
   "yaw": -71.55,
   "pitch": 7.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.17
  }
 ],
 "id": "overlay_2917B1B4_3C1E_3171_41C3_7EF76E09B3A4",
 "data": {
  "label": "5"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.31,
   "hfov": 18.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_14_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_14_0.png",
      "width": 104,
      "height": 40
     }
    ]
   },
   "yaw": -71.31,
   "pitch": -0.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.33
  }
 ],
 "id": "overlay_2B7AC026_3C1E_0F10_41B1_03E77AD39BCD",
 "data": {
  "label": "4"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.43,
   "hfov": 18.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_15_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -7.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_15_0.png",
      "width": 104,
      "height": 40
     }
    ]
   },
   "yaw": -71.43,
   "pitch": -7.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.16
  }
 ],
 "id": "overlay_29292DD3_3C1E_1137_41C2_D29EC2A8F04E",
 "data": {
  "label": "7"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.42,
   "hfov": 52.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_16_1_0_map.gif",
      "width": 161,
      "height": 127
     }
    ]
   },
   "pitch": 4.29
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -51.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_16_0.png",
      "width": 323,
      "height": 254
     }
    ]
   },
   "pitch": 4.29,
   "roll": 0,
   "hfov": 52.8
  }
 ],
 "id": "overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C",
 "data": {
  "label": "answer_bg"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.71,
   "hfov": 8.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_17_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_20AB4284_3C2E_7310_41C6_D6F47E8DF9C7",
   "yaw": -50.71,
   "pitch": 13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.28
  }
 ],
 "id": "overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556",
 "data": {
  "label": "correct_avertar"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.94,
   "hfov": 32.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_18_0_map.gif",
      "width": 50,
      "height": 16
     }
    ]
   },
   "pitch": 2.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_18_0.png",
      "width": 183,
      "height": 58
     }
    ]
   },
   "yaw": -50.94,
   "pitch": 2.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 32.25
  }
 ],
 "id": "overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E",
 "data": {
  "label": "CORRECT!"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.9,
   "hfov": 29.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_19_1_0_map.gif",
      "width": 84,
      "height": 31
     }
    ]
   },
   "pitch": -3.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "yaw": -50.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_19_0.png",
      "width": 169,
      "height": 63
     }
    ]
   },
   "pitch": -3.88,
   "roll": 0,
   "hfov": 29.21
  }
 ],
 "id": "overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66",
 "data": {
  "label": "NEXT_BTN"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_29C650B9_3C3E_0F70_41C2_D0945476CAD4.set('enabled', false); this.overlay_2917B1B4_3C1E_3171_41C3_7EF76E09B3A4.set('enabled', false); this.overlay_2B7AC026_3C1E_0F10_41B1_03E77AD39BCD.set('enabled', false); this.overlay_29292DD3_3C1E_1137_41C2_D29EC2A8F04E.set('enabled', false); this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_2B9CAE8A_3C26_1310_41C5_482A6818BB43.set('enabled', false); this.overlay_2A10DE00_3C3E_3310_41C2_91734AF9C17A.set('enabled', true); this.overlay_2BD12203_3C3A_1310_41A5_605C86A58069.set('enabled', true); this.overlay_2BBCA53A_3C3A_1170_41A0_23FA31BFE63E.set('enabled', true); this.overlay_2B52A360_3C3B_F110_418E_30BD2E640976.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.84,
   "hfov": 20.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_20_0_map.gif",
      "width": 46,
      "height": 16
     }
    ]
   },
   "pitch": -4.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_20_0.png",
      "width": 117,
      "height": 40
     }
    ]
   },
   "yaw": -52.84,
   "pitch": -4.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 20.59
  }
 ],
 "id": "overlay_2B9CAE8A_3C26_1310_41C5_482A6818BB43",
 "data": {
  "label": "NEXT>Q2"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.63,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_21_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_21_0.png",
      "width": 193,
      "height": 113
     }
    ]
   },
   "yaw": -99.63,
   "pitch": -0.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_2A10DE00_3C3E_3310_41C2_91734AF9C17A",
 "data": {
  "label": "Q2: You found 5 gold coins, then 3 more. How many gold coins do you have now?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_2B149CF3_3C2E_70F0_41AF_E6464FBB2E71.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.33,
   "hfov": 18.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_22_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_22_0.png",
      "width": 103,
      "height": 39
     }
    ]
   },
   "yaw": -71.33,
   "pitch": -8.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.04
  }
 ],
 "id": "overlay_2BD12203_3C3A_1310_41A5_605C86A58069",
 "data": {
  "label": "8"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.31,
   "hfov": 18.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_23_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_23_0.png",
      "width": 104,
      "height": 40
     }
    ]
   },
   "yaw": -71.31,
   "pitch": -0.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.33
  }
 ],
 "id": "overlay_2BBCA53A_3C3A_1170_41A0_23FA31BFE63E",
 "data": {
  "label": "2"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.71,
   "hfov": 18.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_24_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 7.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_24_0.png",
      "width": 104,
      "height": 40
     }
    ]
   },
   "yaw": -71.71,
   "pitch": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.14
  }
 ],
 "id": "overlay_2B52A360_3C3B_F110_418E_30BD2E640976",
 "data": {
  "label": "15"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2501617C_3C1A_11F0_41BF_2CFD9F073B83.set('enabled', true); this.overlay_2AE36D06_3C1A_1110_41CB_BB8761FF8143.set('enabled', true); this.overlay_2AA3D04F_3C1A_0F10_41CE_621AE64849B3.set('enabled', true); this.overlay_2A8387DE_3C1A_7130_41BD_DA6391F13B2D.set('enabled', true); this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_2A10DE00_3C3E_3310_41C2_91734AF9C17A.set('enabled', false); this.overlay_2BD12203_3C3A_1310_41A5_605C86A58069.set('enabled', false); this.overlay_2BBCA53A_3C3A_1170_41A0_23FA31BFE63E.set('enabled', false); this.overlay_2B52A360_3C3B_F110_418E_30BD2E640976.set('enabled', false); this.overlay_2B149CF3_3C2E_70F0_41AF_E6464FBB2E71.set('enabled', false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.19,
   "hfov": 22.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_25_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.38
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_25_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52.19,
   "pitch": -4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.2
  }
 ],
 "id": "overlay_2B149CF3_3C2E_70F0_41AF_E6464FBB2E71",
 "data": {
  "label": "NEXT>Q3"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.46,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_26_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_26_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.46,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_2501617C_3C1A_11F0_41BF_2CFD9F073B83",
 "data": {
  "label": "Q3: There are 7 jewels in the pouch. You give 2 to a friend. How many left?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_2B149CF3_3C2E_70F0_41AF_E6464FBB2E71.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.33,
   "hfov": 18.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_27_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_27_0.png",
      "width": 103,
      "height": 39
     }
    ]
   },
   "yaw": -71.33,
   "pitch": -8.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.04
  }
 ],
 "id": "overlay_2AE36D06_3C1A_1110_41CB_BB8761FF8143",
 "data": {
  "label": "9"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.71,
   "hfov": 18.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_29_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": 7.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_29_0.png",
      "width": 104,
      "height": 39
     }
    ]
   },
   "yaw": -71.71,
   "pitch": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.14
  }
 ],
 "id": "overlay_2AA3D04F_3C1A_0F10_41CE_621AE64849B3",
 "data": {
  "label": "14"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_25DD71B9_3C1E_7170_4105_196F97C6D420.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.31,
   "hfov": 18.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_28_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_28_0.png",
      "width": 104,
      "height": 39
     }
    ]
   },
   "yaw": -71.31,
   "pitch": -0.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.33
  }
 ],
 "id": "overlay_2A8387DE_3C1A_7130_41BD_DA6391F13B2D",
 "data": {
  "label": "5"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_2501617C_3C1A_11F0_41BF_2CFD9F073B83.set('enabled', false); this.overlay_2AE36D06_3C1A_1110_41CB_BB8761FF8143.set('enabled', false); this.overlay_2AA3D04F_3C1A_0F10_41CE_621AE64849B3.set('enabled', false); this.overlay_2A8387DE_3C1A_7130_41BD_DA6391F13B2D.set('enabled', false); this.overlay_25DD71B9_3C1E_7170_4105_196F97C6D420.set('enabled', false); this.overlay_250F0CE7_3CE6_3710_41BB_1EC1995D0025.set('enabled', true); this.overlay_25150B36_3CEA_1170_41C2_86E8CA1741D2.set('enabled', true); this.overlay_2543548C_3CEA_3711_41A4_BC15000C4231.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.38,
   "hfov": 22.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_30_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.39
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_30_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52.38,
   "pitch": -4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.2
  }
 ],
 "id": "overlay_25DD71B9_3C1E_7170_4105_196F97C6D420",
 "data": {
  "label": "NEXT>Q4"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.46,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_31_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_31_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.46,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_250F0CE7_3CE6_3710_41BB_1EC1995D0025",
 "data": {
  "label": "Q4: Which number is greater: 4 or 9?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_2529F644_3CEA_1310_41B3_508A10067404.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.34,
   "hfov": 18.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_32_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": -0.29
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_32_0.png",
      "width": 103,
      "height": 39
     }
    ]
   },
   "yaw": -71.34,
   "pitch": -0.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.18
  }
 ],
 "id": "overlay_25150B36_3CEA_1170_41C2_86E8CA1741D2",
 "data": {
  "label": "9"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.71,
   "hfov": 18.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_33_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": 7.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_33_0.png",
      "width": 104,
      "height": 39
     }
    ]
   },
   "yaw": -71.71,
   "pitch": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.14
  }
 ],
 "id": "overlay_2543548C_3CEA_3711_41A4_BC15000C4231",
 "data": {
  "label": "4"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_250F0CE7_3CE6_3710_41BB_1EC1995D0025.set('enabled', false); this.overlay_25150B36_3CEA_1170_41C2_86E8CA1741D2.set('enabled', false); this.overlay_2543548C_3CEA_3711_41A4_BC15000C4231.set('enabled', false); this.overlay_2529F644_3CEA_1310_41B3_508A10067404.set('enabled', false); this.overlay_2554C94E_3CEE_F110_41AA_6F80CF743146.set('enabled', true); this.overlay_25021AF9_3CEA_10F0_41B2_24DD8B245F6E.set('enabled', true); this.overlay_25392F83_3CEA_F110_41C2_1BFF5642FB67.set('enabled', true); this.overlay_25590841_3CEA_1F10_41B8_C2952ECEBD34.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52,
   "hfov": 22.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_34_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_34_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52,
   "pitch": -4.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.19
  }
 ],
 "id": "overlay_2529F644_3CEA_1310_41B3_508A10067404",
 "data": {
  "label": "NEXT>Q5"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_35_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_35_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_2554C94E_3CEE_F110_41AA_6F80CF743146",
 "data": {
  "label": "Q5: Select all pairs that make 10: (6+4), (2+7), (5+5)?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_36_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 6.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_36_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.65
  }
 ],
 "id": "overlay_25021AF9_3CEA_10F0_41B2_24DD8B245F6E",
 "data": {
  "label": "(6+4) and (2+7)"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_2481EBDA_3CE6_1130_41C3_5AEE13E13973.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.28,
   "hfov": 29.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_37_0_map.gif",
      "width": 67,
      "height": 16
     }
    ]
   },
   "pitch": -0.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_37_0.png",
      "width": 165,
      "height": 39
     }
    ]
   },
   "yaw": -66.28,
   "pitch": -0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 29.16
  }
 ],
 "id": "overlay_25392F83_3CEA_F110_41C2_1BFF5642FB67",
 "data": {
  "label": "(5+5) and (6+4)"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.41,
   "hfov": 30.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_38_0_map.gif",
      "width": 71,
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_38_0.png",
      "width": 175,
      "height": 39
     }
    ]
   },
   "yaw": -65.41,
   "pitch": -8.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 30.59
  }
 ],
 "id": "overlay_25590841_3CEA_1F10_41B8_C2952ECEBD34",
 "data": {
  "label": "(2+7) and (5+5)"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_2554C94E_3CEE_F110_41AA_6F80CF743146.set('enabled', false); this.overlay_25021AF9_3CEA_10F0_41B2_24DD8B245F6E.set('enabled', false); this.overlay_25392F83_3CEA_F110_41C2_1BFF5642FB67.set('enabled', false); this.overlay_25590841_3CEA_1F10_41B8_C2952ECEBD34.set('enabled', false); this.overlay_2481EBDA_3CE6_1130_41C3_5AEE13E13973.set('enabled', false); this.overlay_25A67B95_3C2A_1130_419C_3A0F81C38AF2.set('enabled', true); this.overlay_24AC964C_3C26_7310_41C0_CF3F7FB27479.set('enabled', true); this.overlay_24BFF78A_3C26_7110_41CA_12F9E2AEA0F5.set('enabled', true); this.overlay_248D7883_3C26_7F10_41C0_77DB81E4F5DD.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52,
   "hfov": 22.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_39_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_39_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52,
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.19
  }
 ],
 "id": "overlay_2481EBDA_3CE6_1130_41C3_5AEE13E13973",
 "data": {
  "label": "NEXT>Q6"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_40_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_40_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_25A67B95_3C2A_1130_419C_3A0F81C38AF2",
 "data": {
  "label": "Q6: Solve: 12 + 9 = ?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_41_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_41_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.45
  }
 ],
 "id": "overlay_24AC964C_3C26_7310_41C0_CF3F7FB27479",
 "data": {
  "label": "11"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_42_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -1.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_42_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -1.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.95
  }
 ],
 "id": "overlay_24BFF78A_3C26_7110_41CA_12F9E2AEA0F5",
 "data": {
  "label": "3"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_25FD991A_3C26_7130_41C9_704D982D42D3.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_43_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 6.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_43_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.65
  }
 ],
 "id": "overlay_248D7883_3C26_7F10_41C0_77DB81E4F5DD",
 "data": {
  "label": "21"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_25A67B95_3C2A_1130_419C_3A0F81C38AF2.set('enabled', false); this.overlay_24AC964C_3C26_7310_41C0_CF3F7FB27479.set('enabled', false); this.overlay_24BFF78A_3C26_7110_41CA_12F9E2AEA0F5.set('enabled', false); this.overlay_248D7883_3C26_7F10_41C0_77DB81E4F5DD.set('enabled', false); this.overlay_25FD991A_3C26_7130_41C9_704D982D42D3.set('enabled', false); this.overlay_265AD0D2_3C66_0F30_41AF_9085B14FD6CE.set('enabled', true); this.overlay_265BDCE3_3C66_3710_41C5_D43C342F0E2B.set('enabled', true); this.overlay_2666ADFA_3C66_30F0_417A_06DF65FEC1A9.set('enabled', true); this.overlay_266F8ED8_3C66_3330_41B7_F7A423CFA71F.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52,
   "hfov": 22.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_44_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_44_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52,
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.19
  }
 ],
 "id": "overlay_25FD991A_3C26_7130_41C9_704D982D42D3",
 "data": {
  "label": "NEXT>Q7"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_45_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_45_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_265AD0D2_3C66_0F30_41AF_9085B14FD6CE",
 "data": {
  "label": "Q7: A pirate collected 15 shells, then found 7 more. How many shells in total?"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_46_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 7.57
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_46_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 7.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.59
  }
 ],
 "id": "overlay_265BDCE3_3C66_3710_41C5_D43C342F0E2B",
 "data": {
  "label": "13"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_47_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_47_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.95
  }
 ],
 "id": "overlay_2666ADFA_3C66_30F0_417A_06DF65FEC1A9",
 "data": {
  "label": "24"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_25F2021B_3C6A_3330_41C5_3623B2B8FF3D.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_48_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_48_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.45
  }
 ],
 "id": "overlay_266F8ED8_3C66_3330_41B7_F7A423CFA71F",
 "data": {
  "label": "22"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_265AD0D2_3C66_0F30_41AF_9085B14FD6CE.set('enabled', false); this.overlay_265BDCE3_3C66_3710_41C5_D43C342F0E2B.set('enabled', false); this.overlay_2666ADFA_3C66_30F0_417A_06DF65FEC1A9.set('enabled', false); this.overlay_266F8ED8_3C66_3330_41B7_F7A423CFA71F.set('enabled', false); this.overlay_25F2021B_3C6A_3330_41C5_3623B2B8FF3D.set('enabled', false); this.overlay_25393D2E_3C6E_1110_41BE_0FE32B431CA8.set('enabled', true); this.overlay_2636264C_3C6E_F310_41C6_FD036466058A.set('enabled', true); this.overlay_25E1475F_3C6E_F130_41A8_C2ACA36ED101.set('enabled', true); this.overlay_25EE482D_3C6E_FF10_41A8_4CBDA39298F7.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52,
   "hfov": 22.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_49_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_49_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52,
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.19
  }
 ],
 "id": "overlay_25F2021B_3C6A_3330_41C5_3623B2B8FF3D",
 "data": {
  "label": "NEXT>Q8"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_50_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_50_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_25393D2E_3C6E_1110_41BE_0FE32B431CA8",
 "data": {
  "label": "Q8: Which of these is an even number? 11, 14, 7"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_23DDF09D_3C6A_0F30_41BC_A49F7B7A03FE.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_51_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -0.81
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_51_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -0.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.96
  }
 ],
 "id": "overlay_2636264C_3C6E_F310_41C6_FD036466058A",
 "data": {
  "label": "14"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_52_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 7.86
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_52_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 7.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.56
  }
 ],
 "id": "overlay_25E1475F_3C6E_F130_41A8_C2ACA36ED101",
 "data": {
  "label": "11"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_53_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_53_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.45
  }
 ],
 "id": "overlay_25EE482D_3C6E_FF10_41A8_4CBDA39298F7",
 "data": {
  "label": "7"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_25393D2E_3C6E_1110_41BE_0FE32B431CA8.set('enabled', false); this.overlay_2636264C_3C6E_F310_41C6_FD036466058A.set('enabled', false); this.overlay_25E1475F_3C6E_F130_41A8_C2ACA36ED101.set('enabled', false); this.overlay_25EE482D_3C6E_FF10_41A8_4CBDA39298F7.set('enabled', false); this.overlay_23DDF09D_3C6A_0F30_41BC_A49F7B7A03FE.set('enabled', false); this.overlay_232E64AB_3C6A_1710_41C8_C6BB87D3FB65.set('enabled', true); this.overlay_24E2C0D2_3C6A_0F31_41BA_3EE991B06C9C.set('enabled', true); this.overlay_24F4824C_3C6A_1310_41B3_6AD39C3392E2.set('enabled', true); this.overlay_24FCF367_3C6A_1110_41CD_ADA447392526.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52,
   "hfov": 22.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_54_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_54_0.png",
      "width": 126,
      "height": 44
     }
    ]
   },
   "yaw": -52,
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 22.19
  }
 ],
 "id": "overlay_23DDF09D_3C6A_0F30_41BC_A49F7B7A03FE",
 "data": {
  "label": "NEXT>Q9"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_55_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_55_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_232E64AB_3C6A_1710_41C8_C6BB87D3FB65",
 "data": {
  "label": "Q9: Order the numbers from smallest to largest: 8, 3, 12"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_56_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 7.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_56_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 7.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.63
  }
 ],
 "id": "overlay_24E2C0D2_3C6A_0F31_41BA_3EE991B06C9C",
 "data": {
  "label": "8,12,3"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_57_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_57_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.45
  }
 ],
 "id": "overlay_24F4824C_3C6A_1310_41B3_6AD39C3392E2",
 "data": {
  "label": "12, 3, 8"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', true); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', true); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', true); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', true); this.overlay_245814ED_3C66_3710_41C5_9FFA102D2A01.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_58_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -1.1
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_58_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -1.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.95
  }
 ],
 "id": "overlay_24FCF367_3C6A_1110_41CD_ADA447392526",
 "data": {
  "label": "3, 8, 12"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_2B2863BA_3C2E_1170_41C1_7ED0D334FB4C.set('enabled', false); this.overlay_2A5813EB_3C2E_1110_41BE_BA39DE6FB556.set('enabled', false); this.overlay_2BE78D21_3C2A_1110_41C9_63A420134A6E.set('enabled', false); this.overlay_2B8F1C1E_3C26_1730_41CA_B4D619E11A66.set('enabled', false); this.overlay_232E64AB_3C6A_1710_41C8_C6BB87D3FB65.set('enabled', false); this.overlay_24E2C0D2_3C6A_0F31_41BA_3EE991B06C9C.set('enabled', false); this.overlay_24F4824C_3C6A_1310_41B3_6AD39C3392E2.set('enabled', false); this.overlay_24FCF367_3C6A_1110_41CD_ADA447392526.set('enabled', false); this.overlay_245814ED_3C66_3710_41C5_9FFA102D2A01.set('enabled', false); this.overlay_24C4DEA5_3C66_7310_41B9_3F279B29FE63.set('enabled', true); this.overlay_24C35632_3C66_7370_41CE_EEA2DFE4A1DD.set('enabled', true); this.overlay_24DEF6F7_3C66_70F0_4191_D65A0704AAAF.set('enabled', true); this.overlay_24D7D7AB_3C66_7110_41A0_AABEC19D6AE0.set('enabled', true)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.13,
   "hfov": 27.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_59_0_map.gif",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_59_0.png",
      "width": 159,
      "height": 44
     }
    ]
   },
   "yaw": -49.13,
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 27.93
  }
 ],
 "id": "overlay_245814ED_3C66_3710_41C5_9FFA102D2A01",
 "data": {
  "label": "NEXT>Q10"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.65,
   "hfov": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_60_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": false,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_60_0.png",
      "width": 193,
      "height": 91
     }
    ]
   },
   "yaw": -99.65,
   "pitch": 1.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.99
  }
 ],
 "id": "overlay_24C4DEA5_3C66_7310_41B9_3F279B29FE63",
 "data": {
  "label": "Q10: Solve  7 \u00d7 ? = 49"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_61_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": 7.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_61_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": 7.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.58
  }
 ],
 "id": "overlay_24C35632_3C66_7370_41CE_EEA2DFE4A1DD",
 "data": {
  "label": "6"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_1FB38401_0D04_22C4_4194_CF9122B491EB, true, 0, null, null, false); this.setComponentVisibility(this.Container_237DC769_3C7E_1113_41BF_EEB28E9DE98E, true, 0, null, null, false)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_62_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_62_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.95
  }
 ],
 "id": "overlay_24DEF6F7_3C66_70F0_4191_D65A0704AAAF",
 "data": {
  "label": "7"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.88,
   "hfov": 41.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_63_0_map.gif",
      "width": 97,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_63_0.png",
      "width": 238,
      "height": 39
     }
    ]
   },
   "yaw": -59.88,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 41.45
  }
 ],
 "id": "overlay_24D7D7AB_3C66_7110_41A0_AABEC19D6AE0",
 "data": {
  "label": "19"
 },
 "rollOverDisplay": false
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "bottom": 53,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": 2,
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 1199,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 51,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 30,
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 }
},
{
 "layout": "absolute",
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 188,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0.01
 ],
 "top": 0,
 "paddingRight": 0,
 "height": 44,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "red block"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 286,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.5,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 48,
 "paddingRight": 0,
 "height": 68,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "white block"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 10,
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "textShadowVerticalLength": 0,
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 12,
 "backgroundOpacity": 0,
 "width": 240,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "height": 44,
 "fontSize": 29,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 1,
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 336,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "text": "DOLOR SIT",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": 40,
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 69,
 "fontSize": 61,
 "paddingLeft": 0,
 "fontColor": "#000000",
 "fontStyle": "italic",
 "shadow": false,
 "paddingTop": 0,
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "10%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 4,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 4,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 6,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "10%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "fontFamily": "Montserrat",
 "rollOverShadow": false,
 "id": "Button_91BB1354_82FE_803C_41CB_B39F6EA1A2A5",
 "left": 100,
 "backgroundOpacity": 0.8,
 "width": 900,
 "paddingBottom": 0,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "bottom": 252,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "height": 55,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "TEXT BUTTON",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "1/50"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_9180A913_8649_723F_41DD_D06AEC325AD4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "1/50",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "2/50"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_9138FB65_8659_361B_41DF_494DB4D38176",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "2/50",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "3/50"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_9EAAD59A_8659_1229_41C4_710FD65B023E",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "3/50",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "0/50"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_9E8855F3_865B_1DFE_41DC_C983591DBFB9",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "0/50",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "0/10 (treasure hunt)"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_2BE91923_3C1A_7110_41CB_1EF61A3E2387",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "0/10",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "1/10 (Treasure Hunt)"
 },
 "textShadowVerticalLength": 2,
 "id": "Label_2B906095_3C26_0F33_41BB_BF560350E764",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 11,
 "borderSize": 0,
 "text": "0/50",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "textShadowHorizontalLength": 3,
 "height": "100%",
 "fontSize": "40px",
 "paddingLeft": 0,
 "fontColor": "#FF0000",
 "fontStyle": "normal",
 "shadow": false,
 "textShadowOpacity": 0.5,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "Label5767"
 },
 "id": "Label_925970D4_86CB_3239_41DB_3D5A24896FF2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "text": "+1",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "99.315%",
 "fontSize": "90px",
 "paddingLeft": 0,
 "fontColor": "#00FF00",
 "click": "this.overlay_975F9CC0_86F9_1219_41CF_FDD060E28CD1.set('enabled', true); this.overlay_91076D56_867B_1239_41D7_225404B01238.set('enabled', true)",
 "fontStyle": "normal",
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_246840C1_3C7A_0F10_41C6_03535715F290",
  "this.Button_247845A4_3C7B_F110_41CE_9478675EFC9B"
 ],
 "id": "Container_237DC769_3C7E_1113_41BF_EEB28E9DE98E",
 "backgroundOpacity": 1,
 "width": "70.109%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 10,
 "overflow": "scroll",
 "borderSize": 3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#0000CC",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 20,
 "data": {
  "name": "Complete: TreasureQuest_Stage1"
 },
 "height": "44.168%"
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_19E9D208_0D04_26C4_4195_F1A35AAC466F",
  "this.Image_1F298514_3C26_1130_41B5_4BF7CE73C93E",
  "this.HTMLText_2265DEC7_3C1E_3310_41CB_8A757EEDB7CC",
  "this.Button_2027809E_3C3A_0F30_41C8_8DD57B8AAFD1",
  "this.Image_1EC4581C_0D7C_22FC_4199_F7B712E16976"
 ],
 "id": "Container_1E9BF4EC_0D04_635C_41A2_77BEEF84244A",
 "backgroundOpacity": 0.3,
 "width": "80%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 3,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#00FF00",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000066"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "TreasureQuest_PLAYNOW"
 },
 "height": "80%"
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_9318BBFB_863B_15EF_41CC_D8DA4BE7B73A",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_9A822AA9_869E_8014_41CC_71CEF08C4AF3_0_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1C9712FF_0D04_273C_41A3_36D1E405DE06",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8CF47A4B_829D_8014_41D1_9D1B82822591_0_HS_30_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2BBE4BC5_3C2A_1110_41C7_F06571B29664",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_0_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2BBE7BC5_3C2A_1110_41CA_02CF15072516",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_1_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_20AB4284_3C2E_7310_41C6_D6F47E8DF9C7",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8DEC072A_829D_8014_41B0_AFF459064849_0_HS_17_0.png",
   "width": 920,
   "height": 1380
  }
 ],
 "rowCount": 6
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 120,
 "paddingBottom": 0,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "HOUSE INFO",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 140,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "PANORAMA LIST",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 100,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "LOCATION",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button location"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 113,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "rollOverFontColor": "#FFFFFF",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "FLOORPLAN",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundOpacity": 0,
 "width": 122,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "rollOverFontColor": "#FFFFFF",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "PHOTOALBUM",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button photoalbum"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 100,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "CONTACT",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button contact"
 },
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingLeft": 0,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingLeft": 0,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 50,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 40,
 "mode": "push",
 "height": "75%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "selectedItemLabelFontColor": "#C1280E",
 "scrollBarColor": "#FF361B",
 "minWidth": 1,
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMode": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "height": "100%",
 "itemLabelFontFamily": "Oswald Regular",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemMaxHeight": 1000,
 "paddingTop": 30,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#C1280E",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "class": "ThumbnailGrid",
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemThumbnailHeight": 125,
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "selectedItemLabelFontSize": 16,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 220
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": "100%",
 "scrollEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame52781"
 },
 "insetBorder": false
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-photoalbum"
 },
 "height": "100%"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 50,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 40,
 "mode": "push",
 "height": "75%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_246840C1_3C7A_0F10_41C6_03535715F290",
 "left": "10.06%",
 "backgroundOpacity": 0,
 "width": "78.682%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "4%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 20,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "82.787%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00ff00;font-size:150px;\"><B>Complete</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00ff00;font-size:60px;\"><B>Stage 1</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00ff00;font-size:65px;\"><I>To enter for the challenge, complete all 3 stages to join a team. </I></SPAN></SPAN></DIV></div>",
 "paddingTop": 20,
 "data": {
  "name": "HTMLText53815"
 }
},
{
 "shadowHorizontalLength": -3,
 "cursor": "hand",
 "fontFamily": "Montserrat",
 "rollOverShadow": false,
 "id": "Button_247845A4_3C7B_F110_41CE_9478675EFC9B",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "width": 444.05,
 "paddingBottom": 0,
 "iconWidth": 0,
 "shadowColor": "#00FF00",
 "pressedBackgroundColorRatios": [
  0
 ],
 "right": "5.94%",
 "iconHeight": 0,
 "borderRadius": 11,
 "shadowOpacity": 0.38,
 "shadowVerticalLength": -1,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#00FF00",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingRight": 0,
 "bottom": "4.51%",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "verticalAlign": "middle",
 "height": 160.6,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "55px",
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "Enter Stage 2",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": true,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "toolTipPaddingRight": 6,
 "maxHeight": 128,
 "maxWidth": 128,
 "id": "IconButton_19E9D208_0D04_26C4_4195_F1A35AAC466F",
 "backgroundOpacity": 0,
 "width": 35,
 "paddingBottom": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "class": "IconButton",
 "toolTipFontFamily": "Arial",
 "iconURL": "skin/IconButton_19E9D208_0D04_26C4_4195_F1A35AAC466F.png",
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 32,
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "toolTipOpacity": 1,
 "toolTip": "Fullscreen",
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "click": "this.setComponentVisibility(this.Container_1FB38401_0D04_22C4_4194_CF9122B491EB, false, 0, null, null, false)",
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowBlurRadius": 3,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "transparencyActive": true,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "close_BTN"
 },
 "toolTipShadowColor": "#333333",
 "cursor": "hand"
},
{
 "maxHeight": 91,
 "maxWidth": 119,
 "id": "Image_1F298514_3C26_1130_41B5_4BF7CE73C93E",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_1F298514_3C26_1130_41B5_4BF7CE73C93E.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image60943"
 },
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_2265DEC7_3C1E_3310_41CB_8A757EEDB7CC",
 "backgroundOpacity": 0,
 "width": "85.844%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "40%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00ff00;font-size:85px;\"><B>Treasure Quest Hunt</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#000099;font-size:40px;\"><B>general</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00ff00;font-size:35px;\"><I>Enter the exciting adventure of the Treasure Quest Hunt Deluxe. Use your mathematical skills to unlock treasure chests to enter for the competition.</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "TreasureQuest_INFO_.........>>HTMLText53815"
 }
},
{
 "fontFamily": "Montserrat",
 "rollOverShadow": false,
 "id": "Button_2027809E_3C3A_0F30_41C8_8DD57B8AAFD1",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "width": 358,
 "paddingBottom": 0,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0.43
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "height": 106,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "50px",
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "Play NOW",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "maxHeight": 107,
 "maxWidth": 249,
 "id": "Image_1EC4581C_0D7C_22FC_4199_F7B712E16976",
 "backgroundOpacity": 0,
 "width": 300,
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_1EC4581C_0D7C_22FC_4199_F7B712E16976.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": 107,
 "paddingLeft": 0,
 "click": "this.mainPlayList.set('selectedIndex', 1); this.overlay_1F7410C6_0D07_E34C_41A6_FF4297E4CCF1.set('enabled', false); this.overlay_1CBDD3A1_0D1F_E5C7_4187_B83E704AFBA2.set('enabled', false); this.overlay_1E6BA6FC_0D04_2F3C_415D_9F8399DE0146.set('enabled', false); this.overlay_1F958EDC_0D1C_1F7C_418E_ECA106EEFE04.set('enabled', false); this.overlay_1F43CEF8_0D04_1F45_41A5_BCBE8A906E3F.set('enabled', false); this.overlay_1C7234CA_0D1C_E344_4164_EC7D07A18188.set('enabled', false); this.overlay_1C4FA1F5_0D1C_254C_418A_F64BD8EEF020.set('enabled', false); this.overlay_1CA9F415_0D04_22CC_41A7_1C45EF9F191A.set('enabled', false); this.overlay_1C565BF5_0D04_254C_4172_512C88CB1BF2.set('enabled', false); this.overlay_2C0328C0_3C6E_3F10_41BF_49B5117A7750.set('enabled', false); this.overlay_2CF7B6ED_3C66_3310_41C2_D0F626E914C4.set('enabled', false); this.overlay_2D324AD4_3C66_F330_41C0_267B75B748C7.set('enabled', false); this.setComponentVisibility(this.Container_1FB38401_0D04_22C4_4194_CF9122B491EB, false, 0, null, null, false); this.overlay_2808E30F_3C2A_7110_41B9_F396B62658AF.set('enabled', true); this.overlay_28FB79CC_3C2A_1110_41C1_D23CD3B1479E.set('enabled', true); this.overlay_2FB45BB5_3C26_3170_41B1_89744CFD95FC.set('enabled', true); this.overlay_28DFF09F_3C3A_0F30_41C0_FEB15C5388BE.set('enabled', true); this.setComponentVisibility(this.Label_2BE91923_3C1A_7110_41CB_1EF61A3E2387, true, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "treasure_quest_PlayBTN"
 },
 "scaleMode": "fit_inside"
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "layout": "horizontal",
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 60,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 80,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.58vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": 15,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "borderSize": 0,
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "top": 15,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 40,
 "mode": "push",
 "height": 50,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 80,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.58vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "width": 70,
 "paddingBottom": 0,
 "right": 15,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "borderSize": 0,
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "top": 15,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 40,
 "mode": "push",
 "height": 70,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 80,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.58vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "backgroundOpacity": 0,
 "width": 70,
 "paddingBottom": 0,
 "right": 15,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "borderSize": 0,
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "top": 15,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 40,
 "mode": "push",
 "height": 70,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 80,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.58vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": 15,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "borderSize": 0,
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "top": 15,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 40,
 "mode": "push",
 "height": 50,
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5820"
 },
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 50,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 25,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container text"
 },
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "backgroundOpacity": 0,
 "width": "8%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "backgroundOpacity": 0,
 "width": "84%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "30%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "backgroundOpacity": 0,
 "width": "8%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#FF361B",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.4vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.07vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.8vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundOpacity": 1,
 "width": 207,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "height": 59,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3.7vh",
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button31015"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "backgroundOpacity": 0,
 "width": "10%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "10%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "backgroundOpacity": 0,
 "width": "80%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "30%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "backgroundOpacity": 0,
 "width": "10%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "10%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 3,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#FF361B",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "62.894%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.98vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.07vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.8vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.56vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "maxHeight": 120,
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "backgroundOpacity": 0,
 "width": "70%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "30%",
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image logo"
 },
 "scaleMode": "fit_inside"
},
{
 "fontFamily": "Oswald Regular",
 "layout": "horizontal",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "backgroundOpacity": 1,
 "width": 140,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "height": 59,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.83vh",
 "paddingLeft": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "CONTACT",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "shadow": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "vrPolyfillScale": 0.5,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; }
 },
 "height": "100%",
 "downloadEnabled": true
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
