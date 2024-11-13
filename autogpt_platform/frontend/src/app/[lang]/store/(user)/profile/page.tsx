import * as React from "react";
import { Sidebar } from "@/components/agptui/Sidebar";
import { ProfileInfoForm } from "@/components/agptui/ProfileInfoForm";
import { IconType } from "@/components/ui/icons";
import { Navbar } from "@/components/agptui/Navbar";

interface ProfilePageProps {
  userName?: string;
  userEmail?: string;
  credits?: number;
  displayName?: string;
  handle?: string;
  bio?: string;
  links?: Array<{ id: number; url: string }>;
  categories?: Array<{ id: number; name: string }>;
  menuItemGroups?: Array<{
    items: Array<{
      icon: IconType;
      text: string;
      href?: string;
      onClick?: () => void;
    }>;
  }>;
  isLoggedIn?: boolean;
  avatarSrc?: string;
}

const ProfilePage = ({
  userName = "",
  userEmail = "",
  credits = 0,
  displayName = "",
  handle = "",
  bio = "",
  links = [],
  categories = [],
  menuItemGroups = [],
  isLoggedIn = true,
  avatarSrc,
}: ProfilePageProps) => {
  const sidebarLinkGroups = [
    {
      links: [
        { text: "Creator Dashboard", href: "/dashboard" },
        { text: "Agent dashboard", href: "/agent-dashboard" },
        { text: "Integrations", href: "/integrations" },
        { text: "Profile", href: "/profile" },
        { text: "Settings", href: "/settings" },
      ],
    },
  ];

  const updatedMenuItemGroups = [
    {
      items: [
        { icon: IconType.Edit, text: "Edit profile", href: "/profile/edit" },
      ],
    },
    {
      items: [
        {
          icon: IconType.LayoutDashboard,
          text: "Creator Dashboard",
          href: "/dashboard",
        },
        {
          icon: IconType.UploadCloud,
          text: "Publish an agent",
          href: "/publish",
        },
      ],
    },
    {
      items: [{ icon: IconType.Settings, text: "Settings", href: "/settings" }],
    },
    {
      items: [
        {
          icon: IconType.LogOut,
          text: "Log out",
          onClick: () => console.log("Logged out"),
        },
      ],
    },
  ];

  const navLinks = [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Library", href: "/library" },
    { name: "Build", href: "/build" },
  ];

  return (
    <ProfileInfoForm
      displayName={displayName}
      handle={handle}
      bio={bio}
      links={links}
      categories={categories}
    />
  );
};

export default ProfilePage;
