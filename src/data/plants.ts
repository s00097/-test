import { Product } from '../types';

export const CATEGORIES = [
  { id: 'all', name: '全部植物' },
  { id: 'succulent', name: '多肉植物' },
  { id: 'fern', name: '蕨類植物' },
  { id: 'flowering', name: '開花植物' },
  { id: 'airplant', name: '空氣鳳梨' },
  { id: 'foliage', name: '觀葉植物' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'monstera',
    name: '龜背芋',
    scientificName: 'Monstera Deliciosa',
    category: 'foliage',
    categoryName: '觀葉植物',
    price: 1200,
    originalPrice: 1350,
    description: '以其獨特的裂葉聞名，龜背芋是打造室內叢林風格的完美選擇。它生長迅速，能為任何空間帶來生機勃勃的熱帶氣息。適合放置於明亮且無直射陽光的環境。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWj9mlClpvGXh3JlGN6Uo5IixNu9Ehph2ev18H5lZ9Y3sFJLXfx55xkkhuVB8c03R2oVDLnxNjo2OoPexN7YMBgGhWUJ0xaw7PFWaUuBOWaRmulIhn_-ba1UWZ0igSpBI4HEX0GO2LKegVFf94DbttUK52uYK2rnwmMC1Zndc8diKW4a53qnBNeClnR5rRZcRonsL388XngqzhmIcPGNc7af6_tOG3tRvYrm6LUoYVZfcmWjYrU09A',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-HjT-tillZBU5SMxdawH6hN97apNui5sn08se1m46fW2Wp5BdxSlr29L2RcgEIY7OUu8fn9G8QThMjtmvxiceOoq8JMcWtKfVBcMRhxci9-tPBB8PcXSWcjzFZ_WpvDqwKLIhNSjOLQ6eMV3T3tiEyT1bIn6hb6gGYr_SjT2WJSpKeQu-QMkieiu2nG5hiNQX_Sy9M5HFKKPbOIZXPuRO7K0l_ZTFVQwoq1fcxLF0QPrjexL90Ocf',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCy2dVYxdTQoZT09Ev3fpNj-7jCgbT3OGgSu4rTB1dUxob4SQL7Fofe0G3tdvcMMQGAE4cZYkSuvRrIiedBGFeEfdpoHQnvr-vkkw9vhetF7oVVyrMxnPYfLPXcbhZc60By4V_nZpDpmIK6dfTsqOLXYzFfZaaS2-z-o14xlSPjOEcr_LUps9gCcadv_cO9tVOf7xqmei0HkVhy1cu4Sy3goN25EOn6JjMO0gI4YBBJx6-Qa1Stj-q5',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQLwGVSr-3h3beqeZpqhoEJMKm4y7ZGmzjaGy_D0qiV5MCBxULuVITOWE-AqQi_Hc3yEhE8JSecsrtzIeN3oPx-ApfWikC0HJtLtRNdV5vmL4V8CGdneLavS67Mtw407rx5ZMogEiQvlQFIOKmtxkG8Yf6epnqunwgeoSOv7qLPFKT96uLe-PxKU5d3cdNznfX3GYKSopOCueQ4K4JLWIR07Ca4OJy6fvd4hInsDLgJwi03_NGWxa_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJV3eUarryfq1HkYtbccCM2W9nwJ1RKeR7uw3CE-0g7g7iQSWXrk8prPUBa1X2Zp9WMXwBawFaZuw39usbjv8pTlHu-0T0qfoZB09FZVkciw3Y5ToZeIr0zNq1lBPo8DMjMj3gR_OCvUGyTpo6WbLX0-orGKp-sq51TstDCYZOwm-e_X97moqyxHnd-C2362G4d2DgLjXRVjURjDAhZXkOPHvqJZgFvIqVjKQ4ArWTTvu8VGVSv6sx'
    ],
    care: {
      watering: '每週澆水一次',
      light: '明亮散射光',
      petFriendly: false,
      humidity: '中等至偏高濕度',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '15cm', price: 1200, label: '小盆 (直徑15cm)' },
      { size: '20cm', price: 1580, label: '中盆 (直徑20cm)' },
      { size: '25cm', price: 2100, label: '大盆 (直徑25cm)' }
    ],
    tag: '室內熱門',
    isPopular: true,
    aspectRatio: '4/5'
  },
  {
    id: 'aloe',
    name: '蘆薈',
    scientificName: 'Aloe Barbadensis Miller',
    category: 'succulent',
    categoryName: '多肉植物',
    price: 450,
    description: '經典耐旱的多肉植物，厚實肉質葉片儲存豐富水分，線條優美簡潔。極易照料，是居家與辦公桌上的綠意良伴。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9-lu8KpougqhjPqapCQ49Datsevobe_azd72IeBh4DdGEIfZlCmg9GtIuKd4acZrAuzUoInp0Oucff-ynBAVYybq3-9ZYaq5mFGGAqAbTq6hKhtozUeM_dPRCH9IbD_v8c3UlbYG3UwE9ZI632VjUhhzwtxyq4FAG2a1i5DUqFkTpaRuh_Kc6AOiU5ey8IjmhcJEDwjWGTVdiik243cy7ocyqBL_jXkyqGWPEMh6cH34tTzbZOOzW',
    care: {
      watering: '每兩週澆水一次',
      light: '充足日照',
      petFriendly: false,
      humidity: '乾燥通風',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '10cm', price: 450, label: '小盆 (直徑10cm)' },
      { size: '15cm', price: 650, label: '中盆 (直徑15cm)' }
    ],
    tag: '耐旱好照顧',
    aspectRatio: '4/5'
  },
  {
    id: 'boston-fern',
    name: '波斯頓蕨',
    scientificName: 'Nephrolepis Exaltata',
    category: 'fern',
    categoryName: '蕨類植物',
    price: 680,
    description: '羽狀複葉優雅垂墜，能有效過濾空氣中的甲醛與有害物質，呈現宛如林間晨霧般輕盈清爽的自然氛圍。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCotPegXAV4jwNJr_HtMxB5VF7XyrAQ9X_iG-1cxNvpPU27N9jswIi4vEWDoeWna184fzZYSBQXS5k4eWo82grsHl-HQh7UObjJ5iA9xHB_vgK_7QLF-jnr2sqXQB8Oa7h2qkWAW_5vPLfdEN0fWFIye--0RovWgjLpCICMlhttgyG7O33D0gl4y_jqgx7W81ZRTV6RlAz4zUeVCrF6evAvoAAgE6LX7bqYsAE10zX_CdURPkb7dM3o',
    care: {
      watering: '每週澆水2-3次',
      light: '明亮散射光',
      petFriendly: true,
      humidity: '喜高濕度環境',
      difficulty: '中等養護'
    },
    sizes: [
      { size: '15cm', price: 680, label: '吊盆 (直徑15cm)' },
      { size: '20cm', price: 920, label: '大型吊盆 (直徑20cm)' }
    ],
    tag: '空氣淨化',
    staggered: true,
    aspectRatio: '3/4'
  },
  {
    id: 'peace-lily',
    name: '白鶴芋',
    scientificName: 'Spathiphyllum',
    category: 'flowering',
    categoryName: '開花植物',
    price: 550,
    description: '擁有深綠光澤葉片與純白如白鶴的優雅苞片，四季常綠耐陰，具備卓越的室內空氣淨化能力，高雅寧靜。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIEPjc5nci8J2yMAlf8OCajuuHctK4y9xjM5AiXI1kPaYW-KmPpP7dixD7zOfYAfGElqzCGF8fXd6r66tQKkTKN_rz4bIv2GWcNXok2opHNzawM_fdTKY6JVtWH8qnQGmNC1IaRVgvyPgq3JnGQo-1ZyQKlQB9W15ixgg4fnyAsG0f_sdHUoJrkW55QxSdq_XbexLv52WZA6v2Z4_T6Ug09ZmFjp5v6mxERnvCwEXR5Am9eok2mxBj',
    care: {
      watering: '每週澆水一次',
      light: '耐半陰散射光',
      petFriendly: false,
      humidity: '中等濕度',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '15cm', price: 550, label: '標準盆 (直徑15cm)' },
      { size: '20cm', price: 780, label: '大盆 (直徑20cm)' }
    ],
    tag: '開花常綠',
    aspectRatio: '4/5'
  },
  {
    id: 'tillandsia',
    name: '精靈鳳梨',
    scientificName: 'Tillandsia Ionantha',
    category: 'airplant',
    categoryName: '空氣鳳梨',
    price: 320,
    description: '無需土壤即可生長的奇妙植物，透過葉面銀白色鱗片吸收空氣中的水分與養分，搭配天然原石擺設極具禪意。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS2H3FkCjjKceRldvl5e1zcEUHRV6OQzJLaLbo4LLPCK2sC8oPANa9L4FeZtAmw6z2NBTiGhu1Ftw-NYqG5iZ_4tyXgJQB4sStXqVfbUYcjY-oKFWFXCIteFkVSCPEqebkgBaxFUFiJ3AZWqz9tXMcyM_BXAR65tfBcBnI84wIkfvn-mTkFUsJQC3l2mtEBozKm9uM0JTU1hrBQahBczGk4ycWbQyty0mywm7r-rb0q9AjNO4J1Vlj',
    care: {
      watering: '每週噴水2-3次',
      light: '明亮通風處',
      petFriendly: true,
      humidity: '良好通風環境',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '單顆+原石', price: 320, label: '精靈原石組' },
      { size: '雙顆+原木底座', price: 580, label: '雙株原木組' }
    ],
    tag: '免土好打理',
    aspectRatio: '4/5'
  },
  {
    id: 'echeveria-bowl',
    name: '石蓮花組合',
    scientificName: 'Echeveria Elegans Group',
    category: 'succulent',
    categoryName: '多肉植物',
    price: 890,
    description: '精選數株粉嫩玫瑰狀石蓮花組合於淺燒陶盆中，在溫暖陽光下泛著淡粉紫光澤，如同盛開不謝的花朵。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVoF-iI1RECN_tqA15a7oQf5B7Bva77aCzWd0gL5w19sVAeAXy_QpNIej8AZYN7IreAex_Xbyn8QkJHHvgvsZ6QmQOXYegJWjzBu7RuVz6QInqnLQYf2kGArsKKePYtUJ4iq-7O8x26-Lb5pJDjW4PGpTQAe7LR-q0CQi3Jz0Ikx1SUxaJluv3TeXrVE_-4WbLzDXZB3jGXPnXehEFx7_e9YAHFrDITd0SBgSdRc21ZEC5crUfV74q',
    care: {
      watering: '每兩週澆透一次',
      light: '全日照或明亮光',
      petFriendly: true,
      humidity: '乾燥環境',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '18cm', price: 890, label: '陶盆組合 (直徑18cm)' },
      { size: '24cm', price: 1280, label: '大陶盆豪華組 (直徑24cm)' }
    ],
    tag: '手作盆景',
    staggered: true,
    aspectRatio: '1/1'
  },
  {
    id: 'fiddle-leaf-fig',
    name: '琴葉榕',
    scientificName: 'Ficus Lyrata',
    category: 'foliage',
    categoryName: '觀葉植物',
    price: 980,
    originalPrice: 1200,
    description: '小提琴形狀的巨大革質葉片，挺拔大氣，是當代室內設計師最推崇的視覺焦點植物之一，兼具雕塑感與生命力。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANpptbcv_Gf_BYZGiySIHauEGtqIbmbxnV40VYhezJMbyaaHYQzkvMjeu_S3sCXMdaD7OwVekc0g40pqIkt7aRIOvdLD0EoieB9rguoUqoNIoOqLmeu7lAAQ09rItYz5z3ff-Eh763JjK6c0Ryq_lwIuAHjQdxmdK3TeSta7yf_381TFpPB20p5JzHGChFcwNORuLxeykwoRCKjV0XmbrVr3Z0KA0cV9coLoZAXC8KuGNeE8WLJ1VK',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpw3uFZJJOsgxEz41wQ_yOwOlarI6ooLdSJ28V95wW1VkPpiWcFS-qYNE6vpU22nh9y6DUN7yeei8Pn2c126_IXcIQ9uBgW6I-QcqjpIyVdII_dVIXhBK5lnEuMOPGRqdZsem9S06J8iyhPLk2oLCQ0RxvXCqAfx4mqq86guvTRsLW2n49UIARMqAPc3dmsJCwoR9aaUlOsup4rS4dyQtfEUqf76-rc-YB1jTOhk1hipxWUIlIGxEN'
    ],
    care: {
      watering: '每週表土乾透澆水',
      light: '充足明亮散光',
      petFriendly: false,
      humidity: '中等濕度',
      difficulty: '中等養護'
    },
    sizes: [
      { size: '15cm', price: 980, label: '桌上型 (直徑15cm)' },
      { size: '25cm', price: 1880, label: '落地型 (直徑25cm)' }
    ],
    tag: '明亮散光',
    isPopular: true,
    aspectRatio: '3/4'
  },
  {
    id: 'golden-pothos',
    name: '黃金葛',
    scientificName: 'Epipremnum Aureum',
    category: 'foliage',
    categoryName: '觀葉植物',
    price: 450,
    description: '綠黃相間斑紋的心形葉片，極強的適應力與垂吊蔓生特性，不管是新手還是資深植物愛好者皆愛不釋手。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO-OIOzyGt9VR8N0kGgAVXUFJcjiNYQJaDWS0Owxa5JifY4g5JTT1MWxy_2CDD1TKHWypDCRgtFhrg7YCdiFUXy_7DAN-dIOUKCBrbEuiO2H4DOOjE6XFz9Et06T0smie9Lb8zsrwoIBpIu81hQzpEwJpYL3Ua8x53cLJJesPViqHiJGr5jY7Bt_QXX1Z85tpj1w5HiClmLhFbJ-ihxzVCPuqh-G1Mcdsx2_y5c8KOclIAgnrDB3Ae',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMbxHtnD-dfxop5StWAt2mMlJJTbxl5Np4UTcFnZIpznNFotTNSkUyWmSyzkVY3SM1soZptk_S4V5qTttGwPKNUZE1vfA84LEb8aub_YgeSdAem5NvV-Ip58qZ7b7OE8ftyLTQshxmaBFWzv13x-cTacDjxpN_u0vSpRzrDMI-ZB4QMWrtML4RRYTIVyDtne1l7f2BYzoSt_3yG9JwU4_oAwdj6sd6GBKdhiIP2ZOM-qliQ5Dtcvdi'
    ],
    care: {
      watering: '每週澆水一次',
      light: '耐陰至明亮散射光',
      petFriendly: false,
      humidity: '適應力高',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '12cm', price: 450, label: '吊盆 (直徑12cm)' },
      { size: '18cm', price: 680, label: '大吊盆 (直徑18cm)' }
    ],
    tag: '易於照顧',
    aspectRatio: '3/4'
  },
  {
    id: 'snake-plant',
    name: '虎尾蘭',
    scientificName: 'Sansevieria Trifasciata',
    category: 'succulent',
    categoryName: '多肉植物',
    price: 650,
    originalPrice: 850,
    description: '挺拔堅韌的劍形葉片帶有虎紋斑點，夜間依然持續釋放氧氣，被譽為「天然空氣清淨機」，耐旱耐陰生命力旺盛。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkfaAUFa3P6tjJKTFCA1uRaNPw6mEXLhbs4PpxtqilKHEbd80LHrQMRYUg_ya5gZp-o4LhhUVKemn54ttk_eQ4zDDs9YFtcqsGFeVqM0g9CT3RI3f2lWJ7p_ZZ9OzGhfGDS5_CK0E9nlszXET6-ctcJ7utI9p4D3pA0wMeW8yQ_tASr5t-GZB19ahrXeKt04PMHxNrOzdfjCzTSxcrWBmAnfmHUgjXzhEicLkuiQRM2wAaFIAnY3sf',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClRYOvgEEtHouQto8KlOSo3otEUsLfDabcsLLiKlXq72AQCgNVU-OC0MxuCPYZ7DxbKfnpKF-BvnQV1D65e75fjLDt51dMIEdVo_B-3X7Xj2D_dbTY-iszfxE9EB2AA0-9KitsG6xgoa2K3LSxDVxKLeVIKZp2Ckq3q1LiYhDttCUeJ_ykuMIVskoHj3bpzvlqLU_JxeeP9Lovj9L86ShRtPPAa9K4P8-HT7aMk2f3bKNo93tZnT7_'
    ],
    care: {
      watering: '每2-3週澆水一次',
      light: '耐陰至強散射光',
      petFriendly: false,
      humidity: '乾燥環境',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '15cm', price: 650, label: '經典盆 (直徑15cm)' },
      { size: '22cm', price: 1100, label: '客廳大盆 (直徑22cm)' }
    ],
    tag: '空氣淨化',
    aspectRatio: '3/4'
  },
  {
    id: 'calathea',
    name: '彩葉芋',
    scientificName: 'Calathea Medallion',
    category: 'foliage',
    categoryName: '觀葉植物',
    price: 820,
    description: '葉面擁有如孔雀羽毛般細緻繁複的幾何圖騰，背部帶有神秘的紫紅色澤，日出而張、日落而合，宛若會呼吸的藝術品。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyppkfd-EpbNs2UBiHzVU4esqctJiFTntferqX-IFpolTAqqUBGXWoq1tryeXBnt6Rf9DwIreayzO_M99YxTzv0SrzwrKO5SKp4WaQPp6FR2QSxKKYuBaLM_yZVjsAfXSGuXKZd5o5n5d7CfgmRJUd3vqWxdplYXhmUBAmhv95WwF-4uV8MFLYSlv9CynI2LdHgtzuaku4ruciy4Fmc-spMVgicqsAPFoK43hEr0I0tFT4Up3fvaEp',
    care: {
      watering: '每週澆水1-2次保持微潤',
      light: '柔和散射光',
      petFriendly: true,
      humidity: '喜高濕度 (需定期噴霧)',
      difficulty: '中等養護'
    },
    sizes: [
      { size: '15cm', price: 820, label: '標準盆 (直徑15cm)' },
      { size: '20cm', price: 1150, label: '中盆 (直徑20cm)' }
    ],
    tag: '寵物友善',
    aspectRatio: '3/4'
  },
  {
    id: 'zz-plant',
    name: '金錢樹',
    scientificName: 'Zamioculcas Zamiifolia',
    category: 'foliage',
    categoryName: '觀葉植物',
    price: 700,
    description: '羽狀複葉排列整齊光亮如碧玉，地下塊莖能儲存充沛水分，象徵招財進寶，極具耐陰與耐旱特性，是辦公環境首選。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQeuvVbYSHqL2sHEVsPM4MzMbc2TvgGCNdpjAqSA-Ezvi7dfcaUzttay5h2zIB764Xk0waTz8tDNMM6m-hdId1ZpuFcHFyq_EkDhxtPs_3I_WFKzF2dPFVvceXLBq74atXYI2d6ne0bKEI2LcBMzx2oTK9B6h9M9PsmorKLiUi1O250st1bfenLFeZupiqp5q2niuaBlkDaiaOo1F6xf0os_RoasAvLwyPCIF0PpSypouup4REvcCW',
    care: {
      watering: '每2-3週澆水一次',
      light: '耐陰至半日照',
      petFriendly: false,
      humidity: '乾燥至中等濕度',
      difficulty: '入門新手'
    },
    sizes: [
      { size: '15cm', price: 700, label: '桌上盆 (直徑15cm)' },
      { size: '22cm', price: 1350, label: '大陶盆 (直徑22cm)' }
    ],
    tag: '耐陰植物',
    aspectRatio: '3/4'
  },
  {
    id: 'string-of-pearls',
    name: '綠之鈴',
    scientificName: 'String of Pearls',
    category: 'succulent',
    categoryName: '多肉植物',
    price: 480,
    description: '圓滾如綠色珍珠的肉質葉串串垂懸，宛若珍珠項鍊，適合高位吊掛，隨風輕晃極具靈動之美。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAViooXUF4sDpSxNCoS5xYc6kyGUBh6-ULhEJ3PtaDrcvgdnacXPqahKu-c8-jpQefI7gc4106GXKa7l3GpC17sbPnQzx4HL0pr-Wg8fnvZAjz2OitX4iODlMne-UQSOloBPuhX9tIlCvC7MHcz877Kxv8Op2jv420HAUf4ezMEy3_7QYpejUSv7nHHrw0UOPhcKnebLSnrxP_WvsSiVrnuVP3MsEVfmhsqQR6vB4qMKQjUvSEfnxq5',
    care: {
      watering: '每10天澆水一次',
      light: '明亮通風散光',
      petFriendly: false,
      humidity: '通風良好乾燥',
      difficulty: '中等養護'
    },
    sizes: [
      { size: '10cm', price: 480, label: '小型吊盆 (直徑10cm)' },
      { size: '15cm', price: 680, label: '中型吊盆 (直徑15cm)' }
    ],
    tag: '垂墜美感',
    aspectRatio: '3/4'
  }
];

export interface UpsellItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const UPSELL_ITEMS: UpsellItem[] = [
  {
    id: 'upsell-watering-can',
    name: '極簡長嘴澆水壺',
    price: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8CsGIcTb-9TX4jCV3Yk_ZtMkzwE2P3a9mUv1WhGtoEPuhz_v8ZJRuDdiKVmED67sCWldr5Ker1h9hUyzEV8Pcj2vojds-MbtTp3TgQk6UjjzLrGGU8WU7wvk7UVp_bAc6h8oHvMHZHX_3XUhguAuo_xCHcV87SivXp3H7BexZS39DvUq9Wdco1ktRyUMRyipJJDeS0SiUfhbmW9vBJRRZPpZAEF5CXJruSnwPnN7EMVEpc_wPrjqJ',
    category: '園藝工具',
    description: '霧黑細長不銹鋼出水口，精準控制水流深入根部，兼具美學與實用性。'
  },
  {
    id: 'upsell-fertilizer',
    name: '有機植物營養液',
    price: 420,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtLMj43nKFOX_KP3Q3IjXSW-PKf4eV7Xs9becIfRHaWwyy4am2ABJPyJG1qlN5YLT7i_TlW_fuap1ZyZUWqY7wq5VyVIytf9_grroy4Luhxxw90FbF4RjA0ZIjIoGwsMe4t9XuI7wYFUJBAbcZiEXuo0I-VFpf693OxpdA8ScM4zy4idYB8iv2QgJ-uWTslC4RTye_jhdOo5mqmtL10M9i0cBkkP82a8iIBhGKJ70tsWgxa4kQj2Do',
    category: '植栽養護',
    description: '溫和濃縮配方，提供室內植物全方位微量元素，促進葉片油綠健康。'
  }
];

export const INITIAL_CART_ITEMS: Array<{
  product: Product;
  size: string;
  potType: string;
  quantity: number;
  unitPrice: number;
}> = [
  {
    product: PRODUCTS[0], // Monstera
    size: '中型',
    potType: '陶盆',
    quantity: 1,
    unitPrice: 1280
  },
  {
    product: PRODUCTS[11], // String of Pearls
    size: '小型',
    potType: '吊盆',
    quantity: 2,
    unitPrice: 480
  }
];
