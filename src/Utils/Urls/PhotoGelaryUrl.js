import { basedUrl } from "../Network/Network";

export const createPhotogealyUrl = basedUrl + "photogealy/create";

export const getPhotogealyUrl = basedUrl + "photogealy/";

export const deletePhotogealyUrl = (id) => basedUrl + `photogealy/${id}`;

export const updatePhotogealyUrl = (id) => basedUrl + `photogealy/${id}`;