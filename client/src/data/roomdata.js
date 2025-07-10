import familyRoomImg from '../assets/rooms/familyroom.jpg';
import kingRoomImg from '../assets/rooms/kingsize.jpg';
import tripleRoomImg from '../assets/rooms/triplesharing.jpg';

const rooms = [
    {
      id: 1,
      name: "Family Room",
      slug: "family-room",
      images: [
        familyRoomImg
      ],
      price: 3000,
      description: `Spacious, comfortable, and thoughtfully designed, our Family Room is perfect for families or small groups looking to relax and reconnect.\n\n- Double Bed (2 + 2 persons) – Accommodates two adults and two children comfortably\n- Attached Bathroom – Clean, private, and family-friendly\n- 24-Hour Hot Shower – Warm water available anytime for your convenience\n- LED TV – Entertainment for the whole family\n- Free WiFi – Stay connected with fast, complimentary internet\n- Beautiful View – Enjoy serene landscapes right from your room\n- Private Balcony or Garden – A personal outdoor space to unwind, perfect for morning coffee or playtime`,
      amenities: [
        "Free WiFi",
        "Mountain View",
        "Forest View",
        "Private Balcony",
        "Room Service",
        "TV",
        "Fireplace"
      ],
      maxOccupancy: 4,
      category: "Featured",
    },
    {
      id: 2,
      name: "King Size Room",
      slug: "king-size-room",
      images: [
        kingRoomImg
      ],
      price: 2500,
      description: `Combining comfort, style, and a touch of nature, our King Size Room is ideal for couples or solo travelers.\n\n- King Size Bed\n- Attached Bathroom\n- 24-Hour Hot Shower\n- LED TV\n- Free WiFi\n- Balcony with View`,
      amenities: [
        "Free WiFi",
        "Mountain View",
        "Forest View",
        "Private Balcony",
        "Room Service",
        "TV",
        "Work Desk"
      ],
      maxOccupancy: 2,
      category: "Featured",
    },
    {
      id: 3,
      name: "Triple Sharing Room",
      slug: "triple-sharing-room",
      images: [
        tripleRoomImg
      ],
      price: 2800,
      description: `A perfect blend of privacy, comfort, and nature, our Triple Sharing Room is great for friends or small families.\n\n- Three Single Beds\n- Attached Bathroom\n- 24-Hour Hot Shower\n- LED TV\n- Free WiFi\n- Balcony with View`,
      amenities: [
        "Free WiFi",
        "Mountain View",
        "Forest View",
        "Private Balcony",
        "Room Service",
        "Safe",
        "TV",
        "Fireplace",
        "Work Desk"
      ],
      maxOccupancy: 3,
      category: "Featured",
    }
  ];
  
  export { rooms }; 