export interface Business {
    slug: string;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    color: string;
    details?: string;
    address: string; // Added for exact location
    phone?: string; // Optional phone number
    website?: string; // Optional website
    coords?: [number, number];
}

export const businesses: Business[] = [
    {
        slug: "noahs-park-resort",
        name: "Noah's Park Resort",
        description: "A family-friendly resort with pools and scenic views. Perfect for a weekend getaway.",
        category: "Resort",
        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Mountain+Resort",
        color: "green",
        details: "Noah's Park Resort offers a variety of amenities including swimming pools, picnic areas, and scenic mountain views. It's an ideal destination for families and groups looking for a relaxing escape in a natural setting.",
        address: "Rodriguez (Montalban), Rizal",
        phone: "+63 917 123 4567", // Example phone
        website: "facebook.com/noahsparkresort",
        coords: [14.7234, 121.1895],
    },
    {
        slug: "kape-natividad",
        name: "Kape Natividad",
        description: "Enjoy artisanal coffee and delicious Filipino dishes with a modern twist.",
        category: "Restaurant",
        imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Cozy+Restaurant",
        color: "red",
        details: "Kape Natividad is known for its cozy ambiance, specialty coffee made from locally sourced beans, and a menu that highlights local flavors with a modern touch, including pugon-baked pizza. A great spot for brunch or casual dining with a scenic view.",
        address: "Marikina-Infanta Hwy, Tanay, Rizal",
        phone: "+63 961 326 1186",
        website: "facebook.com/KapeNatividadPH",
        coords: [14.7235, 121.1896],
    },
    {
        slug: "wawa-canteen",
        name: "Wawa Canteen",
        description: "A rustic canteen near Wawa Dam offering local delicacies and refreshing drinks.",
        category: "Cafe",
        imageUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Riverside+Cafe",
        color: "green",
        details: "Located near the scenic Wawa Dam, Wawa Canteen serves traditional Filipino snacks and drinks. It's the perfect pit stop for visitors and hikers exploring the Wawa area, offering a simple, authentic local experience.",
        address: "Wawa - Grotto Rd, Rodriguez, Rizal",
        coords: [14.7316, 121.1908],
    },
    {
        slug: "robinsons-supermarket",
        name: "Robinsons Supermarket",
        description: "A major supermarket chain offering a wide variety of groceries and household items.",
        category: "Supermarket",
        imageUrl: "https://placehold.co/600x400/e67e22/ffffff?text=Robinsons+Supermarket",
        color: "orange",
        details: "Robinsons Supermarket provides a comprehensive shopping experience with a wide range of fresh produce, groceries, and daily necessities. A convenient one-stop shop for both locals and tourists.",
        address: "Montalban Town Center Mall 1, E. Rodriguez Highway, Brgy. San Jose, Rodriguez, Rizal",
        phone: "(02) 8997-8953",
        coords: [14.7237, 121.1898],
    },
    {
        slug: "rcbc",
        name: "RCBC",
        description: "A leading bank in the Philippines providing a wide range of financial services.",
        category: "Bank",
        imageUrl: "https://placehold.co/600x400/f1c40f/ffffff?text=RCBC+Bank",
        color: "yellow",
        details: "RCBC offers a variety of banking services including deposits, loans, online banking, and ATM services. This branch serves the financial needs of the Montalban community.",
        address: "Cor. Linco St, Rodriguez, Rizal",
        phone: "(02) 8948-1385",
        coords: [14.7238, 121.1899],
    },
    {
        slug: "manila-water",
        name: "Manila Water Company, Inc.",
        description: "The sole provider of water and wastewater services to the East Zone of Metro Manila and Rizal Province.",
        category: "Utility",
        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Manila+Water",
        color: "blue",
        details: "Manila Water is committed to providing clean, safe, and sustainable water and wastewater services to millions of people. This office handles local customer service and operations.",
        address: "43 J.P. Rizal Street, Rodriguez, Rizal",
        phone: "(02) 8981-8100",
        coords: [14.7239, 121.1900],
    },
    {
        slug: "drop-and-go",
        name: "Drop & Go by Victory Liner",
        description: "Victory Liner's cargo service for the North, offering next-day delivery across Luzon.",
        category: "Logistics",
        imageUrl: "https://placehold.co/600x400/95a5a6/ffffff?text=Drop+and+Go",
        color: "grey",
        details: "Drop & Go is a streamlined cargo delivery service ideal for small businesses and individuals looking for fast and reliable shipping to various points in Luzon.",
        address: "204 Rizal Avenue, Manggahan, Rodriguez, Rizal",
        website: "dropandgo.ph",
        coords: [14.7240, 121.1901],
    },
    {
        slug: "philhealth-express",
        name: "PhilHealth Express",
        description: "A government-owned corporation providing health insurance coverage to Filipinos.",
        category: "Government",
        imageUrl: "https://placehold.co/600x400/2980b9/ffffff?text=PhilHealth",
        color: "blue",
        details: "The PhilHealth Express office in Rodriguez provides accessible services for membership registration, contribution payments, and claims processing for the local community.",
        address: "Municipal Gymnasium, Barangay Balite, Rodriguez, Rizal 1860",
        coords: [14.7241, 121.1902],
    },
    {
        slug: "calle-cafe-don-gabriel",
        name: "Calle Cafe by Don Gabriel",
        description: "A cozy restaurant offering a variety of Filipino dishes and refreshing beverages.",
        category: "Restaurant",
        imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Calle+Cafe",
        color: "blue",
        details: "Located in the heart of Montalban, Calle Cafe by Don Gabriel provides a welcoming atmosphere with a menu featuring Filipino favorites, pasta, and specialty drinks, perfect for casual dining or a quick coffee break.",
        address: "J.P. Rizal St, Balite, Rodriguez, Rizal",
        coords: [14.7184, 121.1385],
    },
    {
        slug: "everyday-wings",
        name: "Everyday Wings",
        description: "A popular eatery specializing in flavorful chicken wings, a local favorite in Montalban.",
        category: "Restaurant",
        imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Everyday+Wings",
        color: "red",
        details: "Situated on J.P. Rizal Street, Everyday Wings is renowned for its crispy and delicious chicken wings, offering a variety of sauces and sides that make it a go-to spot for quick, satisfying meals.",
        address: "96 J.P. Rizal St., Brgy Manggahan, Rodriguez, Rizal",
        phone: "+63 966 997 0839",
        coords: [14.7225, 121.1436],
    },
    {
        slug: "don-benitos",
        name: "Don Benito's Cassava Cake & Pichi Pichi",
        description: "A beloved bakery offering traditional Filipino delicacies like cassava cake and pichi pichi.",
        category: "Bakery",
        imageUrl: "https://placehold.co/600x400/f1c40f/ffffff?text=Don+Benito's",
        color: "yellow",
        details: "Don Benito's specializes in authentic Filipino sweets, including their famous cassava cake and pichi pichi, making it a must-visit for those craving traditional, home-style delicacies.",
        address: "E. Rodriguez Hwy, Rodriguez, Rizal",
        phone: "0917 886 2424",
        coords: [14.7236, 121.1897],
    }
];