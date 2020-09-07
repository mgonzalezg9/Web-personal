import en from "../lang/en.js";
import es from "../lang/es.js";

export const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English"
    },
    {
      code: "es",
      iso: "es-ES",
      name: "Español"
    }
  ],
  defaultLocale: "es",
  // routes: {
  //   about: {
  //     en: "/about-us"
  //   },
  //   "post/_id": {
  //     es: "/articulo/:id?"
  //   },
  //   "dynamicNested/_category": {
  //     fr: "imbrication-dynamique/:category"
  //   }
  // },
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, es }
  }
};
