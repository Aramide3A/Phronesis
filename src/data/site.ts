export type RouteLink = {
    label: string
    href: string
}

export type Service = {
    slug: string
    title: string
    shortTitle: string
    eyebrow: string
    path: string
    legacyPath: string
    heroImage: string
    image: string
    summary: string
    intro: string
    detailHeading: string
    listHeading: string
    detailParagraphs: string[]
    items: string[]
}

export type Office = {
    title: string
    address: string
    phones: string[]
}

export const company = {
    name: 'Phronesis West Africa LTD',
    email: 'info@phronesiswarltd.com',
    hours: 'Mon - Fri: 9.00 - 17.00',
    tagline: 'Giving you excellent service on what you need.',
    phonePrimary: '08063483516',
    phoneSecondary: '+44 7591 667677',
    address: 'Plot 2050 Green Estate. Amuwo Odofin',
    footerAddress: 'Plot 2050 Green Estate. Amuwo Odofin',
}

export const navLinks: RouteLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
]

export const services: Service[] = [
    {
        slug: 'marine-vessel-supply',
        title: 'Marine Vessel Supply',
        shortTitle: 'Marine Vessel Supply',
        eyebrow: 'Marine operations support',
        path: '/services/marine-vessel-supply',
        legacyPath: '/marine_vessel_supply.html',
        heroImage: '/images/background/20.jpg',
        image: '/images/resource/service111.jpg',
        summary:
            'Phronesis West Africa LTD is dedicated to a Quality and Safety policy. It ensures that its services are of a uniform and consistent level, meeting the agreed requirements of its customers plus national and international standards.',
        intro: 'Quality is of paramount importance to all team members at Phronesis West Africa.',
        detailHeading: 'Marine Vessel and Supply',
        listHeading: 'Our Marine Vessel and Supply Services :',
        detailParagraphs: [
            'Quality is of paramount importance to all team members at Phronesis West Africa. We are continually evaluating and improving the level of service we offer our clients to ensure the reputation for quality which we are building is maintained and grown.',
            'We are committed to execution of projects that are not just fit-for-purpose, but which exceed expectation in terms of quality. Our reputation for both the quality of our project management and finished projects is achieved through our proven Quality Management System.',
            'The success of our company rests with the image of our services and performances. Maintaining and expanding our worth is directly dependent on quality and reliability of these services.',
        ],
        items: [
            'AHTS',
            'OSV / PSV / FSIV Vessels',
            'Crew Boats, Tug Boats, House Boat',
            'Barges, Swamp Boogey, Crawler Cranes',
            'Cargo/Bulk Vessels',
        ],
    },
    {
        slug: 'logistics',
        title: 'Logistics',
        shortTitle: 'Logistics',
        eyebrow: 'End-to-end maritime movement',
        path: '/services/logistics',
        legacyPath: '/logistics.html',
        heroImage: '/images/background/18.jpg',
        image: '/images/resource/service222.jpg',
        summary:
            'Crew, cargo, port, and vessel logistics backed by local Nigerian port expertise.',
        intro: 'At Phronesis West Africa Ltd, our Logistics Services are designed to provide end-to-end support for vessel operations, crew welfare, and maritime logistics.',
        detailHeading: 'LOGISTICS',
        listHeading: 'Our Logistics Services are :',
        detailParagraphs: [
            'At Phronesis West Africa Ltd, our Logistics Services are designed to provide end-to-end support for vessel operations, crew welfare, and maritime logistics. We combine operational excellence with local expertise to ensure your ships, crew, and cargo move efficiently across West Africa and globally.',
            'With a strong presence in Nigerian ports and a reliable international network, we handle every aspect of maritime logistics so you can focus on your core business.',
        ],
        items: [
            'Crew Management & Manning',
            'Ship Agency',
            'Crew Change',
            'Hotel Reservations & Accommodation',
            'Ship Inspection & Certification',
            'Customs Clearing & Forwarding',
            'Customs Licensed Agent',
            'Port Protective Agency',
            'Bunker Supply',
            'Vessel Brokerage',
            'Ship Husbanding',
            'Bunker Supply',
        ],
    },
    {
        slug: 'shipping',
        title: 'Shipping Services',
        shortTitle: 'Shipping',
        eyebrow: 'Reliable shipping solutions',
        path: '/services/shipping',
        legacyPath: '/shipping.html',
        heroImage: '/images/background/19.jpg',
        image: '/images/resource/service555.jpg',
        summary:
            'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
        intro: 'At Phronesis West Arica Resources Ltd, we deliver comprehensive, reliable, and efficient shipping solutions tailored to meet the complex demands of the maritime industry.',
        detailHeading: 'Shipping Services',
        listHeading: 'Contents of our Shipping Services are :',
        detailParagraphs: [
            'At Phronesis West Arica Resources Ltd, we deliver comprehensive, reliable, and efficient shipping solutions tailored to meet the complex demands of the maritime industry.',
            'With extensive experience and a strong global network, we ensure your vessels operate smoothly, cost-effectively, and in full compliance with international maritime regulations.',
        ],
        items: [
            'Ship Chartering',
            'Shipping Agency',
            'Bunkering & Fresh Water Supply',
            'P&I correspondents',
            'Channel Transit Service',
        ],
    },
    {
        slug: 'petroleum-products-haulage',
        title: 'Petroleum Products Haulage',
        shortTitle: 'Petroleum Haulage',
        eyebrow: 'Product movement and haulage',
        path: '/services/petroleum-products-haulage',
        legacyPath: '/petroleum_products_haulage.html',
        heroImage: '/images/background/17.jpg',
        image: '/images/resource/service333.jpg',
        summary:
            'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
        intro: 'Quality is of paramount importance to all team members at Phronesis West Africa.',
        detailHeading: 'PETROLEUM PRODUCTS HAULAGE',
        listHeading:
            'Contents of our Petroleum products Haulage Services are :',
        detailParagraphs: [
            'Quality is of paramount importance to all team members at Phronesis West Africa. We are continually evaluating and improving the level of service we offer our clients to ensure the reputation for quality which we are building is maintained and grown.',
            'We are committed to execution of projects that are not just fit-for-purpose, but which exceed expectation in terms of quality. Our reputation for both the quality of our project management and finished projects is achieved through our proven Quality Management System.',
            'The success of our company rests with the image of our services and performances. Maintaining and expanding our worth is directly dependent on quality and reliability of these services.',
        ],
        items: ['Road haulage', 'Petroleum product haulage'],
    },
]

export const complementaryServices = [
    'Crew change handling',
    'Fresh water supply',
    'Ship agency',
    'Ship provisions procurement',
    'Food supply',
    'Sourcing of vessel parts',
]

export const offices: Office[] = [
    {
        title: 'Office Address',
        address: 'Plot 2050 Green Estate. Amuwo Odofin',
        phones: ['08063483516', '+44 7591 667677'],
    },
]

export const heroSlides = [
    {
        title: 'Marine Vessel Supply',
        text: '',
        image: '/images/main-slider/3-11.jpg',
        href: '/services/marine-vessel-supply',
    },
    {
        title: 'Petroleum Product Haulage',
        text: '',
        image: '/images/main-slider/5-11.jpg',
        href: '/services/petroleum-products-haulage',
    },
    {
        title: 'Marine Logistics',
        text: 'We deliver sustainable solutions, Products and services to various industries within the Country.',
        image: '/images/main-slider/3-33.jpg',
        href: '/services/logistics',
    },
]

export const aboutCopy = [
    'Phronesis West Africa Ltd is a multi-national company that provides marine vessel supply, logistics, shipping, petroleum haulage, documentation, and vessel clearing services in the oil and gas sector.',
    'Our team of professionals brings strong operational knowledge and practical experience, placing us in a reliable position to deliver quality projects with a competitive approach.',
    'All client assignments are carried out in accordance with quality assurance, quality control, and known national and international standards. We choose tested engineering and operational solutions because a satisfied client is a prospective new client.',
]

export const originalCompanyProfile = [
    'Phronesis West Africa LTD is an indigenous construction company that started activities in 2016. A team of indigenous management experts and qualified professionals manages the company.',
    'Phronesis West Africa LTD provides engineering, design and maintenance services in all areas of Civil and Mechanical Engineering Marketing, supply of technical spare parts and services to both the public and private sector of the economy.',
    'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms. We go for the best and tested solutions available in the Engineering field because we believe that a satisfied client is a prospective new client.',
    'Phronesis West Africa LTD has been granted permit to operate as Oil Service Company by the Ministry of Petroleum Resources and is fully registered to do business with the following organizations.',
]

export const companyValues = [
    {
        title: 'Our Mission',
        text: 'It is our intention to provide our respected clients with exactly what they need. This way we contribute to the success of their facility and project uptime with a high productivity.',
    },
    {
        title: 'Our Vision',
        text: 'Our Vision is to provide our clients with quality service combined with high speed, efficiency, experience, knowledge, and a dynamic and innovative philosophy.',
    },
    {
        title: 'Quality, Safety (HSE)',
        text: 'Phronesis West Africa LTD is dedicated to a Quality and Safety policy. It ensures that its services are of a uniform and consistent level, meeting the agreed requirements of its customers plus national and international standards.',
    },
]

export const aboutUsIntro =
    'Phronesis West Africa Ltd is a multi-national company that provides Engineering and procurement services. Our specialty includes civil, electrical and mechanical engineering works and procurement services in the oil and gas sector. competence and decisiveness. Our team of professionals are highly knowledgeable and possess an invaluable experience which set us in a reliable position to deliver quality projects with competitive approach.'

export const aboutUsValues = {
    mission:
        'To remain ahead of the competition through the delivery of high-quality products and services.',
    vision: 'To become a global conglomerate trading out of Africa.',
    values: 'Phronesis West Africa Resources Ltd core values allow work ethics which creates sustainable relationships with customers and stakeholders thus guaranteeing excellent performance and superior returns. In the face of perverseness, we have built a reputation across our various businesses as a trusted establishment with primary value drivers which include:',
    valueItems: [
        'Excellence.',
        'Trustworthiness.',
        'Innovation and',
        'Integrity.',
    ],
    closing:
        'At PhronesisWestAfrica ResourcesLtd, we believe in making a reality of every possibility.',
}

export const historyProfile = {
    objective:
        'Vision and Objective It is our intention to provide our respected clients with exactly what they need. This way we contribute to the success of their facility and project uptime with a high productivity. This is achieved via high speed, efficiency, experiences in knowledge and quality service combined with a dynamic and innovative philosophy. Undoubtedly, we feel that this approach to business and the market has led to the continued and sustained growth of Phronesis West Africa LTD resulting to the creation of employment and constant development at all levels of our business. It will please us to serve our clients and their companies with the motto. Giving you excellent services on what you need.',
    vision: 'Our Vision is to provide our clients with quality service combined with dynamic innovation at the point of their need and productivity.',
    permissions:
        'Phronesis West Africa LTD has been granted permit to operate as Oil Service Company by the Ministry of Petroleum Resources and is fully registered to do business with the following organizations:',
    permissionItems: [
        'Niger Delta Development Commission NDDC {Highest grade}',
        'Rivers State Ministry of Works (Category “D”).',
        'Eleme Petro-Chemicals Company Limited (A Subsidiary of NNPC) in Category “D” (Highest Grade).',
        'Port Harcourt Refining Company Limited (A Subsidiary of NNPC) in Category “D” (Highest Grade).',
        'Imo State Ministry of Works and Housing.',
    ],
}

export const legacyServiceCards = [
    {
        title: 'MARINE VESSEL SUPPLY',
        image: '/images/resource/service-11.jpg',
        href: '/services/marine-vessel-supply',
        text: 'Phronesis West Africa LTD is dedicated to a Quality and Safety policy. It ensures that its services are of a uniform and consistent level, meeting the agreed requirements of its customers plus national and international standards.',
    },
    {
        title: 'Logistics',
        image: '/images/logistics.jpg',
        href: '/services/logistics',
        text: 'We provide comprehensive maritime logistics services including crew management, ship agency, vessel inspection & certification, customs clearing, and vessel brokerage to support your operations.',
    },
    {
        title: 'Shipping Service',
        image: '/images/shipping.jpg',
        href: '/services/shipping',
        text: 'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
    },
    {
        title: 'PIPELINE LAYING',
        image: '/images/resource/service-77.jpg',
        href: '/services/petroleum-products-haulage',
        text: 'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
    },
]

export const historyServiceCards = [
    {
        title: 'MARINE VESSEL SUPPLY',
        image: '/images/resource/service-4.jpg',
        href: '/services/marine-vessel-supply',
        text: 'Phronesis West Africa LTD is dedicated to a Quality and Safety policy. It ensures that its services are of a uniform and consistent level, meeting the agreed requirements of its customers plus national and international standards.',
    },
    {
        title: 'O C T G',
        image: '/images/resource/service-5.jpg',
        href: '/services/logistics',
        text: 'Phronesis West Africa LTD believes in the concept of total quality, the satisfaction of customers, suppliers and employees working together to pursue the policy, and the continuous process of quality improvement.',
    },
    {
        title: 'CONSTRUCTION',
        image: '/images/resource/service-6.jpg',
        href: '/services/shipping',
        text: 'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
    },
    {
        title: 'PIPELINE LAYING',
        image: '/images/resource/service-4.jpg',
        href: '/services/petroleum-products-haulage',
        text: 'Future assignments as well as the maintenance and modernization of existing plant/projects, require great know-how in all fields of construction.',
    },
    {
        title: 'PETROLEUM PRODUCT HAULAGE',
        image: '/images/resource/service-5.jpg',
        href: '/services/petroleum-products-haulage',
        text: 'Phronesis West Africa LTD is dedicated to a Quality and Safety policy. It ensures that its services are of a uniform and consistent level, meeting the agreed requirements of its customers plus national and international standards',
    },
    {
        title: 'QUALITY, SAFETY (HSE)',
        image: '/images/resource/service-6.jpg',
        href: '/about',
        text: 'To provide guidance in accordance with the corporate Quality handbook to all related activities in the most extensive sense.',
    },
    {
        title: 'CONSTRUCTION',
        image: '/images/resource/service-6.jpg',
        href: '/services/shipping',
        text: 'All our activities and clients assignments are carried out in accordance to our own and our client Quality Assurance, Quality Control and known National and International Standards and Norms.',
    },
    {
        title: 'PIPELINE LAYING',
        image: '/images/resource/service-4.jpg',
        href: '/services/petroleum-products-haulage',
        text: 'Future assignments as well as the maintenance and modernization of existing plant/projects, require great know-how in all fields of construction.',
    },
    {
        title: 'O C T G',
        image: '/images/resource/service-5.jpg',
        href: '/services/logistics',
        text: 'Phronesis West Africa LTD believes in the concept of total quality, the satisfaction of customers, suppliers and employees working together to pursue the policy, and the continuous process of quality improvement.',
    },
]

export const backupHomeSlides = [
    {
        title: 'Taking Best Technical Solutions',
        image: '/images/main-slider/1.jpg',
    },
    {
        title: 'Speculating Innovation Goals.',
        image: '/images/main-slider/2.jpg',
    },
    {
        title: 'With All Industry Solutions',
        image: '/images/main-slider/3.jpg',
    },
]

export const whyChooseUs = [
    'Compatitive Price',
    'Quality Product',
    'Quick Delivery',
]
