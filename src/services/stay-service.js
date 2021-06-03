import { asyncStorage } from './async-storage'
import { httpService } from './http-service'
import { userService } from './user-service'
userService.getUsers()

export const stayService = {
    query,
    getById,
    save,
    remove,
}

const KEY = 'stay'
const gStays = [
    {
        _id: "10006546",
        name: "Nemo Guests House",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris1_ikkczy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris5_xdlchl.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633002/houses/paris2_sejf2c.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris3_k3d2mo.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris4_qyxvjr.jpg"
        ],
        price: 48.00,
        type: 'Apartment',
        summary: "People from all backgrounds are welcome in my home. The double room is located on the 1st floor and situated in the middle of the private house with typical Dutch steep stairs, no elevator. The room has private bathroom ( shower & toilet ), small area to make tea/coffee or toast & small fridge. The house was build around XVIII Century and was reconstructed inside a few times.",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": true,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Ekaterina",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Netherlands",
            city: "Amsterdam",
            countryCode: "NL",
            address: "Amsterdam, Noord-Holland, Netherlands",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "As televisões não funcionam... o sofá das fotos não está na casa, o que está na casa é pequeno. Não tem microondas, é um mini forno. O exaustor não existe. A casa está situada numa zona agradável e tranquila, sendo até uma casa bastante agradável e espaçosa. O grande problema está na limpeza, a casa apresenta sujidade acumulada.",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Vanessa",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/7/007108.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006547",
        name: "Eco-friendly Double Room by Vondelpark",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive1_feabwr.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive4_tsjxrt.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive5_u96b18.jpg"
        ],
        price: 73.00,
        type: 'Entire home',
        summary: "The space At The Tire Station we think only about your well-being, and that of the planet. We have solar panels on our roof, we reuse and recycle, and we only serve organic food and drinks. We have the best beds so you’ll sleep well, and we like to smile a lot because that makes everyone feel good. We’re super close to the Vondelpark, so you can enjoy the green environment any time, even in this bustling city called Amsterdam.",
        capacity: 2,
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': false,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": true,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "BnBird Homes",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Netherlands",
            city: "Amsterdam",
            countryCode: "NL",
            address: "Amsterdam, Noord-Holland, Netherlands",
            lat: -8.61307,
            lng: 41.1412
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Marcelo",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/1/001720.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "Bruno",
                    imgUrl: "/img/img2.jpg"
                }
            },
        ],
    },
    {
        _id: "10006548",
        name: "A'dam West - Villa",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 82.00,
        type: 'Entire home',
        summary: "Located in the middle of Haarlemmerbuurt, one of the main districts in Amsterdam. Just a 15 minutes short walk from the Central Station. This area is busy with cars, bicycles, pedestrians, but still maintains this charming Amsterdam feeling. You won't regret to take your loved one to admire a lovely sunset at the bridge of Eenhoornsluis (Unicorn Lock)! You have a lot off great specialty shops and lovely places to eat as well. If it's available, don't think twice, just book it!",
        capacity: 5,
        houseRules: {
            isPets: false,
            isSmoking: true
        },
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Jacquelina Pim",
            imgUrl: "https://ozgrozer.github.io/100k-faces/0/6/006692.jpg"
        },
        loc: {
            country: "Netherlands",
            city: "Amsterdam",
            countryCode: "NL",
            address: "Amsterdam, Noord-Holland, Netherlands",
            lat: -8.61309,
            lng: 41.1412
        },
    },
    {
        _id: "10006549",
        name: "Artist Studio with Amazing Water View + Parking",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour1_jxnu1d.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour2_xbfuyv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour3_mla6tp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour4_umhl7k.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour5_zvfav2.jpg"
        ],
        price: 92.00,
        type: 'Studio',
        summary: "Romantic private studio apartment at the waterfront in the Amsterdam Houthaven. Architectural designed industrial building with high ceilings, big windows and oak-wooden floors. At the top floor you wil find your private and romantic studio apartment. Enjoy the huge windows from floor to ceiling, the sunny terrace, the never boring water view and the location. Houthavens are just outside the historic city centre of Amsterdam. You will live in the sky! Really amazing how the colors change on the water and the boats. Perfect place for romantic people, artists or writers. Or for people who enjoy a different kind of living.",
        capacity: 2,
        houseRules: {
            isPets: false,
            isSmoking: false
        },
        amenities: {
            'tv': false,
            'wifi': true,
            'kitchen': true,
            'accessibility': true,
            'airConditioner': true,
            'secured': false,
            "fastFood": false,
            "parking": true,
            "aidKit": true,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Marius",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Netherlands",
            city: "Amsterdam",
            countryCode: "NL",
            address: "Amsterdam, Noord-Holland, Netherlands",
            lat: -8.61309,
            lng: 40.1413
        },
        reviews: [
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/8/008731.jpg"
                }
            }
        ]
    },
    {
        _id: "10006556",
        name: "Master Quadruple Bedroom Euston London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606639735/houses/telavivFive1_wrwexe.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606639736/houses/telavivFive2_z6lu0e.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606639736/houses/telavivFive3_uyevel.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606639736/houses/telavivFive4_malpt6.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606639735/houses/telavivFive5_xqpimc.jpg"
        ],
        price: 85.00,
        type: 'Apartment',
        summary: "A spacious private bedroom with a shared fully fitted kitchen, wood flooring, double glazing. Situated in the ever popular Drummond Street & within walking distance to transport links of Euston & Warren St, all amenities of Tottenham Court Road & University College of London (UCL ). Euston is both a train station and a Tube station and just 4 minutes away from our apartment. Euston Square Underground Station is just 2 mins away. London Euston is directly connected to several major UK cities.",
        capacity: 4,
        amenities: {
            'tv': false,
            'wifi': false,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": true,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "London",
            countryCode: "UK",
            address: "Greater London, England, United Kingdom",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/8/008885.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/8/008031.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/2/002732.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10006555",
        name: "New flat in Clapham, Central London, next station",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606641457/houses/newyorkThree1_b4y71o.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606641458/houses/newyorkThree2_eqlcsl.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606641458/houses/newyorkThree3_bfm921.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606641458/houses/newyorkThree4_iidnhl.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606641457/houses/newyorkThree5_wrapnp.jpg"
        ],
        price: 110.00,
        type: 'Shared apartment',
        summary: "Lovely, modern, bright stufio flat in trendy Battersea/Clapham Five-minute walk from Wansworth tube and approximately 15 minute walk to Clapham. Bus stop just outside the flat so would be super easy to commute and visit central London. Only 20 minutes commuting to Oxford Circus. A short stroll to Upper Street. Great central-London location",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': true,
            "fastFood": true,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Manchester",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/3/003068.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/9/009532.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/6/006772.jpg"
                }
            },
            {
                id: "madeId104",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u104",
                    fullname: "user4",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/9/009694.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10004545",
        name: "Lovely Double Room in One of London’s Safest Areas",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo1_z0qs7g.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo3_yzlnmk.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo4_xvihea.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo2_ohfxlg.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo5_an6j0x.jpg"
        ],
        price: 158.00,
        type: 'Shared apartment',
        summary: "COVID-19 - Update: I have employed a cleaning company to disinfect the room and communal areas every day. The company uses a cleaning solution that kills 99.999% of harmful bacteria, germs and viruses. High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 10 minutes walk to Swiss Cottage tube station. Swiss Cottage to Bond Street is only 9 minuets, Ideal for exploring all that Central London has to offer. Please note although this property is not currently well reviewed yet, I am a Superhost with over 500 reviews. You are in very safe hands.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': true,
            'airConditioner': false,
            'secured': true,
            "fastFood": true,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Bermingham",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/5/005168.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/7/007643.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/8/008551.jpg"
                }
            },
            {
                id: "madeId104",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u104",
                    fullname: "user4",
                    imgUrl: "https://ozgrozer.github.io/100k-faces/0/5/005067.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u103"
        ]
    },
    {
        _id: "10006559",
        name: "Locke at Broken Wharf City Studio",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork1_h8khpy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork2_oa49ku.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork3_odi6cn.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork4_zxtxbv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork5_j8c4xy.jpg"
        ],
        price: 178.00,
        type: 'Apartment',
        summary: "To ensure the safety of all guests and our staff we request you practice social distancing during your stay. Our already rigorous health and safety measures now include: contactless check-in/check-out, a high-touch deep clean approach, no-contact cleans upon request, food delivery and a 24 hour window between guests in apartments. All our apartments are self-contained and fully equipped for in-room cooking. All restaurants and social spaces remain closed until further notice.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': false,
            "fastFood": true,
            "parking": true,
            "aidKit": false,
            "publicTransport": false
        },
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Liverpool",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
        ],
        houseRules: {
            isPets: false,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10006111",
        name: "Monceau Studio with WIFI",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/euro1_ywanhc.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/euro2_oanwto.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476018/users/euro3_rewr2w.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476018/users/euro4_opatx4.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476018/users/euro5_jglhve.jpg"
        ],
        price: 49.00,
        type: 'Apartment',
        summary: "New design apartment 50 meters from the Avenue des Champs Elysées in a private courtyard very quiet. Located in the heart of Paris it is ideal for exploring the city of light. The apartment will seduce you with its design and its modern and warm decoration. Apartment of 18m2 fully renovated for up to 2 people, particularly functional, it is equipped with an electronic lock that will facilitate your stay and ensure optimal security.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': false,
            'secured': true,
            "fastFood": true,
            "parking": false,
            "aidKit": true,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Ann",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "France",
            city: "Paris",
            countryCode: "FR",
            address: "Paris-17E-Arrondissement, Île-de-France, France",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Place just as expected from the pictures. The only but is the abscence of AC. Could be a problem in hot days.",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Vanessa",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006112",
        name: "Appartement Marais",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584683/users/londonary3_mu2ogh.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584670/users/londonary2_c8ofko.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584670/users/londonary1_hiu4ok.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londonary4_jv7wsq.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606634767/users/londonary5_vkllex.jpg"
        ],
        price: 82.00,
        type: 'Apartment',
        summary: "Petit appartement lumineux dans un bâtiment haussmannien situé au cœur du marais en face du BHV et du Metro Hôtel de Ville. Avec ascenseur, canapé lit, cuisine équipée, lave linge, grande douche Italienne. numéro d'enregistrement: 75104016272001",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': false,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Ann",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "France",
            city: "Paris",
            countryCode: "FR",
            address: "Paris, Île-de-France, France",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "As televisões não funcionam... o sofá das fotos não está na casa, o que está na casa é pequeno. Não tem microondas, é um mini forno. O exaustor não existe. A casa está situada numa zona agradável e tranquila, sendo até uma casa bastante agradável e espaçosa. O grande problema está na limpeza, a casa apresenta sujidade acumulada.",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Vanessa",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006113",
        name: "Cosy room in a great location",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640047/houses/telavivSix4_nsd8na.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640047/houses/telavivSix1_crpefa.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640048/houses/telavivSix2_diofws.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640047/houses/telavivSix5_qs7zrr.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640048/houses/telavivSix3_gdwuv0.jpg"
        ],
        price: 48.00,
        type: 'Apartment',
        summary: "Gare St Lazare, close to metro lines 13, 2, 12, 3, and 14, direct train to Versailles, 10-20mn to Galeries Lafayette(the famous department store), to Opera Garnier, to Montmartre, to Champs Elysées.. 5th floor in a Haussmann building, fully renovated, with a new comfortable bed.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': true,
            'airConditioner': false,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Ann",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "France",
            city: "Paris",
            countryCode: "FR",
            address: "Paris, Île-de-France, France",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006114",
        name: "A Charming 1 Bedroom Apartment - Trocadero, Paris",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638733/houses/telAvivThree4_bego8x.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638733/houses/telAvivThree1_dj1qut.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638732/houses/telAvivThree2_lgs6es.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638733/houses/telAvivThree3_hjjrlu.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638732/houses/telAvivThree5_oyodz8.jpg"
        ],
        price: 68.00,
        type: 'Apartment',
        summary: "Charming and fully furnished one bedroom apartment in the elegant neighbourhood of Trocadero. The apartment is just around the corner of Trocadero (Eiffel Tower) and a walk distance to Champs-Élysées, top attractions and famous department stores — everything you need for a remarkable stay in Paris. The apartment has a Queen-size bed, a balcony, a washing machine, and a bathroom with a shower.",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': true,
            'airConditioner': false,
            'secured': true,
            "fastFood": false,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Ann",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "France",
            city: "Paris",
            countryCode: "FR",
            address: "Paris, Île-de-France, France",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006115",
        name: "The James New York - NoMad",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun3_cjkobv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun1_imyeiu.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun4_pnbjqn.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun5_ucpk6j.jpg"
        ],
        price: 242.00,
        type: 'Apartment',
        summary: "Sanctuary and scene combine on the corner of 29th Street and Madison Avenue. This urban oasis, inspired by the community it calls home, exudes a calming energy. The Seville, a throwback cocktail lounge with a curated playlist, infuses the hotel with an iconic New York atmosphere.",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': true,
            'airConditioner': true,
            'secured': true,
            "fastFood": true,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "David",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "New York",
            city: "New York",
            countryCode: "US-NY",
            address: "New York, United States",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 5,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "I Liked it",
                rate: 3,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },

        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006116",
        name: "Queen size room in Brooklyn",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606984061/houses/newyorkFive5_tkt2oq.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606984064/houses/newyorkFive1_hwyim1.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606984060/houses/newyorkFive2_i2ssct.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606984060/houses/newyorkFive3_kromdr.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606984062/houses/newyorkFive4_kjcyqz.jpg"
        ],
        price: 46.00,
        type: 'Apartment',
        summary: "Our cozy cocoon is located in the heart of Bedford Stuyvesant. We will welcome you warmly. The room fits two comfortably and we are close to the subway. You may appreciate the beauty and calm of our garden as well as everything the big city has to offer. Enjoy...",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': false,
            "fastFood": true,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "David",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "New York",
            city: "New York",
            countryCode: "US-NY",
            address: "Brooklyn, New York, United States",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },

            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006117",
        name: "CHARMING 1BR Garden Apartment",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1607261838/users/telavivTwo4_qqdwpp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607261838/users/telavivTwo1_f3yh7p.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607261844/users/telavivTwo2_jydv2k.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607261839/users/telavivTwo3_tl7osw.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607261837/users/telavivTwo5_ywbf36.jpg"
        ],
        price: 103.00,
        type: 'Apartment',
        summary: "This one bedroom garden apartment has Brooklyn charm and a little private outdoor space for you to use. The unit has a washer/dryer, sofa bed, fully equipped kitchen and a brand new bathroom. It occupies the ground floor of a historic 1870s brownstone in a relaxed and fun neighborhood on the border of Clinton Hill and Bed Stuy. We are a family of 4 living upstairs (completely separate) and we love the area! There are so many cute restaurants, cafes, bars and clubs to choose from here.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': true,
            'airConditioner': true,
            'secured': false,
            "fastFood": true,
            "parking": true,
            "aidKit": false,
            "publicTransport": false
        },
        host: {
            _id: "51399391",
            fullname: "David",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "New York",
            city: "New York",
            countryCode: "US-NY",
            address: "Brooklyn, New York, United States",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006118",
        name: "City life with Escape close to NYC",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1607262616/users/telavivnine1_xvmysw.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607262616/users/telavivnine2_mufmil.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607262617/users/telavivnine3_f3o8ql.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607262618/users/telavivnine4_lddzkf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1607262616/users/telavivnine5_lpc4ek.jpg"
        ],
        price: 77.00,
        type: 'Apartment',
        summary: "Cozy 1 bedroom apartment in Downtown Jersey City/Hamilton Park area. Your bedroom faces historic Embankment park. 2 blocks from Hamilton Park. 5 min walk to the bustling Newark Ave full of restaurants and bars. 10 mins walk to Grove St train station which is 10 min train ride to West Village and World Trade Center. This apartment has a microwave and mini-fridge, no full kitchen.",
        capacity: 3,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "David",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "New York",
            city: "New York",
            countryCode: "US-NY",
            address: "Brooklyn, New York, United States",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "I Liked it",
                rate: 3,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId108",
                txt: "I Liked it too",
                rate: 5,
                by: {
                    _id: "u108",
                    fullname: "user8",
                    imgUrl: "/img/img8.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006222",
        name: "4 minutes to Shinjuku: New Tokyo Apartment 501",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640344/houses/telavivSeven1_ekrkp2.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640345/houses/telavivSeven2_qyghc0.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640343/houses/telavivSeven3_h3rq8b.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640344/houses/telavivSeven4_mp7dkg.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606640343/houses/telavivSeven5_whxlbn.jpg"
        ],
        price: 39.00,
        type: 'Apartment',
        summary: "4 min train to Shinjuku Station ( 1 stop away) 6 min walk to Nakano Station. BRAND NEW, modern Japanese apartment.",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": true,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Tsukishima",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Japan",
            city: "Tokyo",
            countryCode: "JP",
            address: "中野区, 東京都, Japan",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },

        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006223",
        name: "Sanson Terrace - silkworm house",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633622/houses/parisTwo3_oht7za.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633623/houses/parisTwo1_hcsaey.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633623/houses/parisTwo2_tipg4t.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633623/houses/parisTwo5_k36o6z.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633622/houses/parisTwo4_ys2diw.jpg"
        ],
        price: 105.00,
        type: 'Apartment',
        summary: "I renovated a 80 years small wooden house by myself taking a long time. The building used to be used for raising silkworms by farms. It was our culture and industry to get silks in this area. You can have a calm time for having Coffee and beer, reading books, listening music...",
        capacity: 4,
        amenities: {
            'tv': false,
            'wifi': true,
            'kitchen': true,
            'accessibility': false,
            'airConditioner': true,
            'secured': true,
            "fastFood": false,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Tsukishima",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Japan",
            city: "Tokyo",
            countryCode: "JP",
            address: "Tokyo, Japan",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [


            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006224",
        name: "Real life anime locations in Tokyo!",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476022/users/jerus3_xmwvg2.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476022/users/jerus1_nled3l.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476022/users/jerus2_lkvcui.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476022/users/jerus4_kqz9dh.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476023/users/jerus5_tlvirj.jpg"
        ],
        price: 47.00,
        type: 'Apartment',
        summary: "A comfortable space that can accommodate up to 2 people. This apartment is 3mins from Shinjuku by train and also close to Shibuya ! It is a 5-minute walk from the nearest station of the apartment. The apartment is in a residential area so you can sleep peacefully and sleep at night. It is tourist friendly town includes a shopping street.",
        capacity: 4,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': false,
            'airConditioner': true,
            'secured': false,
            "fastFood": false,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Tsukishima",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Japan",
            city: "Tokyo",
            countryCode: "JP",
            address: "Shibuya-ku, Tōkyō, Japan",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
        ],
    },
    {
        _id: "10006225",
        name: "JPN style single A/tatami type/NoSmoke/shower",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606726154/houses/new4_qfnr4b.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606726154/houses/new1_bvu7ms.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606726154/houses/new2_lv7f21.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606726154/houses/new3_vj3von.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606726154/houses/new5_nlrlqd.jpg"
        ],
        price: 57.00,
        type: 'Apartment',
        summary: "A comfortable space that can accommodate up to 2 people. This apartment is 3mins from Shinjuku by train and also close to Shibuya ! It is a 5-minute walk from the nearest station of the apartment. The apartment is in a residential area so you can sleep peacefully and sleep at night. ",
        capacity: 2,
        amenities: {
            'tv': true,
            'wifi': true,
            'kitchen': false,
            'accessibility': false,
            'airConditioner': true,
            'secured': false,
            "fastFood": false,
            "parking": false,
            "aidKit": false,
            "publicTransport": true
        },
        host: {
            _id: "51399391",
            fullname: "Tsukishima",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Japan",
            city: "Tokyo",
            countryCode: "JP",
            address: "Shibuya-ku, Tōkyō, Japan",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [

            {
                id: "madeId102",
                txt: "I fully recommend staying at these properties for great location and value. The 3 places I stayed were very clean and spacious and the WiFi is super fast for guests looking to work during their stay. The host is fast at supporting my needs and very friendly.",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId106",
                txt: "She's a great host! I'm sure that I will stay there again when I stay in Tokyo for the long term.",
                rate: 4,
                by: {
                    _id: "u106",
                    fullname: "user6",
                    imgUrl: "/img/img6.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "I Liked it",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId104",
                txt: "Nice place, close to the subway, convenience stores and supermarket. Had a nice little yard where pets could walk around.",
                rate: 5,
                by: {
                    _id: "u104",
                    fullname: "user4",
                    imgUrl: "/img/img4.jpg"
                }
            },
            {
                id: "madeId107",
                txt: "Really great place. Masami was very nice, and even let me check in early. Would definitely recommend.",
                rate: 4,
                by: {
                    _id: "u107",
                    fullname: "user7",
                    imgUrl: "/img/img7.jpg"
                }
            },
            {
                id: "madeId109",
                txt: "The place is clean, comfortable and at very convenient location close to the train station and stores. Masami responded all of my inquiries very quickly before and during my stay. I will definitely stay this place again if I'm around the area.",
                rate: 4,
                by: {
                    _id: "u109",
                    fullname: "user9",
                    imgUrl: "/img/img9.jpg"
                }
            },
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
        ],
    },
]

asyncStorage._save(KEY, gStays)

async function query(filterBy) {
    // return await httpService.get('stay/', filterBy)
    const res = await asyncStorage.query(KEY, filterBy)
    return res
}

async function getById(id) {
    // return await httpService.get(`stay/${id}`)
    return await asyncStorage.getOne(KEY, id)
}

async function save(stay) {
    if (stay._id) {
        return await httpService.put(`stay/${stay._id}`, stay)
        // return await asyncStorage.put(KEY, toy)
    } else {
        return await httpService.post('stay/', stay)
        // return await asyncStorage.post(KEY, toy)
    }
}

async function remove(id) {
    return await httpService.delete(`stay/${id}`)
    // return await asyncStorage.remove(KEY, stayId)
}
