import { LucideIcon, Sun, MapPin, Music, Utensils, Users, ArrowRight, Anchor } from 'lucide-react';

export const VENUES = [
  {
    name: "Sunset Lounge Restaurant",
    type: "Indoor",
    capacity: "600", // Updated from 700
    stage: "W800 × D300 × H40", // Updated from W1000xD450
    backdrop: "W800 × H300",
    link: "https://drive.google.com/drive/u/2/folders/1mNejN5L7tTh0Th7CviZvQ9zFCiX9v5pm",
    isDriveId: false,
    image: "/images/sunset-lounge-overview.webp"
  },
  {
    name: "Poseidon Venue",
    type: "Outdoor",
    capacity: "400", // Updated from 500
    stage: "W600 × D400 × H40", // Updated from H60
    backdrop: "W600 × H300",
    link: "https://drive.google.com/drive/u/2/folders/1HDOg56sU0Enl462YzeLqRlSQ1kef_9X6",
    isDriveId: false,
    // Using a reliable Unsplash image of a beach sunset event as the provided link is blocked
    image: "/images/poseidon-overview.webp" 
  },
  {
    name: "Solar Pizza Beachfront",
    type: "Indoor",
    capacity: "Various", // Data not explicitly in capacity list, implied general restaurant usage
    stage: "Contact Sales",
    backdrop: "Contact Sales",
    link: "https://drive.google.com/drive/u/2/folders/1axfLriCBY5k4AHdxrvHeDFMa9vt6KOJV",
    isDriveId: false,
    image: "/images/solar-pizza-overview.webp"
  },
  {
    name: "Eden Garden",
    type: "Outdoor",
    capacity: "250", // Updated from 300
    stage: "W600 × D400 × H40", // Updated from W450xD300
    backdrop: "W600 × H300", // Updated from W450
    link: "https://drive.google.com/drive/u/2/folders/1za3dGhMkCbevVuooriy93pK_du-qbDW6",
    isDriveId: false,
    image: "/images/eden-garden-overview.webp"
  },
  {
    name: "Ballroom",
    type: "Indoor",
    capacity: "120", // Updated from 200
    stage: "W800 × D300 × H40", // Updated from H60
    backdrop: "W800 × H300",
    link: "https://drive.google.com/drive/u/2/folders/187EdNrrnXvwRtspOnaSqUiUZSMJvbeD-",
    isDriveId: false,
    image: "images/ballroom-overview.webp"
  }
];

export const MENUS = [
  { name: "Menu Cơm đoàn", link: "https://drive.google.com/file/d/1LZH2tlUnpM3Cu7bob9pVmLNSyC2x01IT/view?usp=drive_link" },
  { name: "Menu Gala tiệc", link: "https://drive.google.com/file/d/13VLBH5hrL0m3G6w9mDbbmaSblhDdSNBi/view?usp=drive_link" },
  { name: "BBQ Buffet", link: "https://drive.google.com/file/d/1m8IhkH3tyi4oE2jTEuGIbmlHWoyCtbeG/view?usp=drive_link" },
  { name: "Private BBQ", link: "https://drive.google.com/file/d/1aGSxNu7K9l0haFVYDxhm1DtOn48PI5vO/view?usp=drive_link" },
  { name: "Set BBQ (từ 4 khách)", link: "https://drive.google.com/file/d/1rlloN-SJpnUtFE4g8JRWn7XyUM-PHOas/view?usp=drive_link" },
  { name: "Mâm Cơm Việt", link: "https://drive.google.com/file/d/1OLnJv7lNlM1Pl84Fb0WdgwFNuavF4Tqy/view?usp=drive_link" },
  { name: "Western Set Lunch/Dinner", link: "https://drive.google.com/file/d/196F7NrZ1QRYrGfzX2XLadZ8BjaftWQUq/view?usp=drive_link" },
  { name: "Romantic Dinner", link: "https://drive.google.com/file/d/110nR98aG0Cz5mYOV0XB6YafRWa9YcJYO/view?usp=drive_link" },
  { name: "Trà chiều High Tea", link: "https://drive.google.com/file/d/1-DD8geALGaSqMJbvn5bObwKOnPc_QHdN/view?usp=drive_link" },
  { name: "Floating Meal", link: "https://drive.google.com/file/d/1jpnwh5gvIm9T4S8-_mkcumMsYyTf7CDL/view?usp=drive_link" },
];

export const DRINK_ALACARTE = [
  { name: "Saigon Special / Bivina", price: "50,000" },
  { name: "Tiger", price: "60,000" },
  { name: "Heineken", price: "70,000" },
  { name: "Soft drink", price: "50,000" },
  { name: "Fresh fruit juices", price: "70,000" },
];

export const DRINK_FREEFLOW = [
  { 
    name: "Non Alcohol", 
    price: "239,000++", 
    extra: "100,000++",
    description: "Soft drinks, 2 fresh fruit juices, mineral water and infused water."
  },
  { 
    name: "Standard", 
    price: "395,000++", 
    extra: "100,000++",
    description: "Free flow of Soft drinks, 2 fresh fruit juices, mineral waters & Tiger beer."
  },
  { 
    name: "Deluxe", 
    price: "499,000++", 
    extra: "100,000++",
    description: "Free flow of Soft drinks, 2 fresh fruit juices, mineral waters, Tiger beer & House wine (Red & White)."
  },
  { 
    name: "Premium", 
    price: "699,000++", 
    extra: "200,000++",
    description: "Free flow of Soft drinks, 2 fresh fruit juices, mineral waters, Tiger beer, House wine (Red, White & Sparkling), 6 types of house spirit (Vodka, Gin, Rum, Tequila, Whiskey, Brandy)."
  },
];

export const DRINK_CORKAGE = [
  { name: "Soft drink", price: "400,000 / thùng 24" },
  { name: "Beer", price: "700,000 / thùng 24" },
  { name: "Waters", price: "350,000 / thùng 24" },
  { name: "Spirits", price: "800,000 / chai" },
  { name: "Wine", price: "750,000 / chai" },
  { name: "Champagne", price: "750,000 / chai" },
  { name: "Local wine (Rượu quê)", price: "300,000 / lít" },
];

export const SOUND_PACKAGES = [
  { 
    title: "Gói ATAS Siêu tiết kiệm", 
    capacity: "Dưới 50 khách (Indoor)", 
    price: "6,000,000",
    equipment: [
      "2 Full PL210AR - 2 Sub PL218AR - 2 Monitor P15AR",
      "4 Micro SVT - 1 Mixer Dynacord CMS1000",
      "1 Laptop - 1 Cáp 16Line",
      "4 Parled",
      "1 Máy chiếu"
    ]
  },
  { 
    title: "Gói ATAS Tiết kiệm", 
    capacity: "Dưới 100 khách", 
    price: "16,000,000",
    equipment: [
      "4 Full PL210AR - 2 Sub PL218AR - 2 Monitor P15AR",
      "4 Micro SVT - 1 Mixer Dynacord CMS1000",
      "1 Laptop - 1 Cáp 16Line",
      "8 Parled - 4 Beam",
      "1 Máy chiếu"
    ]
  },
  { 
    title: "Gói ATAS Tiêu chuẩn", 
    capacity: "Từ 100 - 150 khách", 
    price: "18,000,000",
    equipment: [
      "6 Full PL210AR - 2 Sub PL218AR - 2 Monitor P15AR",
      "4 Micro SVT - 1 Mixer Dynacord CMS1000",
      "1 Laptop - 1 Cáp 16Line",
      "8 Parled - 4 Beam",
      "1 Máy chiếu"
    ]
  },
  { 
    title: "Gói ATAS Cao cấp", 
    capacity: "Từ 150 - 250 khách", 
    price: "20,000,000",
    equipment: [
      "6 Full PL210AR - 4 Sub PL218AR - 4 Monitor P15AR",
      "4 Micro SVT - 1 Mixer Dynacord CMS1000",
      "1 Laptop - 1 Cáp 16Line",
      "8 Parled - 4 Beam",
      "1 Máy chiếu"
    ]
  },
];

export const SOUND_ADDONS = [
  { name: "Phụ thu ATAS mang ngoài vào (ko LED)", price: "5,000,000" },
  { name: "Phụ thu ATAS mang ngoài vào (có LED)", price: "10,000,000" },
  { name: "Màn hình LED", price: "800,000 / m²" },
  { name: "DJ", price: "4,000,000 / giờ" },
  { name: "Múa lửa (2 người)", price: "4,000,000 / show 15 phút" },
];

export const TEAM_BUILDING = [
  { name: "Team Building (dưới 100 khách)", price: "2,000,000" },
  { name: "Team Building (dưới 100 khách và không ở resort)", price: "5,000,000" },
  { name: "Âm thanh chơi Team Building", price: "3,500,000" },
  { name: "Lửa trại", price: "3,000,000" },
];

export const MEETING = [
  { name: "Half-day + 1 tea break", price: "300,000 / pax" },
  { name: "Full-day + 2 tea breaks", price: "550,000 / pax" },
];

export const WEDDING_PACKAGES = [
  {
    name: "Premium Package",
    price: "240,000,000",
    desc: "SỬ DỤNG 100% HOA TƯƠI",
    subDesc: "Use 100% fresh flowers",
    color: "from-amber-200 to-yellow-500",
    highlight: true,
    image: "images/wedding1.jpg"
  },
  {
    name: "Superior Package",
    price: "160,000,000",
    desc: "SỬ DỤNG 50% HOA TƯƠI VÀ 50% HOA VẢI",
    subDesc: "Use 50% fresh flowers & 50% fabric flowers",
    color: "from-slate-200 to-slate-400",
    highlight: false,
    image: "images/wedding2.jpg"
  },
  {
    name: "Standard Package",
    price: "120,000,000",
    desc: "SỬ DỤNG 50% HOA VẢI VÀ 50% HOA CỎ LAU",
    subDesc: "Use 50% fabric flowers & 50% reed flowers",
    color: "from-orange-100 to-orange-300",
    highlight: false,
    image: "images/wedding3.jpg"
  }
];

export const WEDDING_INCLUSIONS = [
  "Phí tổ chức tiệc ngoài trời (Outdoor celebration)",
  "Set up, trang trí cổng hoa (hoa vải, cỏ lau, hoa tươi tùy gói) (Wedding flower arch)",
  "Set up, trang trí photo booth (Photo booth decoration)",
  "Set up, trang trí bàn gallery (Gallery counter decoration)",
  "Set up, trang trí lối đi cho CD-CR (Flower aisle decoration)",
  "Trang trí hoa, nến 2 bên lối đi (Flowers, candles along the aisle)",
  "Set up đèn dẫn lối 2 bên (Decorating lights along the aisle)",
  "Set up, trang trí sân khấu lễ (Stage platform decorating)",
  "Đèn trang trí sân khấu lễ (Decorating lights)",
  "Set up, trang trí ghế ngồi dự lễ (Cover seating with bow tie)",
  "Bánh kem 3 tầng (1 tầng thật) (Wedding cake)",
  "Tháp champagne | Champagne tower",
  "Pháo điện (Electric Fireworks)",
  "MC tiếng việt (Vietnamese speaking MC)",
  "Hệ thống âm thanh, ánh sáng tiêu chuẩn (Standard AV system)"
];

export const WEDDING_AV = [
  "Loa full: 04",
  "Monitor: 02",
  "Sub: 02",
  "Đèn beamer: 04",
  "Đèn parled: 08",
  "Speaker: 04",
  "Monitor: 02",
  "Beamer: 04",
  "Parled: 08"
];