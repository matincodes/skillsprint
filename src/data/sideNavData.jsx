const sideNavData = [
  {
    id: 1,
    category: "",
    links: [
      {
        title: "Home",
        url: "/dashboard/" || "/dashboard",
        icon: "/assets/Icons/home.png",
      },
      {
        title: "Announcements",
        //  url: "/dashboard/announcements",
        icon: "/assets/Icons/announcements.png",
      },
    ],
  },
  {
    id: 2,
    category: "Learning",
    links: [
      {
        title: "Classes",
        url: "/dashboard/classes",
        icon: "/assets/Icons/classes.png",
      },
      {
        title: "Curriculum",
        url: "/dashboard/curriculum",
        icon: "/assets/Icons/curriculum.png",
      },
      {
        title: "Assignments",
        url: "/dashboard/assignments",
        icon: "/assets/Icons/assignments.png",
      },
    ],
  },
  {
    id: 3,
    category: "",
    links: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: "/assets/Icons/settings.png",
      },
    ],
  },
  {
    id: 4,
    // category: "Logout",
    links: [
      {
        title: "Logout",
        // url: "/dashboard/settings",
        icon: "/assets/Icons/logout.png",
      },
    ],
  },
];

export default sideNavData;
