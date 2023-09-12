import { basedUrl } from "../Network/Network";

export const createStatisticUrl = basedUrl + "statistic/create";

export const getStatisticUrl = basedUrl + "statistic/";

export const getSingelStatisticUrl = (id) => basedUrl + `statistic/get-singel/${id}`;

export const deleteStatisticUrl = (id) => basedUrl + `statistic/delete/${id}`;

export const updateStatisticUrl = (id) => basedUrl + `statistic/update/${id}`;