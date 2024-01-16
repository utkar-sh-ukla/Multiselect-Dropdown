import { Chip } from "./types/ChipTypes";

const getRandomUserAvatar = (gender: string) => {
  // Replace 'https://randomuser.me/api/portraits/' with the base URL of the RandomUser.me API.
  return `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`;
};

export const Profiles: Chip[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: getRandomUserAvatar("men"),
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: getRandomUserAvatar("women"),
  },
  {
    id: 3,
    name: "Nick Giannopoulos",
    email: "nick@example.com",
    avatar: getRandomUserAvatar("men"),
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: getRandomUserAvatar("women"),
  },
  {
    id: 5,
    name: "Bob Smith",
    email: "bob@example.com",
    avatar: getRandomUserAvatar("men"),
  },
  {
    id: 6,
    name: "Eva Martinez",
    email: "eva@example.com",
    avatar: getRandomUserAvatar("women"),
  },
  {
    id: 7,
    name: "Alex Turner",
    email: "alex@example.com",
    avatar: getRandomUserAvatar("men"),
  },
  {
    id: 8,
    name: "Sophie White",
    email: "sophie@example.com",
    avatar: getRandomUserAvatar("women"),
  },
  {
    id: 9,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: getRandomUserAvatar("men"),
  },
  {
    id: 10,
    name: "Linda Miller",
    email: "linda@example.com",
    avatar: getRandomUserAvatar("women"),
  },
  // Add more items as needed
];
