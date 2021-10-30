function computeHistogram() {
  const x1 = [];
  const x2 = [];
  const y1 = [];
  const y2 = [];
  let k = 0;
  for (let i = 1; i < 500; i++) {
    k = Math.random();
    x1.push(k * 5);
    x2.push(k * 10);
    y1.push(k);
    y2.push(k * 2);
  }
  const trace1 = {
    x: x1,
    y: y1,
    name: "control",
    autobinx: false,
    histnorm: "count",
    marker: {
      color: "rgba(255, 100, 102, 0.7)",
      line: {
        color: "rgba(255, 100, 102, 1)",
        width: 1,
      },
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
      end: 2.8,
      size: 0.06,
      start: 0.5,
    },
  };
  const trace2 = {
    x: x2,
    y: y2,
    autobinx: false,
    marker: {
      color: "rgba(100, 200, 102, 0.7)",
      line: {
        color: "rgba(100, 200, 102, 1)",
        width: 1,
      },
    },
    name: "experimental",
    opacity: 0.75,
    type: "histogram",
    xbins: {
      end: 4,
      size: 0.06,
      start: -3.2,
    },
  };
  return {
    kind: {
      plotly: true,
    },
    data: [trace1, trace2],
    layout: {
      bargap: 0.05,
      bargroupgap: 0.2,
      barmode: "overlay",
      title: "Sampled Results",
      xaxis: {
        title: "Value",
      },
      yaxis: {
        title: "Count",
      },
    },
  };
}
let example3 = computeHistogram();
