import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Linn Htoo's Notes",
  author: "Linn Htoo",
  avatar: "./posts/avatar.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:htain@linnhtoo.com" },
    { title: "GitHub", url: "https://github.com/phohtoo/linnblog" },
  ],
  background: "#f9f9f9",
  middlewares: [
    ga("UA-82068495-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
