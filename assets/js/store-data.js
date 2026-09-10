/* ZuzuBayo — información central de la tienda
   Aquí controlaremos Español + English, categorías visibles/ocultas
   y más adelante todos los productos.
*/

window.ZUZUBAYO_STORE = {

  languages: {
    es: {
      code: "es",
      name: "Español"
    },

    en: {
      code: "en",
      name: "English"
    }
  },

  nav: {
    home: {
      es: "Inicio",
      en: "Home"
    },

    products: {
      es: "Productos",
      en: "Products"
    },

    shop: {
      es: "Tienda",
      en: "Shop"
    },

    contact: {
      es: "Contacto",
      en: "Contact"
    }
  },

  collections: {

    /* =========================
       JOURNALS & LISTAS
    ========================= */

    journals: {
      visible: true,
      file: "journals.html",

      es: {
        title: "Journals & Listas",
        subtitle: "Organiza tus ideas, emociones y rutinas."
      },

      en: {
        title: "Journals & Lists",
        subtitle: "Organize your ideas, emotions, and routines."
      },

      categories: {

        "journal-self-care": {
          visible: true,

          es: {
            title: "Autocuidado & Bienestar",
            description: "Espacios para reconectar contigo y cuidar de ti."
          },

          en: {
            title: "Self-Care & Wellbeing",
            description: "Spaces to reconnect with yourself and care for your wellbeing."
          }
        },

        "journal-organizacion": {
          visible: true,

          es: {
            title: "Organización",
            description: "Herramientas para ordenar tus días, pendientes y prioridades."
          },

          en: {
            title: "Organization",
            description: "Tools to organize your days, tasks, and priorities."
          }
        },

        "journal-estudio": {
          visible: true,

          es: {
            title: "Estudio",
            description: "Recursos para planificar y acompañar tu vida académica."
          },

          en: {
            title: "Study",
            description: "Resources to plan and support your academic life."
          }
        },

        /* OCULTAS */

        "journal-gratitude": {
          visible: false,

          es: {
            title: "Gratitud"
          },

          en: {
            title: "Gratitude"
          }
        },

        "journal-habitos": {
          visible: false,

          es: {
            title: "Hábitos & Rutinas"
          },

          en: {
            title: "Habits & Routines"
          }
        },

        "journal-listas": {
          visible: false,

          es: {
            title: "Listas & Checklists"
          },

          en: {
            title: "Lists & Checklists"
          }
        },

        "journal-hogar": {
          visible: false,

          es: {
            title: "Hogar"
          },

          en: {
            title: "Home"
          }
        },

        "journal-presupuesto": {
          visible: false,

          es: {
            title: "Presupuesto & Ahorro"
          },

          en: {
            title: "Budget & Savings"
          }
        }
      }
    },


    /* =========================
       PLANTILLAS
    ========================= */

    templates: {
      visible: true,
      file: "plantillas.html",

      es: {
        title: "Plantillas",
        subtitle: "Recursos editables para organizar y crear."
      },

      en: {
        title: "Templates",
        subtitle: "Editable resources to organize and create."
      },

      categories: {

        "redes-sociales": {
          visible: true,

          es: {
            title: "Redes Sociales"
          },

          en: {
            title: "Social Media"
          }
        },

        "organizacion-estudio": {
          visible: true,

          es: {
            title: "Organización & Estudio"
          },

          en: {
            title: "Organization & Study"
          }
        },

        /* OCULTAS */

        "negocios": {
          visible: false,

          es: {
            title: "Negocios"
          },

          en: {
            title: "Business"
          }
        },

        "eventos": {
          visible: false,

          es: {
            title: "Eventos"
          },

          en: {
            title: "Events"
          }
        },

        "anime": {
          visible: false,

          es: {
            title: "Anime"
          },

          en: {
            title: "Anime"
          }
        }
      }
    },


    /* =========================
       GUÍAS
    ========================= */

    guides: {
      visible: true,
      file: "guias.html",

      es: {
        title: "Guías"
      },

      en: {
        title: "Guides"
      },

      categories: {

        "guias-organizacion": {
          visible: true,

          es: {
            title: "Organización"
          },

          en: {
            title: "Organization"
          }
        },

        "guias-productividad": {
          visible: true,

          es: {
            title: "Productividad"
          },

          en: {
            title: "Productivity"
          }
        },

        "guias-dinero-planificacion": {
          visible: true,

          es: {
            title: "Dinero & Planificación"
          },

          en: {
            title: "Money & Planning"
          }
        },

        "guias-redes-contenido": {
          visible: true,

          es: {
            title: "Redes Sociales & Contenido"
          },

          en: {
            title: "Social Media & Content"
          }
        },

        "guias-emprender": {
          visible: true,

          es: {
            title: "Emprendimiento"
          },

          en: {
            title: "Entrepreneurship"
          }
        }
      }
    },


    /* =========================
       STICKERS
    ========================= */

    stickers: {
      visible: true,
      file: "stickers.html",

      es: {
        title: "Stickers"
      },

      en: {
        title: "Stickers"
      },

      categories: {

        "cute-aesthetic": {
          visible: true,

          es: {
            title: "Cute & Aesthetic"
          },

          en: {
            title: "Cute & Aesthetic"
          }
        },

        "self-care": {
          visible: true,

          es: {
            title: "Self-Care"
          },

          en: {
            title: "Self-Care"
          }
        },

        "productivity": {
          visible: true,

          es: {
            title: "Productivity"
          },

          en: {
            title: "Productivity"
          }
        },

        "anime": {
          visible: true,

          es: {
            title: "Anime"
          },

          en: {
            title: "Anime"
          }
        }
      }
    },


    /* =========================
       INVITACIONES — OCULTA
    ========================= */

    invitations: {
      visible: false,
      file: "invitaciones.html",

      es: {
        title: "Invitaciones"
      },

      en: {
        title: "Invitations"
      },

      categories: {

        "baby-shower": {
          visible: false,

          es: {
            title: "Baby Shower"
          },

          en: {
            title: "Baby Shower"
          }
        },

        "cumpleanos": {
          visible: false,

          es: {
            title: "Cumpleaños"
          },

          en: {
            title: "Birthdays"
          }
        },

        "dias-especiales": {
          visible: false,

          es: {
            title: "Días Especiales"
          },

          en: {
            title: "Special Days"
          }
        }
      }
    }
  },


  /* =========================
     PRODUCTOS
  ========================= */

  products: {

    /*
      Aquí agregaremos los productos reales.

      Ejemplo futuro:

      "vuelve-a-ti": {

        visible: true,

        collection: "journals",

        category: "journal-self-care",

        name: "Vuelve a Ti ♡",

        es: {
          page: "producto-vuelve-a-ti.html",
          productId: "vuelve-a-ti-es"
        },

        en: {
          page: "producto-vuelve-a-ti.html",
          productId: "vuelve-a-ti-en"
        }
      }

    */

  }

};
