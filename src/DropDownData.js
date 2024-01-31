export const DropDownData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Web Design",
        url: "web-design",
      },
      {
        title: "Web Development",
        url: "web-dev",
        submenu: [
          {
            title: "Frontend",
            submenu: [
              {
                title: "ReactJS",
                url: "react",
              },
              {
                title: "Javascript",
                url: "javascript",
              },
            ],
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "node",
              },
              {
                title: "ExpressJS",
                url: "express",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
];
