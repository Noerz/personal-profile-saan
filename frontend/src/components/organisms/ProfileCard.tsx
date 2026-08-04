import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";
import { Avatar, Badge, Button } from "@/components/atoms";
import { Card } from "@/components/molecules";
import { formatDate } from "@/shared/lib/utils";
import type { Role } from "@/shared/types";

export interface ProfileCardProps {
  name: string;
  email: string;
  role: Role;
  bio?: string;
  location?: string;
  website?: string;
  avatarUrl?: string;
  joinedAt: string;
  onEdit?: () => void;
}

export function ProfileCard({
  name,
  email,
  role,
  bio,
  location,
  website,
  avatarUrl,
  joinedAt,
  onEdit,
}: ProfileCardProps) {
  return (
    <Card variant="elevated" padding="lg">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <Avatar name={name} src={avatarUrl} size="xl" />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <Badge variant={role === "admin" ? "admin" : "user"} dot>
              {role === "admin" ? "Admin" : "User"}
            </Badge>
          </div>
          <p className="text-sm text-slate-400">{email}</p>

          {bio && <p className="mt-2 text-sm text-slate-300 leading-relaxed">{bio}</p>}

          <div className="mt-3 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
            {location && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin size={13} /> {location}
              </span>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <LinkIcon size={13} /> {website.replace(/^https?:\/\//, "")}
              </a>
            )}
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={13} /> Joined {formatDate(joinedAt)}
            </span>
          </div>
        </div>

        {onEdit && (
          <Button variant="outline" size="sm" onClick={onEdit} id="edit-profile-btn">
            Edit Profile
          </Button>
        )}
      </div>
    </Card>
  );
}
