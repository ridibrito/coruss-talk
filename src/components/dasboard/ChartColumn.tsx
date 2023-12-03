import ApexCharts from "apexcharts";

export default function ChartColumn() {
  const options = {
    colors: ["#1A56DB"],
    series: [
      {
        name: "Organic",
        color: "#1A56DB",
        data: [
          { x: "01:00", y: 231 },
          { x: "02:00", y: 122 },
          { x: "03:00", y: 63 },
          { x: "04:00", y: 421 },
          { x: "05:00", y: 122 },
          { x: "06:00", y: 323 },
          { x: "07:00", y: 111 },
          { x: "08:00", y: 111 },
          { x: "09:00", y: 111 },
          { x: "10:00", y: 111 },
          { x: "11:00", y: 111 },
          { x: "12:00", y: 111 },
          { x: "13:00", y: 111 },
          { x: "14:00", y: 111 },
          { x: "15:00", y: 111 },
          { x: "16:00", y: 111 },
          { x: "17:00", y: 111 },
          { x: "18:00", y: 111 },
          { x: "19:00", y: 111 },
          { x: "20:00", y: 111 },
          { x: "21:00", y: 111 },
          { x: "22:00", y: 111 },
          { x: "23:00", y: 111 },
          { x: "00:00", y: 111 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  if (
    document.getElementById("column-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("column-chart"),
      options
    );
    chart.render();
  }
  return (
    <>
      <div className=" mx-auto  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"></div>

        <div id="column-chart">Atendimentos hoje: 25</div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
      </div>
    </>
  );
}
