import originalFetch from "isomorphic-fetch";
import fetchBuilder from "fetch-retry";
import { notify } from "app/providers/with-notifications";
import { ApiCategories, ApiProducts, ApiRecipes, ApiFridge } from "shared/api";

export class Api {
  static Categories = ApiCategories;
  static Recipes = ApiRecipes;
  static Products = ApiProducts;
  static Fridge = ApiFridge;
  // static Auth = ApiAuth;

  static handleErrorMessage(obj: {
    message?: string;
    msg?: string;
    code?: number;
  }) {
    if (!obj.message && !obj.msg) return;
    if (obj.code === 4003) return;

    notify({
      message: obj.msg || obj.message || "",
      type: obj.code || "10000",
    });
  }

  static async fetchRetry(path: string, props: RequestInit) {
    try {
      const options = {
        retries: 3,
        retryDelay: 3000,
      };

      const fetch = fetchBuilder(originalFetch, options);
      const data = await fetch(path, props);
      const json = await data.json();
      return json;
    } catch (err) {
      console.error(err, path, props);
      return null;
    }
  }
}
