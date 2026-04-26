"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Profile = {
  id: string;
  name: string;
  image: string;
  role: string[];
  description: string;
};

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-white/5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-70 blur-md transition group-hover:opacity-100" />
          <Image
            src={profile.image}
            alt={profile.name}
            width={100}
            height={100}
            className="relative rounded-full border-4 border-white/10 object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold tracking-tight">{profile.name}</h3>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-2">
          {profile.role.map((r, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="border-none bg-white/10 text-white"
            >
              {r}
            </Badge>
          ))}
        </div>

        {/* Description Preview */}
        <p
          className="text-muted-foreground line-clamp-3 text-sm"
          dangerouslySetInnerHTML={{ __html: profile.description }}
        />
      </CardContent>

      <CardFooter className="flex justify-center pb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 px-6 hover:bg-white/20"
            >
              View Details
            </Button>
          </DialogTrigger>

          {/* Dialog */}
          <DialogContent className="max-w-2xl rounded-2xl border-white/10 bg-zinc-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {profile.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Full profile details
              </DialogDescription>
            </DialogHeader>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={profile.image}
                alt={profile.name}
                width={120}
                height={120}
                className="rounded-full border border-white/10"
              />
            </div>

            {/* Roles */}
            <div className="flex flex-wrap justify-center gap-2">
              {profile.role.map((r, i) => (
                <Badge key={i} className="bg-purple-500/20 text-purple-300">
                  {r}
                </Badge>
              ))}
            </div>

            {/* Full Description */}
            <div
              className="space-y-2 text-sm leading-relaxed text-zinc-300"
              dangerouslySetInnerHTML={{ __html: profile.description }}
            />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
