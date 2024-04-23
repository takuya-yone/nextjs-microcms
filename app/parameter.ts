type ParamTypes = {
  X_MICROCMS_API_KEY: string;
};

export const PARAMS: ParamTypes = {
  X_MICROCMS_API_KEY: process.env.X_MICROCMS_API_KEY ?? "",
};
