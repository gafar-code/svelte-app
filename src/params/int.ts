import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => Number.isInteger(+param) && +param > 0;