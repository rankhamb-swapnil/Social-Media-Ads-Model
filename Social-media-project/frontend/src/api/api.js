import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchRegionalAdPerformance = (region) => {
  return api.get(`/regional-ad-performance?region=${region}`);
};

export const getBudgetOptimization = (region) => {
  return api.get(`/budget-optimization?region=${region}`);
};

export const getABTestResults = (region, adA, adB) => {
  return api.get(`/ab-test-results?region=${region}&ads=${adA},${adB}`);
};

export const getLowerPerformanceAds = (region) => {
  return api.get(`/lower-performance-ads?region=${region}`);
};

export const getTopPerformanceAds = (region) => {
  return api.get(`//top-performance-ads?region=${region}`);
};

export const getRegionPerformance = (region) => {
  return api.get(`/region-performance?region=${region}`);
};

export const getAdTimeInsights = (adName) => {
  return api.get(`/ad-time-performance?adName=${adName}`);
};

export const getOverviewMetrics = () => {
  return api.get(`/overview-metrics`);
};

export const getAgeGroupInsights = (region) => {
  return api.get(`/age-group-insights?region=${region}`);
};

export const getBudgetForRegion = (region) => {
  return api.get(`/budget-allocated-by-region?region=${region}`);
};


// export const getTableData = (region) => {
//   return api.get(`/data`, {
//     params: { region },
//   });
// };



export const generateReport = (reportType, filters) => {
  return axios.post("/generate-report", { reportType, filters });
};


export const fetchRegionalBudgetPerformance = (region) => {
  return api.get(`/regional-budget-performance?region=${region}`);
};


export const getBudgetByRegion = (region) => {
  return api.get(`/budget-by-region?region=${region}`);
};



export const getMetricsData = (region) => {
  return api.get(`/metrics`, {
    params: { region },
  });
};
