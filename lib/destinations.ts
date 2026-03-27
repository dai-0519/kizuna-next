export type Area = {
  name: string
  img: string
  description: string
  spots: string[]
}

export type DestinationData = {
  slug: string
  name: string
  subtitle: string
  tagline: string
  heroImg: string
  description: string
  areas: Area[]
  halal: {
    summary: string
    points: string[]
  }
  practical: {
    access: string
    bestTime: string
    duration: string
  }
}

export const DESTINATIONS: DestinationData[] = [
  {
    slug: 'tokyo',
    name: 'Tokyo',
    subtitle: '東京',
    tagline: 'A city of 37 million — where ancient temples and neon towers coexist.',
    heroImg: '/images/destinations/tokyo.jpg',
    description:
      "Tokyo is Japan's capital and the world's most populous metropolitan area. Ancient shrines stand beside neon-lit skyscrapers, and centuries-old traditions thrive within walking distance of cutting-edge technology districts. For Middle Eastern travelers, Tokyo offers an unmatched variety of halal dining and a pace that can be tailored to any group.",
    areas: [
      {
        name: 'Shibuya',
        img: '/images/areas/tokyo-shibuya.jpg',
        description:
          'Home to the world-famous Shibuya Crossing — one of the busiest pedestrian intersections on Earth. Surrounded by department stores, cafés, and nightlife, Shibuya is the heartbeat of modern Tokyo.',
        spots: ['Shibuya Crossing (scramble intersection)', 'Shibuya Sky observation deck', 'Shibuya 109 shopping', 'Miyashita Park rooftop', 'Magnet by Shibuya109 rooftop view'],
      },
      {
        name: 'Asakusa',
        img: '/images/areas/tokyo-asakusa.jpg',
        description:
          'Tokyo\'s oldest and most traditional district. Senso-ji Temple — founded in 645 AD — anchors this neighbourhood of rickshaw rides, craft shops, and street food along Nakamise-dori.',
        spots: ['Senso-ji Temple & Kaminarimon Gate', 'Nakamise shopping street', 'Rickshaw experience', 'Tokyo Skytree (adjacent)', 'Asakusa street food'],
      },
      {
        name: 'Harajuku & Meiji Shrine',
        img: '/images/areas/tokyo-harajuku.jpg',
        description:
          'Harajuku is Tokyo\'s fashion heartland — from the serene Meiji Shrine forest to the colourful chaos of Takeshita Street. Two completely different worlds within 5 minutes of each other.',
        spots: ['Meiji Jingu Shrine (100-year-old forest)', 'Takeshita Street fashion', 'Omotesando luxury boutiques', 'Harajuku crepes', 'Yoyogi Park'],
      },
      {
        name: 'Shinjuku',
        img: '/images/areas/tokyo-shinjuku.jpg',
        description:
          'Tokyo\'s most energetic district by night — neon-lit izakaya alleys, department stores, and the iconic Golden Gai. By day, the Tokyo Metropolitan Government Building offers free panoramic views.',
        spots: ['Shinjuku Golden Gai', 'Kabukicho entertainment district', 'Tokyo Metro Government Building (free view)', 'Omoide Yokocho (Memory Lane)', 'Isetan and Takashimaya department stores'],
      },
    ],
    halal: {
      summary: 'Tokyo has the largest halal restaurant selection in Japan with 200+ verified options spread across all major districts.',
      points: [
        '200+ halal-certified restaurants verified by KIZUNA',
        'Dedicated halal ramen, sushi, and yakiniku restaurants',
        'Muslim prayer rooms in major malls and airports',
        'Halal convenience store options at major chains',
        'Arabic-speaking guides available in Tokyo',
      ],
    },
    practical: {
      access: 'Narita (NRT) or Haneda (HND) airports. Direct flights from Dubai ~10 hours.',
      bestTime: 'March–April (cherry blossoms) or October–November (autumn leaves)',
      duration: '3–5 days recommended as a base',
    },
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    subtitle: '京都',
    tagline: "Japan's spiritual heart — 1,600 temples, one unforgettable city.",
    heroImg: '/images/destinations/kyoto.jpg',
    description:
      "Kyoto served as Japan's imperial capital for over a thousand years. Today it preserves the country's most concentrated collection of UNESCO World Heritage sites, traditional architecture, and living culture. Geisha still walk the stone lanes of Gion, and matcha is served in the same centuries-old teahouses. For Muslim travelers, Kyoto's growing halal scene makes this cultural treasure fully accessible.",
    areas: [
      {
        name: 'Fushimi Inari',
        img: '/images/areas/kyoto-fushimi.jpg',
        description:
          'The iconic thousands of vermilion torii gates winding up Mount Inari. One of Japan\'s most photographed sites — best visited at dawn before the crowds arrive.',
        spots: ['Thousands of torii gate tunnels', 'Summit hike (2–3 hours round trip)', 'Dawn photography', 'Fox (kitsune) shrine statues', 'Views over southern Kyoto'],
      },
      {
        name: 'Arashiyama',
        img: '/images/areas/kyoto-arashiyama.jpg',
        description:
          'Kyoto\'s most scenic district — a bamboo grove, river, and Zen temples set against forested mountains. Togetsukyo Bridge and the Oi River complete a landscape that feels unchanged for centuries.',
        spots: ['Arashiyama Bamboo Grove', 'Tenryu-ji Zen Garden (UNESCO)', 'Togetsukyo Bridge', 'Monkey Park (mountain views)', 'Boat ride on the Oi River'],
      },
      {
        name: 'Gion',
        img: '/images/areas/kyoto-gion.jpg',
        description:
          'Kyoto\'s famous geisha district. Cobblestone streets lined with wooden machiya townhouses, ochaya teahouses, and the possibility of spotting a maiko (apprentice geisha) at dusk.',
        spots: ['Hanamikoji Street (geisha spotting)', 'Yasaka Shrine', 'Shirakawa canal', 'Traditional machiya architecture', 'Pontocho alley dining'],
      },
      {
        name: 'Kinkaku-ji & Nijo Castle',
        img: '/images/areas/kyoto-kinkakuji.jpg',
        description:
          'Two of Kyoto\'s most iconic sites — the gold-leaf-covered Golden Pavilion reflected in its mirror pond, and the former shogun\'s castle with its famous "nightingale floors."',
        spots: ['Kinkaku-ji Golden Pavilion', 'Nijo Castle nightingale floors', 'Ryoan-ji rock garden', 'Nishiki Market (Kyoto\'s Kitchen)', 'Philosopher\'s Path canal walk'],
      },
    ],
    halal: {
      summary: '80+ verified halal restaurants across Kyoto, plus private ryokan onsen arrangements.',
      points: [
        '80+ halal-certified restaurants in central Kyoto',
        'Halal kaiseki (traditional multi-course) available on request',
        'Private onsen ryokan — no shared bathing required',
        'Prayer facilities at major temples and shopping centres',
        'Halal bento for day trips and temple visits',
      ],
    },
    practical: {
      access: 'Shinkansen from Tokyo (2h15m) or from Osaka (15 min). Kansai Airport (KIX) 75 min by train.',
      bestTime: 'Late March–April (cherry blossoms) or November (autumn foliage)',
      duration: '2–3 days recommended',
    },
  },
  {
    slug: 'osaka',
    name: 'Osaka',
    subtitle: '大阪',
    tagline: "Japan's food capital — eat, explore, and come back for more.",
    heroImg: '/images/destinations/osaka.jpg',
    description:
      "Osaka is Japan's most welcoming and unpretentious city — famous for its food-first culture, street energy, and locals who actually talk to strangers. The Kansai dialect is warmer, the nights are louder, and the food is better. For Muslim travelers, Osaka's halal scene has grown rapidly and now rivals Tokyo in variety.",
    areas: [
      {
        name: 'Dotonbori',
        img: '/images/areas/osaka-dotonbori.jpg',
        description:
          'Osaka\'s electric heart — a canal-side strip of giant neon signs, street food stalls, and restaurants running 24 hours. The Glico Running Man sign is Japan\'s most iconic neon landmark.',
        spots: ['Glico Running Man sign', 'Takoyaki (octopus balls) street food', 'Kani Doraku crab restaurant sign', 'Dotonbori canal boat tours', 'Shinsaibashi shopping arcade'],
      },
      {
        name: 'Osaka Castle',
        img: '/images/areas/osaka-castle.jpg',
        description:
          'The symbol of Osaka — a magnificent 16th-century castle surrounded by cherry blossom trees and a double moat. The castle museum inside tells the story of Japan\'s unification.',
        spots: ['Castle tower observation deck', 'Cherry blossoms (spring)', 'Nishinomaru Garden', 'Castle museum exhibits', 'Evening light up events'],
      },
      {
        name: 'Namba & Shinsekai',
        img: '/images/areas/osaka-namba.jpg',
        description:
          'Namba is Osaka\'s entertainment and shopping core. A short walk south leads to Shinsekai — a retro district frozen in the 1950s, famous for kushikatsu (deep-fried skewers) and the Tsutenkaku Tower.',
        spots: ['Namba shopping streets', 'Tsutenkaku Tower Shinsekai', 'Kuromon Ichiba Market', 'Universal Studios Japan (nearby)', 'Hozenji Yokocho lantern alley'],
      },
    ],
    halal: {
      summary: '120+ halal restaurants across Osaka, including dedicated halal food tours.',
      points: [
        '120+ halal-certified options including takoyaki and ramen',
        'Dedicated halal food street tours available',
        'Muslim prayer room in Namba and Umeda areas',
        'Halal yakiniku and sushi restaurants confirmed',
        'Day trips to Nara (deer park) easily arranged',
      ],
    },
    practical: {
      access: 'Kansai International Airport (KIX) — direct flights from Dubai ~9 hours.',
      bestTime: 'Year-round. Spring (cherry blossoms) and autumn are peak.',
      duration: '2–3 days, ideal base for Kansai region',
    },
  },
  {
    slug: 'hakone',
    name: 'Hakone',
    subtitle: '箱根',
    tagline: 'Mt. Fuji views, private hot springs, and ryokan luxury.',
    heroImg: '/images/destinations/hakone.jpg',
    description:
      "Hakone is Japan's ultimate resort escape — a volcanic highland just 90 minutes from Tokyo, built around Mt. Fuji views, steaming hot springs, and centuries-old ryokan inns. For Muslim families, Hakone offers private onsen suites where the entire family can soak without mixed bathing concerns, and halal-friendly ryokan menus are increasingly available on advance request.",
    areas: [
      {
        name: 'Lake Ashi & Mt. Fuji',
        img: '/images/areas/hakone-fuji.jpg',
        description:
          'The iconic view of Mt. Fuji reflected in Lake Ashi\'s mirror-calm water. A pleasure boat cruise across the lake offers the classic Hakone photograph — red torii gate, snow-capped Fuji, clear sky.',
        spots: ['Hakone-en pier boat cruise', 'Moto-Hakone lakeside promenade', 'Hakone Shrine torii gate in the lake', 'Mt. Fuji panorama viewpoints', 'Amazake-chaya historic teahouse'],
      },
      {
        name: 'Ryokan & Private Onsen',
        img: '/images/areas/hakone-ryokan.jpg',
        description:
          'Traditional Japanese inn culture at its finest. Hakone has over 100 ryokan — many with private outdoor hot spring baths (rotenburo) that can be booked exclusively for your group, eliminating any concern about mixed bathing.',
        spots: ['Private onsen suites (kashikiri)', 'Kaiseki multi-course dinner service', 'Yukata robe experience', 'Tatami room stays', 'In-room outdoor baths with garden views'],
      },
      {
        name: 'Ropeway & Owakudani',
        img: '/images/areas/hakone-ropeway.jpg',
        description:
          'The Hakone Ropeway passes directly over Owakudani — an active volcanic valley with steam vents and boiling pools. On clear days the cable car offers direct views of Mt. Fuji above the clouds.',
        spots: ['Hakone Ropeway cable car', 'Owakudani volcanic valley', 'Black eggs (kuro-tamago) cooked in volcanic springs', 'Hakone Open Air Museum', 'Hakone-Yumoto hot spring town'],
      },
    ],
    halal: {
      summary: 'Private onsen available at most major ryokan. Halal kaiseki meals arranged in advance.',
      points: [
        'Private onsen suites at 20+ ryokan — no shared bathing',
        'Halal kaiseki (7–10 course traditional dinner) on advance request',
        'Ryokan staff briefed on halal requirements',
        'Halal lunch options at Hakone Open Air Museum café',
        'Alcohol-free room options available',
      ],
    },
    practical: {
      access: 'Odakyu Romancecar train from Shinjuku (85 min) or Shinkansen to Odawara then local train.',
      bestTime: 'October–November (autumn foliage + clear Fuji views). Spring also excellent.',
      duration: '1–2 nights recommended (ryokan overnight experience)',
    },
  },
  {
    slug: 'hokkaido',
    name: 'Hokkaido',
    subtitle: '北海道',
    tagline: "Japan's wild north — lavender, powder snow, and wide open skies.",
    heroImg: '/images/destinations/hokkaido.jpg',
    description:
      "Hokkaido is Japan's northernmost and least crowded main island — a landscape of rolling hills, volcanic lakes, and world-class ski resorts. In summer, Furano's lavender fields paint the hills purple. In winter, Niseko receives some of the deepest powder snow on Earth. For Muslim families, Hokkaido's growing halal scene in Sapporo and Muslim-friendly ski lodges in Niseko make it increasingly accessible.",
    areas: [
      {
        name: 'Furano & Lavender Fields',
        img: '/images/areas/hokkaido-lavender.jpg',
        description:
          'Every July, Furano\'s hillside farms transform into sweeping rows of purple lavender, lavender ice cream stands, and flower fields that stretch to the horizon. Farm Tomita is the most famous but dozens of farms open their fields to visitors.',
        spots: ['Farm Tomita lavender fields', 'Lavender ice cream', 'Flower Field Hill panorama', 'Cheese factory visits', 'Furano Wine House'],
      },
      {
        name: 'Niseko Ski Resort',
        img: '/images/areas/hokkaido-niseko.jpg',
        description:
          'Asia\'s premier ski destination — Niseko receives 15+ metres of champagne powder annually from Siberian weather systems, making it one of the best skiing experiences in the world. An international resort with English, Arabic, and Chinese services.',
        spots: ['Niseko United ski area (4 resorts)', 'Powder snow skiing and boarding', 'Snowshoeing and night skiing', 'Onsen after skiing', 'Mt. Yotei panorama'],
      },
      {
        name: 'Sapporo',
        img: '/images/areas/hokkaido-sapporo.jpg',
        description:
          'Hokkaido\'s vibrant capital — famous for its annual Snow Festival (February), fresh seafood, Sapporo Beer Museum, and the charming Otaru canal town 30 minutes away.',
        spots: ['Sapporo Snow Festival (February)', 'Odori Park', 'Tanukikoji Shopping Arcade', 'Sapporo Beer Museum', 'Otaru canal day trip'],
      },
    ],
    halal: {
      summary: 'Growing halal scene in Sapporo. Muslim-friendly ski lodges in Niseko.',
      points: [
        'Halal restaurants confirmed in Sapporo central area',
        'Muslim-friendly ski lodges in Niseko with halal meals',
        'Halal seafood available at Hakodate Morning Market',
        'Prayer room at New Chitose Airport',
        'Hokkaido dairy and produce — halal labelling guidance provided',
      ],
    },
    practical: {
      access: 'New Chitose Airport (CTS) — direct or 1-stop flights from Dubai. 40 min to Sapporo.',
      bestTime: 'July–August (lavender) or December–March (skiing). Shoulder seasons very quiet.',
      duration: '3–4 days to cover Sapporo, Furano or Niseko',
    },
  },
  {
    slug: 'okinawa',
    name: 'Okinawa',
    subtitle: '沖縄',
    tagline: "Japan's tropics — turquoise sea, coral reefs, and a culture all its own.",
    heroImg: '/images/destinations/okinawa.jpg',
    description:
      "Okinawa is unlike anywhere else in Japan — a chain of subtropical islands with turquoise water, white sand beaches, and a distinct Ryukyu culture that blends Japanese, Chinese, and Southeast Asian influences. The pace is slower, the people are warmer, and the beaches rival the Maldives. For Muslim families, Okinawa's beach resorts are increasingly accommodating and halal options in Naha continue to grow.",
    areas: [
      {
        name: 'Kerama Islands & Beaches',
        img: '/images/areas/okinawa-beach.jpg',
        description:
          'The Kerama Islands — a 30-minute ferry from Naha — have some of the clearest water in the world, with visibility exceeding 30 metres. Tokashiki and Zamami islands offer pristine beaches with no crowds.',
        spots: ['Tokashiki Island beach', 'Zamami Island snorkelling', 'Glass-bottom boat tours', 'Sea turtle spotting', 'Sunset beach BBQ'],
      },
      {
        name: 'Shuri Castle & Naha',
        img: '/images/areas/okinawa-castle.jpg',
        description:
          'Shuri Castle is the rebuilt centrepiece of the ancient Ryukyu Kingdom — a UNESCO World Heritage site with a distinct Chinese-influenced red lacquer architecture unlike any other castle in Japan.',
        spots: ['Shuri Castle (UNESCO)', 'Kokusai Street (International Street) shopping', 'Makishi Public Market', 'Tsuboya Pottery District', 'Ryukyu glass-blowing workshop'],
      },
      {
        name: 'Churaumi Aquarium',
        img: '/images/areas/okinawa-aquarium.jpg',
        description:
          'One of the world\'s largest aquariums — home to whale sharks, manta rays, and a massive main tank that families with children consistently rate as a highlight of Japan.',
        spots: ['Whale shark main tank', 'Dolphin and sea lion shows', 'Ocean Expo Park (surrounding)', 'Emerald Beach (within the park)', 'Okinawa Churaumi traditional village'],
      },
    ],
    halal: {
      summary: 'Halal options available in Naha. Beach resort halal catering on advance request.',
      points: [
        'Halal restaurants confirmed in Naha Kokusai Street area',
        'Beach resort halal catering arranged on advance request',
        'Seafood-heavy Okinawan cuisine — halal options available',
        'Private villa and resort accommodation available',
        'Family-friendly Muslim travel packages available',
      ],
    },
    practical: {
      access: 'Naha Airport (OKA) — connecting via Tokyo or Osaka. ~3 hours from Tokyo by air.',
      bestTime: 'April–June (before typhoon season) or October–November.',
      duration: '3–4 days for Naha + islands + aquarium',
    },
  },
]

export function getDestination(slug: string): DestinationData | undefined {
  return DESTINATIONS.find((d) => d.slug === slug)
}
