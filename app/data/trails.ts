export interface Trail {

    name: string;

    slug: string;

    coords: [number, number];

    masl: string;

    difficulty: string;

    location: string;

    imageUrl: string;

    description: string;

    itinerary: string[];

    guides: string[];

}



export const allTrails: Record<string, Trail> = {

    'mount-binicayan': {

        name: 'Mount Binicayan',

        slug: 'mount-binicayan',

        coords: [14.7278, 121.1900],

        masl: '424+ MASL',

        difficulty: '3/9',

        location: 'Brgy. San Rafael, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/2980b9/ffffff?text=Mt.+Binicayan',

        description: 'Mount Binicayan, part of the Wawa trilogy in Rodriguez, Rizal, is a popular hiking destination known for its steep ascent over sharp limestone rocks. Rising to 424+ meters above sea level, it offers hikers a chance to witness a magnificent sea of clouds on clear mornings and stunning views of the Sierra Madre. According to folklore, this mountain was separated from its twin, Mount Pamitinan, by the giant Bernardo Carpio. The trail is a thrilling climb, taking about 1.5 to 2 hours to reach the summit, and is best started early to avoid the midday heat. Gloves are recommended for navigating the sharp rocks, and there are no water sources along the trail. Access is via a UV Express Van from Gateway Mall Cubao to Eastwood Subdivision (P50), followed by a tricycle to Sitio Wawa.',

        itinerary: [

            "04:30 AM - Depart Cubao via UV Express Van to Rodriguez (Eastwood Subdivision)",

            "05:30 AM - Arrive at Eastwood, take tricycle to Wawa DENR",

            "05:50 AM - Arrive at Wawa DENR, register",

            "06:00 AM - Start trek with guide",

            "07:30 AM - Reach summit",

            "08:00 AM - Start descent",

            "08:30 AM - Back at jump-off",

            "09:00 AM - Return to Cubao via tricycle and van"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-pamitinan': {

        name: 'Mount Pamitinan',

        slug: 'mount-pamitinan',

        coords: [14.7316, 121.1908],

        masl: '426+ MASL',

        difficulty: '3/9',

        location: 'Brgy. San Rafael, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/f39c12/ffffff?text=Mt.+Pamitinan',

        description: 'Mount Pamitinan, the twin of Mount Binicayan, is a historically significant mountain in Rodriguez, Rizal, standing at 426+ MASL. It is where Andres Bonifacio declared independence in 1895, and the trail passes by Pamitinan Cave and Bat Cave, which feature ancient rock formations over 135 million years old, including stalactites and stalagmites. The hike involves rock scrambling and bouldering, leading to panoramic views of the Wawa River and surrounding landscape. Often hiked alongside Mount Binicayan and Hapunang Banoi, it takes about 1.5 to 2 hours to reach the summit. Access is the same as for Mount Binicayan, making it a popular choice for history enthusiasts and hikers alike.',

        itinerary: [

            "04:30 AM - Depart Cubao via UV Express Van to Rodriguez (Eastwood Subdivision)",

            "05:30 AM - Arrive at Eastwood, take tricycle to Wawa DENR",

            "05:50 AM - Arrive at Wawa DENR, register",

            "06:00 AM - Start trek with guide",

            "07:30 AM - Reach summit",

            "08:00 AM - Start descent",

            "08:30 AM - Back at jump-off",

            "09:00 AM - Return to Cubao via tricycle and van"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-lagyo': {

        name: 'Mount Lagyo',

        slug: 'mount-lagyo',

        coords: [14.7027, 121.1884],

        masl: '396 MASL',

        difficulty: '4/9 (Minor)',

        location: 'Brgy. San Rafael, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/7f8c8d/ffffff?text=Mt.+Lagyo',

        description: 'Mount Lagyo, meaning "to skip" or "pass over," is a lesser-known gem in Barangay San Rafael, Rodriguez, Rizal, standing at 396 MASL. With a moderate difficulty rating, it is known for its technical rock-climbing trails and a steep 70-degree assault near the summit. The trail offers beautiful, sharp rock formations and is part of a trilogy hike with Mount Parawagan and Susong Dalaga, providing views of nearby peaks like Mount Binicayan. It is ideal for hikers seeking a challenge beyond the usual trails. Access is via Sitio Lagyo, about 30 minutes from Ka Andres Store.',

        itinerary: [

            "04:30 AM - Depart Cubao via UV Express Van to Rodriguez (Eastwood Subdivision)",

            "05:30 AM - Arrive at Eastwood, take tricycle to Wawa DENR",

            "05:50 AM - Arrive at Wawa DENR, register",

            "06:00 AM - Start trek with guide",

            "09:00 AM - Reach summit",

            "09:30 AM - Start descent",

            "11:00 AM - Back at jump-off",

            "11:30 AM - Return to Cubao via tricycle and van"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-hapunang-banoi': {

        name: 'Mount Hapunang Banoi',

        slug: 'mount-hapunang-banoi',

        coords: [14.7399, 121.1913],

        masl: '517+ MASL',

        difficulty: '4/9',

        location: 'Brgy. Mascap, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/16a085/ffffff?text=Hapunang+Banoi',

        description: 'Mount Hapunang Banoi, named "Eagles\' Dining Place," is the highest of the Wawa trilogy, rising to 517+ MASL in Barangay Mascap, Rodriguez, Rizal. The trail is a continuous ascent through bamboo groves and over limestone formations, offering stunning views of the Sierra Madre from a view deck at the summit. Often hiked as a twin with Mount Pamitinan or Binicayan, it takes 2 to 3 hours to reach the summit. The trail is known for its dense forest and limestone outcrops, making it a favorite for those seeking a moderate challenge. Access is via the same route as Mount Pamitinan until the junction.',

        itinerary: [

            "04:30 AM - Depart Cubao via UV Express Van to Rodriguez (Eastwood Subdivision)",

            "05:30 AM - Arrive at Eastwood, take tricycle to Wawa DENR",

            "05:50 AM - Arrive at Wawa DENR, register",

            "06:00 AM - Start trek with guide",

            "09:00 AM - Reach summit",

            "09:30 AM - Start descent",

            "11:00 AM - Back at jump-off",

            "11:30 AM - Return to Cubao via tricycle and van"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-parawagan': {

        name: 'Mount Parawagan',

        slug: 'mount-parawagan',

        coords: [14.7248, 121.1713],

        masl: '462 MASL',

        difficulty: '3/9 (Minor)',

        location: 'Brgy. San Rafael, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/d35400/ffffff?text=Mt.+Parawagan',

        description: 'Mount Parawagan, at 462 MASL in Barangay San Rafael, Rodriguez, Rizal, is an excellent choice for beginners and trail runners. The trail consists of rolling, grassy slopes and offers a clear, unobstructed view of the entire Wawa watershed area, including the dam and surrounding mountains. Popular among hikers and mountain bikers, the trail is about 6 kilometers long and takes 3 to 4 hours to complete. Access starts near Manggahan Barangay Hall along Millex Road, close to Rizal Avenue, making it ideal for novices.',

        itinerary: [

            "05:00 AM - Depart Cubao via van to Rodriguez",

            "06:00 AM - Arrive at Rodriguez, take tricycle to Manggahan Barangay Hall",

            "06:15 AM - Arrive at Manggahan, register",

            "06:30 AM - Start trek",

            "09:30 AM - Reach summit",

            "10:00 AM - Start descent",

            "12:00 PM - Back at jump-off",

            "12:30 PM - Return to Rodriguez via tricycle",

            "13:30 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-matamis-na-luya': {

        name: 'Mt. Matamis na Luya (Purro)',

        slug: 'mount-matamis-na-luya',

        coords: [14.6777, 121.2439],

        masl: '545 MASL',

        difficulty: '5/9',

        location: 'Brgy. San Rafael / Puray, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/e67e22/ffffff?text=Mt.+Purro',

        description: 'Mount Matamis na Luya, also known as Mount Purro, stands at 545 MASL in Barangay San Rafael and Puray, Rodriguez, Rizal. Meaning "Sweet Ginger," this mountain offers a deep immersion into the Sierra Madre with a challenging 5/9 difficulty rating. The adventure involves 8 river crossings, rafting, and an exposed trail, providing views of Marikina, Antipolo, Tanay, Rodriguez, Rizal, and General Nakar. The trek takes approximately 11.5 hours and requires registration, guides, and sun protection (sleeves, gloves) due to its length and technical aspects. It is a rewarding hike for those seeking a true wilderness experience.',

        itinerary: [

            "04:00 AM - Depart Cubao via van to Rodriguez (alight at Total Gas station)",

            "05:00 AM - Arrive at Total Gas station, take tricycle to Puray Proper",

            "06:00 AM - Arrive at Puray, register",

            "06:30 AM - Start trek",

            "11:00 AM - Reach summit",

            "11:30 AM - Start descent",

            "15:00 PM - Back at jump-off",

            "15:30 PM - Return to Rodriguez via tricycle",

            "16:30 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Puray Guides Association"]

    },

    'mount-ayaas': {

        name: 'Mount Ayaas',

        slug: 'mount-ayaas',

        coords: [14.7535, 121.2088],

        masl: '627+ MASL',

        difficulty: '3/9',

        location: 'Brgy. Mascap, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/c0392b/ffffff?text=Mt.+Ayaas',

        description: 'Mount Ayaas, at 627+ MASL in Barangay Mascap, Rodriguez, Rizal, is a beginner-friendly trail that serves as a gateway to the Sierra Madre. Unlike its rocky neighbors, it features a long, scenic trail with extensive river trekking and vast, open grassland slopes. It is the only non-limestone mountain in the Montalban Pentalogy and is partly shaded, making it suitable for novices. The hike takes 3 to 4 hours to the summit, but caution is advised during summer due to heat. It offers a unique experience for those seeking a longer, scenic hike.',

        itinerary: [

            "04:30 AM - Depart Cubao via van to Rodriguez",

            "05:30 AM - Arrive at Rodriguez, take tricycle to Mascap",

            "06:00 AM - Arrive at Mascap, register",

            "06:30 AM - Start trek",

            "10:00 AM - Reach summit",

            "10:30 AM - Start descent",

            "12:00 PM - Back at jump-off",

            "12:30 PM - Return to Rodriguez via tricycle",

            "13:30 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Mascap Guides Association"]

    },

    'mount-oro': {

        name: 'Mount Oro',

        slug: 'mount-oro',

        coords: [14.7652, 121.1621],

        masl: '340+ MASL',

        location: 'Brgy. Mascap, Rodriguez, Rizal',

        difficulty: '3/9 (Minor)',

        imageUrl: 'https://placehold.co/1200x600/f1c40f/ffffff?text=Mt.+Oro',

        description: 'Mount Oro, named after the Spanish word for "gold," stands at 340+ MASL in Barangay Mascap, Rodriguez, Rizal. This beginner-friendly trail is the latest addition to the Mascap adventures, featuring exposed trails with few shady spots and two summits offering 360-degree views of the Rizal highlands. Part of the Montalban Hexalogy, it takes 45 minutes to 1.5 hours to reach the summit. The trail is ideal for first-timers and provides a quick yet rewarding hike with stunning views.',

        itinerary: [

            "04:30 AM - Depart Cubao via van to Rodriguez",

            "05:30 AM - Arrive at Rodriguez, take tricycle to Mascap",

            "06:00 AM - Arrive at Mascap, register",

            "06:30 AM - Start trek",

            "08:00 AM - Reach summit",

            "08:30 AM - Start descent",

            "09:30 AM - Back at jump-off",

            "10:00 AM - Return to Rodriguez via tricycle",

            "11:00 AM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Mascap Guides Association"]

    },

    'mount-sipit-ulang': {

        name: 'Mount Sipit Ulang',

        slug: 'mount-sipit-ulang',

        coords: [14.7559, 121.1774],

        masl: '252 MASL',

        difficulty: '3/9',

        location: 'Brgy. Mascap, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/3498db/ffffff?text=Sipit+Ulang',

        description: 'Mount Sipit Ulang, at 252 MASL in Barangay Mascap, Rodriguez, Rizal, is instantly recognizable for its summit rock formation resembling a "crab\'s claw." The trail includes limestone pathways, tight rock corridors, and meadow ascents, offering views of Mount Pamitinan, Binicayan, and Ayaas. The hike takes 1 to 2 hours and involves crossing a small brook and navigating challenging rock formations. It is a short but memorable adventure, especially via the more challenging "Paniki" (Bat) trail, which passes through a cave.',

        itinerary: [

            "04:30 AM - Depart Cubao via van to Rodriguez",

            "05:30 AM - Arrive at Rodriguez, take tricycle to Mascap",

            "06:00 AM - Arrive at Mascap, register",

            "06:30 AM - Start trek",

            "08:00 AM - Reach summit",

            "08:30 AM - Start descent",

            "09:30 AM - Back at jump-off",

            "10:00 AM - Return to Rodriguez via tricycle",

            "11:00 AM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Mascap Guides Association"]

    },

    'mount-lubog': {

        name: 'Mount Lubog',

        slug: 'mount-lubog',

        coords: [14.8364, 121.2367],

        masl: '955+ MASL',

        difficulty: '6/9 (Major)',

        location: 'Brgy. Puray, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/9b59b6/ffffff?text=Mt.+Lubog',

        description: 'Mount Lubog, standing at 955+ MASL in Barangay Puray, Rodriguez, Rizal, is a major climb for seasoned hikers. The trail is challenging, with a difficulty rating of 6/9, and features a summit known as "Simbahang Bato" (Stone Church), a labyrinth of mossy boulders and karst formations. Shaded by a thick forest canopy, it offers breathtaking views of the Sierra Madre and side trips to Lubog Cave and Panintingan. The hike takes about 1 hour and 45 minutes to the summit and is accessible via Puray. It is a true wilderness experience for those seeking a formidable challenge.',

        itinerary: [

            "04:00 AM - Depart Cubao via van to Rodriguez (alight at Total Gas station)",

            "05:00 AM - Arrive at Total Gas station, take tricycle to Puray Proper",

            "06:00 AM - Arrive at Puray, register",

            "06:30 AM - Start trek",

            "12:00 PM - Reach summit",

            "12:30 PM - Start descent",

            "16:00 PM - Back at jump-off",

            "16:30 PM - Return to Rodriguez via tricycle",

            "17:30 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Puray Guides Association"]

    },

    'mount-balagbag': {

        name: 'Mount Balagbag',

        slug: 'mount-balagbag',

        coords: [14.8248, 121.1798],

        masl: '777+ MASL',

        difficulty: '3/9',

        location: 'Rodriguez, Rizal, Sierra Madre range',

        imageUrl: 'https://placehold.co/1200x600/8e44ad/ffffff?text=Mt.+Balagbag',

        description: 'Mount Balagbag, at 777+ MASL in the Sierra Madre range of Rodriguez, Rizal, is a favorite destination for beginners, cyclists, and 4x4 enthusiasts. The trail is easy, wide, and gradual, leading to a flat, open summit perfect for overnight camping and watching the city lights of Metro Manila. With a difficulty rating of 3/9 and Trail Class 1-2, it takes 1 to 2 hours to reach the summit. The trail is now barren, so dimtrekking is advised to avoid sun exposure. Access is via public transport from Cubao to Tungko, then Licao-Licao, with an optional tricycle to Sitio Balagbag, or by private vehicle to Brgy. Macabud in 1-1.5 hours.',

        itinerary: [

            "06:00 AM - Depart Cubao via van to Tungko",

            "07:00 AM - Arrive at Tungko, take jeepney to Licao-Licao",

            "07:30 AM - Arrive at Licao-Licao, take tricycle to Sitio Balagbag",

            "07:45 AM - Arrive at Sitio Balagbag, register",

            "08:00 AM - Start trek",

            "09:30 AM - Reach summit",

            "10:00 AM - Start descent",

            "10:30 AM - Back at jump-off",

            "11:00 AM - Return to Licao-Licao via tricycle",

            "11:15 AM - Take jeepney to Tungko",

            "11:45 AM - Depart Tungko via van to Cubao"

        ],

        guides: ["Available at registration"]

    },

    'espadang-bato': {

        name: 'Espadang Bato',

        slug: 'espadang-bato',

        coords: [14.7427, 121.1928],

        masl: '455 MASL',

        difficulty: '4/9 (Minor)',

        location: 'Brgy. Mascap, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/bdc3c7/ffffff?text=Espadang+Bato',

        description: 'Espadang Bato, at 455 MASL in Barangay Mascap, Rodriguez, Rizal, is known for its unique "sword-like rock" formation. The trail is steep and rocky, with a difficulty rating of 4/9 and Trail Class 1-2, offering panoramic views of the Sierra Madre and dense greenery with bamboo groves. It takes 1 to 2 hours to reach the summit, which requires careful navigation and scrambling up a bamboo ladder to the iconic peak. Access is via commute from BGC through Cubao to Rodriguez, then a tricycle to Barangay Mascap (25 min, 35 pesos). Gloves are recommended for sharp rocks.',

        itinerary: [

            "04:30 AM - Depart Cubao via van to Rodriguez",

            "05:30 AM - Arrive at Rodriguez, take tricycle to Mascap",

            "06:00 AM - Arrive at Mascap, register",

            "06:30 AM - Start trek",

            "08:30 AM - Reach summit",

            "09:00 AM - Start descent",

            "10:30 AM - Back at jump-off",

            "11:00 AM - Return to Rodriguez via tricycle",

            "12:00 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Mascap Guides Association"]

    },

    'mount-susong-dalaga': {

        name: 'Mount Susong Dalaga',

        slug: 'mount-susong-dalaga',

        coords: [14.7081, 121.1897],

        masl: '325 MASL',

        difficulty: '3/9 (Minor)',

        location: 'Near Wawa, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/e74c3c/ffffff?text=Susong+Dalaga',

        description: 'Mount Susong Dalaga, near Wawa in Rodriguez, Rizal, is a smaller peak known for its distinct conical shape resembling a "maiden\'s breast." With a moderate difficulty rating, it is a quick and rewarding hike, often included in a multi-mountain "Trilogy" climb with Mount Parawagan and Lagyo. The trail offers views of nearby peaks and is part of the same area as Mount Lagyo. Access details are not explicitly provided, but it shares the general Wawa area.',

        itinerary: [

            "04:30 AM - Depart Cubao via UV Express Van to Rodriguez (Eastwood Subdivision)",

            "05:30 AM - Arrive at Eastwood, take tricycle to Wawa DENR",

            "05:50 AM - Arrive at Wawa DENR, register",

            "06:00 AM - Start trek with guide",

            "08:00 AM - Reach summit",

            "08:30 AM - Start descent",

            "09:30 AM - Back at jump-off",

            "10:00 AM - Return to Cubao via tricycle and van"

        ],

        guides: ["Wawa Guides Association"]

    },

    'mount-malac': {

        name: 'Mount Malac',

        slug: 'mount-malac',

        coords: [14.7928, 121.2235],

        masl: '644 MASL',

        difficulty: '5/9 (Minor)',

        location: 'Sitio Puray, Rodriguez, Rizal',

        imageUrl: 'https://placehold.co/1200x600/2c3e50/ffffff?text=Mt.+Malac',

        description: 'Mount Malac, at 644 MASL in Sitio Puray, Rodriguez, Rizal, is a remote trail offering a true wilderness experience. The hike traverses dry riverbeds and grasslands, leading to a summit with a 360-degree view of the Sierra Madre. It is less traveled, featuring a virgin path with loose rocks and river crossings, and offers a side trip to Baawan Falls. With no signal or electricity, it is a peaceful retreat. The hike takes 2.5 hours to the summit, and access is via van from Cubao to Rodriguez, then tricycle to Puray Proper (1 hr, Php700/4=175 each RT).',

        itinerary: [

            "04:00 AM - Depart Cubao via van to Rodriguez (alight at Total Gas station)",

            "05:00 AM - Arrive at Total Gas station, take tricycle to Puray Proper",

            "06:00 AM - Arrive at Puray, register",

            "06:30 AM - Start trek",

            "09:00 AM - Reach summit",

            "09:30 AM - Start descent",

            "12:00 PM - Back at jump-off",

            "12:30 PM - Return to Rodriguez via tricycle",

            "13:30 PM - Depart Rodriguez via van to Cubao"

        ],

        guides: ["Puray Guides Association"]

    }

};