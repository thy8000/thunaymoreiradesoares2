/**
 * Link da galeria: https://images2.imgbox.com/1e/0e/KXVOdeVU_o.png
 */

document.addEventListener("alpine:init", () => {
  Alpine.data("projects", () => ({
    projects: [
      {
        ID: 1,
        type: "web",
        image:
          "https://images2.imgbox.com/9c/f7/bbiOSoZK_o.png",
        title: "IT9 Marketing Digital",
        description:
          "Site responsivo em HTML, CSS, JS, Bootstrap, PHP e Wordpress.",
        link1: {
          name: "Site",
          link: "https://it9.com.br/",
        },
        link2: {
            name: "",
            link: "",
        },
      },
      {
        ID: 2,
        type: "web",
        image:
          "https://images2.imgbox.com/d3/d4/TwBGnEmc_o.png",
        title: "Magalhães & Sipert Advogados Associados",
        description:
          "Site responsivo em HTML, CSS, JS, PHP, Wordpress e Bootstrap para um cliente.",
        link1: {
          name: "Site",
          link: "https://mslaw.com.br/",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/magalhes-sipert-sociedade-de-advogados",
        },
      },
      {
        ID: 3,
        type: "web",
        image:
          "https://images2.imgbox.com/7c/e8/EaWRK9TQ_o.png",
        title: "FCTK Advogados Associados",
        description:
          "Site responsivo em HTML, CSS, JS, PHP e Wordpress para um cliente.",
        link1: {
          name: "Site",
          link: "https://fctk.com.br/",
        },
        link2: {
            name: "",
            link: "",
        },
      },
      {
        ID: 4,
        type: "web",
        image:
          "https://images2.imgbox.com/a3/52/R0c1arv1_o.png",
        title: "Acetec",
        description:
          "Site responsivo em HTML, CSS, JS, PHP e Wordpress para um cliente.",
        link1: {
          name: "Site",
          link: "https://casadotnt.com.br/",
        },
        link2: {
            name: "",
            link: "",
        },
      },
      {
        ID: 5,
        type: "web",
        image:
          "https://images2.imgbox.com/b7/57/hAjlX6CD_o.png",
        title: "Dra. Andrea Signoretti",
        description:
          "Site responsivo feito em Wordpress e Elementor.",
        link1: {
          name: "Site",
          link: "https://andreasignoretti.com.br/",
        },
        link2: {
            name: "",
            link: "",
        },
      },
      {
        ID: 6,
        type: "web",
        image:
          "https://images2.imgbox.com/89/1d/IwbdhduE_o.png",
        title: "Altabase",
        description:
          "Site responsivo feito em HTML, CSS, TailwindCSS, JQuery, PHP e Wordpress.",
        link1: {
          name: "Site",
          link: "https://altabase.com.br/",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/obrasoft",
        },
      },
      {
        ID: 7,
        type: "web",
        image:
          "https://images2.imgbox.com/c1/98/va0tn2y4_o.png",
        title: "Altaboards",
        description:
          "Site responsivo feito em HTML, CSS, TailwindCSS, JQuery, PHP e Wordpress.",
        link1: {
          name: "Site",
          link: "https://www.altaboards.com/",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/altaboards",
        },
      },
      {
        ID: 8,
        type: "web",
        image:
          "https://images2.imgbox.com/a7/f0/ds4cVRt7_o.png",
        title: "Portfolio 1.0",
        description:
          "Site responsivo feito em HTML, CSS e Jquery. Primeira versão do meu portfolio.",
        link1: {
          name: "Site",
          link: "https://thy8000.github.io/thunaymoreiradesoares/",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/thunaymoreiradesoares",
        },
      },
      {
        ID: 9,
        type: "games",
        image:
          "https://images2.imgbox.com/1e/0e/KXVOdeVU_o.png",
        title: "Kitsune",
        description:
          "Jogo mobile feito com Unity e C# para um projeto de TCC",
        link1: {
          name: "Behance",
          link: "https://www.behance.net/gallery/90303541/Kitsune",
        },
        link2: {
            name: "",
            link: "",
        },
      },
      {
        ID: 10,
        type: "mobile",
        image:
          "https://images2.imgbox.com/f0/06/gblpRkns_o.png",
        title: "Highlighter",
        description:
          "App mobile feito com Android Studio e Java para um projeto da faculdade.",
        link1: {
          name: "Behance",
          link: "https://www.behance.net/gallery/79960877/Highlighter",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/Highlighter-App",
        },
      },
      {
        ID: 11,
        type: "others",
        image:
          "https://images2.imgbox.com/4c/2d/Ud5niPDR_o.png",
        title: "Infomarket",
        description:
          "Programa desktop feito em com Visual Studio, C# e .NET para um projeto da faculdade.",
        link1: {
          name: "Behance",
          link: "https://www.behance.net/gallery/80153453/Infomarket",
        },
        link2: {
            name: "Github",
            link: "https://github.com/thy8000/Infomarket",
        },
      },
    ],
  }));
});
