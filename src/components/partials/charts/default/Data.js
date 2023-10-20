export const saleRevenue = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Sales Revenue",
      width: "30",
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      backgroundColor: [
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 1)",
      ],
      data: [11000, 8000, 12500, 5500, 9500, 14299, 11000, 8000, 12500, 5500, 9500, 14299],
    },
  ],
};

export const activeSubscription = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Active User",
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      backgroundColor: [
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 0.2)",
        "rgba(44,224,195, 1)",
      ],
      data: [8200, 7800, 9500, 5500, 9200, 9690],
    },
  ],
};

export const salesOverview = {
  labels: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  dataUnit: "BTC",
  datasets: [
    {
      label: "Sales Overview",
      color: "#2CF4C2",
      fill: true,
      backgroundColor: "rgba(44,224,195, 0.25)",
      borderColor: "#2CF4C2",
      barPercentage: 0.1,
      categoryPercentage: 0.1,
      borderWidth: 2,
      lineTension: 0.1,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBorderColor: "#2CF4C2",
      pointHoverBackgroundColor: "#fff",
      data: [
        8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690,
        8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690,
      ],
    },
  ],
};

export const orderOverviewSet1 = {
  labels: [
    "19 Dec",
    "20 Dec",
    "21 Dec",
    "22 Dec",
    "23 Dec",
    "24 Dec",
    "25 Dec",
    "26 Dec",
    "27 Dec",
    "28 Dec",
    "29 Dec",
    "30 Dec",
    "31 Dec",
    "01 Jan",
  ],
  dataUnit: "USD",
  datasets: [
    {
      label: "Buy Orders",
      color: "#8feac5",
      backgroundColor: "#8feac5",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [1740, 2500, 1820, 1200, 1600, 2500, 1820, 1200, 1700, 1820, 1400, 1600, 1930, 2100],
    },
    {
      label: "Sell Orders",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [2420, 1820, 3000, 5000, 2450, 1820, 2700, 5000, 2400, 2600, 4000, 2380, 2120, 1700],
    },
  ],
};

export const orderOverviewSet2 = {
  labels: [
    "19 Dec",
    "20 Dec",
    "21 Dec",
    "22 Dec",
    "23 Dec",
    "24 Dec",
    "25 Dec",
    "26 Dec",
    "27 Dec",
    "28 Dec",
    "29 Dec",
    "30 Dec",
    "31 Dec",
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
    "08 Jan",
    "09 Jan",
    "10 Jan",
    "11 Jan",
    "12 Jan",
    "13 Jan",
    "14 Jan",
    "15 Jan",
    "16 Jan",
    "17 Jan",
  ],
  dataUnit: "USD",
  datasets: [
    {
      label: "Buy Orders",
      color: "#8feac5",
      backgroundColor: "#8feac5",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [
        1780, 2300, 2820, 2200, 2600, 1500, 1620, 1300, 1500, 1720, 1200, 1500, 2030, 2100, 1780, 2300, 2820, 2200,
        2600, 1500, 1620, 1300, 1500, 1720, 1200, 1500, 2030, 2100, 3200, 3200,
      ],
    },
    {
      label: "Sell Orders",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [
        2520, 1320, 2000, 3000, 2750, 1920, 2900, 4000, 3400, 2900, 4500, 2680, 2520, 1900, 2520, 1320, 2000, 3000,
        2750, 1920, 2900, 4000, 3400, 2900, 4500, 2680, 2520, 1900, 2500, 2500,
      ],
    },
  ],
};

export const orderOverviewSet3 = {
  labels: [
    "19 Dec",
    "20 Dec",
    "21 Dec",
    "22 Dec",
    "23 Dec",
    "24 Dec",
    "25 Dec",
    "26 Dec",
    "27 Dec",
    "28 Dec",
    "29 Dec",
    "30 Dec",
    "31 Dec",
    "01 Jan",
  ],
  dataUnit: "USD",
  datasets: [
    {
      label: "Buy Orders",
      color: "#8feac5",
      backgroundColor: "#8feac5",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [1790, 2390, 2720, 2000, 2900, 1800, 1820, 1900, 1900, 1920, 1600, 1800, 2530, 2900],
    },
    {
      label: "Sell Orders",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      data: [3520, 2320, 3000, 4000, 2950, 1220, 2100, 4200, 3800, 2500, 4600, 2780, 2020, 1800],
    },
  ],
};

export const coinOverview = {
  labels: ["Bitcoin", "Ethereum", "NioCoin", "Litecoin", "Bitcoin"],
  stacked: true,
  datasets: [
    {
      label: "Buy Orders",
      color: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      backgroundColor: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      data: [1700, 2000, 2020, 1500, 1800, 2000],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
    {
      label: "Sell Orders",
      backgroundColor: [
        "rgba(249, 140, 69, 0.2)",
        "rgba(156, 171, 255, 0.4)",
        "rgba(143, 234, 197, 0.4)",
        "rgba(107, 121, 200, 0.4)",
        "rgba(121, 241, 220, 0.4)",
      ],
      fillOpacity: "0.5",
      //color : [NioApp.hexRGB("#f98c45",.2),NioApp.hexRGB("#9cabff",.4),NioApp.hexRGB("#8feac5",.4),NioApp.hexRGB("#6b79c8",.4),NioApp.hexRGB("#79f1dc",.4)],
      data: [2520, 2020, 3500, 3000, 2950, 1920],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
  ],
};

export const coinOverviewSet1 = {
  labels: ["Bitcoin", "Ethereum", "NioCoin", "Litecoin", "Bitcoin"],
  stacked: true,
  datasets: [
    {
      label: "Buy Orders",
      color: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      backgroundColor: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      data: [1740, 2500, 1820, 1200, 1600, 2500],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
    {
      label: "Sell Orders",
      backgroundColor: [
        "rgba(249, 140, 69, 0.2)",
        "rgba(156, 171, 255, 0.4)",
        "rgba(143, 234, 197, 0.4)",
        "rgba(107, 121, 200, 0.4)",
        "rgba(121, 241, 220, 0.4)",
      ],
      fillOpacity: "0.5",
      //color : [NioApp.hexRGB("#f98c45",.2),NioApp.hexRGB("#9cabff",.4),NioApp.hexRGB("#8feac5",.4),NioApp.hexRGB("#6b79c8",.4),NioApp.hexRGB("#79f1dc",.4)],
      data: [2420, 1820, 3000, 5000, 2450, 1820],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
  ],
};

export const coinOverviewSet2 = {
  labels: ["Bitcoin", "Ethereum", "NioCoin", "Litecoin", "Bitcoin"],
  stacked: true,
  datasets: [
    {
      label: "Buy Orders",
      color: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      backgroundColor: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      data: [1780, 2900, 2820, 1500, 1100, 2500],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
    {
      label: "Sell Orders",
      backgroundColor: [
        "rgba(249, 140, 69, 0.2)",
        "rgba(156, 171, 255, 0.4)",
        "rgba(143, 234, 197, 0.4)",
        "rgba(107, 121, 200, 0.4)",
        "rgba(121, 241, 220, 0.4)",
      ],
      fillOpacity: "0.5",
      //color : [NioApp.hexRGB("#f98c45",.2),NioApp.hexRGB("#9cabff",.4),NioApp.hexRGB("#8feac5",.4),NioApp.hexRGB("#6b79c8",.4),NioApp.hexRGB("#79f1dc",.4)],
      data: [2320, 1120, 2000, 4000, 3450, 1520],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
  ],
};
export const coinOverviewSet3 = {
  labels: ["Bitcoin", "Ethereum", "NioCoin", "Litecoin", "Bitcoin"],
  stacked: true,
  datasets: [
    {
      label: "Buy Orders",
      color: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      backgroundColor: ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"],
      data: [1700, 2000, 1620, 1900, 2600, 1500],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
    {
      label: "Sell Orders",
      backgroundColor: [
        "rgba(249, 140, 69, 0.2)",
        "rgba(156, 171, 255, 0.4)",
        "rgba(143, 234, 197, 0.4)",
        "rgba(107, 121, 200, 0.4)",
        "rgba(121, 241, 220, 0.4)",
      ],
      fillOpacity: "0.5",
      //color : [NioApp.hexRGB("#f98c45",.2),NioApp.hexRGB("#9cabff",.4),NioApp.hexRGB("#8feac5",.4),NioApp.hexRGB("#6b79c8",.4),NioApp.hexRGB("#79f1dc",.4)],
      data: [2520, 1920, 4000, 4500, 2650, 1920],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
  ],
};

export const userActivity = {
  labels: [
    "01 Nov",
    "02 Nov",
    "03 Nov",
    "04 Nov",
    "05 Nov",
    "06 Nov",
    "07 Nov",
    "08 Nov",
    "09 Nov",
    "10 Nov",
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
    "18 Nov",
    "19 Nov",
    "20 Nov",
    "21 Nov",
  ],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Direct Join",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    {
      label: "Referral Join",
      color: "#9cabff",
      backgroundColor: "rgba(156, 171, 255, 0.4)",
      data: [125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
  ],
};

export const userActivitySet2 = {
  labels: [
    "01 Nov",
    "02 Nov",
    "03 Nov",
    "04 Nov",
    "05 Nov",
    "06 Nov",
    "07 Nov",
    "08 Nov",
    "09 Nov",
    "10 Nov",
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
    "18 Nov",
    "19 Nov",
    "20 Nov",
    "21 Nov",
  ],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Direct Join",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      data: [90, 70, 125, 80, 95, 15, 90, 110, 80, 125, 55, 95, 155, 90, 120, 80, 105, 75, 85, 55, 100],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    {
      label: "Referral Join",
      color: "#9cabff",
      backgroundColor: "rgba(156, 171, 255, 0.4)",
      data: [105, 35, 100, 55, 40, 120, 70, 105, 59, 90, 70, 90, 100, 18, 105, 59, 105, 65, 50, 55, 80],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
  ],
};

export const userActivitySet3 = {
  labels: [
    "01 Nov",
    "02 Nov",
    "03 Nov",
    "04 Nov",
    "05 Nov",
    "06 Nov",
    "07 Nov",
    "08 Nov",
    "09 Nov",
    "10 Nov",
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
    "18 Nov",
    "19 Nov",
    "20 Nov",
    "21 Nov",
  ],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Direct Join",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      data: [90, 180, 25, 85, 85, 75, 90, 50, 90, 25, 55, 155, 70, 90, 110, 80, 125, 55, 95, 85, 100],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    {
      label: "Referral Join",
      color: "#9cabff",
      backgroundColor: "rgba(156, 171, 255, 0.4)",
      data: [125, 65, 65, 95, 100, 90, 70, 25, 155, 65, 75, 80, 10, 90, 135, 56, 95, 75, 98, 79, 110],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
  ],
};

export const userActivitySet4 = {
  labels: [
    "01 Nov",
    "02 Nov",
    "03 Nov",
    "04 Nov",
    "05 Nov",
    "06 Nov",
    "07 Nov",
    "08 Nov",
    "09 Nov",
    "10 Nov",
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
    "18 Nov",
    "19 Nov",
    "20 Nov",
    "21 Nov",
  ],
  dataUnit: "USD",
  stacked: true,
  datasets: [
    {
      label: "Direct Join",
      color: "#9cabff",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    {
      label: "Referral Join",
      color: "#9cabff",
      backgroundColor: "rgba(156, 171, 255, 0.4)",
      data: [125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90],
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
  ],
};
