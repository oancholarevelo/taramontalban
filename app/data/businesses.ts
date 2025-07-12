export interface Business {

    slug: string;

    name: string;

    description: string;

    category: string;

    imageUrl: string;

    color: string;

    details?: string;

    coords?: [number, number];

    directions?: string[];

}



export const businesses: Business[] = [

    {

        slug: "noahs-park-resort",

        name: "Noah's Park Resort",

        description: "A family-friendly resort with pools and scenic views. Perfect for a weekend getaway.",

        category: "Resort",

        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Mountain+Resort",

        color: "green",

        details: "Noah's Park Resort offers a variety of amenities including swimming pools, picnic areas, and scenic mountain views. Ideal for families and groups looking for a relaxing escape.",

        coords: [14.7234, 121.1895],

        directions: [

            "From Taguig, head north on C-5 and continue onto Katipunan Ave/President Carlos P. Garcia Ave/C-5.",

            "Take the ramp to Fairview and merge onto Commonwealth Ave/Don Mariano Marcos Ave/R-7.",

            "Turn right onto Rodriguez Hwy, then turn right onto MH del Pilar St to reach the resort."

        ]

    },

    {

        slug: "kape-natividad",

        name: "Kape Natividad",

        description: "Enjoy artisanal coffee and delicious Filipino dishes with a modern twist.",

        category: "Restaurant",

        imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Cozy+Restaurant",

        color: "red",

        details: "Kape Natividad is known for its cozy ambiance, specialty coffee, and a menu that highlights local flavors with a modern touch. A great spot for brunch or casual dining.",

        coords: [14.7235, 121.1896],

        directions: [

            "From Taguig, take C-5 to Marikina-Infanta Hwy/R-6 in Marikina.",

            "Follow Marikina-Infanta Hwy/R-6 to Tanay, Rizal.",

            "Kape Natividad is located along Marikina-Infanta Hwy."

        ]

    },

    {

        slug: "wawa-canteen",

        name: "Wawa Canteen",

        description: "A rustic canteen near Wawa Dam offering local delicacies and refreshing drinks.",

        category: "Cafe",

        imageUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Riverside+Cafe",

        color: "green",

        details: "Located near the scenic Wawa Dam, Wawa Canteen serves traditional snacks and drinks, perfect for visitors exploring the area.",

        coords: [14.7316, 121.1908],

        directions: [

            "From Taguig, head north on C-5 and continue onto Katipunan Ave/President Carlos P. Garcia Ave/C-5.",

            "Take the ramp to Fairview and merge onto Commonwealth Ave/Don Mariano Marcos Ave/R-7.",

            "Turn right onto Rodriguez Hwy, then turn right onto Wawa - Grotto Rd to reach Wawa Dam."

        ]

    },

    {

        slug: "robinsons-supermarket",

        name: "Robinsons Supermarket",

        description: "A major supermarket chain offering a wide variety of groceries and household items.",

        category: "Supermarket",

        imageUrl: "https://placehold.co/600x400/e67e22/ffffff?text=Robinsons+Supermarket",

        color: "orange",

        details: "Robinsons Supermarket provides a comprehensive shopping experience with a wide range of fresh produce, groceries, and daily necessities.",

        coords: [14.7237, 121.1898],

        directions: [

            "From Taguig, take a bus or jeepney to the nearest Robinsons Supermarket branch in Montalban."

        ]

    },

    {

        slug: "rcbc",

        name: "RCBC",

        description: "A leading bank in the Philippines providing a wide range of financial services.",

        category: "Bank",

        imageUrl: "https://placehold.co/600x400/f1c40f/ffffff?text=RCBC+Bank",

        color: "yellow",

        details: "RCBC offers a variety of banking services including online banking, savings accounts, loans, and credit cards.",

        coords: [14.7238, 121.1899],

        directions: [

            "From Taguig, take a bus or jeepney to the nearest RCBC branch in Montalban."

        ]

    },

    {

        slug: "manila-water",

        name: "Manila Water Company, Inc.",

        description: "The sole provider of water and wastewater services to over 7.3 million people in the East Zone of Metro Manila and Rizal Province.",

        category: "Utility",

        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Manila+Water",

        color: "blue",

        details: "Manila Water is committed to providing clean, safe, and sustainable water and wastewater services.",

        coords: [14.7239, 121.1900],

        directions: []

    },

    {

        slug: "drop-and-go",

        name: "Drop & Go",

        description: "Victory Liner's cargo service for the North, offering next-day delivery across Luzon.",

        category: "Logistics",

        imageUrl: "https://placehold.co/600x400/95a5a6/ffffff?text=Drop+and+Go",

        color: "grey",

        details: "Drop & Go is a streamlined cargo delivery service ideal for small businesses and individuals looking for fast and reliable shipping.",

        coords: [14.7240, 121.1901],

        directions: [

            "From Taguig, take a bus or jeepney to the nearest Victory Liner terminal that offers Drop & Go services."

        ]

    },

    {

        slug: "philhealth-express",

        name: "PhilHealth Express",

        description: "A government-owned and controlled corporation that provides health insurance coverage to Filipinos.",

        category: "Government",

        imageUrl: "https://placehold.co/600x400/2980b9/ffffff?text=PhilHealth",

        color: "blue",

        details: "PhilHealth Express offers a range of services including membership registration, contribution payments, and claims processing.",

        coords: [14.7241, 121.1902],

        directions: [

            "The PhilHealth Express in Rodriguez, Rizal is located at the Municipal Gymnasium, Barangay Balite.",

            "From Taguig, you can take a bus or jeepney to Rodriguez and then a tricycle to the Municipal Gymnasium."

        ]

    },

    {

        slug: "calle-cafe-don-gabriel",

        name: "Calle Cafe by Don Gabriel",

        description: "A cozy restaurant offering a variety of Filipino dishes and refreshing beverages in the heart of Montalban.",

        category: "Restaurant",

        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Calle+Cafe",

        color: "blue",

        details: "Located on J.P. Rizal Street in Balite, Rodriguez, Calle Cafe by Don Gabriel provides a welcoming atmosphere with a menu featuring Filipino favorites and specialty drinks, perfect for casual dining or a quick coffee break.",

        coords: [14.7234, 121.1895],

        directions: [

            "From Taguig, take C-5 to Quezon City.",

            "Continue on Commonwealth Ave/Don Mariano Marcos Ave to Rodriguez.",

            "Calle Cafe is located on J.P. Rizal Street in Balite."

        ]

    },

    {

        slug: "everyday-wings",

        name: "Everyday Wings",

        description: "A popular eatery specializing in flavorful chicken wings, a local favorite in Montalban.",

        category: "Restaurant",

        imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Everyday+Wings",

        color: "red",

        details: "Situated on J.P. Rizal Street, Everyday Wings is renowned for its crispy and delicious chicken wings, offering a variety of sauces and sides that make it a go-to spot for quick, satisfying meals.",

        coords: [14.7235, 121.1896],

        directions: [

            "From Taguig, take C-5 and Commonwealth Ave to Rodriguez.",

            "Everyday Wings is located at 96 J.P. Rizal St., Brgy Manggahan."

        ]

    },

    {

        slug: "don-benitos",

        name: "Don Benito's Cassava Cake and Pichi Pichi",

        description: "A beloved bakery offering traditional Filipino delicacies like cassava cake and pichi pichi.",

        category: "Bakery",

        imageUrl: "https://placehold.co/600x400/f1c40f/ffffff?text=Don+Benito's",

        color: "yellow",

        details: "Located on M.H. del Pilar Street, Don Benito's specializes in authentic Filipino sweets, including cassava cake and pichi pichi, making it a must-visit for those craving traditional delicacies.",

        coords: [14.7236, 121.1897],

        directions: [

            "From Taguig, take C-5 and Commonwealth Ave to Rodriguez.",

            "Don Benito's is located on M.H. del Pilar Street."

        ]

    }

];