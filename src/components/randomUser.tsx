"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

interface User {
  name: string;
  email: string;
  phone: string;
  image: string;
  category: string;
}
interface ApiResponse {
  results: Array<{
    name: { first: string; last: string };
    email: string;
    phone: string;
    picture: { large: string };
  }>;
}

const RandomUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchRandomUsers = useCallback(async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
      const data: ApiResponse = await response.json();
      const fetchedUsers = data.results.map((user, index) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        image: user.picture.large,
        category: getCategory(index),
      }));
      setUsers(fetchedUsers);
      localStorage.setItem("randomUsers", JSON.stringify(fetchedUsers));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getCategory = (index: number): string => {
    const categories = ["Barista", "Kitchen", "Marketing"];
    return categories[Math.floor(index / 4)];
  };

  const groupedUsers = users.reduce((acc, user) => {
    if (!acc[user.category]) {
      acc[user.category] = [];
    }
    acc[user.category].push(user);
    return acc;
  }, {} as Record<string, User[]>);

  useEffect(() => {
    const storedUsers = localStorage.getItem("randomUsers");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      fetchRandomUsers();
    }
  }, [fetchRandomUsers]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground">
      <div className="w-[90%] pt-[20px] md:pt-20">
        {Object.entries(groupedUsers).map(([category, users]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4" data-aos="fade-right">
              {category}
            </h2>
            <div
              className="grid grid-cols-1 gap-4 md:grid-cols-4"
              data-aos="fade-left"
            >
              {users.map((user, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg rounded-lg overflow-hidden max-w-sm relative"
                >
                  <CardHeader className="h-14 bg-[#31511E] relative">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                      loading="lazy"
                    />
                  </CardHeader>
                  <CardContent className="p-6 pt-12 text-center">
                    <CardTitle className="text-lg font-bold flex items-center justify-center">
                      <FaRegUser className="mr-2" />
                      {user.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground flex items-center justify-center">
                      <MdOutlineEmail className="mr-2" /> {user.email}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
                      <MdOutlinePhone className="mr-2" /> {user.phone}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUsers;
